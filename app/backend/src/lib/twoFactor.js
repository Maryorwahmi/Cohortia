import {and, eq, isNull} from 'drizzle-orm';
import {db} from '../db/index.js';
import {users} from '../db/schema.js';
import {decryptTotpSecret, findRecoveryCodeIndex, verifyTotpCode} from './totp.js';

export async function verifyAndConsumeSecondFactor(user, code) {
  if (!user.twoFactorEnabled || !user.twoFactorSecret) return false;

  let recoveryCodeHashes;
  try {
    recoveryCodeHashes = JSON.parse(user.twoFactorRecoveryCodes || '[]');
  } catch {
    throw new Error('The saved recovery codes are invalid. Contact support to restore account access.');
  }
  if (!Array.isArray(recoveryCodeHashes) || recoveryCodeHashes.some((hash) => typeof hash !== 'string')) {
    throw new Error('The saved recovery codes are invalid. Contact support to restore account access.');
  }

  const recoveryIndex = findRecoveryCodeIndex(user.id, code, recoveryCodeHashes);
  if (recoveryIndex >= 0) {
    const remainingCodes = recoveryCodeHashes.filter((_, index) => index !== recoveryIndex);
    const [updated] = await db.update(users).set({
      twoFactorRecoveryCodes: JSON.stringify(remainingCodes),
    }).where(and(
      eq(users.id, user.id),
      eq(users.twoFactorRecoveryCodes, user.twoFactorRecoveryCodes),
      eq(users.twoFactorEnabled, true),
    )).returning({id: users.id});
    return Boolean(updated);
  }

  const matchedCounter = verifyTotpCode(decryptTotpSecret(user.twoFactorSecret), code);
  if (matchedCounter !== null && matchedCounter > (user.twoFactorLastCounter ?? -1)) {
    const counterCondition = user.twoFactorLastCounter == null
      ? isNull(users.twoFactorLastCounter)
      : eq(users.twoFactorLastCounter, user.twoFactorLastCounter);
    const [updated] = await db.update(users).set({
      twoFactorLastCounter: matchedCounter,
    }).where(and(
      eq(users.id, user.id),
      counterCondition,
      eq(users.twoFactorEnabled, true),
    )).returning({id: users.id});
    return Boolean(updated);
  }

  return false;
}
