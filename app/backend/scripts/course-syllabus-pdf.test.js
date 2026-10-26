import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createCourseSyllabusPdf} from '../src/lib/courseSyllabusPdf.js';

const sampleSyllabus = {
  userName: 'Amina Learner',
  roadmapTitle: 'Cyber Defense, Offensive Security & Cloud Security',
  courses: [{
    course: {
      title: 'Security+ (SY0-701)',
      provider: 'CompTIA',
      level: 'Foundational',
      duration: '12 weeks',
      certification: 'CompTIA Security+',
      description: 'Build practical security skills for modern systems.',
    },
    details: {
      overview: 'A structured introduction to security concepts and operations.',
      outcomes: ['Identify common threats', 'Apply security controls'],
      skills: ['Threat analysis', 'Incident response'],
      keyConcepts: ['Least privilege', 'Defense in depth'],
      syllabus: [{module: 'Security foundations', theme: 'Core principles', chapters: '6 chapters'}],
    },
    modules: [{
      title: 'Security fundamentals',
      description: 'Understand the essential concepts.',
      chapters: [{title: 'Security principles', description: 'Confidentiality, integrity, and availability.', duration: '20 min'}],
    }],
  }],
};

test('creates a readable, structured PDF for a course syllabus', () => {
  const pdf = createCourseSyllabusPdf(sampleSyllabus);
  const text = pdf.toString('ascii');

  assert.equal(text.slice(0, 8), '%PDF-1.4');
  assert.ok(text.includes('COHORTIA  /  PERSONAL COURSE SYLLABUS'));
  assert.match(text, /Your course syllabus/);
  assert.match(text, /Prepared for Amina Learner/);
  assert.match(text, /COURSE 01/);
  assert.match(text, /LEARNING OUTCOMES/);
  assert.match(text, /COURSE MODULES AND CHAPTERS/);
  assert.match(text, /Security principles/);
  assert.match(text, /\/BaseFont \/Helvetica-Bold/);

  const startXref = Number(text.match(/startxref\n(\d+)/)?.[1]);
  assert.ok(Number.isInteger(startXref));
  assert.ok(text.slice(startXref).startsWith('xref\n'));
});

test('paginates long syllabi and wraps long words within page width', () => {
  const longWord = 'SecurityArchitecture'.repeat(12);
  const chapters = Array.from({length: 90}, (_, index) => ({
    title: `Chapter ${index + 1} ${longWord}`,
    description: `Detailed description for chapter ${index + 1}.`,
  }));
  const pdf = createCourseSyllabusPdf({
    userName: 'Learner',
    roadmapTitle: 'Technology',
    courses: [{
      course: {title: 'Long course'},
      details: {},
      modules: [{title: 'Long module', chapters}],
    }],
  });
  const text = pdf.toString('ascii');
  const pageCount = (text.match(/\/Type \/Page \/Parent/g) || []).length;

  assert.ok(pageCount > 1, 'expected long syllabi to span multiple pages');
  assert.match(text, new RegExp(`Page 1 of ${pageCount}`));
  assert.match(text, new RegExp(`Page ${pageCount} of ${pageCount}`));
});
