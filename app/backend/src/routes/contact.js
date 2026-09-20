import { Hono } from 'hono';
import { z } from 'zod';

const contact = new Hono();

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Submit contact form
contact.post('/', async (c) => {
  const body = await c.req.json();

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const data = result.data;

  // In production, you would send an email or store in a queue
  // For now, just return success
  console.log('Contact form received:', data);

  return c.json({
    success: true,
    message: 'Thank you for reaching out! We will get back to you within 24 hours.',
  });
});

export default contact;
