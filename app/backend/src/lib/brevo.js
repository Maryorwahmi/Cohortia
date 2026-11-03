const BREVO_API_URL = 'https://api.brevo.com/v3';

function getBrevoApiKey() {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) throw new Error('BREVO_API_KEY is not configured');
  return apiKey;
}

export function assertBrevoConfigured() {
  getBrevoApiKey();
  getNewsletterListId();
}

export function getNewsletterListId() {
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);
  if (!Number.isSafeInteger(listId) || listId <= 0) {
    throw new Error('BREVO_NEWSLETTER_LIST_ID is not configured');
  }
  return listId;
}

async function brevoRequest(path, options = {}) {
  const response = await fetch(`${BREVO_API_URL}${path}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': getBrevoApiKey(),
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Brevo request failed with status ${response.status}`);
  }
}

export async function sendTransactionalEmail({email, subject, html, text, sender, replyTo, tags = ['cohortia-transactional']}) {
  const defaultSender = {
    name: process.env.BREVO_SENDER_NAME?.trim() || 'Cohortia',
    email: process.env.BREVO_SENDER_EMAIL?.trim() || 'hello@cohortia.study',
  };
  await brevoRequest('/smtp/email', {
    method: 'POST',
    body: JSON.stringify({
      sender: sender || defaultSender,
      to: [{email}],
      replyTo: replyTo || defaultSender,
      subject,
      htmlContent: html,
      textContent: text,
      tags,
    }),
  });
}

export async function sendNewsletterEmail(options) {
  return sendTransactionalEmail({...options, tags: ['newsletter-opt-in']});
}

export async function addNewsletterContact(email) {
  const listId = getNewsletterListId();
  await brevoRequest('/contacts', {
    method: 'POST',
    body: JSON.stringify({
      email,
      listIds: [listId],
      emailBlacklisted: false,
      updateEnabled: true,
    }),
  });
}

export async function removeNewsletterContact(email) {
  const listId = getNewsletterListId();
  await brevoRequest(`/contacts/${encodeURIComponent(email)}`, {
    method: 'PUT',
    body: JSON.stringify({
      emailBlacklisted: true,
      unlinkListIds: [listId],
    }),
  });
}
