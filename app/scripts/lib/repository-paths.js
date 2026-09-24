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
  const configuredPath = process.env.COHORTIA_ENV_FILE;
  const candidatePaths = [
    configuredPath,
    path.join(applicationRoot, 'backend', '.env'),
    path.join(applicationRoot, '.env'),
    path.join(applicationRoot, '..', '.env'),
    path.join(applicationRoot, '..', '..', '..', 'Cohortia', 'app', 'backend', '.env'),
  ].filter(Boolean).map((candidate) => path.resolve(candidate));
  const envPath = candidatePaths.find((candidate) => fs.existsSync(candidate));
  if (!envPath) return null;

  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^"|"$/g, '');
    if (process.env[key] === undefined) process.env[key] = value;
  }

  return envPath;
}

export { applicationRoot };
