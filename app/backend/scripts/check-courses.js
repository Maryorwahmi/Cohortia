import 'dotenv/config';
import { db } from '../src/db/index.js';
import {
  learningBoardCourses,
  learningBoardChapters,
  catalogCourses,
  catalogCourseSubcategories,
  catalogCourseCareers
} from '../src/db/schema.js';
import { eq, sql } from 'drizzle-orm';

async function checkCourses() {
  try {
    // 1. Get all courses in learningBoardCourses
    const courses = await db.select().from(learningBoardCourses);
    console.log(`Found ${courses.length} courses in learningBoardCourses`);
    
    // 2. Get all chapters and their screensCount
    const chapters = await db.select().from(learningBoardChapters);
    console.log(`Found ${chapters.length} chapters in learningBoardChapters`);
    
    // Group chapters by course
    const chaptersByCourse = chapters.reduce((acc, ch) => {
      if (!acc[ch.courseId]) acc[ch.courseId] = [];
      acc[ch.courseId].push(ch);
      return acc;
    }, {});
    
    // 3. Get catalog categories
    const catalog = await db.select().from(catalogCourses);
    const catalogMap = catalog.reduce((acc, c) => {
      acc[c.id] = c;
      return acc;
    }, {});

    console.log('Courses with full screens for all chapters:');
    console.log('--------------------------------------------------');

    let count = 0;
    
    for (const course of courses) {
      const courseChapters = chaptersByCourse[course.courseId] || [];
      if (courseChapters.length === 0) continue;
      
      // Check if ALL chapters have screensCount > 0
      const allHaveScreens = courseChapters.every(ch => ch.screensCount > 0);
      
      if (allHaveScreens) {
        count++;
        const catalogInfo = catalogMap[course.courseId];
        const category = catalogInfo?.category || 'Unknown Category';
        const subcategory = catalogInfo?.subcategory || 'Unknown Subcategory';
        
        console.log(`- ${course.course} (${course.courseId})`);
        console.log(`  Category: ${category} > ${subcategory}`);
        console.log(`  Chapters: ${courseChapters.length} (all have screens)`);
        console.log('');
      }
    }
    
    console.log(`Total full courses found: ${count}`);
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

checkCourses();
