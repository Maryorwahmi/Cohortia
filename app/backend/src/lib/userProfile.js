import {createR2DownloadUrl} from './r2Storage.js';

export async function serializePublicUser(user) {
  const {
    password,
    avatarObjectKey,
    twoFactorSecret,
    twoFactorRecoveryCodes,
    twoFactorLastCounter,
    ...publicUser
  } = user;

  if (avatarObjectKey) {
    publicUser.avatarUrl = await createR2DownloadUrl(avatarObjectKey);
  } else {
    publicUser.avatarUrl = null;
  }

  return publicUser;
}
