const productionApiUrl = 'https://cohortia.onrender.com/api/v1';
const configuredApiUrl = String(import.meta.env.VITE_API_URL || '').trim();

export const API_BASE_URL = (
  !import.meta.env.DEV && (!configuredApiUrl || configuredApiUrl.startsWith('/'))
    ? productionApiUrl
    : (configuredApiUrl || '/api/v1')
).replace(/\/+$/, '');
