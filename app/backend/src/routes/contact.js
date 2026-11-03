import { Hono } from 'hono';
import { z } from 'zod';
import { enforceRateLimits, getRateLimitClientIp } from '../lib/rateLimit.js';
import { sendTransactionalEmail } from '../lib/brevo.js';

const contact = new Hono();
const contactRecipient = 'hello@cohortia.study';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100).regex(/^[^\r\n]+$/, 'Name must be a single line'),
  email: z.string().trim().email('Invalid email address').max(255),
  subject: z.string().trim().max(160).regex(/^[^\r\n]*$/, 'Subject must be a single line').optional(),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(10000),
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

// Submit contact form
contact.post('/', async (c) => {
  const rateLimitResponse = await enforceRateLimits(c, [{
    scope: 'contact-ip',
    actor: getRateLimitClientIp(c),
    limit: 5,
    windowSeconds: 60 * 60,
  }]);
  if (rateLimitResponse) return rateLimitResponse;

  const body = await c.req.json();

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const data = result.data;
  const subject = data.subject || 'New Cohortia contact request';
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(data.message).replace(/\r?\n/g, '<br>');

  try {
    await sendTransactionalEmail({
      email: contactRecipient,
      sender: {name: 'Cohortia', email: contactRecipient},
      replyTo: {name: data.name, email: data.email},
      subject: `[Cohortia contact] ${subject}`,
      html: `<h2>${safeSubject}</h2><p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p><p>${safeMessage}</p>`,
      text: `${subject}\n\nFrom: ${data.name} <${data.email}>\n\n${data.message}`,
      tags: ['contact-form'],
    });
  } catch (error) {
    console.error('[contact] Email delivery failed:', error instanceof Error ? error.message : 'Unknown error');
    const notConfigured = error instanceof Error && error.message === 'BREVO_API_KEY is not configured';
    return c.json({
      success: false,
      error: notConfigured
        ? 'Contact email delivery is not configured yet.'
        : 'Your message could not be sent. Please try again later.',
    }, notConfigured ? 503 : 502);
  }

  return c.json({
    success: true,
    message: 'Your message was sent to Cohortia. We will get back to you as soon as possible.',
  });
});

export default contact;
