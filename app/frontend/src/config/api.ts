const productionApiUrl = 'https://api.cohortia.study/api/v1';
const configuredApiUrl = String(import.meta.env.VITE_API_URL || '').trim();

export const API_BASE_URL = (
  import.meta.env.DEV ? (configuredApiUrl || '/api/v1') : productionApiUrl
).replace(/\/+$/, '');
