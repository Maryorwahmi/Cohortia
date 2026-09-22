import 'dotenv/config';
import { startAutomationWorker } from './lib/automationJobs.js';

console.log('[automation] Background worker starting.');

try {
  await startAutomationWorker();
  console.log('[automation] Background worker is running.');
} catch (error) {
  console.error('[automation] Background worker failed to start:', error);
  process.exitCode = 1;
}
