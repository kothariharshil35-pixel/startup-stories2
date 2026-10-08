import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, BookOpen, Shield, Award, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0B1F3A] text-stone-300 border-t-4 border-[#FF7A00]">
      {/* Newsletter Banner - "GET THE STARTUP STORY OF THE WEEK" from PRD Wireframe */}
      <div className="border-b border-[#1A365D] bg-[#071527]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest font-bold text-[#FF7A00]">
                Editorial Dispatch
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Get The Startup Story of the Week
              </h3>
              <p className="text-stone-300 text-sm mt-2 max-w-xl font-sans">
                Every Sunday morning, we dissect one Indian startup's unit economics, marketing strategies, and founding lessons. Backed by primary sources and zero promotional hype.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 p-4 rounded-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-sm">
                    Thank you for subscribing! Your first verified case study will arrive this Sunday.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your college or work email..."
                      required
                      className="w-full bg-[#152B47] border border-[#254670] text-white placeholder-stone-400 text-sm pl-10 pr-4 py-3 rounded-xs focus:outline-none focus:border-[#FF7A00]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FF7A00] hover:bg-[#E06C00] text-white text-sm font-bold px-6 py-3 rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-[11px] text-stone-400 mt-2">
                Curated specifically for students studying BBA, MBA, Digital Business, Finance, and Entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-headline text-2xl font-black text-white tracking-tight">
                INDIAN STARTUP STORIES
              </span>
              <p className="text-xs uppercase tracking-wider text-[#FF7A00] font-semibold mt-0.5">
                Real Founders. Real Journeys. Real Stories.
              </p>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              An independent, source-verified editorial publication and case study archive documenting the companies, founders, business models, and market forces shaping the Republic of India's startup ecosystem.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Fact-Checked
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#FF7A00]" /> Primary Sources
              </span>
              <span>•</span>
              <span>No Sponsored Rumors</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-sm font-bold text-white tracking-wider uppercase mb-4 border-b border-[#1E3A5F] pb-2">
              Sections
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stories')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  10 Launch Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('founders')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Meet the Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Explore 8 Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketing')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Digital Marketing Teardowns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('funding')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Startup Funding Tracker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('failures')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Lessons From Failure
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div>
            <h4 className="font-headline text-sm font-bold text-white tracking-wider uppercase mb-4 border-b border-[#1E3A5F] pb-2">
              Key Case Studies
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('story', 'zerodha')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Zerodha: The Bootstrapped Giant
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story', 'zomato')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Zomato: Menus to Public Listing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story', 'nykaa')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Nykaa: Content to Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story', 'boat')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  boAt: Youth Lifestyle Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story', 'physics-wallah')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Physics Wallah: Affordable EdTech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story', 'cred')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  CRED: Branding as Product
                </button>
              </li>
            </ul>
          </div>

          {/* Academic & Editorial */}
          <div>
            <h4 className="font-headline text-sm font-bold text-white tracking-wider uppercase mb-4 border-b border-[#1E3A5F] pb-2">
              Academic & Ethics
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Our Mission & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Five Pillars of Verification
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Citing in BBA/MBA Papers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('funding')}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  DPIIT Startup India Baseline
                </button>
              </li>
              <li>
                <span className="text-xs text-stone-400 block pt-2">
                  Independent academic publication. Not sponsored by featured enterprises.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#183152] flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 Indian Startup Stories. All case studies prepared under fair-use educational research standards.</p>
          <div className="flex items-center gap-6">
            <span>Primary & Verified Sources Only</span>
            <span>•</span>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              Editorial Transparency Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
