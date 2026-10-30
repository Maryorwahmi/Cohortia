export type NativePracticalRunResult = {
  stdout: string;
  stderr: string;
  diagnostics: string;
  exitCode: number | null;
  outputTruncated: boolean;
};

type NativePracticalWorkerMessage =
  | { type: 'progress'; progress: number }
  | { type: 'ready' }
  | ({ type: 'result' } & NativePracticalRunResult)
  | { type: 'error'; error: string };

const MAX_SOURCE_BYTES = 128 * 1024;
const MAX_STDIN_BYTES = 4096;
const COMPILER_LOAD_TIMEOUT_MS = 120_000;
const RUN_TIMEOUT_MS = 20_000;

export function runNativePracticalInBrowser(
  language: 'c' | 'cpp',
  source: string,
  fileName: string,
  stdin = '',
  onLoadProgress?: (progress: number) => void,
): Promise<NativePracticalRunResult> {
  if (new TextEncoder().encode(source).byteLength > MAX_SOURCE_BYTES) {
    return Promise.reject(new Error('The source file is larger than the 128 KB practice limit.'));
  }
  if (new TextEncoder().encode(stdin).byteLength > MAX_STDIN_BYTES) {
    return Promise.reject(new Error('Program input is larger than the 4 KB practice limit.'));
  }

  const worker = new Worker(new URL('../workers/nativePracticalRuntime.worker.ts', import.meta.url), { type: 'module' });

  return new Promise((resolve, reject) => {
    let timeout: ReturnType<typeof setTimeout>;
    const cleanUp = () => {
      clearTimeout(timeout);
      worker.terminate();
    };
    const setTimeoutFor = (delay: number, message: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cleanUp();
        reject(new Error(message));
      }, delay);
    };

    setTimeoutFor(COMPILER_LOAD_TIMEOUT_MS, 'The browser compiler took too long to load. Check your connection and try again.');
    worker.onmessage = (event: MessageEvent<NativePracticalWorkerMessage>) => {
      const message = event.data;
      if (message.type === 'progress') {
        onLoadProgress?.(message.progress);
        return;
      }
      if (message.type === 'ready') {
        setTimeoutFor(RUN_TIMEOUT_MS, 'The program ran longer than 20 seconds and was stopped.');
        return;
      }
      cleanUp();
      if (message.type === 'error') {
        reject(new Error(message.error));
      } else {
        resolve({
          stdout: message.stdout,
          stderr: message.stderr,
          diagnostics: message.diagnostics,
          exitCode: message.exitCode,
          outputTruncated: message.outputTruncated,
        });
      }
    };
    worker.onerror = (event) => {
      cleanUp();
      reject(new Error(event.message || 'The browser compiler worker stopped unexpectedly.'));
    };
    worker.postMessage({ language, source, fileName, stdin });
  });
}
