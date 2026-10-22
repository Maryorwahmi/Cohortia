import { db } from '../db/index.js';
import { notifications, users } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { getFrontendUrl, sendBrandedEmail } from './emailTemplates.js';

export async function createNotification({ userId, type, title, message, link = null }) {
  if (!userId || !type || !title || !message) return null;

  const validTypes = ['system', 'achievement', 'mention', 'event', 'mentor'];
  if (!validTypes.includes(type)) return null;

  const now = new Date().toISOString();
  try {
    const [notification] = await db.insert(notifications).values({
      id: uuidv4(),
      userId,
      type,
      title,
      message,
      link,
      isRead: false,
      createdAt: now,
      updatedAt: now,
    }).returning();
    if (notification) {
      try {
        const [recipient] = await db.select({
          email: users.email,
          name: users.name,
          emailNotificationsEnabled: users.emailNotificationsEnabled,
        }).from(users).where(eq(users.id, userId)).limit(1);
        if (recipient?.email && recipient.emailNotificationsEnabled) {
          let notificationUrl = `${getFrontendUrl()}/dashboard`;
          if (link) {
            try {
              const candidate = new URL(link, `${getFrontendUrl()}/`);
              if (candidate.protocol === 'http:' || candidate.protocol === 'https:') {
                notificationUrl = candidate.toString();
              }
            } catch {
              notificationUrl = `${getFrontendUrl()}/dashboard`;
            }
          }
          await sendBrandedEmail(recipient.email, {
            subject: title,
            preheader: message,
            eyebrow: 'COHORTIA NOTIFICATION',
            heading: title,
            greeting: recipient.name ? `Hi ${recipient.name},` : 'Hello,',
            paragraphs: [message, 'You can manage these email notifications from your Cohortia profile settings.'],
            buttonLabel: 'View notification',
            buttonUrl: notificationUrl,
            footerNote: 'You are receiving this because email notifications are enabled in your profile.',
          });
        }
      } catch (error) {
        console.error('[notifications] Email notification delivery failed:', error.message);
      }
    }
    return notification || null;
  } catch (error) {
    console.error('Failed to create notification:', error);
    return null;
  }
}
