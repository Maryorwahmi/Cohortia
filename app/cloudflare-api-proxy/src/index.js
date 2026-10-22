const API_ORIGIN_SECRET_HEADER = 'x-cohortia-origin-secret';

const RATE_LIMIT_RULES = new Map([
  ['/api/v1/auth/login', {binding: 'AUTH_LOGIN_RATE_LIMITER', route: 'auth_login'}],
  ['/api/v1/auth/signup', {binding: 'AUTH_SIGNUP_RATE_LIMITER', route: 'auth_signup'}],
  ['/api/v1/auth/verify-two-factor', {binding: 'AUTH_MFA_RATE_LIMITER', route: 'auth_mfa'}],
  ['/api/v1/chat/message', {binding: 'CHAT_RATE_LIMITER', route: 'chat'}],
  ['/api/v1/contact', {binding: 'FORM_RATE_LIMITER', route: 'contact'}],
  ['/api/v1/newsletter/subscribe', {binding: 'FORM_RATE_LIMITER', route: 'newsletter'}],
  ['/api/v1/learning/practical-execute', {binding: 'PRACTICAL_RATE_LIMITER', route: 'practical_execute'}],
]);

function jsonError(error, status) {
  return new Response(JSON.stringify({success: false, error}), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

async function enforceEdgeRateLimit(request, env, pathname) {
  if (request.method !== 'POST') return null;

  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const rule = RATE_LIMIT_RULES.get(normalizedPath);
  if (!rule) return null;

  const clientIp = request.headers.get('CF-Connecting-IP')?.trim() || 'unknown';
  const keyBytes = new TextEncoder().encode(`${rule.route}:${clientIp}`);
  const digest = await crypto.subtle.digest('SHA-256', keyBytes);
  const key = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');

  try {
    const {success} = await env[rule.binding].limit({key});
    if (success) return null;
  } catch (error) {
    console.error(JSON.stringify({
      event: 'api_rate_limit_check_failed',
      route: rule.route,
      errorType: error instanceof Error ? error.name : 'UnknownError',
    }));
    return jsonError('Rate limiting is temporarily unavailable.', 503);
  }

  console.warn(JSON.stringify({event: 'api_rate_limit_exceeded', route: rule.route}));
  return new Response(JSON.stringify({
    success: false,
    error: 'Rate limit exceeded. Please try again later.',
    retryAfterSeconds: 10,
  }), {
    status: 429,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'Retry-After': '10',
    },
  });
}

function parseApiOrigin(value) {
  try {
    const origin = new URL(value);
    if (origin.protocol !== 'https:' || origin.pathname !== '/' || origin.search || origin.hash) {
      return null;
    }
    return origin;
  } catch {
    return null;
  }
}

export default {
  async fetch(request, env) {
    const secret = env.COHORTIA_API_ORIGIN_SECRET;
    if (typeof secret !== 'string' || new TextEncoder().encode(secret).byteLength < 32) {
      console.error(JSON.stringify({event: 'api_proxy_secret_missing'}));
      return jsonError('API proxy is not configured.', 503);
    }

    const apiOrigin = parseApiOrigin(env.API_ORIGIN);
    if (!apiOrigin) {
      console.error(JSON.stringify({event: 'api_proxy_origin_invalid'}));
      return jsonError('API proxy is not configured.', 503);
    }

    const incomingUrl = new URL(request.url);
    const rateLimitResponse = await enforceEdgeRateLimit(request, env, incomingUrl.pathname);
    if (rateLimitResponse) return rateLimitResponse;

    const upstreamUrl = new URL(`${incomingUrl.pathname}${incomingUrl.search}`, apiOrigin);
    const headers = new Headers(request.headers);
    headers.set(API_ORIGIN_SECRET_HEADER, secret);
    headers.set('x-forwarded-host', incomingUrl.host);
    headers.set('x-forwarded-proto', incomingUrl.protocol.slice(0, -1));

    const modifiedRequest = new Request(request, {
      headers,
      redirect: 'manual',
    });
    const upstreamRequest = new Request(upstreamUrl, modifiedRequest);

    try {
      return await fetch(upstreamRequest);
    } catch (error) {
      console.error(JSON.stringify({
        event: 'api_proxy_upstream_failed',
        method: request.method,
        path: incomingUrl.pathname,
        errorType: error instanceof Error ? error.name : 'UnknownError',
      }));
      return jsonError('API service is temporarily unavailable.', 502);
    }
  },
};
