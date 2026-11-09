import {useMemo, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {Mail, Send} from 'lucide-react';
import {useAuth} from '../../context/AuthContext';
import {adminApi} from '../../services/api';

const maximumRecipients = 100;

function parseRecipients(value: string) {
  return [...new Set(value.split(/[\s,;]+/).map((email) => email.trim().toLowerCase()).filter(Boolean))];
}

export default function AdminMailing() {
  const {user} = useAuth();
  const [recipientsText, setRecipientsText] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [consentConfirmed, setConsentConfirmed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<{
    acceptedByBrevo: number;
    failed: Array<{email: string; reason: string}>;
    skipped: Array<{email: string; reason: string}>;
  } | null>(null);

  const recipients = useMemo(() => parseRecipients(recipientsText), [recipientsText]);
  const invalidRecipients = recipients.filter((email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  const canSend = recipients.length > 0
    && recipients.length <= maximumRecipients
    && invalidRecipients.length === 0
    && subject.trim().length > 0
    && message.trim().length > 0
    && consentConfirmed
    && !sending;

  if (!user?.adminRole) {
    return <Navigate to="/dashboard" replace />;
  }

  const send = async () => {
    if (!canSend || !window.confirm(`Send this message to ${recipients.length} address${recipients.length === 1 ? '' : 'es'}?`)) return;
    setSending(true);
    setError('');
    setResult(null);
    try {
      const response = await adminApi.sendMailingBroadcast({
        recipients,
        subject: subject.trim(),
        message: message.trim(),
        consentConfirmed: true,
      });
      if (!response.success || !response.data) {
        throw new Error(response.error || 'The mailing could not be sent.');
      }
      setResult(response.data);
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : 'The mailing could not be sent.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 p-4 sm:p-6 lg:p-8">
      <header className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-immersive-primary/10 text-immersive-primary">
          <Mail aria-hidden="true" className="h-6 w-6" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-immersive-secondary">Administrator tools</p>
          <h1 className="mt-1 text-2xl font-extrabold text-immersive-text-primary">Mailing</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-immersive-text-secondary">
            Compose a plain-text message and send it separately to each address through Cohortia’s configured Brevo sender.
          </p>
        </div>
      </header>

      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-amber-200">
        Send only to people who agreed to receive these messages. Each email includes an unsubscribe link, and addresses
        that have unsubscribed are automatically skipped. You can send to up to {maximumRecipients} addresses at a time.
      </div>

      {error && <div role="alert" className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-400">{error}</div>}
      {result && (
        <div role="status" className="space-y-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
          <p><strong>{result.acceptedByBrevo}</strong> email(s) accepted by Brevo.</p>
          {result.skipped.length > 0 && <p>{result.skipped.length} address(es) skipped because they are unsubscribed or have a confirmation in progress.</p>}
          {result.failed.length > 0 && (
            <div>
              <p>{result.failed.length} delivery attempt(s) failed:</p>
              <ul className="mt-1 list-inside list-disc">
                {result.failed.map((item) => <li key={item.email}>{item.email}: {item.reason}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="space-y-5 rounded-2xl border border-immersive-border bg-immersive-card/60 p-5 sm:p-7">
        <label className="block">
          <span className="text-sm font-bold text-immersive-text-primary">Recipients</span>
          <span className="mt-1 block text-xs text-immersive-text-secondary">Paste addresses separated by commas, spaces, semicolons, or new lines.</span>
          <textarea
            value={recipientsText}
            onChange={(event) => setRecipientsText(event.target.value)}
            rows={5}
            autoComplete="off"
            className="mt-2 w-full resize-y rounded-xl border border-immersive-border bg-immersive-bg px-4 py-3 text-sm text-immersive-text-primary"
            placeholder={'learner@example.com\nanother@example.com'}
          />
          <span className={`mt-1 block text-xs ${invalidRecipients.length || recipients.length > maximumRecipients ? 'text-rose-400' : 'text-immersive-text-secondary'}`}>
            {recipients.length} unique address(es){invalidRecipients.length ? ` · ${invalidRecipients.length} invalid` : ''}
            {recipients.length > maximumRecipients ? ` · maximum is ${maximumRecipients}` : ''}
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-bold text-immersive-text-primary">Subject</span>
          <input
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            maxLength={160}
            className="mt-2 w-full rounded-xl border border-immersive-border bg-immersive-bg px-4 py-3 text-sm text-immersive-text-primary"
            placeholder="Write your email subject"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-immersive-text-primary">Message</span>
          <span className="mt-1 block text-xs text-immersive-text-secondary">Plain text. Line breaks will be preserved.</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={10}
            maxLength={10000}
            className="mt-2 w-full resize-y rounded-xl border border-immersive-border bg-immersive-bg px-4 py-3 text-sm leading-6 text-immersive-text-primary"
            placeholder="Write your message"
          />
        </label>

        <label className="flex items-start gap-3 text-sm leading-6 text-immersive-text-secondary">
          <input
            type="checkbox"
            checked={consentConfirmed}
            onChange={(event) => setConsentConfirmed(event.target.checked)}
            className="mt-1 h-4 w-4 accent-immersive-primary"
          />
          <span>I confirm every recipient has agreed to receive this email from Cohortia.</span>
        </label>

        <button
          type="button"
          onClick={() => void send()}
          disabled={!canSend}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-immersive-primary px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send aria-hidden="true" className="h-4 w-4" />
          {sending ? 'Sending…' : `Send to ${recipients.length || 0}`}
        </button>
      </div>
    </section>
  );
}
