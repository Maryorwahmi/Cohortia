import { Files } from "@cloudflare/sandbox";
import { DurableObject } from "cloudflare:workers";

type Language = "c" | "cpp" | "c++" | "python";

type CompileProbe = {
  id: string;
  source: string;
  expectCompileSuccess: boolean;
  expectedDiagnostic?: string;
};

type ExecuteRequest = {
  runId: string;
  files: Record<string, string>;
  activeFilePath: string;
  language: Language;
  stdin?: string;
  enableSanitizers?: boolean;
  compileProbes?: CompileProbe[];
  artifactPaths?: string[];
};

type Env = {
  SANDBOX: DurableObjectNamespace;
  EXECUTOR_SHARED_SECRET: string;
};

const MAX_FILES = 20;
const MAX_SOURCE_BYTES = 128 * 1024;
const MAX_TOTAL_SOURCE_BYTES = 512 * 1024;
const MAX_OUTPUT_BYTES = 64 * 1024;
const SAFE_FILE_PATH = /^(?!.*(?:^|\/)\.\.(?:\/|$))[a-zA-Z0-9][a-zA-Z0-9._/-]{0,159}$/;
const SAFE_RUN_ID = /^[a-zA-Z0-9_-]{1,128}$/;
const SAFE_PROBE_ID = /^[a-zA-Z0-9_-]{1,80}$/;

function json(value: unknown, status = 200): Response {
  return Response.json(value, { status, headers: { "cache-control": "no-store" } });
}

function isNativeLanguage(value: unknown): value is Language {
  return value === "c" || value === "cpp" || value === "c++" || value === "python";
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
  const totalSourceBytes = entries.reduce((total, [, content]) => (
    total + (typeof content === "string" ? new TextEncoder().encode(content).byteLength : MAX_TOTAL_SOURCE_BYTES)
  ), 0);
  return entries.length > 0
    && entries.length <= MAX_FILES
    && totalSourceBytes <= MAX_TOTAL_SOURCE_BYTES
    && typeof request.activeFilePath === "string"
    && entries.every(([path, content]) => Boolean(safeFilePath(path)) && typeof content === "string" && new TextEncoder().encode(content).byteLength <= MAX_SOURCE_BYTES)
    && (request.stdin === undefined || (typeof request.stdin === "string" && new TextEncoder().encode(request.stdin).byteLength <= 4096))
    && (request.enableSanitizers === undefined || typeof request.enableSanitizers === "boolean")
    && (request.compileProbes === undefined || (
      Array.isArray(request.compileProbes)
      && request.compileProbes.length <= 20
      && request.compileProbes.every((probe) => probe
        && SAFE_PROBE_ID.test(String(probe.id || ""))
        && typeof probe.source === "string"
        && new TextEncoder().encode(probe.source).byteLength <= MAX_SOURCE_BYTES
        && typeof probe.expectCompileSuccess === "boolean"
        && (probe.expectedDiagnostic === undefined
          || (typeof probe.expectedDiagnostic === "string" && probe.expectedDiagnostic.length <= 200))
        && (probe.expectCompileSuccess || Boolean(probe.expectedDiagnostic)))
    ))
    && (request.artifactPaths === undefined || (
      Array.isArray(request.artifactPaths)
      && request.artifactPaths.length <= 20
      && request.artifactPaths.every((path) => typeof path === "string" && Boolean(safeFilePath(path)))
    ));
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
    const isPython = request.language === "python";
    const compiler = isPython ? null : compilerFor(request.language);
    const activeFile = safeFilePath(request.activeFilePath);
    if (!activeFile) return { ok: false, error: "The active source file path is invalid." };

    const workspace = `/workspace/${request.runId}`;
    const activePath = `${workspace}/${activeFile}`;
    if (!Object.prototype.hasOwnProperty.call(request.files, activeFile)) {
      return { ok: false, error: "The active source file is not included in the workspace." };
    }
    const sourcePaths = isPython ? [] : Object.keys(request.files)
      .filter((filePath) => compiler!.extension.test(filePath))
      .map((filePath) => `${workspace}/${safeFilePath(filePath)}`);
    if (isPython && !/\.py$/i.test(activeFile)) {
      return { ok: false, error: "The active source file must be a Python file." };
    }
    if (!isPython && (!sourcePaths.length || !sourcePaths.includes(activePath))) {
      return { ok: false, error: `No matching ${request.language === "c" ? "C" : "C++"} source file is available to compile.` };
    }

    const container = this.ctx.container;
    if (!container) throw new Error("The container binding is not configured.");
    if (!container.running) {
      container.start({ image: container.images.sandbox, enableInternet: false });
    }

    const files = new Files(container);
    await container.exec(["rm", "-rf", workspace], { cwd: "/workspace" });
    await files.mkdir(workspace, { recursive: true });
    for (const [relativePath, content] of Object.entries(request.files)) {
      const safePath = safeFilePath(relativePath);
      const targetPath = `${workspace}/${safePath}`;
      const parent = safePath?.includes("/") ? targetPath.slice(0, targetPath.lastIndexOf("/")) : "";
      if (parent) await files.mkdir(parent, { recursive: true });
      await files.writeFile(targetPath, content);
    }

    const stdinPath = `${workspace}/stdin.txt`;
    const stdoutPath = `${workspace}/stdout.txt`;
    const stderrPath = `${workspace}/stderr.txt`;
    const exitCodePath = `${workspace}/exit-code.txt`;
    await files.writeFile(stdinPath, request.stdin || "");
    for (const artifactPath of request.artifactPaths || []) {
      const safePath = safeFilePath(artifactPath);
      if (safePath) await container.exec(["rm", "-f", "--", `${workspace}/${safePath}`], { cwd: workspace });
    }
    let compilerName: string | undefined;
    let sanitizers: string[] = [];
    let compileStdout = "";
    let compileStderr = "";
    if (!isPython) {
      const compile = await container.exec([
        "timeout", "12s", compiler!.compiler, compiler!.standard, "-O0", "-Wall", "-Wextra",
        ...(request.enableSanitizers ? ["-fsanitize=address,undefined", "-fno-omit-frame-pointer"] : []),
        "-I", workspace, ...sourcePaths, "-o", `${workspace}/program`,
      ], { cwd: workspace });
      const compileOutput = await compile.output();
      compileStdout = truncate(new TextDecoder().decode(compileOutput.stdout));
      compileStderr = truncate(new TextDecoder().decode(compileOutput.stderr));
      if (compileOutput.exitCode !== 0) {
        return { ok: false, phase: "compile", exitCode: compileOutput.exitCode, stdout: compileStdout, stderr: compileStderr };
      }
      compilerName = compiler!.compiler;
      sanitizers = request.enableSanitizers ? ["address", "undefined"] : [];
    }

    const runCommand = isPython
      ? `timeout 5s python3 '${activePath}'`
      : `${request.enableSanitizers ? "ASAN_OPTIONS=detect_leaks=1:halt_on_error=1 UBSAN_OPTIONS=print_stacktrace=1:halt_on_error=1 " : ""}timeout 5s ${workspace}/program`;
    const run = await container.exec([
      "sh", "-c",
      `${runCommand} < '${stdinPath}' > '${stdoutPath}' 2> '${stderrPath}'; status=$?; printf '%s' "$status" > '${exitCodePath}'; head -c ${MAX_OUTPUT_BYTES} '${stdoutPath}'; head -c ${MAX_OUTPUT_BYTES} '${stderrPath}' >&2`,
    ], { cwd: workspace });
    const runOutput = await run.output();
    const exitCodeText = await (await files.readFile(exitCodePath)).text();
    const exitCode = Number.parseInt(exitCodeText, 10);
    const artifacts: Record<string, string> = {};
    for (const artifactPath of request.artifactPaths || []) {
      const safePath = safeFilePath(artifactPath);
      if (!safePath) continue;
      const targetPath = `${workspace}/${safePath}`;
      const resolved = await container.exec(["realpath", "-e", "--", targetPath], { cwd: workspace });
      const resolvedOutput = await resolved.output();
      const resolvedPath = new TextDecoder().decode(resolvedOutput.stdout).trim();
      if (resolvedOutput.exitCode !== 0 || !resolvedPath.startsWith(`${workspace}/`)) continue;
      const fileProbe = await container.exec(["test", "-f", resolvedPath], { cwd: workspace });
      const fileProbeOutput = await fileProbe.output();
      if (fileProbeOutput.exitCode !== 0) continue;
      const content = await (await files.readFile(resolvedPath)).text();
      if (new TextEncoder().encode(content).byteLength <= MAX_OUTPUT_BYTES) artifacts[safePath] = content;
    }
    const compileProbes = [];
    for (const probe of request.compileProbes || []) {
      const probePath = `${workspace}/_cohortia-probe-${probe.id}.cpp`;
      const probeOutputPath = `${workspace}/_cohortia-probe-${probe.id}`;
      await files.writeFile(probePath, probe.source);
      const probeCompile = await container.exec([
        "timeout", "12s", compiler?.compiler || "clang++", compiler?.standard || "-std=c++20",
        "-O0", "-Wall", "-Wextra", "-I", workspace, probePath, "-o", probeOutputPath,
      ], { cwd: workspace });
      const probeResult = await probeCompile.output();
      const probeStderr = truncate(new TextDecoder().decode(probeResult.stderr));
      const expectedDiagnosticMatched = probe.expectCompileSuccess
        || probeStderr.toLowerCase().includes((probe.expectedDiagnostic || "").toLowerCase());
      const passed = (probeResult.exitCode === 0) === probe.expectCompileSuccess
        && expectedDiagnosticMatched;
      compileProbes.push({
        id: probe.id,
        passed,
        message: passed ? "Compile-time behavior was verified." : "Compile-time behavior could not be verified.",
      });
    }
    return {
      ok: exitCode === 0,
      phase: "run",
      ...(compilerName ? { compiler: compilerName } : {}),
      exitCode: Number.isFinite(exitCode) ? exitCode : 1,
      stdout: truncate(new TextDecoder().decode(runOutput.stdout)),
      stderr: truncate(new TextDecoder().decode(runOutput.stderr)),
      ...(sanitizers.length ? { sanitizers } : {}),
      ...(Object.keys(artifacts).length ? { artifacts } : {}),
      ...(compileProbes.length ? { compileProbes } : {}),
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
