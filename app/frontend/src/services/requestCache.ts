interface CachedResponse {
  pathname: string;
  body: string;
  expiresAt: number;
  headers: [string, string][];
  status: number;
  statusText: string;
}

const SESSION_CACHE_PREFIX = 'cohortia:api-cache:v1:';
const SESSION_CACHE_INDEX = `${SESSION_CACHE_PREFIX}index`;
const MAX_SESSION_CACHE_ENTRIES = 20;
const MAX_SESSION_CACHE_BYTES = 1_500_000;
const MAX_PERSISTED_RESPONSE_BYTES = 512_000;

const responseCache = new Map<string, CachedResponse>();
const inFlightRequests = new Map<string, Promise<CachedResponse>>();
let cacheGeneration = 0;
let refreshInFlight: Promise<boolean> | null = null;

function requestUrl(input: RequestInfo | URL) {
  return new URL(typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url, window.location.href);
}

async function rawFetch(input: RequestInfo | URL, options: RequestInit) {
  return fetch(input, options);
}

async function fetchWithSessionRefresh(input: RequestInfo | URL, options: RequestInit): Promise<Response> {
  const retryInput = input instanceof Request ? input.clone() : input;
  const response = await rawFetch(input, options);
  if (response.status !== 401 || !options.credentials || options.credentials === 'omit') return response;

  const url = requestUrl(input);
  const apiPath = url.pathname;
  const apiPrefixMatch = apiPath.match(/^(.*?\/api\/v1)(?:\/|$)/);
  if (!apiPrefixMatch || /\/auth\/(?:login|google\/exchange|session\/refresh)$/.test(apiPath)) return response;

  if (!refreshInFlight) {
    const refreshUrl = `${url.origin}${apiPrefixMatch[1]}/auth/session/refresh`;
    const refreshSession = () => rawFetch(refreshUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    }).then((refreshResponse) => refreshResponse.ok);
    const refreshRequest = 'locks' in navigator
      ? navigator.locks.request('cohortia-session-refresh', refreshSession)
      : refreshSession();
    refreshInFlight = refreshRequest.finally(() => {
      refreshInFlight = null;
    });
  }

  if (!await refreshInFlight) return response;
  return rawFetch(retryInput, options);
}
const MAX_CACHED_RESPONSES = 300;

function getCacheTtl(pathname: string): number {
  if (pathMatches(pathname, ['/tracks/user/enrolled'])) return 0;
  if (/\/learning-boards\/boards(?:\/|$)/.test(pathname)) return 5 * 60_000;
  if (/\/(?:catalog-courses|careers|tracks|assessments)(?:\/|$)/.test(pathname)) return 2 * 60_000;
  return 0;
}

async function getPersistentCacheKey(requestKey: string): Promise<string | null> {
  if (!globalThis.crypto?.subtle) return null;
  const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(requestKey));
  const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
  return `${SESSION_CACHE_PREFIX}${hash}`;
}

function readSessionCache(key: string): CachedResponse | null {
  try {
    const serialized = sessionStorage.getItem(key);
    if (!serialized) return null;
    const cached = JSON.parse(serialized) as CachedResponse;
    if (
      typeof cached.body !== 'string' ||
      typeof cached.expiresAt !== 'number' ||
      typeof cached.status !== 'number' ||
      typeof cached.statusText !== 'string' ||
      !Array.isArray(cached.headers)
    ) {
      sessionStorage.removeItem(key);
      return null;
    }
    if (cached.expiresAt <= Date.now()) {
      sessionStorage.removeItem(key);
      return null;
    }
    return cached;
  } catch {
    return null;
  }
}

function writeSessionCache(key: string, cached: CachedResponse): void {
  try {
    const serialized = JSON.stringify(cached);
    const responseBytes = new Blob([serialized]).size;
    if (responseBytes > MAX_PERSISTED_RESPONSE_BYTES) return;

    const existingIndex = JSON.parse(sessionStorage.getItem(SESSION_CACHE_INDEX) || '[]') as string[];
    const keys = [key, ...existingIndex.filter((item) => item !== key)];
    let totalBytes = responseBytes;

    for (const candidateKey of keys.slice(1)) {
      const value = sessionStorage.getItem(candidateKey);
      totalBytes += value ? new Blob([value]).size : 0;
    }
    while (keys.length > MAX_SESSION_CACHE_ENTRIES || totalBytes > MAX_SESSION_CACHE_BYTES) {
      const removedKey = keys.pop();
      if (!removedKey) return;
      const removedValue = sessionStorage.getItem(removedKey);
      totalBytes -= removedValue ? new Blob([removedValue]).size : 0;
      sessionStorage.removeItem(removedKey);
    }

    sessionStorage.setItem(key, serialized);
    sessionStorage.setItem(SESSION_CACHE_INDEX, JSON.stringify(keys));
  } catch {
    // Browser storage can be unavailable or full; the in-memory cache remains usable.
  }
}

function createResponse(cached: CachedResponse): Response {
  const bodylessStatus = cached.status === 204 || cached.status === 205 || cached.status === 304;
  return new Response(bodylessStatus ? null : cached.body, {
    status: cached.status,
    statusText: cached.statusText,
    headers: cached.headers,
  });
}

function pathMatches(pathname: string, patterns: string[]): boolean {
  if (!pathname) return false;
  return patterns.some((pattern) => pathname === pattern || pathname.startsWith(`${pattern}/`));
}

function relatedPathsForMutation(pathname: string): string[] {
  if (pathname.includes('/users/profile')) return ['/users/profile'];
  if (pathname.includes('/lessons/') || pathname.includes('/learning/')) {
    return ['/users/progress', '/learning/board-progress', '/learning/practical-progress', '/learning-boards/boards'];
  }
  if (pathname.includes('/projects/')) return ['/projects/submissions', '/projects/course', '/dashboard'];
  if (pathname.includes('/mentor/')) return ['/mentor'];
  if (pathname.includes('/tracks/')) return ['/tracks', '/tracks/user/enrolled', '/users/progress'];
  return [];
}

export function invalidateRequestCache(patterns?: string[]): void {
  if (!patterns?.length) {
    cacheGeneration += 1;
    responseCache.clear();
  } else {
    for (const [key, cached] of responseCache.entries()) {
      if (pathMatches(cached.pathname, patterns)) responseCache.delete(key);
    }
  }

  try {
    for (let index = sessionStorage.length - 1; index >= 0; index -= 1) {
      const key = sessionStorage.key(index);
      if (!key?.startsWith(SESSION_CACHE_PREFIX) || key === SESSION_CACHE_INDEX) continue;
      if (!patterns?.length) {
        sessionStorage.removeItem(key);
        continue;
      }
      const cached = readSessionCache(key);
      if (cached && pathMatches(cached.pathname, patterns)) sessionStorage.removeItem(key);
    }

    const keys = JSON.parse(sessionStorage.getItem(SESSION_CACHE_INDEX) || '[]') as string[];
    sessionStorage.setItem(SESSION_CACHE_INDEX, JSON.stringify(keys.filter((key) => sessionStorage.getItem(key))));
  } catch {
    // Browser storage can be unavailable; in-memory invalidation still applies.
  }
}

export async function fetchWithReadCache(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const method = (init.method || 'GET').toUpperCase();
  const requestOptions: RequestInit = {
    ...init,
    credentials: init.credentials || 'include',
  };
  if (method === 'GET') {
    const url = new URL(String(input), 'http://cohortia.local');
    const ttlMs = getCacheTtl(url.pathname);
    if (ttlMs === 0) return fetchWithSessionRefresh(input, requestOptions);

    const headers = new Headers(init.headers);
    const requestHeaders = Array.from(headers.entries()).sort(([left], [right]) => left.localeCompare(right));
    const requestKey = `${url.href}\n${JSON.stringify(requestHeaders)}`;
    const key = `${cacheGeneration}\n${requestKey}`;
    const cached = responseCache.get(key);
    if (cached && cached.expiresAt > Date.now()) return createResponse(cached);
    if (cached) responseCache.delete(key);

    const persistentKey = ttlMs > 0 ? await getPersistentCacheKey(requestKey) : null;
    if (persistentKey) {
      const persisted = readSessionCache(persistentKey);
      if (persisted) {
        responseCache.set(key, persisted);
        return createResponse(persisted);
      }
    }

    let pending = inFlightRequests.get(key);
    if (!pending) {
      const currentGeneration = cacheGeneration;
      pending = fetchWithSessionRefresh(input, requestOptions).then(async (response) => {
        const result: CachedResponse = {
          pathname: url.pathname,
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
          if (persistentKey) writeSessionCache(persistentKey, result);
        }
        return result;
      }).finally(() => {
        inFlightRequests.delete(key);
      });
      inFlightRequests.set(key, pending);
    }
    return createResponse(await pending);
  }

  const url = new URL(String(input), 'http://cohortia.local');
  invalidateRequestCache(relatedPathsForMutation(url.pathname));
  try {
    return await fetchWithSessionRefresh(input, requestOptions);
  } finally {
    invalidateRequestCache(relatedPathsForMutation(url.pathname));
  }
}
