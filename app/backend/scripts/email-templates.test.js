import assert from 'node:assert/strict';
import {afterEach, test} from 'node:test';
import {renderBrandedEmail} from '../src/lib/emailTemplates.js';

const originalFrontendUrl = process.env.FRONTEND_URL;

afterEach(() => {
  if (originalFrontendUrl === undefined) delete process.env.FRONTEND_URL;
  else process.env.FRONTEND_URL = originalFrontendUrl;
});

test('branded email includes the static app logo and escapes dynamic content', () => {
  process.env.FRONTEND_URL = 'https://cohortia.study';
  const email = renderBrandedEmail({
    subject: 'Verify',
    preheader: 'Code <123>',
    heading: 'Verify <email>',
    greeting: 'Hi A&B,',
    verificationCode: '012345',
    paragraphs: ['Ignore <script>alert(1)</script>'],
  });

  assert.match(email.html, /https:\/\/cohortia\.study\/cohortia-og\.png/);
  assert.match(email.html, /Verify &lt;email&gt;/);
  assert.match(email.html, /Hi A&amp;B,/);
  assert.match(email.html, /012345/);
  assert.doesNotMatch(email.html, /<script>/);
  assert.match(email.text, /Verification code: 012345/);
});
