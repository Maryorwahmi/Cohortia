import 'dotenv/config';

// Simple script to test Azure OpenAI deployment using env vars from backend/.env
// Usage: node scripts/test-azure-openai.js ["your prompt here"]

const endpoint = (process.env.AZURE_OPENAI_ENDPOINT || '').trim();
const key = (process.env.AZURE_OPENAI_API_KEY || process.env.AZURE_OPENAI_KEY || '').trim();
const deployment = (process.env.AZURE_OPENAI_DEPLOYMENT || '').trim();
const apiVersion = (process.env.AZURE_OPENAI_API_VERSION || process.env.AZURE_OPENAI_API_VERSION || '2024-02-01').trim();

if (!endpoint || !key || !deployment) {
  console.error('Missing Azure OpenAI configuration. Ensure AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, and AZURE_OPENAI_DEPLOYMENT are set in backend/.env');
  process.exit(2);
}

const normalizedEndpoint = endpoint.replace(/\/+$/, '');
const url = `${normalizedEndpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

const userPrompt = process.argv.slice(2).join(' ') || 'Say exactly: "Azure OpenAI test passed" and nothing else.';

const body = {
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: userPrompt },
  ],
  max_completion_tokens: 200,
  temperature: 1,
};

console.log('Azure OpenAI test');
console.log('POST', url);

(async () => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': key,
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();

    console.log('\nHTTP', res.status, res.statusText);

    try {
      const json = JSON.parse(text);
      console.log('\nResponse JSON:\n', JSON.stringify(json, null, 2));

      // Try to display the assistant content if present
      const content = json.choices?.[0]?.message?.content || json.output?.[0]?.content?.[0]?.text;
      if (content) {
        console.log('\nAssistant content:\n', content);
      }

      if (!res.ok) process.exit(3);
    } catch (e) {
      console.log('\nNon-JSON response body:\n', text.slice(0, 2000));
      if (!res.ok) process.exit(3);
    }

    console.log('\nDone.');
  } catch (err) {
    console.error('Request failed:', err?.message || err);
    process.exit(4);
  }
})();
