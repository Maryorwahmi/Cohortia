import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '../src/db/schema.js';
import { sql } from 'drizzle-orm';

const dbUrl = process.env.DATABASE_URL || 'file:./cohortia.db';
const client = createClient({ url: dbUrl });
const db = drizzle(client, { schema });

async function verifyImport() {
  console.log('\n📊 ASSESSMENT IMPORT VERIFICATION\n');

  // 1. Count total assessments by level
  const byLevel = await db
    .selectDistinct({
      level: schema.csAssessments.level,
      count: sql`count(*)`,
      totalQuestions: sql`sum(${schema.csAssessments.totalQuestions})`,
      totalOptions: sql`sum(${schema.csAssessments.questionsWithOptions})`,
      totalCode: sql`sum(${schema.csAssessments.questionsWithCode})`,
      totalCaseStudy: sql`sum(${schema.csAssessments.caseStudyQuestions})`,
    })
    .from(schema.csAssessments)
    .groupBy(schema.csAssessments.level)
    .orderBy(schema.csAssessments.level);

  console.log('📚 ASSESSMENTS BY LEVEL');
  console.log('─'.repeat(100));
  console.table(
    byLevel.map((row) => ({
      Level: row.level.toUpperCase(),
      'Courses': row.count,
      'Total Q': row.totalQuestions || 0,
      'MC Q': row.totalOptions || 0,
      'Code Q': row.totalCode || 0,
      'Case Q': row.totalCaseStudy || 0,
    }))
  );

  // 2. Count by category
  const byCategory = await db
    .selectDistinct({
      category: schema.csAssessments.category,
      count: sql`count(distinct ${schema.csAssessments.courseId})`,
      totalQuestions: sql`sum(${schema.csAssessments.totalQuestions})`,
    })
    .from(schema.csAssessments)
    .groupBy(schema.csAssessments.category)
    .orderBy(sql`count(distinct ${schema.csAssessments.courseId})`, 'desc')
    .limit(15);

  console.log('\n📂 TOP 15 CATEGORIES BY COURSE COUNT');
  console.log('─'.repeat(100));
  console.table(
    byCategory.map((row) => ({
      Category: row.category.replace(/-/g, ' '),
      Courses: row.count,
      'Total Q': row.totalQuestions || 0,
    }))
  );

  // 3. Sample assessment details
  const sampleAssessments = await db
    .select({
      courseTitle: schema.csAssessments.courseTitle,
      level: schema.csAssessments.level,
      module: schema.csAssessments.module,
      chapter: schema.csAssessments.chapter,
      chapterTitle: schema.csAssessments.chapterTitle,
      totalQuestions: schema.csAssessments.totalQuestions,
      questionsWithOptions: schema.csAssessments.questionsWithOptions,
      questionsWithCode: schema.csAssessments.questionsWithCode,
      caseStudyQuestions: schema.csAssessments.caseStudyQuestions,
    })
    .from(schema.csAssessments)
    .limit(10);

  console.log('\n📋 SAMPLE ASSESSMENTS (First 10)');
  console.log('─'.repeat(100));
  console.table(
    sampleAssessments.map((row, idx) => ({
      '#': idx + 1,
      Course: row.courseTitle.substring(0, 40),
      'L': row.level.charAt(0).toUpperCase(),
      'M.C': `${row.module}.${row.chapter}`,
      Title: row.chapterTitle.substring(0, 35),
      'Q': row.totalQuestions,
      'MC': row.questionsWithOptions,
      'Code': row.questionsWithCode,
      'Case': row.caseStudyQuestions,
    }))
  );

  // 4. Question type distribution
  const questionTypes = await db
    .selectDistinct({
      type: schema.csAssessmentQuestions.type,
      count: sql`count(*)`,
    })
    .from(schema.csAssessmentQuestions)
    .groupBy(schema.csAssessmentQuestions.type);

  console.log('\n🎯 QUESTION TYPE DISTRIBUTION');
  console.log('─'.repeat(100));
  const total = questionTypes.reduce((sum, row) => sum + (row.count || 0), 0);
  console.table(
    questionTypes.map((row) => ({
      Type: row.type.replace(/-/g, ' '),
      Count: row.count,
      Percentage: `${((((row.count || 0) / total) * 100).toFixed(2))}%`,
    }))
  );

  // 5. Sample questions from each type
  console.log('\n💡 SAMPLE QUESTIONS FROM EACH TYPE\n');

  const mcSample = await db
    .select({
      question: schema.csAssessmentQuestions.question,
      options: schema.csAssessmentQuestions.options,
      correctOption: schema.csAssessmentQuestions.correctOption,
      explanation: schema.csAssessmentQuestions.explanation,
    })
    .from(schema.csAssessmentQuestions)
    .where(sql`${schema.csAssessmentQuestions.type} = 'multiple-choice'`)
    .limit(1);

  if (mcSample.length > 0) {
    const mc = mcSample[0];
    console.log('📌 MULTIPLE CHOICE QUESTION:');
    console.log('─'.repeat(100));
    console.log(`Q: ${mc.question.substring(0, 150)}...`);
    if (mc.options) {
      const opts = JSON.parse(mc.options);
      opts.forEach((opt, idx) => {
        const mark = idx === mc.correctOption ? ' ✓' : '';
        console.log(`   ${String.fromCharCode(97 + idx)}) ${opt}${mark}`);
      });
    }
    console.log(`\nExplanation: ${mc.explanation?.substring(0, 150)}...\n`);
  }

  const codeSample = await db
    .select({
      question: schema.csAssessmentQuestions.question,
      language: schema.csAssessmentQuestions.language,
      code: schema.csAssessmentQuestions.code,
      expectedOutput: schema.csAssessmentQuestions.expectedOutput,
      explanation: schema.csAssessmentQuestions.explanation,
    })
    .from(schema.csAssessmentQuestions)
    .where(sql`${schema.csAssessmentQuestions.type} = 'code-output'`)
    .limit(1);

  if (codeSample.length > 0) {
    const co = codeSample[0];
    console.log('💻 CODE OUTPUT QUESTION:');
    console.log('─'.repeat(100));
    console.log(`Q: ${co.question.substring(0, 150)}...`);
    console.log(`\nLanguage: ${co.language}`);
    console.log(`Code:\n${co.code?.substring(0, 200)}...`);
    console.log(`\nExpected Output: ${co.expectedOutput?.substring(0, 100)}...`);
    console.log(`\nExplanation: ${co.explanation?.substring(0, 150)}...\n`);
  }

  const caseSample = await db
    .select({
      question: schema.csAssessmentQuestions.question,
      explanation: schema.csAssessmentQuestions.explanation,
    })
    .from(schema.csAssessmentQuestions)
    .where(sql`${schema.csAssessmentQuestions.type} = 'case-study'`)
    .limit(1);

  if (caseSample.length > 0) {
    const cs = caseSample[0];
    console.log('📖 CASE STUDY QUESTION:');
    console.log('─'.repeat(100));
    console.log(`Q: ${cs.question.substring(0, 200)}...`);
    console.log(`\nExplanation: ${cs.explanation?.substring(0, 200)}...\n`);
  }

  // Summary
  const totalAssessments = await db.select({ count: sql`count(*)` }).from(schema.csAssessments);
  const totalQuestions = await db.select({ count: sql`count(*)` }).from(schema.csAssessmentQuestions);

  console.log('✅ IMPORT SUMMARY');
  console.log('─'.repeat(100));
  console.log(`✓ Total Assessments: ${totalAssessments[0]?.count || 0}`);
  console.log(`✓ Total Questions: ${totalQuestions[0]?.count || 0}`);
  console.log(`✓ Database: ${dbUrl}`);
  console.log(`✓ Import Date: ${new Date().toISOString()}\n`);
}

try {
  await verifyImport();
  process.exit(0);
} catch (error) {
  console.error('❌ Verification failed:', error.message);
  console.error(error);
  process.exit(1);
}
