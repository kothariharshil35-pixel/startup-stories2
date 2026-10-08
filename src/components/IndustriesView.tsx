import React, { useState } from 'react';
import { Layers, ArrowRight, TrendingUp, CheckCircle, ExternalLink, Building } from 'lucide-react';
import { INDUSTRIES_DATA, IndustryInfo } from '../data/industries';
import { STORIES, Story } from '../data/stories';
import { StoryCard } from './StoryCard';

interface IndustriesViewProps {
  initialIndustry?: string;
  onSelectStory: (id: string) => void;
  savedIds: string[];
  onToggleBookmark: (id: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  initialIndustry,
  onSelectStory,
  savedIds,
  onToggleBookmark
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    initialIndustry || INDUSTRIES_DATA[0].name
  );

  const activeInd =
    INDUSTRIES_DATA.find((i) => i.name.toLowerCase() === selectedIndustry.toLowerCase()) ||
    INDUSTRIES_DATA[0];

  const industryStories = STORIES.filter(
    (s) => s.category.toLowerCase() === activeInd.name.toLowerCase()
  );

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-2">
            <Layers className="w-3.5 h-3.5" />
            Market Verticals & Macro Trends
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
            Explore 8 Industries
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-3 font-sans leading-relaxed">
            Deep dive into the structural tailwinds, market sizes, and foundational enterprises driving India's eight most critical technological frontiers.
          </p>
        </div>

        {/* 8 Industry Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = ind.name.toLowerCase() === activeInd.name.toLowerCase();
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.name)}
                className={`p-3 text-center rounded-xs border transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md ring-2 ring-[#FF7A00]'
                    : 'bg-white hover:bg-stone-50 text-stone-900 border-stone-200'
                }`}
              >
                <span className="text-xl">{ind.emoji}</span>
                <span className="font-headline font-bold text-xs tracking-tight line-clamp-1">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Industry Detailed Intelligence Card */}
        <div className="bg-white border border-stone-300 p-6 sm:p-10 rounded-xs shadow-xs mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl p-3 bg-stone-50 border border-stone-200 rounded-xs">
                {activeInd.emoji}
              </span>
              <div>
                <span className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest">
                  SECTOR PROFILE
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
                  {activeInd.name}
                </h2>
                <p className="text-xs text-stone-500 font-sans mt-0.5">{activeInd.tagline}</p>
              </div>
            </div>

            {/* Estimated Market Size */}
            <div className="bg-stone-50 border border-stone-200 p-3 sm:p-4 rounded-xs text-right md:min-w-[240px]">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Estimated Sector Value
              </span>
              <span className="font-headline font-extrabold text-base sm:text-lg text-emerald-800 block mt-0.5">
                {activeInd.marketSizeIndia}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-headline font-bold text-base text-stone-900">
                Industry Overview & Structural Shift
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                {activeInd.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Featured Case Study Startups
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeInd.featuredStartups.map((st) => (
                    <span
                      key={st}
                      className="px-3 py-1 bg-stone-100 border border-stone-200 text-xs font-bold text-[#0B1F3A] rounded-xs"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50 p-5 rounded-xs border border-stone-200">
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#0B1F3A] mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#FF7A00]" />
                Primary Growth Catalysts
              </h4>
              <ul className="space-y-2 text-xs text-stone-700 font-sans">
                {activeInd.keyGrowthDrivers.map((driver, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#138A4B] shrink-0 mt-0.5" />
                    <span>{driver}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stories in this industry */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-stone-900">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0B1F3A]">
              Launch Case Studies in {activeInd.name} ({industryStories.length})
            </h3>
            <span className="text-xs text-stone-500">Verified editorial reports</span>
          </div>

          {industryStories.length === 0 ? (
            <div className="bg-white border border-stone-200 p-8 rounded-xs text-center text-stone-500">
              <p className="font-bold text-stone-700">Additional case studies currently in peer review</p>
              <p className="text-xs text-stone-500 mt-1">
                Our editorial board is researching comprehensive reports on {activeInd.featuredStartups.join(' and ')}.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onReadStory={onSelectStory}
                  isBookmarked={savedIds.includes(story.id)}
                  onToggleBookmark={onToggleBookmark}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
