import crypto from 'node:crypto';

export function statesMatch(cookieState, callbackState) {
  if (typeof cookieState !== 'string' || typeof callbackState !== 'string') return false;
  const cookieBytes = Buffer.from(cookieState);
  const callbackBytes = Buffer.from(callbackState);
  return cookieBytes.length === callbackBytes.length
    && cookieBytes.length > 0
    && crypto.timingSafeEqual(cookieBytes, callbackBytes);
}
