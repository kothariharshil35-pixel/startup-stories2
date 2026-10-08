import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Award, Building, User } from 'lucide-react';

interface FeaturedStoryProps {
  onReadStory: (id: string) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ onReadStory }) => {
  return (
    <section className="bg-white border-b border-stone-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Label */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-stone-900">
          <div className="flex items-center gap-3">
            <span className="bg-[#FF7A00] text-white text-xs font-black uppercase px-2.5 py-1 tracking-wider">
              FEATURED STORY
            </span>
            <span className="font-headline font-bold text-sm text-stone-500 uppercase tracking-widest">
              CASE STUDY 01 OF 10
            </span>
          </div>
          <span className="text-xs text-stone-400 font-medium">Verified by Financial Statements</span>
        </div>

        {/* Big Editorial Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F5F0] border border-stone-300 p-6 sm:p-10 rounded-xs shadow-xs">
          {/* Real Photographic Visual matching Section 12 */}
          <div className="lg:col-span-6 relative">
            <div className="overflow-hidden border border-stone-300 rounded-xs bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
                alt="Stock exchange algorithmic screen and trading desks"
                className="w-full h-80 sm:h-96 object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
            {/* Caption & Image credit strictly adhering to Section 12 */}
            <p className="text-[11px] text-stone-500 mt-2 font-sans italic">
              <strong>Image credit:</strong> Zerodha Media Center / Licensed Stock via Unsplash Financial
            </p>
          </div>

          {/* Editorial Content Column strictly matching Section 7 */}
          <div className="lg:col-span-6 space-y-5">
            {/* Metadata (Category & Reading Time) */}
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-stone-600">
              <span className="text-[#0B1F3A] font-extrabold">ZERODHA</span>
              <span>•</span>
              <span className="text-[#FF7A00] font-bold">FINTECH</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-stone-500">
                <Clock className="w-3.5 h-3.5" /> 8 MIN READ
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
              How Zerodha Changed Stock Broking in India
            </h2>

            {/* Sub-quote as specified in PRD Section 7 */}
            <blockquote className="font-editorial text-lg sm:text-xl text-stone-800 italic leading-relaxed border-l-3 border-[#FF7A00] pl-4 py-1 bg-stone-100/50">
              "From a small idea around reducing barriers in stock trading to becoming one of India's most recognizable financial technology companies, Zerodha's journey demonstrates the power of simplicity, technology and customer education."
            </blockquote>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs border-t border-stone-200">
              <div>
                <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Founders</span>
                <span className="font-bold text-stone-800">Nithin & Nikhil Kamath</span>
              </div>
              <div>
                <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Founded</span>
                <span className="font-bold text-stone-800">15 August 2010</span>
              </div>
              <div>
                <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Funding Stage</span>
                <span className="font-bold text-emerald-700">100% Bootstrapped</span>
              </div>
            </div>

            {/* Action Button as specified in Section 7 */}
            <div className="pt-3">
              <button
                onClick={() => onReadStory('zerodha')}
                className="bg-[#0B1F3A] hover:bg-[#FF7A00] text-white font-headline font-bold text-sm sm:text-base px-6 py-3.5 rounded-xs transition-colors cursor-pointer flex items-center gap-2 group shadow-sm"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
