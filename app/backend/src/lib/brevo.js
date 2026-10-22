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

export async function sendNewsletterEmail({email, subject, html, text}) {
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim() || 'hello@cohortia.study';
  const senderName = process.env.BREVO_SENDER_NAME?.trim() || 'Cohortia';
  await brevoRequest('/smtp/email', {
    method: 'POST',
    body: JSON.stringify({
      sender: {name: senderName, email: senderEmail},
      to: [{email}],
      replyTo: {name: senderName, email: senderEmail},
      subject,
      htmlContent: html,
      textContent: text,
      tags: ['newsletter-opt-in'],
    }),
  });
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
