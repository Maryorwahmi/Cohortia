import {DeleteObjectCommand, GetObjectCommand, HeadObjectCommand, PutObjectCommand, S3Client} from '@aws-sdk/client-s3';
import {getSignedUrl} from '@aws-sdk/s3-request-presigner';

const PRESIGNED_URL_TTL_SECONDS = 900;
let cachedClient;

function r2Configuration() {
  const accountId = process.env.R2_ACCOUNT_ID?.trim();
  const bucket = process.env.R2_BUCKET_NAME?.trim();
  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();
  if (!accountId || !bucket || !accessKeyId || !secretAccessKey) return null;
  return {accountId, bucket, accessKeyId, secretAccessKey};
}

export function isR2Configured() {
  return Boolean(r2Configuration());
}

function getR2Client(configuration) {
  if (!cachedClient) {
    cachedClient = new S3Client({
      region: 'auto',
      endpoint: `https://${configuration.accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: configuration.accessKeyId,
        secretAccessKey: configuration.secretAccessKey,
      },
    });
  }
  return cachedClient;
}

export async function createR2UploadUrl(key, contentType) {
  const configuration = r2Configuration();
  if (!configuration) throw new Error('R2 is not configured.');
  const url = await getSignedUrl(getR2Client(configuration), new PutObjectCommand({
    Bucket: configuration.bucket,
    Key: key,
    ContentType: contentType,
  }), {expiresIn: PRESIGNED_URL_TTL_SECONDS});
  return {url, expiresInSeconds: PRESIGNED_URL_TTL_SECONDS};
}

export async function createR2DownloadUrl(key) {
  const configuration = r2Configuration();
  if (!configuration) throw new Error('R2 is not configured.');
  return getSignedUrl(getR2Client(configuration), new GetObjectCommand({
    Bucket: configuration.bucket,
    Key: key,
  }), {expiresIn: PRESIGNED_URL_TTL_SECONDS});
}

export async function inspectR2Object(key) {
  const configuration = r2Configuration();
  if (!configuration) throw new Error('R2 is not configured.');
  const result = await getR2Client(configuration).send(new HeadObjectCommand({
    Bucket: configuration.bucket,
    Key: key,
  }));
  return {
    contentType: result.ContentType || '',
    byteSize: Number(result.ContentLength) || 0,
  };
}

export async function readR2Object(key) {
  const configuration = r2Configuration();
  if (!configuration) throw new Error('R2 is not configured.');
  const result = await getR2Client(configuration).send(new GetObjectCommand({
    Bucket: configuration.bucket,
    Key: key,
  }));
  if (!result.Body) throw new Error('The uploaded object could not be read from storage.');
  return {
    contentType: result.ContentType || '',
    byteSize: Number(result.ContentLength) || 0,
    bytes: Buffer.from(await result.Body.transformToByteArray()),
  };
}

export async function deleteR2Object(key) {
  const configuration = r2Configuration();
  if (!configuration) throw new Error('R2 is not configured.');
  await getR2Client(configuration).send(new DeleteObjectCommand({
    Bucket: configuration.bucket,
    Key: key,
  }));
}
