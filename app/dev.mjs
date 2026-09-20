import { spawn } from "node:child_process";
import process from "node:process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const appRoot = fileURLToPath(new URL('.', import.meta.url));

const commands = [
  { name: "frontend", cwd: "frontend", args: ["run", "dev"] },
  { name: "backend", cwd: "backend", args: ["run", "dev"] },
];

const children = commands.map(({ name, cwd, args }) => {
  const child = spawn(process.platform === "win32" ? "npm.cmd" : "npm", args, {
    cwd: path.join(appRoot, cwd),
    env: process.env,
    shell: true,
    stdio: ["inherit", "pipe", "pipe"],
  });

  child.stdout.on("data", (chunk) => process.stdout.write(`[${name}] ${chunk}`));
  child.stderr.on("data", (chunk) => process.stderr.write(`[${name}] ${chunk}`));
  child.on("exit", (code, signal) => {
    if (!shuttingDown) {
      console.error(`[${name}] exited with ${signal || `code ${code}`}`);
      shutdown(code || 1);
    }
  });
  return child;
});

let shuttingDown = false;
function shutdown(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) child.kill("SIGTERM");
  }
  setTimeout(() => process.exit(code), 500);
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));
