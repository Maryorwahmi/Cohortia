export const errorHandler = (err, c) => {
  const status = err.status || err.statusCode || 500;
  const requestId = c.get('requestId') || 'unavailable';
  console.error(JSON.stringify({
    level: 'error',
    requestId,
    method: c.req.method,
    path: c.req.path,
    status,
    error: {
      name: err?.name || 'Error',
      message: err?.message || String(err),
      stack: err?.stack,
    },
  }));

  return c.json({
    success: false,
    error: status >= 500 ? 'Internal Server Error' : 'Request failed',
    message: status >= 500 ? 'An unexpected error occurred.' : 'The request could not be completed.',
    requestId,
  }, status);
};
