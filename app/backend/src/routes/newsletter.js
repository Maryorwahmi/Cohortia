import { Hono } from 'hono';
import { db } from '../db/index.js';
import { newsletterSubscriptions } from '../db/schema.js';
import { and, eq } from 'drizzle-orm';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { enforceRateLimits, getRateLimitClientIp } from '../lib/rateLimit.js';
import { createHash, randomBytes } from 'node:crypto';
import { addNewsletterContact, assertBrevoConfigured, getNewsletterListId, removeNewsletterContact, sendNewsletterEmail } from '../lib/brevo.js';

const newsletter = new Hono();

const subscribeSchema = z.object({
  email: z.string().trim().email('Invalid email address').max(255),
  name: z.string().trim().max(100).nullish(),
});
const tokenSchema = z.object({token: z.string().regex(/^[a-f0-9]{64}$/i)});
const confirmationLifetimeMs = 24 * 60 * 60 * 1000;
const frontendUrl = () => (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/+$/, '');

function hashToken(token) {
  return createHash('sha256').update(token).digest('hex');
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function getActionUrl(path, token) {
  const url = new URL(path, `${frontendUrl()}/`);
  url.searchParams.set('token', token);
  return url.toString();
}

function getConfirmationEmail({name, confirmationUrl, unsubscribeUrl}) {
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim() || 'hello@cohortia.study';
  const greeting = name ? `Hi ${escapeHtml(name)},` : 'Hello,';
  const textGreeting = name ? `Hi ${name},` : 'Hello,';
  const safeConfirmationUrl = escapeHtml(confirmationUrl);
  const safeUnsubscribeUrl = escapeHtml(unsubscribeUrl);
  const safeSenderEmail = escapeHtml(senderEmail);
  return {
    subject: 'One quick step to get Cohortia updates',
    html: `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="color-scheme" content="light">
          <title>Confirm your Cohortia subscription</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#172033;">
          <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">One quick step to receive learning and career updates from Cohortia.</div>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f6f8;">
            <tr>
              <td align="center" style="padding:36px 16px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;">
                  <tr>
                    <td style="padding:0 0 18px 4px;font-size:20px;font-weight:700;letter-spacing:-0.4px;color:#172033;">
                      <span style="display:inline-block;width:10px;height:10px;margin-right:8px;border-radius:50%;background-color:#ff4b3e;"></span>Cohortia
                    </td>
                  </tr>
                  <tr>
                    <td style="overflow:hidden;border:1px solid #e8ebef;border-radius:16px;background-color:#ffffff;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="height:6px;background-color:#ff4b3e;font-size:0;line-height:0;">&nbsp;</td>
                        </tr>
                        <tr>
                          <td style="padding:38px 40px 40px;">
                            <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#ff4b3e;">STAY IN THE LOOP</p>
                            <h1 style="margin:0 0 18px;font-size:28px;line-height:1.25;letter-spacing:-0.6px;color:#172033;">Confirm your email</h1>
                            <p style="margin:0 0 14px;font-size:16px;line-height:1.65;color:#344054;">${greeting}</p>
                            <p style="margin:0 0 26px;font-size:16px;line-height:1.65;color:#475467;">Confirm your subscription to receive useful learning ideas, new course updates, and career-growth news from Cohortia.</p>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;">
                              <tr>
                                <td align="center" style="border-radius:9px;background-color:#ff4b3e;">
                                  <a href="${safeConfirmationUrl}" style="display:inline-block;padding:15px 24px;border:1px solid #ff4b3e;border-radius:9px;font-size:15px;font-weight:700;line-height:1.2;text-decoration:none;color:#ffffff;">Confirm my subscription</a>
                                </td>
                              </tr>
                            </table>
                            <p style="margin:0 0 9px;font-size:13px;line-height:1.6;color:#667085;">For your security, this link expires in 24 hours.</p>
                            <p style="margin:0;font-size:13px;line-height:1.6;color:#667085;">Button not working? Copy and paste this link into your browser:<br><a href="${safeConfirmationUrl}" style="word-break:break-all;color:#d83b30;">${safeConfirmationUrl}</a></p>
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:28px;">
                              <tr><td style="height:1px;background-color:#eaecf0;font-size:0;line-height:0;">&nbsp;</td></tr>
                            </table>
                            <p style="margin:20px 0 0;font-size:13px;line-height:1.6;color:#667085;">If you didn’t request these updates, no action is needed. To cancel this request, <a href="${safeUnsubscribeUrl}" style="color:#475467;text-decoration:underline;">use this link</a>.</p>
                            <p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:#344054;">Warmly,<br><strong>The Cohortia team</strong></p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding:20px 12px 0;font-size:12px;line-height:1.7;color:#667085;">
                      Questions? <a href="mailto:${safeSenderEmail}" style="color:#475467;text-decoration:underline;">${safeSenderEmail}</a><br>
                      © ${new Date().getFullYear()} Cohortia · Learning and career growth, together.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>`,
    text: `${textGreeting}

You're one step away from Cohortia learning and career updates.

Confirm your subscription:
${confirmationUrl}

For your security, this link expires in 24 hours.

If you did not request these updates, no action is needed. To cancel this request:
${unsubscribeUrl}

Warmly,
The Cohortia team
${senderEmail}`,
  };
}

// Public: subscribe to newsletter
newsletter.post('/subscribe', async (c) => {
  const rateLimitResponse = await enforceRateLimits(c, [{
    scope: 'newsletter-subscribe-ip',
    actor: getRateLimitClientIp(c),
    limit: 5,
    windowSeconds: 60 * 60,
  }]);
  if (rateLimitResponse) return rateLimitResponse;

  const body = await c.req.json();

  const result = subscribeSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  try {
    assertBrevoConfigured();
  } catch {
    return c.json({success: false, error: 'Newsletter email delivery is not configured yet.'}, 503);
  }

  const {email, name} = result.data;
  const normalizedEmail = email.toLowerCase();
  const existing = await db
    .select()
    .from(newsletterSubscriptions)
    .where(eq(newsletterSubscriptions.email, normalizedEmail))
    .limit(1);

  if (existing[0]?.status === 'confirmed' || existing[0]?.status === 'confirming') {
    return c.json({
      success: true,
      message: 'If this address can be subscribed, a confirmation email will arrive shortly.',
      data: {confirmationRequired: false},
    });
  }

  const now = new Date().toISOString();
  const confirmationToken = randomBytes(32).toString('hex');
  const unsubscribeToken = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + confirmationLifetimeMs).toISOString();
  if (existing.length) {
    await db.update(newsletterSubscriptions).set({
      name: name || null,
      status: 'pending',
      confirmationTokenHash: hashToken(confirmationToken),
      confirmationExpiresAt: expiresAt,
      unsubscribeTokenHash: hashToken(unsubscribeToken),
      updatedAt: now,
    }).where(eq(newsletterSubscriptions.id, existing[0].id));
  } else {
    await db.insert(newsletterSubscriptions).values({
      id: uuidv4(),
      email: normalizedEmail,
      name: name || null,
      status: 'pending',
      confirmationTokenHash: hashToken(confirmationToken),
      confirmationExpiresAt: expiresAt,
      unsubscribeTokenHash: hashToken(unsubscribeToken),
      subscribedAt: now,
      createdAt: now,
      updatedAt: now,
    });
  }

  const confirmationUrl = getActionUrl('/newsletter/confirm', confirmationToken);
  const unsubscribeUrl = getActionUrl('/newsletter/unsubscribe', unsubscribeToken);
  const emailContent = getConfirmationEmail({name: name || '', confirmationUrl, unsubscribeUrl});
  try {
    await sendNewsletterEmail({email: normalizedEmail, ...emailContent});
  } catch (error) {
    console.error('[newsletter] Confirmation email delivery failed:', error.message);
    return c.json({success: false, error: 'The confirmation email could not be sent. Please try again later.'}, 502);
  }

  return c.json({
    success: true,
    message: 'Check your inbox for a link to confirm your subscription.',
    data: {confirmationRequired: true},
  }, existing.length ? 200 : 201);
});

newsletter.post('/confirm', async (c) => {
  const body = await c.req.json();
  const result = tokenSchema.safeParse(body);
  if (!result.success) {
    return c.json({success: false, error: 'A valid confirmation link is required.'}, 400);
  }

  const tokenHash = hashToken(result.data.token);
  const [subscription] = await db.select().from(newsletterSubscriptions)
    .where(and(
      eq(newsletterSubscriptions.confirmationTokenHash, tokenHash),
      eq(newsletterSubscriptions.status, 'pending'),
    ))
    .limit(1);
  const expiresAt = Date.parse(subscription?.confirmationExpiresAt || '');
  if (!subscription || !Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    return c.json({success: false, error: 'This confirmation link is invalid or expired. Please subscribe again.'}, 400);
  }

  const [claim] = await db.update(newsletterSubscriptions).set({
    status: 'confirming',
    updatedAt: new Date().toISOString(),
  }).where(and(
    eq(newsletterSubscriptions.id, subscription.id),
    eq(newsletterSubscriptions.status, 'pending'),
    eq(newsletterSubscriptions.confirmationTokenHash, tokenHash),
  )).returning({id: newsletterSubscriptions.id});
  if (!claim) {
    return c.json({success: false, error: 'This confirmation link has already been used.'}, 409);
  }

  try {
    await addNewsletterContact(subscription.email);
  } catch (error) {
    await db.update(newsletterSubscriptions).set({
      status: 'pending',
      updatedAt: new Date().toISOString(),
    }).where(and(
      eq(newsletterSubscriptions.id, subscription.id),
      eq(newsletterSubscriptions.status, 'confirming'),
      eq(newsletterSubscriptions.confirmationTokenHash, tokenHash),
    ));
    console.error('[newsletter] Confirmed contact could not be added to Brevo:', error.message);
    return c.json({success: false, error: 'Your subscription could not be completed right now. Please try again.'}, 502);
  }

  const now = new Date().toISOString();
  const [confirmed] = await db.update(newsletterSubscriptions).set({
    status: 'confirmed',
    confirmationTokenHash: null,
    confirmationExpiresAt: null,
    subscribedAt: now,
    unsubscribedAt: null,
    updatedAt: now,
  }).where(and(
    eq(newsletterSubscriptions.id, subscription.id),
    eq(newsletterSubscriptions.status, 'confirming'),
    eq(newsletterSubscriptions.confirmationTokenHash, tokenHash),
  )).returning({id: newsletterSubscriptions.id});
  if (!confirmed) {
    return c.json({success: false, error: 'This confirmation link has already been used.'}, 409);
  }

  return c.json({success: true, message: 'Your newsletter subscription is confirmed.'});
});

newsletter.post('/unsubscribe', async (c) => {
  const body = await c.req.json();
  const result = tokenSchema.safeParse(body);
  if (!result.success) {
    return c.json({success: false, error: 'A valid unsubscribe link is required.'}, 400);
  }

  const tokenHash = hashToken(result.data.token);
  const [subscription] = await db.select().from(newsletterSubscriptions)
    .where(eq(newsletterSubscriptions.unsubscribeTokenHash, tokenHash))
    .limit(1);
  if (!subscription) {
    return c.json({success: false, error: 'This unsubscribe link is invalid.'}, 400);
  }
  if (subscription.status === 'unsubscribed') {
    return c.json({success: true, message: 'This address is already unsubscribed.'});
  }
  if (subscription.status === 'confirming') {
    return c.json({success: false, error: 'Subscription confirmation is in progress. Please try again shortly.'}, 409);
  }

  if (subscription.status === 'confirmed') {
    try {
      await removeNewsletterContact(subscription.email);
    } catch (error) {
      console.error('[newsletter] Contact could not be removed from Brevo:', error.message);
      return c.json({success: false, error: 'We could not complete your unsubscribe right now. Please try again.'}, 502);
    }
  }

  const now = new Date().toISOString();
  await db.update(newsletterSubscriptions).set({
    status: 'unsubscribed',
    confirmationTokenHash: null,
    confirmationExpiresAt: null,
    unsubscribedAt: now,
    updatedAt: now,
  }).where(and(
    eq(newsletterSubscriptions.id, subscription.id),
    eq(newsletterSubscriptions.unsubscribeTokenHash, tokenHash),
    eq(newsletterSubscriptions.status, subscription.status),
  ));

  return c.json({success: true, message: 'You have been unsubscribed from Cohortia updates.'});
});

// Admin/auth: list subscribers
newsletter.get('/subscribers', async (c) => {
  const user = c.get('user');
  if (!user) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }
  if (user.role !== 'admin') {
    return c.json({ success: false, error: 'Forbidden' }, 403);
  }

  const subscribers = await db
    .select({
      id: newsletterSubscriptions.id,
      email: newsletterSubscriptions.email,
      name: newsletterSubscriptions.name,
      subscribedAt: newsletterSubscriptions.subscribedAt,
      createdAt: newsletterSubscriptions.createdAt,
      updatedAt: newsletterSubscriptions.updatedAt,
    })
    .from(newsletterSubscriptions)
    .where(eq(newsletterSubscriptions.status, 'confirmed'))
    .orderBy(newsletterSubscriptions.createdAt);

  return c.json({
    success: true,
    data: {
      count: subscribers.length,
      subscribers,
    },
  });
});

export default newsletter;
