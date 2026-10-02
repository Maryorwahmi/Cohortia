import { Files } from "@cloudflare/sandbox";
import { DurableObject } from "cloudflare:workers";

type Language = "c" | "cpp" | "c++";

type ExecuteRequest = {
  runId: string;
  files: Record<string, string>;
  activeFilePath: string;
  language: Language;
};

type Env = {
  SANDBOX: DurableObjectNamespace;
  EXECUTOR_SHARED_SECRET: string;
};

const MAX_FILES = 20;
const MAX_SOURCE_BYTES = 128 * 1024;
const MAX_OUTPUT_BYTES = 64 * 1024;
const SAFE_FILE_PATH = /^(?!.*(?:^|\/)\.\.(?:\/|$))[a-zA-Z0-9][a-zA-Z0-9._/-]{0,159}$/;
const SAFE_RUN_ID = /^[a-zA-Z0-9_-]{1,128}$/;

function json(value: unknown, status = 200): Response {
  return Response.json(value, { status, headers: { "cache-control": "no-store" } });
}

function isNativeLanguage(value: unknown): value is Language {
  return value === "c" || value === "cpp" || value === "c++";
}

function safeFilePath(path: string): string | null {
  const normalized = String(path || "").replaceAll("\\", "/");
  if (!SAFE_FILE_PATH.test(normalized) || normalized.startsWith("/")) return null;
  return normalized;
}

function validRequest(value: unknown): value is ExecuteRequest {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const request = value as Partial<ExecuteRequest>;
  if (!SAFE_RUN_ID.test(String(request.runId || "")) || !isNativeLanguage(request.language)) return false;
  if (!request.files || typeof request.files !== "object" || Array.isArray(request.files)) return false;
  const entries = Object.entries(request.files);
  return entries.length > 0
    && entries.length <= MAX_FILES
    && typeof request.activeFilePath === "string"
    && entries.every(([path, content]) => Boolean(safeFilePath(path)) && typeof content === "string" && new TextEncoder().encode(content).byteLength <= MAX_SOURCE_BYTES);
}

function secureEqual(left: string, right: string): boolean {
  const leftBytes = new TextEncoder().encode(left);
  const rightBytes = new TextEncoder().encode(right);
  if (leftBytes.byteLength !== rightBytes.byteLength) return false;
  let difference = 0;
  for (let index = 0; index < leftBytes.byteLength; index += 1) difference |= leftBytes[index] ^ rightBytes[index];
  return difference === 0;
}

function compilerFor(language: Language): { compiler: string; extension: RegExp; standard: string } {
  return language === "c"
    ? { compiler: "clang", extension: /\.c$/i, standard: "-std=c17" }
    : { compiler: "clang++", extension: /\.(cpp|cc|cxx)$/i, standard: "-std=c++20" };
}

function truncate(value: string): string {
  return value.length > MAX_OUTPUT_BYTES ? `${value.slice(0, MAX_OUTPUT_BYTES)}\n[output truncated]` : value;
}

export class Sandbox extends DurableObject<Env> {
  async execute(request: ExecuteRequest) {
    const compiler = compilerFor(request.language);
    const activeFile = safeFilePath(request.activeFilePath);
    if (!activeFile) return { ok: false, error: "The active source file path is invalid." };

    const sourcePaths = Object.keys(request.files)
      .filter((filePath) => compiler.extension.test(filePath))
      .map((filePath) => `/workspace/${safeFilePath(filePath)}`);
    if (!sourcePaths.length || !sourcePaths.includes(`/workspace/${activeFile}`)) {
      return { ok: false, error: `No matching ${request.language === "c" ? "C" : "C++"} source file is available to compile.` };
    }

    const container = this.ctx.container;
    if (!container) throw new Error("The container binding is not configured.");
    if (!container.running) {
      container.start({ image: container.images.sandbox, enableInternet: false });
    }

    const files = new Files(container);
    for (const [relativePath, content] of Object.entries(request.files)) {
      const safePath = safeFilePath(relativePath);
      const parent = safePath?.includes("/") ? safePath.slice(0, safePath.lastIndexOf("/")) : "";
      if (parent) await files.mkdir(`/workspace/${parent}`, { recursive: true });
      await files.writeFile(`/workspace/${safePath}`, content);
    }

    const compile = await container.exec([
      "timeout", "12s", compiler.compiler, compiler.standard, "-O0", "-Wall", "-Wextra",
      ...sourcePaths, "-o", "/workspace/program",
    ], { cwd: "/workspace" });
    const compileOutput = await compile.output();
    const compileStdout = truncate(new TextDecoder().decode(compileOutput.stdout));
    const compileStderr = truncate(new TextDecoder().decode(compileOutput.stderr));
    if (compileOutput.exitCode !== 0) {
      return { ok: false, phase: "compile", exitCode: compileOutput.exitCode, stdout: compileStdout, stderr: compileStderr };
    }

    const run = await container.exec([
      "sh", "-c",
      "timeout 5s /workspace/program > /workspace/stdout.txt 2> /workspace/stderr.txt; status=$?; printf '%s' \"$status\" > /workspace/exit-code.txt; head -c 65536 /workspace/stdout.txt; head -c 65536 /workspace/stderr.txt >&2",
    ], { cwd: "/workspace" });
    const runOutput = await run.output();
    const exitCodeText = await files.readFile("/workspace/exit-code.txt");
    const exitCode = Number.parseInt(exitCodeText, 10);
    return {
      ok: exitCode === 0,
      phase: "run",
      compiler: compiler.compiler,
      exitCode: Number.isFinite(exitCode) ? exitCode : 1,
      stdout: truncate(new TextDecoder().decode(runOutput.stdout)),
      stderr: truncate(new TextDecoder().decode(runOutput.stderr)),
    };
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "GET" && new URL(request.url).pathname === "/health") {
      return json({ ok: true, service: "cohortia-practical-executor" });
    }
    if (request.method !== "POST" || new URL(request.url).pathname !== "/execute") return json({ error: "Not found." }, 404);
    const authorization = request.headers.get("authorization") || "";
    const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
    if (!env.EXECUTOR_SHARED_SECRET || !secureEqual(token, env.EXECUTOR_SHARED_SECRET)) return json({ error: "Unauthorized." }, 401);

    const body = await request.json().catch(() => null);
    if (!validRequest(body)) return json({ error: "Invalid execution request." }, 400);
    const sandbox = env.SANDBOX.getByName(body.runId);
    try {
      return json(await sandbox.execute(body));
    } catch (error) {
      console.error("Sandbox execution failed", error instanceof Error ? error.message : "unknown error");
      return json({ ok: false, error: "The isolated executor could not complete this run." }, 502);
    }
  },
} satisfies ExportedHandler<Env>;
