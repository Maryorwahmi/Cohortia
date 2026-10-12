import { Hono } from 'hono';
import { db } from '../db/index.js';
import { communityPosts, communityComments, communityReactions, communityReports, communityBookmarks, users } from '../db/schema.js';
import { eq, desc, and, inArray } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { logActivity } from '../lib/activity.js';
import { createNotification } from '../lib/notifications.js';
import { authMiddleware } from '../middleware/auth.js';

const community = new Hono();
const postSchema = z.object({
  title: z.string().min(3).max(180), content: z.string().min(10).max(10000), category: z.string().min(1).max(80),
  courseId: z.string().optional().nullable(), module: z.number().int().positive().optional().nullable(), chapter: z.number().int().positive().optional().nullable(), lessonId: z.string().optional().nullable(),
  postType: z.enum(['question', 'discussion', 'showcase', 'resource', 'study_partner', 'opportunity', 'announcement']).default('discussion'),
});
const commentSchema = z.object({content: z.string().trim().min(1).max(5000)});

async function usersById(ids) {
  const uniqueIds = [...new Set(ids.filter(Boolean))];
  if (!uniqueIds.length) return new Map();
  const rows = await db.select({id: users.id, name: users.name, role: users.role, adminRole: users.adminRole, desiredField: users.desiredField}).from(users).where(inArray(users.id, uniqueIds));
  return new Map(rows.map((user) => [user.id, user]));
}

async function enrichPosts(posts, currentUserId) {
  const postIds = posts.map((post) => post.id);
  const comments = postIds.length ? await db.select().from(communityComments).where(inArray(communityComments.postId, postIds)).orderBy(desc(communityComments.createdAt)) : [];
  const authorMap = await usersById([...posts.map((post) => post.userId), ...comments.map((comment) => comment.userId)]);
  const reactions = postIds.length ? await db.select().from(communityReactions).where(inArray(communityReactions.postId, postIds)) : [];
  const bookmarks = currentUserId && postIds.length ? await db.select({postId: communityBookmarks.postId}).from(communityBookmarks).where(and(eq(communityBookmarks.userId, currentUserId), inArray(communityBookmarks.postId, postIds))) : [];
  const bookmarked = new Set(bookmarks.map((item) => item.postId));
  return posts.map((post) => ({
    ...post, author: authorMap.get(post.userId) || {name: 'Community member', role: 'learner'}, bookmarked: bookmarked.has(post.id),
    reactions: reactions.filter((item) => item.postId === post.id).reduce((result, item) => ({...result, [item.type]: (result[item.type] || 0) + 1}), {}),
    comments: comments.filter((item) => item.postId === post.id && item.status === 'published').map((item) => ({...item, author: authorMap.get(item.userId) || {name: 'Community member', role: 'learner'}})),
  }));
}

async function getReactionsForPost(postId, userId) {
  const rows = await db.select().from(communityReactions).where(eq(communityReactions.postId, postId));
  const grouped = {like: 0, celebrate: 0, support: 0, insight: 0};
  let userReactionType = null;
  for (const row of rows) { grouped[row.type] = (grouped[row.type] || 0) + 1; if (row.userId === userId) userReactionType = row.type; }
  return {grouped, userReacted: Boolean(userReactionType), userReactionType, total: rows.length};
}

community.get('/posts', authMiddleware, async (c) => {
  const conditions = [eq(communityPosts.status, 'published')];
  const courseId = c.req.query('courseId'); const category = c.req.query('category'); const postType = c.req.query('postType');
  if (courseId) conditions.push(eq(communityPosts.courseId, courseId)); if (category) conditions.push(eq(communityPosts.category, category)); if (postType) conditions.push(eq(communityPosts.postType, postType));
  const posts = await db.select().from(communityPosts).where(and(...conditions)).orderBy(desc(communityPosts.isPinned), desc(communityPosts.updatedAt)).limit(100);
  return c.json({success: true, data: {posts: await enrichPosts(posts, c.get('userId'))}});
});

community.post('/posts', authMiddleware, async (c) => {
  const userId = c.get('userId'); const result = postSchema.safeParse(await c.req.json());
  if (!result.success) return c.json({success: false, error: 'Validation failed', details: result.error.flatten().fieldErrors}, 400);
  const now = new Date().toISOString(); const data = result.data;
  const [post] = await db.insert(communityPosts).values({id: uuidv4(), userId, ...data, status: 'published', likes: 0, replies: 0, isPinned: false, isLocked: false, isSolved: false, createdAt: now, updatedAt: now}).returning();
  await logActivity({userId, activityType: 'community_post', entityId: post.id, metadata: {category: data.category, courseId: data.courseId, postType: data.postType}});
  return c.json({success: true, data: {post: (await enrichPosts([post], userId))[0]}}, 201);
});

community.get('/posts/:id', authMiddleware, async (c) => {
  const [post] = await db.select().from(communityPosts).where(eq(communityPosts.id, c.req.param('id'))).limit(1);
  if (!post || post.status === 'removed') return c.json({success: false, error: 'Post not found'}, 404);
  return c.json({success: true, data: {post: (await enrichPosts([post], c.get('userId')))[0]}});
});

community.post('/posts/:id/comments', authMiddleware, async (c) => {
  const userId = c.get('userId'); const [post] = await db.select().from(communityPosts).where(eq(communityPosts.id, c.req.param('id'))).limit(1);
  if (!post || post.status !== 'published') return c.json({success: false, error: 'Post not found'}, 404); if (post.isLocked) return c.json({success: false, error: 'This discussion is locked'}, 409);
  const result = commentSchema.safeParse(await c.req.json()); if (!result.success) return c.json({success: false, error: 'Comment content is required'}, 400);
  const now = new Date().toISOString(); const [comment] = await db.insert(communityComments).values({id: uuidv4(), postId: post.id, userId, content: result.data.content, status: 'published', createdAt: now, updatedAt: now}).returning();
  await db.update(communityPosts).set({replies: communityPosts.replies + 1, updatedAt: now}).where(eq(communityPosts.id, post.id));
  if (post.userId !== userId) await createNotification({userId: post.userId, type: 'mention', title: 'New reply on your discussion', message: `Someone replied to “${post.title}”.`, link: `/community/posts/${post.id}`});
  return c.json({success: true, data: {comment}}, 201);
});

community.post('/posts/:id/report', authMiddleware, async (c) => {
  const userId = c.get('userId'); const body = await c.req.json(); if (!body.reason || typeof body.reason !== 'string') return c.json({success: false, error: 'A report reason is required'}, 400);
  const now = new Date().toISOString(); const [report] = await db.insert(communityReports).values({id: uuidv4(), reporterUserId: userId, postId: c.req.param('id'), reason: body.reason, details: body.details || null, status: 'open', createdAt: now, updatedAt: now}).returning();
  return c.json({success: true, data: {report}}, 201);
});

community.post('/posts/:id/bookmark', authMiddleware, async (c) => {
  const userId = c.get('userId'); const postId = c.req.param('id'); const [existing] = await db.select().from(communityBookmarks).where(and(eq(communityBookmarks.userId, userId), eq(communityBookmarks.postId, postId))).limit(1);
  if (existing) await db.delete(communityBookmarks).where(and(eq(communityBookmarks.userId, userId), eq(communityBookmarks.postId, postId))); else await db.insert(communityBookmarks).values({userId, postId, createdAt: new Date().toISOString()});
  return c.json({success: true, data: {bookmarked: !existing}});
});

community.get('/posts/:id/reactions', authMiddleware, async (c) => c.json({success: true, data: await getReactionsForPost(c.req.param('id'), c.get('userId'))}));

export default community;
