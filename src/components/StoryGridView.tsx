import React, { useState } from 'react';
import { BookOpen, Filter, Search, Clock, ArrowRight } from 'lucide-react';
import { STORIES, Story } from '../data/stories';
import { StoryCard } from './StoryCard';

interface StoryGridViewProps {
  onSelectStory: (id: string) => void;
  savedIds: string[];
  onToggleBookmark: (id: string) => void;
  initialCategory?: string;
}

export const StoryGridView: React.FC<StoryGridViewProps> = ({
  onSelectStory,
  savedIds,
  onToggleBookmark,
  initialCategory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'FinTech',
    'FoodTech',
    'E-commerce',
    'Consumer Tech',
    'EdTech',
    'Hospitality'
  ];

  const stages = ['All', 'Bootstrapped', 'Public', 'Private'];

  const filteredStories = STORIES.filter((story) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      story.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesStage =
      selectedStage === 'All' || story.fundingStage === selectedStage;
    const matchesSearch =
      !searchQuery ||
      story.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.founders.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      story.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStage && matchesSearch;
  });

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            Editorial Publication Catalog
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
            10 Launch Startup Stories
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-3 font-sans leading-relaxed">
            The complete collection of in-depth case studies documenting Indian entrepreneurship, unit economics, platform architecture, and strategic decisions.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white border border-stone-200 p-4 rounded-xs shadow-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by company, founder, keywords..."
              className="w-full bg-stone-50 border border-stone-200 text-xs pl-9 pr-3 py-2.5 rounded-xs focus:outline-none focus:border-[#0B1F3A]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Category filter */}
            <div className="flex items-center gap-1 overflow-x-auto text-xs py-1">
              <span className="text-stone-400 font-semibold mr-1">Sector:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#0B1F3A] text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Stage filter */}
            <div className="flex items-center gap-1 text-xs ml-auto sm:ml-2">
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="bg-stone-100 border border-stone-200 text-xs px-2.5 py-1.5 rounded-xs font-semibold text-stone-700 focus:outline-none"
              >
                <option value="All">All Stages</option>
                <option value="Bootstrapped">Bootstrapped</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
        </div>

        {/* Story Grid */}
        {filteredStories.length === 0 ? (
          <div className="bg-white border border-stone-200 p-12 text-center text-stone-500 rounded-xs">
            <p className="font-bold text-stone-800 text-base">No startup stories match your filter criteria.</p>
            <p className="text-xs text-stone-500 mt-1">Try resetting the category filter or searching for another keyword.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStage('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#0B1F3A] text-white text-xs font-bold rounded-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
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
  );
};
