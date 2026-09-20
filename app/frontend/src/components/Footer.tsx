import { useState, FormEvent, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Sparkles, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      alert("Please enter a valid email address to stay updated.");
      return;
    }
    setSubscribed(true);
    localStorage.setItem("cohortia_newsletter_sub", email);
    setEmail("");
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string, pagePath: string = "/") => {
    e.preventDefault();
    navigate(pagePath);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <footer className="bg-immersive-card border-t border-immersive-border py-10 text-left relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-immersive-border">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <Logo size={36} />
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl tracking-tight text-immersive-text-primary">
                  Cohortia
                </span>
                <span className="text-[9px] font-mono tracking-widest text-immersive-secondary uppercase font-bold">
                  CAREER PLATFORM
                </span>
              </div>
            </Link>
            <p className="text-xs text-immersive-text-secondary leading-relaxed">
              A guided career-growth platform where you learn with a community, get Cohortia mentorship, experience real-world work, and build proof of progress.
            </p>
            
            {/* Socials */}
            <div className="flex items-center space-x-3 pt-2">
              <Link to="/community" aria-label="Cohortia community" className="p-2 bg-immersive-bg hover:bg-immersive-primary/10 border border-immersive-border rounded-lg text-immersive-text-secondary hover:text-immersive-text-primary transition">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link to="/community" aria-label="Cohortia community" className="p-2 bg-immersive-bg hover:bg-immersive-primary/10 border border-immersive-border rounded-lg text-immersive-text-secondary hover:text-immersive-text-primary transition">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link to="/community" aria-label="Cohortia community" className="p-2 bg-immersive-bg hover:bg-immersive-primary/10 border border-immersive-border rounded-lg text-immersive-text-secondary hover:text-immersive-text-primary transition">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link to="/community" aria-label="Cohortia community" className="p-2 bg-immersive-bg hover:bg-immersive-primary/10 border border-immersive-border rounded-lg text-immersive-text-secondary hover:text-immersive-text-primary transition">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-immersive-text-secondary uppercase tracking-widest">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-xs text-immersive-text-secondary font-medium">
              <Link to="/" className="hover:text-immersive-secondary transition">Home</Link>
              <a href="#about-section" onClick={(e) => handleLinkClick(e, "about-section", "/")} className="hover:text-immersive-secondary transition">About Us</a>
              <Link to="/careers" className="hover:text-immersive-secondary transition">Careers</Link>
              <Link to="/experience" className="hover:text-immersive-secondary transition">Experience Track</Link>
              <Link to="/community" className="hover:text-immersive-secondary transition">Community</Link>
            </div>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-immersive-text-secondary uppercase tracking-widest">Resources</h4>
            <div className="flex flex-col space-y-2 text-xs text-immersive-text-secondary font-medium">
              <Link to="/experience" className="hover:text-immersive-secondary transition">Pricing</Link>
              <Link to="/contact" className="hover:text-immersive-secondary transition">Contact</Link>
              <Link to="/contact" className="hover:text-immersive-secondary transition">FAQ</Link>
            </div>
          </div>

          {/* Stay Updated Form */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-immersive-text-secondary uppercase tracking-widest">Stay Updated</h4>
            <p className="text-xs text-immersive-text-secondary leading-relaxed">
              Get the latest tips, new cohorts, and career growth updates delivered directly to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-immersive-secondary/10 border border-immersive-secondary/20 rounded-2xl p-4 flex items-start space-x-2.5 text-xs text-immersive-secondary animate-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-4.5 h-4.5 text-immersive-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold block">Successfully Subscribed!</span>
                  <span className="text-immersive-text-secondary font-medium text-[11px] block mt-0.5">We'll alert you as soon as the next Cohort matching cycle goes live.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/50 focus:border-immersive-secondary text-immersive-text-primary rounded-xl px-4 py-2.5 text-xs outline-none transition"
                />
                <button
                  type="submit"
                  className="bg-immersive-secondary hover:brightness-110 text-immersive-bg font-bold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-immersive-shadow transition cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] font-mono text-immersive-text-secondary/80">
          <span>&copy; {new Date().getFullYear()} Cohortia. All rights reserved.</span>
          <span className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Built for ambitious learners everywhere. Inspired by growth.</span>
            <Sparkles className="w-3.5 h-3.5 text-immersive-secondary animate-pulse" />
          </span>
        </div>

      </div>
    </footer>
  );
}
