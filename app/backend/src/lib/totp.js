import crypto from 'node:crypto';

const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const TOTP_PERIOD_SECONDS = 30;
const TOTP_DIGITS = 6;

function encodeBase32(buffer) {
  let bits = 0;
  let value = 0;
  let output = '';

  for (const byte of buffer) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) output += BASE32_ALPHABET[(value << (5 - bits)) & 31];
  return output;
}

function decodeBase32(value) {
  let bits = 0;
  let buffer = 0;
  const output = [];

  for (const character of value.toUpperCase().replace(/=+$/g, '')) {
    const index = BASE32_ALPHABET.indexOf(character);
    if (index < 0) throw new Error('The saved authenticator secret is invalid.');
    buffer = (buffer << 5) | index;
    bits += 5;
    if (bits >= 8) {
      output.push((buffer >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }
  return Buffer.from(output);
}

function encryptionKey() {
  const configuredKey = process.env.TOTP_ENCRYPTION_KEY?.trim();
  if (!configuredKey || configuredKey.length < 32) {
    throw new Error('TOTP_ENCRYPTION_KEY must be configured with at least 32 characters before authenticator setup can be enabled.');
  }
  return crypto.createHash('sha256').update(configuredKey).digest();
}

export function isTotpEncryptionConfigured() {
  const configuredKey = process.env.TOTP_ENCRYPTION_KEY?.trim();
  return Boolean(configuredKey && configuredKey.length >= 32);
}

function getTotpAtCounter(secret, counter) {
  const counterBuffer = Buffer.alloc(8);
  counterBuffer.writeBigUInt64BE(BigInt(counter));
  const hmac = crypto.createHmac('sha1', decodeBase32(secret)).update(counterBuffer).digest();
  const offset = hmac[hmac.length - 1] & 15;
  const value = (
    ((hmac[offset] & 127) << 24)
    | ((hmac[offset + 1] & 255) << 16)
    | ((hmac[offset + 2] & 255) << 8)
    | (hmac[offset + 3] & 255)
  ) % (10 ** TOTP_DIGITS);
  return String(value).padStart(TOTP_DIGITS, '0');
}

export function generateTotpSecret() {
  return encodeBase32(crypto.randomBytes(20));
}

export function makeOtpAuthUrl(email, secret) {
  const label = encodeURIComponent(`Cohortia:${email}`);
  const params = new URLSearchParams({
    secret,
    issuer: 'Cohortia',
    algorithm: 'SHA1',
    digits: String(TOTP_DIGITS),
    period: String(TOTP_PERIOD_SECONDS),
  });
  return `otpauth://totp/${label}?${params.toString()}`;
}

export function encryptTotpSecret(secret) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', encryptionKey(), iv);
  const ciphertext = Buffer.concat([cipher.update(secret, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv, tag, ciphertext].map((part) => part.toString('base64url')).join('.');
}

export function decryptTotpSecret(encryptedSecret) {
  const [ivPart, tagPart, ciphertextPart] = String(encryptedSecret || '').split('.');
  if (!ivPart || !tagPart || !ciphertextPart) throw new Error('The saved authenticator secret is invalid.');
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    encryptionKey(),
    Buffer.from(ivPart, 'base64url'),
  );
  decipher.setAuthTag(Buffer.from(tagPart, 'base64url'));
  return Buffer.concat([
    decipher.update(Buffer.from(ciphertextPart, 'base64url')),
    decipher.final(),
  ]).toString('utf8');
}

export function verifyTotpCode(secret, code, timestamp = Date.now()) {
  if (!/^\d{6}$/.test(String(code || ''))) return false;
  const currentCounter = Math.floor(timestamp / 1000 / TOTP_PERIOD_SECONDS);
  const submitted = Buffer.from(String(code));
  for (let drift = -1; drift <= 1; drift += 1) {
    const counter = currentCounter + drift;
    if (counter < 0) continue;
    const expected = Buffer.from(getTotpAtCounter(secret, counter));
    if (crypto.timingSafeEqual(expected, submitted)) return counter;
  }
  return null;
}

export function createRecoveryCodes(count = 10) {
  return Array.from({length: count}, () => crypto.randomBytes(5).toString('hex').toUpperCase());
}

export function hashRecoveryCode(userId, code) {
  const normalized = String(code || '').replace(/[\s-]/g, '').toUpperCase();
  return crypto.createHash('sha256').update(`${userId}:${normalized}`).digest('hex');
}

export function findRecoveryCodeIndex(userId, code, recoveryCodeHashes) {
  if (!/^[A-F0-9]{10}$/.test(String(code || '').replace(/[\s-]/g, '').toUpperCase())) return -1;
  const submittedHash = Buffer.from(hashRecoveryCode(userId, code), 'hex');
  return recoveryCodeHashes.findIndex((hash) => {
    const storedHash = Buffer.from(hash, 'hex');
    return storedHash.length === submittedHash.length && crypto.timingSafeEqual(storedHash, submittedHash);
  });
}
