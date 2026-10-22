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
  const greeting = name ? `Hi ${escapeHtml(name)},` : 'Hello,';
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim() || 'hello@cohortia.study';
  return {
    subject: 'Confirm your Cohortia newsletter subscription',
    html: `<p>${greeting}</p>
      <p>Please confirm that you want to receive Cohortia learning and career updates.</p>
      <p><a href="${escapeHtml(confirmationUrl)}">Confirm my subscription</a></p>
      <p>This link expires in 24 hours. If you did not request this, you can ignore this email or <a href="${escapeHtml(unsubscribeUrl)}">cancel the request</a>.</p>
      <p>— Cohortia<br><a href="mailto:${escapeHtml(senderEmail)}">${escapeHtml(senderEmail)}</a></p>`,
    text: `${name ? `Hi ${name},` : 'Hello,'}

Please confirm that you want to receive Cohortia learning and career updates:
${confirmationUrl}

This link expires in 24 hours. If you did not request this, ignore this email or cancel the request here:
${unsubscribeUrl}

— Cohortia
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
