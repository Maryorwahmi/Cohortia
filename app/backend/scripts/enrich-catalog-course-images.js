import { execFile } from 'node:child_process';
import { appendFile, readFile, unlink, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const inputPath = process.argv.slice(2).find((argument) => !argument.startsWith('--'));
const refreshImages = process.argv.includes('--refresh');
const catalogPath = inputPath
  ? resolve(process.cwd(), inputPath)
  : resolve(scriptDirectory, '../../docs/computer-science/catalog-courses-by-subcategory.json');
const checkpointPath = `${catalogPath}.image-progress.jsonl`;
const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
const courses = (catalog.subcategories || []).flatMap((subcategory) => (
  (subcategory.courses || []).map((course) => ({ course, subcategory }))
));
const coursesById = new Map(courses.map(({ course }) => [course.id, course]));
const completedCourses = new Map();
const usedPages = new Set();
const failedCourses = [];
const execFileAsync = promisify(execFile);
const curlExecutable = process.platform === 'win32' ? 'curl.exe' : 'curl';
const userAgent = 'CohortiaCourseCatalog/1.0 (https://github.com/Maryorwahmi/Cohortia)';
const genericTerms = new Set([
  'a', 'an', 'and', 'for', 'from', 'in', 'of', 'on', 'the', 'to', 'with',
  'course', 'complete', 'certified', 'certification', 'certificate', 'professional',
  'specialization', 'specialisation', 'bootcamp', 'developer', 'development',
  'advanced', 'associate', 'beginner', 'beginners', 'decide', 'degrees', 'expert',
  'cs50', 'everybody', 'everyone', 'fundamental', 'fundamentals', 'getting',
  'guide', 'how', 'inclusion', 'intro', 'introduction', 'practitioner', 'rules',
  'started', 'specialist', 'tutorial', 'tutorials', 'uncertain', 'verify',
]);

try {
  const checkpoint = await readFile(checkpointPath, 'utf8');
  for (const line of checkpoint.split(/\r?\n/).filter(Boolean)) {
    const result = JSON.parse(line);
    if (result.status === 'success' && coursesById.has(result.courseId)) {
      completedCourses.set(result.courseId, result);
    }
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const originalImages = new Map();
if (refreshImages) {
  for (const { course } of courses) {
    originalImages.set(course.id, {
      image: course.image,
      imageCredit: course.imageCredit,
      imageLicense: course.imageLicense,
      imageSource: course.imageSource,
    });
    delete course.image;
    delete course.imageCredit;
    delete course.imageLicense;
    delete course.imageSource;
  }
}

for (const { course } of courses) {
  if (!refreshImages && course.imageSource) {
    const pageId = course.imageSource.match(/[?&]curid=(\d+)/)?.[1];
    if (pageId) usedPages.add(Number(pageId));
  }
}
for (const result of completedCourses.values()) usedPages.add(result.pageId);

for (const [courseId, result] of completedCourses) {
  const course = coursesById.get(courseId);
  course.image = result.image;
  course.imageCredit = result.imageCredit;
  course.imageLicense = result.imageLicense;
  course.imageSource = result.imageSource;
}

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

function getRelevantTerms(course, subcategory) {
  const titleTerms = course.title
    .replace(/[^\p{L}\p{N}+#.]+/gu, ' ')
    .split(/\s+/)
    .filter((term) => term.length > 1 && !genericTerms.has(term.toLowerCase()));
  const skillTerms = Array.isArray(course.skills) ? course.skills : [];
  const courseTerms = [...new Set([...titleTerms, ...skillTerms.flatMap((skill) => (
    String(skill).replace(/[^\p{L}\p{N}+#.]+/gu, ' ').split(/\s+/)
  ))].filter((term) => term.length > 1 && !genericTerms.has(term.toLowerCase())).map((term) => term.toLowerCase()))];
  if (courseTerms.length === 0) return null;

  const categoryTerms = {
    'Programming & Software Development Fundamentals': ['programming', 'coding', 'software', 'computer'],
    'Web Development': ['web', 'website', 'browser', 'html', 'javascript'],
    'Mobile App Development': ['mobile', 'smartphone', 'android', 'ios', 'app'],
    'Data Science, Machine Learning & AI': ['data', 'algorithm', 'machine learning', 'artificial intelligence'],
    Cybersecurity: ['cybersecurity', 'security', 'network', 'hacker', 'threat'],
    'Computer Networks': ['network', 'router', 'internet', 'ethernet', 'tcp'],
    'Cloud Computing & DevOps': ['cloud', 'server', 'infrastructure', 'kubernetes', 'devops'],
    Databases: ['database', 'sql', 'data', 'storage'],
    'Operating Systems & System Administration': ['linux', 'operating system', 'server', 'terminal'],
    'Software Engineering, Architecture & Design': ['software', 'architecture', 'design', 'programming'],
    'Game Development': ['game', 'gaming', 'videogame', 'game design'],
    'Blockchain & Web3': ['blockchain', 'cryptocurrency', 'bitcoin', 'ethereum', 'ledger'],
    'Hardware, Embedded & IoT': ['hardware', 'electronics', 'microcontroller', 'circuit', 'robotics', 'sensor'],
  }[subcategory] || [];
  return {
    courseTerms,
    categoryTerms: categoryTerms.map((term) => term.toLowerCase()),
  };
}

async function searchCommons(searchTerms) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.search = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerms,
    gsrnamespace: '6',
    gsrlimit: '50',
    maxlag: '5',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size|mime',
    iiurlwidth: '960',
    format: 'json',
    origin: '*',
  }).toString();

  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
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
    } catch (error) {
      if (attempt === 3) {
        throw new Error(`Wikimedia Commons search failed for "${searchTerms}" after retries: ${error instanceof Error ? error.message : String(error)}`);
      }
      if (error instanceof Error && error.message.includes('returned ')) throw error;
    }
    await sleep(3000 * (attempt + 1));
  }

  throw new Error(`Wikimedia Commons search failed for "${searchTerms}" after retries.`);
}

function selectCandidate(data, course, subcategory) {
  const relevantTerms = getRelevantTerms(course, subcategory);
  if (!relevantTerms) return null;

  return Object.values(data.query?.pages || {})
    .map((page) => {
      const image = page.imageinfo?.[0];
      const license = metadataValue(image?.extmetadata, 'LicenseShortName');
      const width = Number(image?.thumbwidth || image?.width || 0);
      const height = Number(image?.thumbheight || image?.height || 0);
      if (!(image?.thumburl
        && image.mime?.startsWith('image/')
        && !image.mime.includes('pdf')
        && !usedPages.has(page.pageid)
        && width >= 320
        && height >= 220
        && isReusableLicense(license))) return null;

      const searchable = [
        page.title,
        metadataValue(image.extmetadata, 'ObjectName'),
        metadataValue(image.extmetadata, 'ImageDescription'),
        metadataValue(image.extmetadata, 'Categories'),
      ].map(plainText).join(' ').toLowerCase();
      const searchableTerms = new Set(searchable.replace(/[^\p{L}\p{N}+#.]+/gu, ' ').split(/\s+/));
      const score = relevantTerms.courseTerms.reduce((total, term) => (
        total + (searchableTerms.has(term) ? 3 : 0)
      ), 0) + relevantTerms.categoryTerms.reduce((total, term) => (
        total + (searchableTerms.has(term) ? 1 : 0)
      ), 0);
      const hasCourseMatch = relevantTerms.courseTerms.some((term) => searchableTerms.has(term));
      return hasCourseMatch && score > 0 ? { page, score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)[0]?.page || null;
}

async function enrichCourse(course, subcategory) {
  const titleTerms = course.title
    .replace(/[^\p{L}\p{N}+#.]+/gu, ' ')
    .split(/\s+/)
    .filter((term) => term.length > 1 && !genericTerms.has(term.toLowerCase()));
  const skillTerms = Array.isArray(course.skills) ? course.skills.slice(0, 3) : [];
  const searchVariants = [...new Set([
    getSearchTerms(course),
    titleTerms.slice(0, 2).join(' '),
    titleTerms.slice(-2).join(' '),
    titleTerms.slice(1, 3).join(' '),
    titleTerms.slice(0, 3).join(' '),
    titleTerms.slice(-3).join(' '),
    [...skillTerms, ...titleTerms.slice(0, 2)].join(' '),
    [subcategory.name, ...skillTerms].join(' '),
  ].filter((terms) => terms.trim().length > 1))];
  let candidate = null;
  for (const terms of searchVariants) {
    candidate = selectCandidate(await searchCommons(terms), course, subcategory.name);
    if (candidate) break;
  }

  if (!candidate) return null;

  const image = candidate.imageinfo[0];
  const metadata = image.extmetadata || {};
  const credit = plainText(metadataValue(metadata, 'Artist')) || 'Wikimedia Commons contributor';
  const license = plainText(metadataValue(metadata, 'LicenseShortName')) || 'Public domain';
  const result = {
    status: 'success',
    courseId: course.id,
    pageId: candidate.pageid,
    image: image.thumburl,
    imageCredit: credit,
    imageLicense: license,
    imageSource: image.descriptionshorturl || image.descriptionurl,
  };

  usedPages.add(candidate.pageid);
  course.image = result.image;
  course.imageCredit = result.imageCredit;
  course.imageLicense = result.imageLicense;
  course.imageSource = result.imageSource;
  return result;
}

let cursor = 0;
let completed = courses.filter(({ course }) => course.image && course.imageSource).length;
const workers = Array.from({ length: 1 }, async () => {
  while (cursor < courses.length) {
    const { course, subcategory } = courses[cursor];
    cursor += 1;
    if (!course.id || !course.title || completedCourses.has(course.id) || (!refreshImages && course.image && course.imageSource)) continue;

    let result;
    try {
      result = await enrichCourse(course, subcategory);
    } catch (error) {
      console.error(`Image search failed for "${course.title}": ${error instanceof Error ? error.message : String(error)}`);
      const original = originalImages.get(course.id);
      if (refreshImages && original?.image && original.imageSource) {
        const pageId = original.imageSource.match(/[?&]curid=(\d+)/)?.[1];
        if (!pageId || !usedPages.has(Number(pageId))) {
          Object.assign(course, original);
          if (pageId) usedPages.add(Number(pageId));
        }
      }
    }

    if (result) {
      completedCourses.set(course.id, result);
      await appendFile(checkpointPath, `${JSON.stringify(result)}\n`, 'utf8');
    } else if (!course.image) {
      failedCourses.push(course.title);
      await appendFile(checkpointPath, `${JSON.stringify({status: 'failed', courseId: course.id})}\n`, 'utf8');
    }

    completed += 1;
    console.log(`Processed ${completed}/${courses.length} courses: ${course.title}${result ? '' : ' (no image yet)'}.`);
    if (cursor < courses.length) await sleep(1200);
  }
});

await Promise.all(workers);
await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
await unlink(checkpointPath);

const sourcedCount = courses.filter(({ course }) => course.image && course.imageSource).length;
console.log(`Sourced unique Wikimedia Commons images for ${sourcedCount} of ${courses.length} courses.`);
if (failedCourses.length) {
  console.error(`No reusable image found for ${failedCourses.length} courses:`);
  failedCourses.forEach((title) => console.error(`- ${title}`));
  process.exitCode = 1;
}
