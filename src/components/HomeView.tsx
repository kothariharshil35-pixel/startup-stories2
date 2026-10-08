import React from 'react';
import { ArrowRight, BookOpen, Users, Sparkles, AlertCircle, TrendingUp, ShieldCheck } from 'lucide-react';
import { Hero } from './Hero';
import { FeaturedStory } from './FeaturedStory';
import { StatisticsSection } from './StatisticsSection';
import { IndustryCards } from './IndustryCards';
import { StoryCard } from './StoryCard';
import { STORIES, Story } from '../data/stories';
import { FOUNDERS } from '../data/founders';
import { MARKETING_STUDIES } from '../data/marketing';
import { FAILURE_STORIES } from '../data/failures';

interface HomeViewProps {
  onSelectStory: (id: string) => void;
  onNavigateTab: (tab: string, param?: string) => void;
  savedIds: string[];
  onToggleBookmark: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectStory,
  onNavigateTab,
  savedIds,
  onToggleBookmark
}) => {
  return (
    <div className="bg-[#F7F5F0]">
      {/* 1. Hero Section strictly matching Section 6 & Wireframe Section 23 */}
      <Hero
        onExploreStories={() => onNavigateTab('stories')}
        onMeetFounders={() => onNavigateTab('founders')}
        onSelectStory={onSelectStory}
      />

      {/* 2. Featured Story strictly matching Section 7 (Zerodha) */}
      <FeaturedStory onReadStory={onSelectStory} />

      {/* 3. The 10 Startup Stories Grid Section matching Wireframe Section 23 */}
      <section className="py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b-2 border-stone-900 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#FF7A00] tracking-widest mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                Launch Collection
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
                Which 10 Startup Stories Define the Indian Ecosystem?
              </h2>
              <p className="text-stone-500 text-sm mt-1 font-sans">
                Forensic, source-verified case studies spanning FinTech, FoodTech, E-commerce, EdTech, D2C, and Hospitality.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('stories')}
              className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>View All 10 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORIES.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onReadStory={onSelectStory}
                isBookmarked={savedIds.includes(story.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Explore Industries Cards strictly matching Section 9 */}
      <IndustryCards
        onSelectIndustry={(indName) => onNavigateTab('industries', indName)}
        onViewAllIndustries={() => onNavigateTab('industries')}
      />

      {/* 5. Macro Statistics strictly matching Section 8 (200K+, 53%, 32 States) */}
      <StatisticsSection />

      {/* 6. Meet The Founders Spotlight strictly matching Section 15 */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b-2 border-stone-900 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#138A4B] tracking-widest mb-1">
                <Users className="w-3.5 h-3.5" />
                Founding Visionaries
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
                Who Are the Visionary Founders Behind India's Startups?
              </h2>
              <p className="text-stone-500 text-sm mt-1 font-sans">
                The leaders who identified tolerated consumer friction and built enduring market institutions.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('founders')}
              className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] hover:text-[#138A4B] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>View All 10 Founder Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Spotlight Founders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUNDERS.slice(0, 4).map((founder) => (
              <div
                key={founder.id}
                onClick={() => onSelectStory(founder.companyId)}
                className="bg-[#F7F5F0] border border-stone-200 hover:border-stone-400 p-5 rounded-xs cursor-pointer group transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative mb-4 overflow-hidden rounded-full w-20 h-20 mx-auto border-2 border-stone-300 group-hover:border-[#FF7A00] transition-colors">
                    <img
                      src={founder.avatar}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-center text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-center text-stone-500 font-semibold uppercase tracking-wider mt-0.5">
                    {founder.company}
                  </p>
                  <p className="font-editorial text-xs text-stone-600 italic text-center mt-3 line-clamp-2">
                    "{founder.famousQuote}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 text-center">
                  <span className="font-headline font-bold text-xs text-[#0B1F3A] group-hover:text-[#FF7A00] flex items-center justify-center gap-1">
                    <span>Read {founder.name} Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Marketing Teardowns & Failure Lessons Two-Column Spotlight */}
      <section className="py-16 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Marketing Breakdown Spotlight (Section 17) */}
            <div className="bg-white border border-stone-300 p-6 sm:p-8 rounded-xs shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-widest mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Digital Business & Marketing
                </div>
                <h3 className="font-headline text-2xl font-black text-[#0B1F3A] mb-2">
                  How Do India's Top Brands Scale Without Burning Cash?
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed mb-6">
                  Deep strategic teardowns on Zomato's moment marketing, boAt's youth lifestyle tribes, Nykaa's content-to-commerce, and Zerodha's Varsity.
                </p>

                <div className="space-y-3 mb-6">
                  {MARKETING_STUDIES.slice(0, 3).map((study) => (
                    <div
                      key={study.id}
                      onClick={() => onNavigateTab('marketing', study.id)}
                      className="p-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xs cursor-pointer group transition-colors flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                          {study.startup}
                        </span>
                        <h4 className="font-headline font-bold text-xs sm:text-sm text-stone-900 group-hover:text-[#0B1F3A] line-clamp-1">
                          {study.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-purple-600 shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('marketing')}
                className="w-full bg-[#0B1F3A] hover:bg-purple-900 text-white font-headline font-bold text-xs py-3 rounded-xs transition-colors cursor-pointer text-center"
              >
                Explore All 5 Marketing Teardowns →
              </button>
            </div>

            {/* Right: Failure Stories Spotlight (Section 18) */}
            <div className="bg-white border border-stone-300 p-6 sm:p-8 rounded-xs shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-widest mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Forensic Business Post-Mortems
                </div>
                <h3 className="font-headline text-2xl font-black text-[#0B1F3A] mb-2">
                  What Can Entrepreneurs Learn From Indian Startup Failures?
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed mb-6">
                  Objective case studies examining the unit-economics collapses, blitzscaling traps, and governance failures of Byju's, Doodhwala, Stayzilla, and TinyOwl.
                </p>

                <div className="space-y-3 mb-6">
                  {FAILURE_STORIES.slice(0, 3).map((fail) => (
                    <div
                      key={fail.id}
                      onClick={() => onNavigateTab('failures', fail.id)}
                      className="p-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xs cursor-pointer group transition-colors flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider">
                          {fail.startup} ({fail.industry})
                        </span>
                        <h4 className="font-headline font-bold text-xs sm:text-sm text-stone-900 group-hover:text-[#0B1F3A] line-clamp-1">
                          {fail.coreFailureMode}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-rose-600 shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('failures')}
                className="w-full bg-[#0B1F3A] hover:bg-rose-900 text-white font-headline font-bold text-xs py-3 rounded-xs transition-colors cursor-pointer text-center"
              >
                Explore All Failure Case Studies →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
