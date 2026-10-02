import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const catalogPath = process.argv[2]
  ? resolve(process.cwd(), process.argv[2])
  : resolve(scriptDirectory, '../../docs/computer-science/catalog-courses-by-subcategory.json');
const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
const usedPages = new Set();
const failedCourses = [];
const execFileAsync = promisify(execFile);
const curlExecutable = process.platform === 'win32' ? 'curl.exe' : 'curl';
const userAgent = 'CohortiaCourseCatalog/1.0 (https://github.com/Maryorwahmi/Cohortia)';
const genericTerms = new Set([
  'a', 'an', 'and', 'for', 'from', 'in', 'of', 'on', 'the', 'to', 'with',
  'course', 'complete', 'certified', 'certification', 'certificate', 'professional',
  'specialization', 'specialisation', 'bootcamp', 'developer', 'development',
]);

function sleep(ms) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
}

function metadataValue(metadata, key) {
  const value = metadata?.[key]?.value;
  return typeof value === 'string' ? value : '';
}

function plainText(value) {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function isReusableLicense(name) {
  return /^(?:CC0|Public domain|CC BY(?:-SA)?(?:\s|$))/i.test(name.trim());
}

function getSearchTerms(course) {
  const titleTerms = course.title
    .replace(/[^\p{L}\p{N}+#.]+/gu, ' ')
    .split(/\s+/)
    .filter((term) => term.length > 1 && !genericTerms.has(term.toLowerCase()))
    .slice(0, 4);
  const skillTerms = Array.isArray(course.skills) ? course.skills.slice(0, 2) : [];
  return [...new Set([...titleTerms, ...skillTerms])].join(' ');
}

async function searchCommons(searchTerms) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.search = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerms,
    gsrnamespace: '6',
    gsrlimit: '30',
    maxlag: '5',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size',
    iiurlwidth: '960',
    format: 'json',
    origin: '*',
  }).toString();

  for (let attempt = 0; attempt < 4; attempt += 1) {
    const { stdout } = await execFileAsync(curlExecutable, [
      '-sS',
      '-L',
      '--max-time',
      '30',
      '-A',
      userAgent,
      '-w',
      '\n%{http_code}',
      url.toString(),
    ], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    const statusStart = stdout.lastIndexOf('\n');
    const status = Number(stdout.slice(statusStart + 1).trim());
    const body = stdout.slice(0, statusStart);
    if (status >= 200 && status < 300) return JSON.parse(body);
    if (status !== 429 && status < 500) {
      throw new Error(`Wikimedia Commons returned ${status} for "${searchTerms}".`);
    }
    await sleep(5000 * (attempt + 1));
  }

  throw new Error(`Wikimedia Commons search failed for "${searchTerms}" after retries.`);
}

function selectCandidate(data) {
  return Object.values(data.query?.pages || {}).find((page) => {
    const image = page.imageinfo?.[0];
    const license = metadataValue(image?.extmetadata, 'LicenseShortName');
    const width = Number(image?.thumbwidth || image?.width || 0);
    const height = Number(image?.thumbheight || image?.height || 0);
    return image?.thumburl && !usedPages.has(page.pageid) && width >= height * 1.15 && isReusableLicense(license);
  });
}

async function enrichCourse(course, subcategory) {
  try {
    const data = await searchCommons(getSearchTerms(course));
    const fallbackTerms = [subcategory.name, ...(Array.isArray(course.skills) ? course.skills.slice(0, 2) : [])].join(' ');
    const candidate = selectCandidate(data) || selectCandidate(await searchCommons(fallbackTerms));

    if (!candidate) {
      failedCourses.push(course.title);
      return;
    }

    const image = candidate.imageinfo[0];
    const metadata = image.extmetadata || {};
    const credit = plainText(metadataValue(metadata, 'Artist')) || 'Wikimedia Commons contributor';
    const license = plainText(metadataValue(metadata, 'LicenseShortName')) || 'Public domain';

    usedPages.add(candidate.pageid);
    course.image = image.thumburl;
    course.imageCredit = credit;
    course.imageLicense = license;
    course.imageSource = image.descriptionurl;
  } catch (error) {
    failedCourses.push(course.title);
    console.error(error instanceof Error ? error.message : `Could not find an image for "${course.title}".`);
  }
}

const courses = (catalog.subcategories || []).flatMap((subcategory) => (
  (subcategory.courses || []).map((course) => ({ course, subcategory }))
));
let cursor = 0;
const workers = Array.from({ length: 1 }, async () => {
  while (cursor < courses.length) {
    const { course, subcategory } = courses[cursor];
    cursor += 1;
    await enrichCourse(course, subcategory);
    await sleep(1200);
  }
});

await Promise.all(workers);
await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');

console.log(`Sourced unique Wikimedia Commons images for ${courses.length - failedCourses.length} of ${courses.length} courses.`);
if (failedCourses.length) {
  console.error(`No reusable image found for ${failedCourses.length} courses:`);
  failedCourses.forEach((title) => console.error(`- ${title}`));
  process.exitCode = 1;
}
