import fs from 'node:fs/promises';
import path from 'node:path';

const catalogPath = path.resolve(import.meta.dirname, '../../docs/computer-science/catalog-courses-by-subcategory.json');
const catalog = JSON.parse(await fs.readFile(catalogPath, 'utf8'));

const CATEGORY = {
  software: 'Software Engineering & Application Development',
  web: 'Web & Full-Stack Engineering',
  mobile: 'Mobile App Engineering',
  ai: 'AI & Machine Learning Engineering',
  genai: 'Generative AI & LLM Applications',
  data: 'Data Engineering, Analytics & Database Platforms',
  cyber: 'Cybersecurity & Cloud Security',
  cloud: 'Cloud, DevOps & Platform Engineering',
  network: 'Networking & IT Infrastructure',
  systems: 'Systems Administration & IT Support',
  architecture: 'Software Architecture, QA & Technical Leadership',
  product: 'Product Management & Technical Delivery',
  game: 'Game Development & Interactive Media',
  blockchain: 'Blockchain, Web3 & FinTech Engineering',
  embedded: 'Robotics, Embedded & Edge Computing',
};

const SUBCATEGORY = {
  software: 'Programming Languages & Core Development', web: 'Frontend, Backend & Full-Stack Web', mobile: 'Android, iOS & Cross-Platform',
  ai: 'Machine Learning, Deep Learning & Computer Vision', genai: 'LLMs, NLP & Generative AI Applications', data: 'Data Engineering, Analytics & Databases',
  cyber: 'Cyber Defense, Offensive Security & Cloud Security', cloud: 'Cloud Architecture, DevOps & Platform Reliability', network: 'Networks, Infrastructure & Network Operations',
  systems: 'IT Support, Linux & Systems Administration', architecture: 'Architecture, Quality Engineering & Technical Leadership', product: 'Product Management, Agile & AI Strategy',
  game: 'Game Engines, Graphics & Interactive Development', blockchain: 'Blockchain, Web3 & FinTech Infrastructure', embedded: 'Robotics, Embedded Systems & Edge Computing',
};

const CAREER_PATHS = {
  software: ['Software Developer', 'Backend Developer', 'Application Engineer'], web: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer'], mobile: ['Android Developer', 'iOS Developer', 'Mobile Application Engineer'],
  ai: ['Machine Learning Engineer', 'AI Engineer', 'Computer Vision Engineer'], genai: ['Generative AI Engineer', 'LLM Application Developer', 'NLP Engineer'], data: ['Data Engineer', 'Data Analyst', 'Database Engineer'],
  cyber: ['Cybersecurity Analyst', 'Security Engineer', 'Penetration Tester'], cloud: ['Cloud Engineer', 'DevOps Engineer', 'Platform Engineer', 'Site Reliability Engineer'], network: ['Network Engineer', 'Network Administrator', 'Infrastructure Engineer'],
  systems: ['Systems Administrator', 'IT Support Specialist', 'Systems Analyst'], architecture: ['Software Architect', 'QA Automation Engineer', 'Technical Lead'], product: ['Product Manager', 'Technical Program Manager', 'Agile Delivery Lead'],
  game: ['Game Developer', 'Gameplay Programmer', 'Technical Artist'], blockchain: ['Blockchain Developer', 'Smart Contract Engineer', 'Web3 Engineer'], embedded: ['Embedded Systems Engineer', 'IoT Engineer', 'Robotics Engineer', 'Edge AI Engineer'],
};

const textFor = (course, originalSubcategory) => [course.title, ...(course.skills || []), course.description || '', originalSubcategory].join(' ').toLowerCase();

function classify(course, originalSubcategory) {
  const text = textFor(course, originalSubcategory);
  let key;
  if (/verify uncertain degrees|decide on inclusion rules/i.test(course.title)) return {key: 'software', status: 'review'};
  if (/blockchain|web3|ethereum|solana|cardano|polkadot|hyperledger|smart contract|chainlink|bitcoin/i.test(text)) key = 'blockchain';
  else if (/game development|game developer|unity|unreal|godot|game design|game audio|roblox|game engine|game programming/i.test(text)) key = 'game';
  else if (/product management|product strategy|ai strategy|agile|scrum|kanban|jira|user stor|business strategy/i.test(text)) key = 'product';
  else if (/penetration|ethical hack|cyber|security|malware|cissp|cism|cisa|cloud security|security engineer|network security|incident response|threat|fortinet|palo alto/i.test(text)) key = 'cyber';
  else if (/natural language|large language|llm|generative ai|foundation model|gpt|transformer|prompt engineering|rag|chatbot/i.test(text)) key = 'genai';
  else if (/machine learning|deep learning|artificial intelligence|\bai\b|ai engineer|ai practitioner|ai fundamentals|ai-900|azure ai|tensorflow|pytorch|computer vision|reinforcement learning|neural network/i.test(text)) key = 'ai';
  else if (/data analyst|data analytics|power bi|tableau|data engineer|databricks|snowpro|database|sql|oracle|mysql|postgres|mongodb|cassandra|redis|elasticsearch|data science/i.test(text)) key = 'data';
  else if (/aws|azure|google cloud|gcp|kubernetes|docker|terraform|devops|ci\/cd|jenkins|ansible|github actions|gitlab ci|prometheus|grafana|elk stack|service mesh|cloud architect|sre/i.test(text)) key = 'cloud';
  else if (/arduino|raspberry pi|embedded|fpga|iot|robotics|ros|nand to tetris|computer architecture|edge/i.test(text)) key = 'embedded';
  else if (/network|ccna|ccnp|juniper|routing|switching|infrastructure/i.test(text)) key = 'network';
  else if (/linux|system administrator|it support|comptia a\+|server\+|operating system|servicenow/i.test(text)) key = 'systems';
  else if (/architecture|design pattern|system design|clean code|test-driven|behavior-driven|testing|sonarqube|software process|software engineering/i.test(text)) key = 'architecture';
  else if (originalSubcategory === 'Web Development') key = 'web';
  else if (originalSubcategory === 'Mobile App Development') key = 'mobile';
  else key = 'software';
  return {key, status: 'active'};
}

let count = 0;
const summary = new Map();
for (const group of catalog.subcategories || []) {
  for (const course of group.courses || []) {
    const originalSubcategory = group.name;
    const result = classify(course, originalSubcategory);
    course.academicCategory = course.category || 'Computer Science';
    course.academicSubcategory = course.subcategory || originalSubcategory;
    course.marketCategory = CATEGORY[result.key];
    course.marketSubcategory = SUBCATEGORY[result.key];
    course.careerPaths = CAREER_PATHS[result.key];
    course.skillTags = [...new Set([...(course.skills || []), course.marketSubcategory])];
    course.catalogStatus = result.status;
    summary.set(course.marketCategory, (summary.get(course.marketCategory) || 0) + 1);
    count += 1;
  }
}

await fs.writeFile(catalogPath, JSON.stringify(catalog, null, 2) + '\n');
console.log(`Recategorized ${count} Computer Science courses.`);
for (const [category, total] of [...summary].sort((a, b) => b[1] - a[1])) console.log(`${total}\t${category}`);
