import { createHash, timingSafeEqual } from 'node:crypto';

export const API_ORIGIN_SECRET_HEADER = 'x-cohortia-origin-secret';

export function isProductionEnvironment(env = process.env) {
  return env.NODE_ENV === 'production' || env.RENDER === 'true';
}

export function apiOriginSecretsMatch(provided, expected) {
  if (typeof provided !== 'string' || typeof expected !== 'string') return false;

  const providedDigest = createHash('sha256').update(provided, 'utf8').digest();
  const expectedDigest = createHash('sha256').update(expected, 'utf8').digest();
  return timingSafeEqual(providedDigest, expectedDigest);
}

export function assertApiOriginSecretConfigured(env = process.env) {
  if (!isProductionEnvironment(env)) return;

  const secret = env.COHORTIA_API_ORIGIN_SECRET;
  if (typeof secret !== 'string' || Buffer.byteLength(secret, 'utf8') < 32) {
    throw new Error('COHORTIA_API_ORIGIN_SECRET must be configured with at least 32 bytes in production.');
  }
}

export async function apiOriginMiddleware(c, next) {
  if (isProductionEnvironment()
    && !apiOriginSecretsMatch(
      c.req.header(API_ORIGIN_SECRET_HEADER),
      process.env.COHORTIA_API_ORIGIN_SECRET,
    )) {
    return c.json({success: false, error: 'Forbidden'}, 403);
  }

  await next();
}
