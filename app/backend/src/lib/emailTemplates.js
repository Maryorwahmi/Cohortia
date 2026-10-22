import { sendTransactionalEmail } from './brevo.js';

export const getFrontendUrl = () => (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/+$/, '');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

export function renderBrandedEmail({
  preheader,
  eyebrow = 'COHORTIA',
  heading,
  greeting = 'Hello,',
  paragraphs = [],
  verificationCode,
  buttonLabel,
  buttonUrl,
  footerNote = 'Learning and career growth, together.',
  unsubscribeUrl,
}) {
  const safePreheader = escapeHtml(preheader);
  const safeEyebrow = escapeHtml(eyebrow);
  const safeHeading = escapeHtml(heading);
  const safeGreeting = escapeHtml(greeting);
  const safeParagraphs = paragraphs.map(escapeHtml);
  const safeVerificationCode = verificationCode ? escapeHtml(verificationCode) : '';
  const safeFooter = escapeHtml(footerNote);
  const safeButtonLabel = buttonLabel ? escapeHtml(buttonLabel) : '';
  const safeButtonUrl = buttonUrl ? escapeHtml(buttonUrl) : '';
  const safeUnsubscribeUrl = unsubscribeUrl ? escapeHtml(unsubscribeUrl) : '';
  const senderEmail = escapeHtml(process.env.BREVO_SENDER_EMAIL?.trim() || 'hello@cohortia.study');
  const logoUrl = escapeHtml(`${getFrontendUrl()}/cohortia-og.png`);
  const buttonHtml = buttonLabel && buttonUrl
    ? `<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;"><tr><td align="center" style="border-radius:9px;background-color:#ff4b3e;"><a href="${safeButtonUrl}" style="display:inline-block;padding:15px 24px;border:1px solid #ff4b3e;border-radius:9px;font-size:15px;font-weight:700;line-height:1.2;text-decoration:none;color:#ffffff;">${safeButtonLabel}</a></td></tr></table>`
    : '';
  const verificationCodeHtml = verificationCode
    ? `<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:8px 0 24px;"><tr><td style="padding:16px 24px;border:1px solid #eaecf0;border-radius:10px;background-color:#f9fafb;font-family:Arial,Helvetica,sans-serif;font-size:30px;font-weight:700;letter-spacing:8px;color:#172033;">${safeVerificationCode}</td></tr></table>`
    : '';
  const unsubscribeHtml = unsubscribeUrl
    ? `<p style="margin:18px 0 0;font-size:12px;line-height:1.6;color:#667085;"><a href="${safeUnsubscribeUrl}" style="color:#475467;text-decoration:underline;">Unsubscribe from newsletter emails</a></p>`
    : '';

  return {
    html: `<!doctype html>
      <html lang="en">
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><title>${safeHeading}</title></head>
        <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#172033;">
          <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${safePreheader}</div>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f6f8;">
            <tr><td align="center" style="padding:36px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;">
                <tr><td style="padding:0 0 18px 4px;font-size:20px;font-weight:700;letter-spacing:-0.4px;color:#172033;">
                  <img src="${logoUrl}" width="32" height="32" alt="Cohortia logo" style="display:inline-block;vertical-align:middle;margin-right:8px;border:0;">
                  <span style="vertical-align:middle;">Cohortia</span>
                </td></tr>
                <tr><td style="overflow:hidden;border:1px solid #e8ebef;border-radius:16px;background-color:#ffffff;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr><td style="height:6px;background-color:#ff4b3e;font-size:0;line-height:0;">&nbsp;</td></tr>
                    <tr><td style="padding:38px 40px 40px;">
                      <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#ff4b3e;">${safeEyebrow}</p>
                      <h1 style="margin:0 0 18px;font-size:28px;line-height:1.25;letter-spacing:-0.6px;color:#172033;">${safeHeading}</h1>
                      <p style="margin:0 0 14px;font-size:16px;line-height:1.65;color:#344054;">${safeGreeting}</p>
                      ${safeParagraphs.map((paragraph) => `<p style="margin:0 0 18px;font-size:16px;line-height:1.65;color:#475467;">${paragraph}</p>`).join('')}
                      ${verificationCodeHtml}
                      ${buttonHtml}
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:28px;"><tr><td style="height:1px;background-color:#eaecf0;font-size:0;line-height:0;">&nbsp;</td></tr></table>
                      <p style="margin:20px 0 0;font-size:14px;line-height:1.6;color:#344054;">Warmly,<br><strong>The Cohortia team</strong></p>
                      ${unsubscribeHtml}
                    </td></tr>
                  </table>
                </td></tr>
                <tr><td align="center" style="padding:20px 12px 0;font-size:12px;line-height:1.7;color:#667085;">
                  Questions? <a href="mailto:${senderEmail}" style="color:#475467;text-decoration:underline;">${senderEmail}</a><br>
                  © ${new Date().getFullYear()} Cohortia · ${safeFooter}
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body>
      </html>`,
    text: `${heading}

${greeting}

${paragraphs.join('\n\n')}
${verificationCode ? `\n\nVerification code: ${verificationCode}` : ''}
${buttonLabel && buttonUrl ? `\n\n${buttonLabel}: ${buttonUrl}` : ''}

Warmly,
The Cohortia team
${process.env.BREVO_SENDER_EMAIL?.trim() || 'hello@cohortia.study'}${unsubscribeUrl ? `\n\nUnsubscribe from newsletter emails: ${unsubscribeUrl}` : ''}`,
  };
}

export async function sendBrandedEmail(email, options) {
  const content = renderBrandedEmail(options);
  await sendTransactionalEmail({email, subject: options.subject, ...content, tags: options.tags});
}
