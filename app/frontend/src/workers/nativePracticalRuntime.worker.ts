import { createCompiler } from '@live-codes/clang-wasm';

type NativeLanguage = 'c' | 'cpp';

type RunRequest = {
  language: NativeLanguage;
  source: string;
  fileName: string;
  stdin: string;
};

const MAX_SOURCE_BYTES = 128 * 1024;
const MAX_OUTPUT_CHARACTERS = 64 * 1024;

self.addEventListener('message', async (event: MessageEvent<RunRequest>) => {
  const { language, source, fileName, stdin } = event.data;
  if (new TextEncoder().encode(source).byteLength > MAX_SOURCE_BYTES) {
    self.postMessage({ type: 'error', error: 'The source file is larger than the 128 KB practice limit.' });
    return;
  }

  let compiler: Awaited<ReturnType<typeof createCompiler>> | undefined;
  try {
    compiler = await createCompiler(language, {
      baseUrl: new URL('/clang/', self.location.origin).href,
      onProgress: (progress: number) => self.postMessage({ type: 'progress', progress }),
    });
    self.postMessage({ type: 'ready' });

    const result = await compiler.run(source, stdin, { fileName });
    self.postMessage({
      type: 'result',
      stdout: result.stdout.slice(0, MAX_OUTPUT_CHARACTERS),
      stderr: result.stderr.slice(0, MAX_OUTPUT_CHARACTERS),
      diagnostics: result.errors.join('\n').slice(0, MAX_OUTPUT_CHARACTERS),
      exitCode: result.exitCode,
      outputTruncated: result.stdout.length > MAX_OUTPUT_CHARACTERS || result.stderr.length > MAX_OUTPUT_CHARACTERS,
    });
  } catch (error) {
    self.postMessage({
      type: 'error',
      error: error instanceof Error ? error.message : 'The browser compiler could not run this program.',
    });
  } finally {
    compiler?.dispose();
  }
});
