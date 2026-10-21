import {access, mkdir, readFile, writeFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const frontendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.resolve(frontendRoot, '..', 'backend', 'src', 'data', 'course-details.json');
const outputRoot = path.resolve(frontendRoot, 'public', 'content', 'course-details');

async function loadCatalogFromApi() {
  const apiBase = process.env.PUBLIC_CONTENT_API_URL || process.env.VITE_API_URL;
  if (!apiBase || apiBase.startsWith('/')) return null;
  const response = await fetch(`${apiBase.replace(/\/+$/, '')}/catalog-courses`, {
    headers: {Accept: 'application/json'},
  });
  if (!response.ok) throw new Error(`catalog API returned ${response.status}`);
  const payload = await response.json();
  return payload?.data?.courses || null;
}

async function loadCatalogFromLocalDatabase() {
  const databasePath = path.resolve(frontendRoot, '..', 'backend', 'cohortia.db');
  await access(databasePath);
  const backendRequire = createRequire(path.resolve(frontendRoot, '..', 'backend', 'package.json'));
  const {createClient} = backendRequire('@libsql/client');
  const client = createClient({
    url: process.env.DATABASE_URL || `file:${databasePath}`,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });
  const result = await client.execute(`
    SELECT * FROM catalog_courses
    ORDER BY title COLLATE NOCASE
  `);
  return result.rows.map((row) => ({
    id: row.id,
    title: row.title,
    provider: row.provider,
    platform: row.platform,
    level: row.level,
    type: row.type,
    duration: row.duration,
    cost: row.cost,
    url: row.url,
    image: row.image,
    imageCredit: row.image_credit ?? null,
    imageLicense: row.image_license ?? null,
    imageSource: row.image_source ?? null,
    skills: row.skills,
    certification: row.certification,
    description: row.description,
    category: row.category,
    subcategory: row.subcategory,
    marketCategory: row.market_category ?? null,
    marketSubcategory: row.market_subcategory ?? null,
    careerPaths: row.career_paths ?? null,
    skillTags: row.skill_tags ?? null,
    catalogStatus: row.catalog_status ?? 'active',
    source: row.source ?? null,
  })).filter((course) => course.catalogStatus !== 'archive');
}

async function loadCatalog() {
  try {
    const remoteCatalog = await loadCatalogFromApi();
    if (remoteCatalog) return remoteCatalog;
  } catch (error) {
    console.warn(`[public-content] catalog API unavailable: ${error.message}`);
  }
  try {
    return await loadCatalogFromLocalDatabase();
  } catch (error) {
    throw new Error(`Unable to export the complete catalog. Set PUBLIC_CONTENT_API_URL or make the backend database available: ${error.message}`);
  }
}

const source = JSON.parse(await readFile(sourcePath, 'utf8'));
const catalog = await loadCatalog();
await mkdir(outputRoot, {recursive: true});

await Promise.all(Object.entries(source).map(async ([courseId, details]) => {
  const safeCourseId = encodeURIComponent(courseId);
  await writeFile(path.join(outputRoot, `${safeCourseId}.json`), `${JSON.stringify(details)}\n`, 'utf8');
}));

await writeFile(
  path.resolve(frontendRoot, 'public', 'content', 'navigation.json'),
  `${JSON.stringify({version: 1, source: 'frontend-static', cache: 'immutable'})}\n`,
  'utf8',
);

await writeFile(
  path.resolve(frontendRoot, 'public', 'content', 'catalog-courses.json'),
  `${JSON.stringify({success: true, data: {courses: catalog}, generatedAt: new Date().toISOString()})}\n`,
  'utf8',
);

console.log(`[public-content] generated ${catalog.length} catalog courses and ${Object.keys(source).length} rich course detail files`);
