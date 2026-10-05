import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../src/db/index.js';
import { users } from '../src/db/schema.js';

const password = process.env.ADMIN_BOOTSTRAP_PASSWORD;
const email = (process.env.ALPHA_ADMIN_EMAIL || 'admin@cohortia.local').trim().toLowerCase();

if (!password || password.length < 12) {
  throw new Error('Set ADMIN_BOOTSTRAP_PASSWORD to a private password of at least 12 characters.');
}

const existing = await db.select().from(users).where(eq(users.email, email)).limit(1);
const now = new Date().toISOString();

if (existing.length) {
  const user = existing[0];
  const values = {
    name: 'Admin',
    username: 'admin',
    adminRole: 'alpha',
    updatedAt: now,
  };
  if (user.adminRole !== 'alpha' || process.env.ADMIN_BOOTSTRAP_RESET_PASSWORD === 'true') {
    values.password = await bcrypt.hash(password, 12);
  }
  await db.update(users).set(values).where(eq(users.id, user.id));
  console.log(`Alpha admin access is ready for ${email}.`);
} else {
  await db.insert(users).values({
    id: uuidv4(),
    name: 'Admin',
    username: 'admin',
    email,
    password: await bcrypt.hash(password, 12),
    role: 'career-starter',
    adminRole: 'alpha',
    createdAt: now,
    updatedAt: now,
  });
  console.log(`Alpha admin account created for ${email}.`);
}
