import { Hono } from 'hono';

export const errorHandler = (err, c) => {
  console.error('Error:', err);

  const status = err.status || err.statusCode || 500;
  
  return c.json({
    success: false,
    error: err.name || 'Internal Server Error',
    message: err.message || 'Something went wrong',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  }, status);
};
