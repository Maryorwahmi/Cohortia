import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createClient } from '@libsql/client';

const inputPath = process.argv[2] || '../../docs/computer-science/catalog-courses-by-subcategory.json';
const catalogPath = resolve(process.cwd(), inputPath);
const databaseUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({url: databaseUrl, authToken: process.env.DATABASE_AUTH_TOKEN});

const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
const now = new Date().toISOString();

await client.execute(`
  CREATE TABLE IF NOT EXISTS catalog_courses (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    provider TEXT,
    platform TEXT,
    level TEXT,
    type TEXT,
    duration TEXT,
    cost TEXT,
    url TEXT,
    image TEXT,
    image_credit TEXT,
    image_license TEXT,
    image_source TEXT,
    skills TEXT,
    certification TEXT,
    description TEXT,
    category TEXT NOT NULL,
    subcategory TEXT NOT NULL,
    source TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )
`);

for (const column of ['image', 'image_credit', 'image_license', 'image_source']) {
  try {
    await client.execute(`ALTER TABLE catalog_courses ADD COLUMN ${column} TEXT`);
  } catch (error) {
    if (!error.message?.toLowerCase().includes('duplicate column')) throw error;
  }
}

await client.execute(`
  CREATE TABLE IF NOT EXISTS catalog_course_subcategories (
    course_id TEXT NOT NULL,
    subcategory TEXT NOT NULL,
    PRIMARY KEY (course_id, subcategory)
  )
`);

await client.execute(`
  CREATE TABLE IF NOT EXISTS catalog_course_careers (
    course_id TEXT NOT NULL,
    career_id TEXT NOT NULL,
    PRIMARY KEY (course_id, career_id)
  )
`);

const careerRules = [
  {id: 'frontend-development', subcategories: ['Web Development', 'Mobile App Development'], terms: ['frontend', 'front-end', 'web design', 'responsive web', 'react', 'angular', 'vue', 'svelte', 'javascript', 'html', 'css', 'ios', 'android', 'flutter', 'react native']},
  {id: 'backend-development', subcategories: ['Programming & Software Development Fundamentals', 'Web Development', 'Databases', 'Software Engineering, Architecture & Design'], terms: ['backend', 'back-end', 'node.js', 'nodejs', 'django', 'laravel', 'ruby on rails', 'server-side', 'api', 'database', 'sql', 'software engineering']},
  {id: 'full-stack-development', subcategories: ['Web Development'], terms: ['full-stack', 'full stack', 'mern', 'web developer', 'node.js', 'react', 'django']},
  {id: 'data-analytics', subcategories: ['Data Science, Machine Learning & AI', 'Databases'], terms: ['data analytics', 'data analyst', 'tableau', 'power bi', 'sql', 'statistics', 'data science', 'data engineering']},
  {id: 'data-science', subcategories: ['Data Science, Machine Learning & AI'], terms: ['data science', 'machine learning', 'deep learning', 'statistics', 'data scientist', 'pandas', 'tensorflow', 'pytorch']},
  {id: 'ai-ml-engineering', subcategories: ['Data Science, Machine Learning & AI'], terms: ['artificial intelligence', 'machine learning', 'deep learning', 'generative ai', 'large language', 'ai engineering', 'tensorflow', 'pytorch', 'computer vision', 'natural language']},
  {id: 'cybersecurity', subcategories: ['Cybersecurity', 'Computer Networks', 'Cloud Computing & DevOps', 'Operating Systems & System Administration'], terms: ['cybersecurity', 'security', 'ethical hacker', 'penetration', 'network security', 'malware', 'incident response', 'linux']},
  {id: 'cloud-engineering', subcategories: ['Cloud Computing & DevOps', 'Computer Networks', 'Operating Systems & System Administration'], terms: ['cloud', 'aws', 'azure', 'google cloud', 'gcp', 'kubernetes', 'docker', 'terraform', 'infrastructure']},
  {id: 'devops-engineering', subcategories: ['Cloud Computing & DevOps', 'Software Engineering, Architecture & Design'], terms: ['devops', 'ci/cd', 'kubernetes', 'docker', 'terraform', 'jenkins', 'ansible', 'site reliability', 'sre']},
  {id: 'qa-testing', subcategories: ['Software Engineering, Architecture & Design', 'Web Development'], terms: ['testing', 'test-driven', 'quality assurance', 'automation testing', 'selenium']},
  {id: 'product-management', subcategories: ['Software Engineering, Architecture & Design'], terms: ['agile', 'product management', 'jira', 'user stories', 'requirements']},
  {id: 'ux-ui-design', subcategories: ['Web Development'], terms: ['ux', 'ui', 'web design', 'user experience', 'figma', 'design']},
];

function matchingCareerIds(course, subcategory) {
  const searchable = [course.title, course.description, ...(course.skills || []), subcategory].filter(Boolean).join(' ').toLowerCase();
  return careerRules
    .filter((rule) => rule.subcategories.includes(subcategory) || rule.terms.some((term) => searchable.includes(term)))
    .map((rule) => rule.id);
}

let imported = 0;
let skipped = 0;

for (const subcategory of catalog.subcategories || []) {
  for (const course of subcategory.courses || []) {
    if (!course.id || !course.title) {
      skipped += 1;
      continue;
    }

    await client.execute({
      sql: `
        INSERT INTO catalog_courses (
          id, title, provider, platform, level, type, duration, cost, url,
          image, image_credit, image_license, image_source, skills, certification, description, category, subcategory, source,
          created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          title = excluded.title,
          provider = excluded.provider,
          platform = excluded.platform,
          level = excluded.level,
          type = excluded.type,
          duration = excluded.duration,
          cost = excluded.cost,
          url = excluded.url,
          image = excluded.image,
          image_credit = excluded.image_credit,
          image_license = excluded.image_license,
          image_source = excluded.image_source,
          skills = excluded.skills,
          certification = excluded.certification,
          description = excluded.description,
          category = excluded.category,
          subcategory = excluded.subcategory,
          source = excluded.source,
          updated_at = excluded.updated_at
      `,
      args: [
        course.id,
        course.title,
        course.provider ?? null,
        course.platform ?? null,
        course.level ?? null,
        course.type ?? null,
        course.duration ?? null,
        course.cost == null ? null : String(course.cost),
        course.url ?? null,
        course.image ?? null,
        course.imageCredit ?? null,
        course.imageLicense ?? null,
        course.imageSource ?? null,
        JSON.stringify(course.skills || []),
        course.certification ?? null,
        course.description ?? null,
        course.category || catalog.category || 'Computer Science',
        course.subcategory || subcategory.name,
        course.source ?? null,
        now,
        now,
      ],
    });
    await client.execute({
      sql: `INSERT OR IGNORE INTO catalog_course_subcategories (course_id, subcategory) VALUES (?, ?)`,
      args: [course.id, course.subcategory || subcategory.name],
    });
    for (const careerId of matchingCareerIds(course, course.subcategory || subcategory.name)) {
      await client.execute({
        sql: `INSERT OR IGNORE INTO catalog_course_careers (course_id, career_id) VALUES (?, ?)`,
        args: [course.id, careerId],
      });
    }
    imported += 1;
  }
}

console.log(`Imported ${imported} catalog courses into ${databaseUrl}`);
if (skipped > 0) console.log(`Skipped ${skipped} incomplete entries`);
