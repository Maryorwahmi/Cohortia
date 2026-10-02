interface CachedResponse {
  body: string;
  expiresAt: number;
  headers: [string, string][];
  status: number;
  statusText: string;
}

// Keep API responses in memory only so user-specific data does not persist across reloads.
const responseCache = new Map<string, CachedResponse>();
const inFlightRequests = new Map<string, Promise<CachedResponse>>();
let cacheGeneration = 0;
const MAX_CACHED_RESPONSES = 300;

function getCacheTtl(pathname: string): number {
  if (/\/(?:board-progress|practical-progress|users|lessons\/progress|projects\/submissions|internships\/submissions|tracks\/user\/enrolled)(?:\/|$)/.test(pathname)) {
    return 10_000;
  }
  if (/\/learning-boards\/boards(?:\/|$)/.test(pathname)) return 5 * 60_000;
  if (/\/(?:catalog-courses|careers|tracks|assessments)(?:\/|$)/.test(pathname)) return 2 * 60_000;
  return 30_000;
}

function createResponse(cached: CachedResponse): Response {
  const bodylessStatus = cached.status === 204 || cached.status === 205 || cached.status === 304;
  return new Response(bodylessStatus ? null : cached.body, {
    status: cached.status,
    statusText: cached.statusText,
    headers: cached.headers,
  });
}

export function invalidateRequestCache(): void {
  cacheGeneration += 1;
  responseCache.clear();
}

export async function fetchWithReadCache(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const method = (init.method || 'GET').toUpperCase();
  if (method === 'GET') {
    const url = new URL(String(input), 'http://cohortia.local');
    const ttlMs = getCacheTtl(url.pathname);
    const headers = new Headers(init.headers);
    const requestHeaders = Array.from(headers.entries()).sort(([left], [right]) => left.localeCompare(right));
    const key = `${cacheGeneration}\n${url.href}\n${JSON.stringify(requestHeaders)}`;
    const cached = responseCache.get(key);
    if (cached && cached.expiresAt > Date.now()) return createResponse(cached);
    if (cached) responseCache.delete(key);

    let pending = inFlightRequests.get(key);
    if (!pending) {
      const currentGeneration = cacheGeneration;
      pending = fetch(input, init).then(async (response) => {
        const result: CachedResponse = {
          body: await response.clone().text(),
          expiresAt: Date.now() + ttlMs,
          headers: Array.from(response.headers.entries()),
          status: response.status,
          statusText: response.statusText,
        };

        if (
          response.status === 200 &&
          response.headers.get('content-type')?.includes('application/json') &&
          cacheGeneration === currentGeneration
        ) {
          if (responseCache.size >= MAX_CACHED_RESPONSES) {
            const oldestKey = responseCache.keys().next().value;
            if (oldestKey) responseCache.delete(oldestKey);
          }
          responseCache.set(key, result);
        }
        return result;
      }).finally(() => {
        inFlightRequests.delete(key);
      });
      inFlightRequests.set(key, pending);
    }
    return createResponse(await pending);
  }

  invalidateRequestCache();
  try {
    return await fetch(input, init);
  } finally {
    invalidateRequestCache();
  }
}
