import React, { useState, useEffect } from "react";
import { MessageSquare, Users, Calendar, Sparkles, Send, Check, Heart, ExternalLink, ShieldAlert, Award } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  avatar: string;
  role: string;
  content: string;
  time: string;
  likes: number;
  hasLiked?: boolean;
  replies?: Reply[];
}

interface Reply {
  id: string;
  author: string;
  avatar: string;
  content: string;
  time: string;
}

interface Post {
  id: string;
  title?: string;
  content: string;
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

interface CommunityPageProps {
  posts?: Post[];
  onCreatePost?: (post: { title: string; content: string; category: string }) => void | Promise<void>;
  onAddComment?: (postId: string, content: string) => void | Promise<void>;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: "1",
    author: "Elena Babalola",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop&q=80",
    role: "UX/UI Designer Alumni",
    content: "Just landed a Full-Time Product Design offer at Vanta! The design sprint specs I built for CarbonHQ during my cohort were the exact highlight of my portfolio interview. Keep pushing, everyone!",
    time: "2 hours ago",
    likes: 18
  },
  {
    id: "2",
    author: "Tunde Alao",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80",
    role: "Active Frontend Intern",
    content: "Has anyone successfully tackled the svg animation rendering edge cases on the solar telemetry widget? It's lagging slightly when there are over 100 active nodes. Any performance tips would be amazing!",
    time: "4 hours ago",
    likes: 4
  },
  {
    id: "3",
    author: "Emeka K.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80",
    role: "Technical Lead @ Stripe / Mentor",
    content: "Hey @Tunde, try wrapping your telemetry grid nodes in React.memo() or leverage D3 canvas bindings if node count rises over 200. Check my code snippet in the #lab-code-reviews channel!",
    time: "5 hours ago",
    likes: 12
  }
];

const EVENTS_DATA = [
  {
    id: "e1",
    title: "Portfolio Defense: How to present simulated briefs",
    host: "Yetunde A. (Lead Recruiter)",
    date: "July 15, 2026",
    time: "6:00 PM EST",
    desc: "Learn to articulate your Cohortia milestone projects to hiring managers as actual verified workplace outputs.",
    rsvped: false
  },
  {
    id: "e2",
    title: "Figma Typography & Layout Systems",
    host: "Elena Babalola (Product Designer @ Vanta)",
    date: "July 18, 2026",
    time: "2:00 PM EST",
    desc: "Deep dive into auto-layouts, nested components, typography scaling, and exporting cohesive developer spec handoffs.",
    rsvped: false
  },
  {
    id: "e3",
    title: "Vite & React 19 State Management Strategy",
    host: "Emeka K. (Tech Lead)",
    date: "July 22, 2026",
    time: "5:30 PM EST",
    desc: "Assess modern state container paradigms, reducer abstractions, and render optimization rules in fast client builds.",
    rsvped: false
  }
];

function timeAgo(dateString?: string): string {
  if (!dateString) return "Recently";
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function mapPostsToComments(posts: Post[]): Comment[] {
  return posts.map((post) => ({
    id: post.id,
    author: post.author?.name || "Community Member",
    avatar:
      post.author?.avatar ||
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
    role: post.author?.role || "Learner",
    content: post.title ? `${post.title}\n\n${post.content}` : post.content,
    time: timeAgo(post.createdAt),
    likes: post.likes || 0,
    hasLiked: false,
    replies: (post.comments || []).map((c) => ({
      id: c.id || `reply-${Math.random().toString(36).slice(2)}`,
      author: c.author?.name || "Community Member",
      avatar:
        c.author?.avatar ||
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
      content: c.content || "",
      time: timeAgo(c.createdAt),
    })),
  }));
}

export default function CommunityPage({ posts, onCreatePost, onAddComment }: CommunityPageProps) {
  const [activeChannel, setActiveChannel] = useState("#career-strategy");
  const [comments, setComments] = useState<Comment[]>(() => (posts?.length ? mapPostsToComments(posts) : INITIAL_COMMENTS));
  const [newCommentText, setNewCommentText] = useState("");
  const [events, setEvents] = useState(EVENTS_DATA);
  const [rsvpSuccessId, setRsvpSuccessId] = useState<string | null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const channels = [
    { name: "#announcements", desc: "Official updates, cohort launch reports, and placement announcements." },
    { name: "#career-strategy", desc: "Job search, interview prep, and portfolio presenting strategies." },
    { name: "#lab-code-reviews", desc: "Collaborative code feedback, design audits, and telemetry optimizations." },
    { name: "#general-chat", desc: "Informal conversations, cohort introductions, and peer-to-peer networking." }
  ];

  useEffect(() => {
    if (posts?.length) {
      setComments(mapPostsToComments(posts));
    }
  }, [posts]);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    if (onCreatePost) {
      await onCreatePost({
        title: `${activeChannel} discussion`,
        content: newCommentText,
        category: activeChannel,
      });
      setNewCommentText("");
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      author: "You (Cohort Candidate)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
      role: "Candidate Explorer",
      content: newCommentText,
      time: "Just now",
      likes: 0
    };

    setComments([newComment, ...comments]);
    setNewCommentText("");
  };

  const handleReply = async (postId: string) => {
    if (!replyText.trim()) return;
    if (onAddComment) {
      await onAddComment(postId, replyText);
    }
    setReplyText("");
    setReplyingTo(null);
  };

  const handleLike = (id: string) => {
    setComments(comments.map(c => {
      if (c.id === id) {
        return {
          ...c,
          likes: c.hasLiked ? c.likes - 1 : c.likes + 1,
          hasLiked: !c.hasLiked
        };
      }
      return c;
    }));
  };

  const handleRsvp = (id: string) => {
    setEvents(events.map(ev => {
      if (ev.id === id) {
        return { ...ev, rsvped: !ev.rsvped };
      }
      return ev;
    }));
    setRsvpSuccessId(id);
    setTimeout(() => setRsvpSuccessId(null), 3000);
  };

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative">
      {/* Background Graphic Accents */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-immersive-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-center mt-6 mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-3">
          | GLOBAL ALUMNI & STUDENT HUB
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-extrabold text-immersive-text-primary tracking-tight max-w-4xl mx-auto leading-tight">
          The Cohortia <span className="text-[#FF4B3E]">Community</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-immersive-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
          Connect, collaborate, and grow with active learners, expert mentors, and global alumni who are building verified products.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Community Discussions Forum */}
          <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow text-left">
              
              {/* Channel Selector Row */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                  1. SELECT CHANNEL
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {channels.map((chan) => (
                    <button
                      key={chan.name}
                      onClick={() => setActiveChannel(chan.name)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeChannel === chan.name
                          ? "bg-immersive-primary/15 border border-[#FF4B3E] text-immersive-text-primary"
                          : "bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/30 text-immersive-text-secondary hover:text-immersive-text-primary"
                      }`}
                    >
                      {chan.name}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-immersive-text-secondary/70 italic font-medium pl-1 pt-1">
                  Active Channel Focus: {channels.find(c => c.name === activeChannel)?.desc}
                </div>
              </div>

              {/* Live comment/discussion list */}
              <div className="space-y-4 pt-4 border-t border-immersive-border/20">
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block mb-1">
                  2. FORUM CONVERSATIONS
                </span>
                
                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
                  {comments.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-immersive-bg/50 border border-immersive-border/50 hover:border-immersive-secondary/30 rounded-2xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3.5">
                        <img
                          src={item.avatar}
                          alt={item.author}
                          className="w-10 h-10 rounded-full border border-immersive-border object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="space-y-2 text-left min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm font-bold text-immersive-text-primary mr-2 block sm:inline">
                                {item.author}
                              </span>
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-immersive-secondary/10 text-immersive-secondary border border-immersive-secondary/15">
                                {item.role}
                              </span>
                            </div>
                            <span className="text-[10px] text-immersive-text-secondary/60 font-medium">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-immersive-text-secondary/95 leading-relaxed font-medium">
                            {item.content}
                          </p>

                          {/* Upvote / Reply buttons */}
                          <div className="flex items-center space-x-4 pt-1">
                            <button
                              onClick={() => handleLike(item.id)}
                              className={`flex items-center space-x-1.5 text-xs font-bold transition-all cursor-pointer ${
                                item.hasLiked ? "text-rose-500 scale-105" : "text-immersive-text-secondary hover:text-rose-500"
                              }`}
                            >
                              <Heart className={`w-3.5 h-3.5 ${item.hasLiked ? "fill-rose-500 text-rose-500" : ""}`} />
                              <span>{item.likes} upvotes</span>
                            </button>
                            {onAddComment && (
                              <button
                                onClick={() => {
                                  setReplyingTo(replyingTo === item.id ? null : item.id);
                                  setReplyText("");
                                }}
                                className="text-xs font-bold text-immersive-text-secondary hover:text-immersive-secondary transition-all cursor-pointer"
                              >
                                Reply
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Replies */}
                      {item.replies && item.replies.length > 0 && (
                        <div className="mt-3 pl-14 space-y-3">
                          {item.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start space-x-3">
                              <img
                                src={reply.avatar}
                                alt={reply.author}
                                className="w-8 h-8 rounded-full border border-immersive-border object-cover shrink-0"
                                referrerPolicy="no-referrer"
                              />
                              <div className="bg-immersive-bg/40 border border-immersive-border/40 rounded-xl p-3 flex-1 text-left">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs font-bold text-immersive-text-primary">{reply.author}</span>
                                  <span className="text-[9px] text-immersive-text-secondary/60">{reply.time}</span>
                                </div>
                                <p className="text-xs text-immersive-text-secondary/95 leading-relaxed">{reply.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply input */}
                      {onAddComment && replyingTo === item.id && (
                        <div className="mt-3 pl-14 flex items-center space-x-2">
                          <input
                            type="text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleReply(item.id);
                            }}
                            placeholder="Write a reply..."
                            className="flex-1 bg-immersive-bg border border-immersive-border rounded-xl px-3 py-2 text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none focus:border-immersive-secondary"
                          />
                          <button
                            onClick={() => handleReply(item.id)}
                            disabled={!replyText.trim()}
                            className="p-2 bg-immersive-secondary text-immersive-bg hover:bg-white disabled:opacity-40 rounded-xl cursor-pointer transition-all"
                          >
                            <Send className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Post Form */}
              <form onSubmit={handlePostComment} className="pt-4 border-t border-immersive-border/20 space-y-3">
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">
                  3. JOIN THE CONVERSATION
                </span>
                <div className="flex items-center space-x-3 bg-immersive-bg border border-immersive-border rounded-2xl p-2 focus-within:border-immersive-secondary transition-all">
                  <input
                    type="text"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder={`Post a message in ${activeChannel}...`}
                    className="flex-1 bg-transparent px-4 py-3 text-sm text-immersive-text-primary placeholder:text-immersive-text-secondary/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-3.5 bg-immersive-secondary text-immersive-bg hover:bg-white transition-all rounded-xl shrink-0 cursor-pointer shadow-md shadow-immersive-shadow"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Upcoming Community Workshops/Events & Study Rooms */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Active Study Rooms */}
            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                  Active Study Rooms
                </span>
                <Users className="w-4 h-4 text-[#FF4B3E]" />
              </div>
              <p className="text-xs text-immersive-text-secondary font-medium mb-4">
                Join live text-based peer sessions to collaborate on your cohort projects in real-time.
              </p>
              <div className="space-y-3">
                {[
                  { name: "Frontend Project Review", users: 12, active: true },
                  { name: "Design Spec Critique", users: 8, active: true },
                  { name: "Algorithm Practice", users: 5, active: false }
                ].map((room, idx) => (
                  <div key={idx} className="p-3 bg-immersive-bg/40 border border-immersive-border rounded-xl flex items-center justify-between hover:border-immersive-secondary/50 transition-all">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-immersive-text-primary block">{room.name}</span>
                      <div className="flex items-center space-x-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${room.active ? 'bg-emerald-500 animate-pulse' : 'bg-immersive-text-secondary'}`} />
                        <span className="text-[10px] text-immersive-text-secondary">{room.users} peers active</span>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 text-[10px] font-bold text-immersive-bg bg-immersive-secondary hover:bg-white rounded-lg transition-all cursor-pointer">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                    UPCOMING EVENTS
                  </span>
                  <Calendar className="w-4 h-4 text-[#FF4B3E]" />
                </div>
                <h3 className="text-xl font-bold text-immersive-text-primary mb-1">
                  Cohortia Workshops
                </h3>
                <p className="text-xs text-immersive-text-secondary font-medium mb-6">
                  Interactive masterclasses and guest speaker sessions organized live for our active cohort members.
                </p>

                {/* Event list */}
                <div className="space-y-4">
                  {events.map((ev) => (
                    <div
                      key={ev.id}
                      className="p-4 bg-immersive-bg/40 border border-immersive-border rounded-2xl space-y-3 hover:border-[#FF4B3E]/30 transition-all duration-300"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-immersive-secondary font-bold uppercase block">
                          {ev.date} @ {ev.time}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-immersive-text-primary line-clamp-1">
                          {ev.title}
                        </h4>
                        <span className="text-[10px] text-immersive-text-secondary/70 font-semibold block">
                          Hosted by: {ev.host}
                        </span>
                      </div>
                      <p className="text-[10px] text-immersive-text-secondary leading-relaxed font-medium">
                        {ev.desc}
                      </p>

                      {/* RSVP action button */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => handleRsvp(ev.id)}
                          className={`py-1.5 px-3 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            ev.rsvped
                              ? "bg-emerald-500/15 border border-emerald-500 text-emerald-400"
                              : "bg-immersive-secondary/15 border border-immersive-secondary/30 text-immersive-secondary hover:bg-immersive-secondary hover:text-immersive-bg"
                          }`}
                        >
                          {ev.rsvped ? "RSVPed ✓" : "RSVP Seat"}
                        </button>
                        {rsvpSuccessId === ev.id && ev.rsvped && (
                          <span className="text-[9px] font-mono font-bold text-emerald-400 animate-pulse">
                            Calendar synced!
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community values reminder */}
              <div className="border-t border-immersive-border pt-5.5 mt-6 flex items-start space-x-2.5 text-[10px] text-immersive-text-secondary font-medium leading-relaxed">
                <Award className="w-4 h-4 text-immersive-secondary shrink-0 mt-0.5" />
                <span>Respectful guidelines: Always engage productively. Peer reviews operate under complete academic trust. Have fun shipping!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
