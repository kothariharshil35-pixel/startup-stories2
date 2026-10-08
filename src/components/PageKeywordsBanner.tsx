import React from 'react';
import { Tag } from 'lucide-react';
import { PageSEO } from '../data/seoKeywords';

interface PageKeywordsBannerProps {
  seo: PageSEO;
  className?: string;
}

export const PageKeywordsBanner: React.FC<PageKeywordsBannerProps> = ({ seo, className = '' }) => {
  return (
    <div
      className={`border-b border-stone-200 bg-white/70 backdrop-blur-xs py-2 px-4 sm:px-6 lg:px-8 text-xs font-sans ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
        {/* Keywords cluster */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-stone-600">
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-stone-400">
            <Tag className="w-3 h-3 text-[#FF7A00]" />
            Editorial Taxonomy:
          </span>

          {/* Main Keyword */}
          <span className="text-stone-900 font-semibold">
            <span className="text-stone-400 font-normal mr-1">Main Keyword:</span>
            <span className="text-[#0B1F3A] font-bold underline decoration-[#FF7A00]/40 decoration-2 underline-offset-2">
              {seo.mainKeyword}
            </span>
          </span>

          <span className="text-stone-300 hidden sm:inline">•</span>

          {/* 2 Related Keywords */}
          <span className="text-stone-700">
            <span className="text-stone-400 font-normal mr-1">Related Keywords:</span>
            <span className="text-stone-800 font-medium">{seo.relatedKeywords[0]}</span>
            <span className="text-stone-300 mx-1.5">/</span>
            <span className="text-stone-800 font-medium">{seo.relatedKeywords[1]}</span>
          </span>
        </div>

        {/* Page context note */}
        <div className="text-[11px] text-stone-400 font-medium hidden md:block">
          Index Target: {seo.pageName}
        </div>
      </div>
    </div>
  );
};
