import { db } from './src/db/index.js';
import { userRoadmaps } from './src/db/schema.js';
import { eq } from 'drizzle-orm';

// Migration: Convert chapter strings to objects with summaries
async function migrateChapters() {
  try {
    console.log('Fetching all roadmaps...');
    const roadmaps = await db.select().from(userRoadmaps);

    for (const roadmap of roadmaps) {
      try {
        const generatedData = typeof roadmap.generatedData === 'string' 
          ? JSON.parse(roadmap.generatedData) 
          : roadmap.generatedData;

        if (!generatedData?.modules) continue;

        let modified = false;

        // Transform chapters from strings to objects with summaries
        const updatedModules = generatedData.modules.map(module => {
          if (!module.chapters) return module;

          const updatedChapters = module.chapters.map(chapter => {
            // If already an object with title and summary, keep it
            if (typeof chapter === 'object' && chapter.title && chapter.summary) {
              return chapter;
            }

            // If it's a string, convert to object with generated summary
            if (typeof chapter === 'string') {
              modified = true;
              return {
                title: chapter,
                summary: `Learn ${chapter.toLowerCase()} and master this essential skill for ${generatedData.title}.`
              };
            }

            // Fallback
            return chapter;
          });

          return { ...module, chapters: updatedChapters };
        });

        if (modified) {
          const updatedData = {
            ...generatedData,
            modules: updatedModules
          };

          await db.update(userRoadmaps)
            .set({ 
              generatedData: JSON.stringify(updatedData),
              updatedAt: new Date().toISOString()
            })
            .where(eq(userRoadmaps.id, roadmap.id));

          console.log(`✓ Migrated: ${roadmap.title}`);
        }
      } catch (err) {
        console.error(`✗ Failed to migrate ${roadmap.id}:`, err.message);
      }
    }

    console.log('Migration complete!');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

migrateChapters();
