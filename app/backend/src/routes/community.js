import { Hono } from 'hono';
import { db } from '../db/index.js';
import { communityPosts, communityComments, communityReactions } from '../db/schema.js';
import { eq, desc, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { logActivity } from '../lib/activity.js';
import { createNotification } from '../lib/notifications.js';
import { authMiddleware } from '../middleware/auth.js';

const community = new Hono();

const postSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  category: z.string().min(1, 'Category is required'),
});

async function getReactionsForPost(postId, userId) {
  const reactions = await db
    .select({
      type: communityReactions.type,
      userId: communityReactions.userId,
    })
    .from(communityReactions)
    .where(eq(communityReactions.postId, postId));

  const grouped = { like: 0, celebrate: 0, support: 0, insight: 0 };
  let userReacted = false;
  let userReactionType = null;

  for (const r of reactions) {
    grouped[r.type] = (grouped[r.type] || 0) + 1;
    if (userId && r.userId === userId) {
      userReacted = true;
      userReactionType = r.type;
    }
  }

  return { grouped, userReacted, userReactionType, total: reactions.length };
}

// Get all community posts
community.get('/posts', authMiddleware, async (c) => {
  const userId = c.get('userId');

  const posts = await db
    .select()
    .from(communityPosts)
    .orderBy(desc(communityPosts.createdAt));

  const postsWithReactions = await Promise.all(
    posts.map(async (post) => {
      const reactions = await getReactionsForPost(post.id, userId);
      return { ...post, reactions };
    })
  );

  return c.json({ success: true, data: { posts: postsWithReactions } });
});

// Create a new post
community.post('/posts', authMiddleware, async (c) => {
  const userId = c.get('userId');
  const body = await c.req.json();

  const result = postSchema.safeParse(body);
  if (!result.success) {
    return c.json({
      success: false,
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    }, 400);
  }

  const data = result.data;
  const now = new Date().toISOString();

  const post = await db.insert(communityPosts).values({
    id: uuidv4(),
    userId,
    title: data.title,
    content: data.content,
    category: data.category,
    likes: 0,
    replies: 0,
    createdAt: now,
    updatedAt: now,
  }).returning();

  await logActivity({
    userId,
    activityType: 'community_post',
    entityId: post[0].id,
    metadata: { category: data.category, title: data.title },
  });

  return c.json({ success: true, data: { post: post[0] } }, 201);
});

// Get single post with comments
community.get('/posts/:id', authMiddleware, async (c) => {
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

  const comments = await db
    .select()
    .from(communityComments)
    .where(eq(communityComments.postId, postId))
    .orderBy(desc(communityComments.createdAt));

  const reactions = await getReactionsForPost(postId, userId);

  return c.json({
    success: true,
    data: {
      post: { ...post[0], reactions },
      comments,
    },
  });
});

// Add comment to a post
community.post('/posts/:id/comments', authMiddleware, async (c) => {
  const userId = c.get('userId');
  const postId = c.req.param('id');
  const { content } = await c.req.json();

  if (!content || content.trim().length < 1) {
    return c.json({ success: false, error: 'Comment content is required' }, 400);
  }

  const now = new Date().toISOString();

  const comment = await db.insert(communityComments).values({
    id: uuidv4(),
    postId,
    userId,
    content: content.trim(),
    createdAt: now,
    updatedAt: now,
  }).returning();

  // Increment reply count on post
  await db
    .update(communityPosts)
    .set({ replies: communityPosts.replies + 1, updatedAt: now })
    .where(eq(communityPosts.id, postId));

  // Notify post author of new comment (if not the commenter)
  const [post] = await db
    .select({ userId: communityPosts.userId, title: communityPosts.title })
    .from(communityPosts)
    .where(eq(communityPosts.id, postId))
    .limit(1);

  if (post && post.userId !== userId) {
    await createNotification({
      userId: post.userId,
      type: 'mention',
      title: 'New Comment on Your Post',
      message: `Someone commented on your post "${post.title}".`,
      link: `/community/posts/${postId}`,
    });
  }

  return c.json({ success: true, data: { comment: comment[0] } }, 201);
});

export default community;
