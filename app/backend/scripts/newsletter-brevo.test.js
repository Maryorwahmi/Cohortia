import assert from 'node:assert/strict';
import {afterEach, test} from 'node:test';
import {
  addNewsletterContact,
  assertBrevoConfigured,
  removeNewsletterContact,
  sendNewsletterEmail,
  sendTransactionalEmail,
} from '../src/lib/brevo.js';

const originalEnvironment = {
  BREVO_API_KEY: process.env.BREVO_API_KEY,
  BREVO_NEWSLETTER_LIST_ID: process.env.BREVO_NEWSLETTER_LIST_ID,
  BREVO_SENDER_EMAIL: process.env.BREVO_SENDER_EMAIL,
  BREVO_SENDER_NAME: process.env.BREVO_SENDER_NAME,
};
const originalFetch = globalThis.fetch;

afterEach(() => {
  Object.entries(originalEnvironment).forEach(([key, value]) => {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  });
  globalThis.fetch = originalFetch;
});

test('Brevo sends contact and newsletter emails through the configured transactional account', async () => {
  process.env.BREVO_API_KEY = 'test-api-key';
  process.env.BREVO_NEWSLETTER_LIST_ID = '42';
  process.env.BREVO_SENDER_EMAIL = 'hello@cohortia.study';
  const requests = [];
  globalThis.fetch = async (url, options) => {
    requests.push({url, options});
    return new Response('{}', {status: 201});
  };

  assertBrevoConfigured();
  await sendNewsletterEmail({
    email: 'learner@example.com',
    subject: 'Confirm',
    html: '<p>Confirm</p>',
    text: 'Confirm',
  });
  await sendTransactionalEmail({
    email: 'hello@cohortia.study',
    sender: {name: 'Cohortia', email: 'hello@cohortia.study'},
    replyTo: {name: 'Learner', email: 'learner@example.com'},
    subject: 'Contact request',
    html: '<p>Contact request</p>',
    text: 'Contact request',
  });
  await addNewsletterContact('learner@example.com');
  await removeNewsletterContact('learner@example.com');

  assert.equal(requests.length, 4);
  assert.equal(requests[0].url, 'https://api.brevo.com/v3/smtp/email');
  assert.equal(requests[0].options.headers['api-key'], 'test-api-key');
  assert.equal(JSON.parse(requests[0].options.body).sender.email, 'hello@cohortia.study');
  const contactEmail = JSON.parse(requests[1].options.body);
  assert.equal(contactEmail.to[0].email, 'hello@cohortia.study');
  assert.equal(contactEmail.sender.email, 'hello@cohortia.study');
  assert.equal(contactEmail.replyTo.email, 'learner@example.com');
  assert.equal(JSON.parse(requests[2].options.body).listIds[0], 42);
  assert.equal(JSON.parse(requests[3].options.body).emailBlacklisted, true);
  assert.equal(JSON.parse(requests[3].options.body).unlinkListIds[0], 42);
});

test('Brevo adapter reports missing configuration and delivery errors', async () => {
  delete process.env.BREVO_API_KEY;
  delete process.env.BREVO_NEWSLETTER_LIST_ID;
  assert.throws(assertBrevoConfigured, /BREVO_API_KEY/);

  process.env.BREVO_API_KEY = 'test-api-key';
  process.env.BREVO_NEWSLETTER_LIST_ID = '42';
  globalThis.fetch = async () => new Response('{}', {status: 500});
  await assert.rejects(
    () => sendNewsletterEmail({email: 'learner@example.com', subject: 'Confirm', html: '', text: ''}),
    /status 500/,
  );
});
