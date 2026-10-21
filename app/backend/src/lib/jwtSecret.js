export function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (typeof secret !== 'string' || !secret.trim()) {
    throw new Error('JWT_SECRET must be configured before the API can start.');
  }
  if (Buffer.byteLength(secret, 'utf8') < 32) {
    throw new Error('JWT_SECRET must be at least 32 bytes.');
  }
  return secret;
}
