import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageEntry = fileURLToPath(import.meta.resolve('@live-codes/clang-wasm'));
const copyAssetsScript = resolve(dirname(packageEntry), '../bin/copy-assets.mjs');

execFileSync(process.execPath, [copyAssetsScript, 'public/clang'], { stdio: 'inherit' });
