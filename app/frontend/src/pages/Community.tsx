import {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import CommunityPage from '../components/CommunityPage';
import {communityApi} from '../services/api';
import {useAuth} from '../context/AuthContext';

interface BackendPost {
  id?: string;
  title?: string;
  content?: string;
  category?: string;
  author?: {
    name?: string;
    role?: string;
    avatar?: string;
  };
  createdAt?: string;
  likes?: number;
  comments?: Array<{
    id?: string;
    content?: string;
    author?: { name?: string; avatar?: string };
    createdAt?: string;
  }>;
}

export default function Community() {
  const {user} = useAuth();
  const [posts, setPosts] = useState<BackendPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    if (!user) return;

    try {
      const res = await communityApi.getPosts();
      setPosts(Array.isArray(res.data?.posts) ? (res.data?.posts as BackendPost[]) : []);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load community posts.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  if (!user) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-immersive-bg">
        <div className="pointer-events-none select-none blur-md opacity-60" aria-hidden="true">
          <CommunityPage />
        </div>
        <div className="absolute inset-0 flex items-start justify-center bg-immersive-bg/35 px-4 pb-24 pt-28 backdrop-blur-[2px] sm:pt-36">
          <div className="w-full max-w-md rounded-3xl border border-immersive-border bg-immersive-card/95 p-8 text-center shadow-2xl shadow-immersive-shadow">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-immersive-primary/10 text-immersive-primary">
              <span className="text-xl font-black">C</span>
            </div>
            <p className="mb-2 text-xs font-mono font-bold uppercase tracking-widest text-immersive-secondary">Members only</p>
            <h1 className="text-2xl font-extrabold text-immersive-text-primary">Join the Cohortia community</h1>
            <p className="mt-3 text-sm leading-relaxed text-immersive-text-secondary">
              Log in to connect with learners, join discussions, and access community events.
            </p>
            <Link
              to="/login"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-immersive-primary px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Log in to continue
            </Link>
            <p className="mt-4 text-xs text-immersive-text-secondary">
              New to Cohortia? <Link to="/signup" className="font-bold text-immersive-secondary hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleCreatePost = async (post: { title: string; content: string; category: string }) => {
    try {
      await communityApi.createPost(post);
      await loadPosts();
    } catch (err) {
      console.error("Failed to create post", err);
    }
  };

  const handleAddComment = async (postId: string, content: string) => {
    try {
      await communityApi.addComment(postId, content);
      await loadPosts();
    } catch (err) {
      console.error("Failed to add comment", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-immersive-bg flex items-center justify-center">
        <div className="animate-pulse text-immersive-secondary font-mono text-sm">Loading community...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-xl text-xs font-mono font-bold">
          {error}
        </div>
      )}
      <CommunityPage
        posts={posts.length ? posts : undefined}
        onCreatePost={handleCreatePost}
        onAddComment={handleAddComment}
      />
    </div>
  );
}
