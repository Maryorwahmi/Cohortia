import { Hono } from 'hono';
import { db } from '../db/index.js';
import { communityPosts, communityReactions } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

const reactions = new Hono();

const reactionSchema = z.object({
  type: z.enum(['like', 'celebrate', 'support', 'insight']),
});

async function optionalAuth(c, next) {
  const authHeader = c.req.header('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'cohortia-dev-secret');
      c.set('userId', decoded.userId);
    } catch {
      c.set('userId', null);
    }
  } else {
    c.set('userId', null);
  }
  await next();
}

async function requireAuth(c, next) {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({
      success: false,
      error: 'Unauthorized',
      message: 'Authentication is required',
    }, 401);
  }
  await next();
}

// POST /community/posts/:id/react
reactions.post('/posts/:id/react', optionalAuth, requireAuth, async (c) => {
  const userId = c.get('userId');
  const postId = c.req.param('id');
  const body = await c.req.json();

  const result = reactionSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const { type } = result.data;
  const now = new Date().toISOString();

  const post = await db
    .select()
    .from(communityPosts)
    .where(eq(communityPosts.id, postId))
    .limit(1);

  if (post.length === 0) {
    return c.json({ success: false, error: 'Post not found' }, 404);
  }

  const existing = await db
    .select()
    .from(communityReactions)
    .where(and(eq(communityReactions.postId, postId), eq(communityReactions.userId, userId)))
    .limit(1);

  let likeDelta = 0;

  if (existing.length > 0) {
    const oldType = existing[0].type;
    if (oldType === type) {
      await db.delete(communityReactions).where(eq(communityReactions.id, existing[0].id));
      if (oldType === 'like') likeDelta = -1;
    } else {
      await db
        .update(communityReactions)
        .set({ type, createdAt: now })
        .where(eq(communityReactions.id, existing[0].id));
      if (oldType === 'like' && type !== 'like') likeDelta = -1;
      if (oldType !== 'like' && type === 'like') likeDelta = 1;
    }
  } else {
    await db.insert(communityReactions).values({
      id: uuidv4(),
      postId,
      userId,
      type,
      createdAt: now,
    });
    if (type === 'like') likeDelta = 1;
  }

  if (likeDelta !== 0) {
    await db
      .update(communityPosts)
      .set({ likes: communityPosts.likes + likeDelta, updatedAt: now })
      .where(eq(communityPosts.id, postId));
  }

  const updatedPost = await db
    .select()
    .from(communityPosts)
    .where(eq(communityPosts.id, postId))
    .limit(1);

  const userReactions = await db
    .select({ type: communityReactions.type })
    .from(communityReactions)
    .where(and(eq(communityReactions.postId, postId), eq(communityReactions.userId, userId)));

  return c.json({
    success: true,
    data: {
      post: updatedPost[0],
      userReactions: userReactions.map((r) => r.type),
    },
  });
});

// GET /community/posts/:id/reactions
reactions.get('/posts/:id/reactions', optionalAuth, async (c) => {
  const userId = c.get('userId');
  const postId = c.req.param('id');

  const post = await db
    .select()
    .from(communityPosts)
    .where(eq(communityPosts.id, postId))
    .limit(1);

  if (post.length === 0) {
    return c.json({ success: false, error: 'Post not found' }, 404);
  }

  const reactionsList = await db
    .select({
      type: communityReactions.type,
      userId: communityReactions.userId,
    })
    .from(communityReactions)
    .where(eq(communityReactions.postId, postId));

  const grouped = { like: 0, celebrate: 0, support: 0, insight: 0 };
  let userReacted = false;
  let userReactionType = null;

  for (const r of reactionsList) {
    grouped[r.type] = (grouped[r.type] || 0) + 1;
    if (userId && r.userId === userId) {
      userReacted = true;
      userReactionType = r.type;
    }
  }

  return c.json({
    success: true,
    data: {
      grouped,
      userReacted,
      userReactionType,
      total: reactionsList.length,
    },
  });
});

export default reactions;
