import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const applicationRoot = path.resolve(scriptsDirectory, '..', '..');

/**
 * Loads optional backend environment values for standalone generation scripts.
 * Render-provided environment variables always take precedence.
 */
export function loadRepositoryEnv() {
  const envPath = path.join(applicationRoot, 'backend', '.env');
  if (!fs.existsSync(envPath)) return;

  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^"|"$/g, '');
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

export { applicationRoot };
