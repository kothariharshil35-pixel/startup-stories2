import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { INDUSTRIES_DATA, IndustryInfo } from '../data/industries';

interface IndustryCardsProps {
  onSelectIndustry: (industryName: string) => void;
  onViewAllIndustries: () => void;
}

export const IndustryCards: React.FC<IndustryCardsProps> = ({
  onSelectIndustry,
  onViewAllIndustries
}) => {
  return (
    <section className="bg-[#F7F5F0] py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b-2 border-stone-900 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase text-[#FF7A00] tracking-widest mb-1">
              <Layers className="w-3.5 h-3.5" />
              Sectors & Market Segments
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Explore Industries
            </h2>
          </div>
          <button
            onClick={onViewAllIndustries}
            className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>View All Industry Insights</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Visual Category Cards strictly matching Section 9 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              onClick={() => onSelectIndustry(ind.name)}
              className="bg-white border border-stone-200 hover:border-stone-400 p-5 rounded-xs cursor-pointer group transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header with Emoji & Name */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl p-2 bg-stone-50 border border-stone-100 rounded-xs">
                    {ind.emoji}
                  </span>
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">
                    Sector
                  </span>
                </div>

                <h3 className="font-headline font-extrabold text-xl text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-stone-500 font-medium mt-0.5 line-clamp-1">
                  {ind.tagline}
                </p>

                {/* Featured Startups list matching Section 9 */}
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                    Key Startups
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-stone-800">
                    {ind.featuredStartups.map((startup, idx) => (
                      <span key={startup} className="text-stone-700">
                        {startup}
                        {idx < ind.featuredStartups.length - 1 && <span className="text-stone-300 ml-1.5">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                <span>View Stories</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
