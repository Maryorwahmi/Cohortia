import 'dotenv/config';

const API_KEY = process.env.Kimi_Key || process.env.KIMI_API_KEY || process.env.KIMI_KEY;
const BASE_URL = process.env.KIMI_BASE_URL || 'https://api.moonshot.cn/v1';
const MODEL = process.env.KIMI_MODEL || 'moonshot-v1-8k';

async function testKimi() {
  if (!API_KEY) {
    console.error('❌ No Kimi API key found. Set Kimi_Key, KIMI_API_KEY, or KIMI_KEY in your .env file.');
    process.exit(1);
  }

  console.log('Testing Kimi API...');
  console.log('Base URL:', BASE_URL);
  console.log('Model:', MODEL);
  console.log('Key prefix:', API_KEY.slice(0, 12) + '...');

  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Say hello and confirm this API key is working.' },
        ],
        temperature: 0.7,
        max_tokens: 256,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error(`❌ Kimi API request failed with status ${response.status}`);
      console.error('Response:', JSON.stringify(data, null, 2));
      process.exit(1);
    }

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) {
      console.error('❌ Unexpected response shape:', JSON.stringify(data, null, 2));
      process.exit(1);
    }

    console.log('\n✅ Kimi API key is working!');
    console.log('\nModel used:', data.model || MODEL);
    console.log('Reply:', reply);
    console.log('\nUsage:', JSON.stringify(data.usage, null, 2));
  } catch (error) {
    console.error('❌ Failed to call Kimi API:', error.message);
    process.exit(1);
  }
}

testKimi();
