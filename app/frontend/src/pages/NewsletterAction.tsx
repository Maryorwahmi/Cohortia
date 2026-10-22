import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {CheckCircle2, MailCheck} from 'lucide-react';
import {newsletterApi} from '../services/api';

interface NewsletterActionProps {
  action: 'confirm' | 'unsubscribe';
}

export default function NewsletterAction({action}: NewsletterActionProps) {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token') || '';
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(token ? '' : 'This email link is missing its security token. Please request a new newsletter email.');
  const isConfirmation = action === 'confirm';

  const handleAction = async () => {
    if (!token) {
      setError('This email link is missing its security token. Please request a new newsletter email.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const response = isConfirmation
        ? await newsletterApi.confirm(token)
        : await newsletterApi.unsubscribe(token);
      if (!response.success) {
        throw new Error(response.error || 'The request could not be completed.');
      }
      setCompleted(true);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'The request could not be completed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-immersive-bg px-4 py-20">
      <section className="w-full max-w-xl rounded-3xl border border-immersive-border bg-immersive-card p-7 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-immersive-primary/10 text-immersive-primary">
          {completed ? <CheckCircle2 aria-hidden="true" className="h-7 w-7" /> : <MailCheck aria-hidden="true" className="h-7 w-7" />}
        </span>
        <h1 className="mt-5 text-2xl font-extrabold text-immersive-text-primary">
          {completed
            ? (isConfirmation ? 'Subscription confirmed' : 'You are unsubscribed')
            : (isConfirmation ? 'Confirm your subscription' : 'Unsubscribe from updates')}
        </h1>
        <p className="mt-3 text-sm leading-6 text-immersive-text-secondary">
          {completed
            ? (isConfirmation ? 'You’ll now receive Cohortia learning and career updates.' : 'You will no longer receive Cohortia newsletter emails.')
            : (isConfirmation
              ? 'Confirm your email address to receive Cohortia learning and career updates.'
              : 'Confirm that you want to stop receiving Cohortia newsletter emails.')}
        </p>
        {!completed && (
          <button
            type="button"
            onClick={() => void handleAction()}
            disabled={submitting || !token}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-immersive-primary px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
          >
            {submitting ? 'Please wait…' : (isConfirmation ? 'Confirm subscription' : 'Unsubscribe')}
          </button>
        )}
        {error && <p role="alert" className="mt-4 text-sm text-rose-500">{error}</p>}
        <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-immersive-secondary hover:underline">
          Return to Cohortia
        </Link>
      </section>
    </main>
  );
}
