import React from 'react';
import { ArrowRight, Users, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreStories: () => void;
  onMeetFounders: () => void;
  onSelectStory: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreStories,
  onMeetFounders,
  onSelectStory
}) => {
  return (
    <section className="relative bg-[#0B1F3A] text-white overflow-hidden border-b-4 border-[#FF7A00]">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: PRD Headline, Subheading, and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#152B47] border border-[#23456F] rounded-xs text-xs font-semibold tracking-wider uppercase text-stone-200">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse"></span>
              Independent Startup Research & Analysis
            </div>

            {/* Headline matching Section 6 */}
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              The Stories Behind India's Boldest Startups
            </h1>

            {/* Subheading matching Section 6 */}
            <p className="text-lg sm:text-xl text-stone-300 font-sans font-normal leading-relaxed max-w-2xl">
              Discover the founders, ideas, challenges and strategies behind the companies shaping India's startup ecosystem.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreStories}
                className="bg-[#FF7A00] hover:bg-[#E06C00] text-white text-base font-bold px-7 py-3.5 rounded-xs transition-all cursor-pointer flex items-center gap-2.5 shadow-lg shadow-orange-950/20 group"
              >
                <span>Explore Stories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onMeetFounders}
                className="bg-transparent hover:bg-white/10 text-stone-100 hover:text-white border-2 border-stone-400 hover:border-white text-base font-bold px-7 py-3.5 rounded-xs transition-all cursor-pointer flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-[#FF7A00]" />
                <span>Meet the Founders</span>
              </button>
            </div>

            {/* Credibility Micro-Bar */}
            <div className="pt-6 border-t border-[#1E3A5F] flex flex-wrap items-center gap-6 text-xs text-stone-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Primary Regulatory Filings</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#FF7A00]" />
                <span>Unit Economics & Models</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>10 Full Launch Case Studies</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Editorial Image Mosaic */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Lead Visual */}
              <div
                onClick={() => onSelectStory('zerodha')}
                className="relative rounded-xs overflow-hidden border-2 border-stone-300/30 shadow-2xl group cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80"
                  alt="Indian Fintech & Technology trading floor"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />
                
                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B1F3A]/90 backdrop-blur-xs border border-white/10 rounded-xs">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#FF7A00] mb-1">
                    <span>FEATURED EDITORIAL SPOTLIGHT</span>
                    <span>8 MIN READ</span>
                  </div>
                  <h4 className="font-headline font-bold text-white text-base sm:text-lg leading-snug">
                    Zerodha: How a Bootstrapped Startup Changed Stock Broking in India
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                    Nithin Kamath & Nikhil Kamath • 15 August 2010
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Cards */}
              <div className="hidden sm:grid grid-cols-2 gap-3 mt-3">
                <div
                  onClick={() => onSelectStory('zomato')}
                  className="bg-[#152B47] hover:bg-[#1E3A5F] p-3 border border-[#254670] rounded-xs cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">FoodTech</span>
                  <p className="font-headline font-bold text-xs text-white mt-0.5 line-clamp-1">
                    Zomato: Menus to Public Listing
                  </p>
                  <span className="text-[11px] text-stone-400 mt-1 block">Deepinder Goyal</span>
                </div>

                <div
                  onClick={() => onSelectStory('nykaa')}
                  className="bg-[#152B47] hover:bg-[#1E3A5F] p-3 border border-[#254670] rounded-xs cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">E-commerce</span>
                  <p className="font-headline font-bold text-xs text-white mt-0.5 line-clamp-1">
                    Nykaa: Content to Commerce
                  </p>
                  <span className="text-[11px] text-stone-400 mt-1 block">Falguni Nayar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
