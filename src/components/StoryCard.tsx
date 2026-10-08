import React from 'react';
import { Bookmark, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Story } from '../data/stories';

interface StoryCardProps {
  story: Story;
  onReadStory: (id: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  onReadStory,
  isBookmarked,
  onToggleBookmark
}) => {
  return (
    <article className="bg-white border border-stone-200 hover:border-stone-400 rounded-xs shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
      {/* Visual Thumbnail (Compact Height) */}
      <div className="relative overflow-hidden bg-stone-100 h-36 sm:h-40 w-full">
        <img
          src={story.heroImage.url}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
        />
        {/* Category & Stage overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0B1F3A]/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-xs tracking-wider uppercase backdrop-blur-xs">
          <span>{story.category}</span>
          <span className="text-stone-400">•</span>
          <span className="text-[#FF7A00]">{story.fundingStage}</span>
        </div>

        {/* Bookmark Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(story.id);
          }}
          className={`absolute top-3 right-3 p-1.5 rounded-xs transition-colors cursor-pointer shadow-sm ${
            isBookmarked
              ? 'bg-[#FF7A00] text-white'
              : 'bg-white/90 text-stone-700 hover:text-black hover:bg-white'
          }`}
          title={isBookmarked ? 'Remove bookmark' : 'Save for later research'}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Save for later research'}
        >
          <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata strictly following Zero-Pill rule */}
          <div className="flex items-center gap-2 text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
            <span className="text-[#0B1F3A] font-extrabold">{story.company}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {story.readTime}
            </span>
            <span>•</span>
            <span>Est. {story.founded}</span>
          </div>

          {/* Big Blog Headline */}
          <h3
            onClick={() => onReadStory(story.id)}
            className="font-headline font-bold text-lg text-stone-900 group-hover:text-[#0B1F3A] leading-snug cursor-pointer transition-colors"
          >
            {story.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed font-sans">
            {story.subtitle}
          </p>

          {/* Key Metric Preview */}
          <div className="mt-3 py-2 px-2.5 bg-stone-50 border-l-2 border-[#138A4B] text-[11px] text-stone-700 font-sans">
            <span className="font-semibold text-stone-900">Key Metric: </span>
            <span className="line-clamp-1">{story.quickFacts.keyMetric}</span>
          </div>
        </div>

        {/* Footer info: Founders & Action */}
        <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div className="text-[11px] text-stone-500 truncate mr-2">
            By <span className="text-stone-800 font-medium">{story.founders.join(', ')}</span>
          </div>
          <button
            onClick={() => onReadStory(story.id)}
            className="text-xs font-bold text-[#0B1F3A] group-hover:text-[#FF7A00] flex items-center gap-1 transition-colors cursor-pointer shrink-0"
          >
            <span>Read {story.company} Story</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
