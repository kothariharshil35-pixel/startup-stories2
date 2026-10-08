import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Building, User, Tag, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { STORIES } from '../data/stories';
import { FOUNDERS } from '../data/founders';
import { INDUSTRIES_DATA } from '../data/industries';
import { MARKETING_STUDIES } from '../data/marketing';
import { FAILURE_STORIES } from '../data/failures';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string, param?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'stories' | 'founders' | 'industries' | 'marketing' | 'failures'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Filtered Results
  const matchedStories = STORIES.filter(
    (s) =>
      !q ||
      s.company.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.founders.some((f) => f.toLowerCase().includes(q)) ||
      s.quickFacts.businessModel.toLowerCase().includes(q)
  );

  const matchedFounders = FOUNDERS.filter(
    (f) =>
      !q ||
      f.name.toLowerCase().includes(q) ||
      f.company.toLowerCase().includes(q) ||
      f.originCity.toLowerCase().includes(q) ||
      f.philosophy.toLowerCase().includes(q)
  );

  const matchedIndustries = INDUSTRIES_DATA.filter(
    (ind) =>
      !q ||
      ind.name.toLowerCase().includes(q) ||
      ind.tagline.toLowerCase().includes(q) ||
      ind.featuredStartups.some((s) => s.toLowerCase().includes(q))
  );

  const matchedMarketing = MARKETING_STUDIES.filter(
    (m) =>
      !q ||
      m.title.toLowerCase().includes(q) ||
      m.startup.toLowerCase().includes(q) ||
      m.pillar.toLowerCase().includes(q) ||
      m.coreConcepts.some((c) => c.toLowerCase().includes(q))
  );

  const matchedFailures = FAILURE_STORIES.filter(
    (fail) =>
      !q ||
      fail.startup.toLowerCase().includes(q) ||
      fail.industry.toLowerCase().includes(q) ||
      fail.coreFailureMode.toLowerCase().includes(q)
  );

  const totalResults =
    (filterType === 'all' || filterType === 'stories' ? matchedStories.length : 0) +
    (filterType === 'all' || filterType === 'founders' ? matchedFounders.length : 0) +
    (filterType === 'all' || filterType === 'industries' ? matchedIndustries.length : 0) +
    (filterType === 'all' || filterType === 'marketing' ? matchedMarketing.length : 0) +
    (filterType === 'all' || filterType === 'failures' ? matchedFailures.length : 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-150">
      <div
        className="bg-[#F7F5F0] border border-stone-300 w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden mt-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 bg-white border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FF7A00] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search startups, founders, industries, keywords (e.g. FinTech, Nithin, boAt)..."
            className="flex-1 bg-transparent text-stone-900 placeholder-stone-400 text-base sm:text-lg focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 bg-stone-100 text-stone-600 hover:bg-stone-200 rounded-xs uppercase tracking-wider"
          >
            Esc
          </button>
        </div>

        {/* Filter Type Tabs */}
        <div className="px-4 py-2 bg-stone-100/80 border-b border-stone-200 flex items-center gap-2 overflow-x-auto text-xs font-sans">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'stories', label: 'Startup Stories' },
            { id: 'founders', label: 'Founders' },
            { id: 'industries', label: 'Industries' },
            { id: 'marketing', label: 'Marketing' },
            { id: 'failures', label: 'Failures' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id as any)}
              className={`px-3 py-1 rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                filterType === tab.id
                  ? 'bg-[#0B1F3A] text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Empty State */}
          {totalResults === 0 && (
            <div className="text-center py-12 text-stone-500">
              <AlertCircle className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <p className="font-semibold text-stone-700">No matching records found for "{query}"</p>
              <p className="text-xs text-stone-500 mt-1">
                Try searching for "FinTech", "Zomato", "Bootstrapping", "Falguni Nayar", or "EdTech".
              </p>
            </div>
          )}

          {/* Startup Stories Section */}
          {(filterType === 'all' || filterType === 'stories') && matchedStories.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#0B1F3A]" /> Startup Stories ({matchedStories.length})
                </span>
              </div>
              <div className="space-y-2">
                {matchedStories.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => {
                      onNavigate('story', story.id);
                      onClose();
                    }}
                    className="p-3 bg-white hover:bg-stone-50 border border-stone-200/80 rounded-xs cursor-pointer group transition-all flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-1">
                        <span className="font-semibold text-[#FF7A00]">{story.company}</span>
                        <span>•</span>
                        <span>{story.category}</span>
                        <span>•</span>
                        <span>{story.readTime}</span>
                        <span>•</span>
                        <span className="text-stone-400">{story.fundingStage}</span>
                      </div>
                      <h4 className="font-headline font-bold text-sm sm:text-base text-stone-900 group-hover:text-[#0B1F3A]">
                        {story.title}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-1 mt-0.5">
                        {story.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#FF7A00] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Founders Section */}
          {(filterType === 'all' || filterType === 'founders') && matchedFounders.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#138A4B]" /> Founders ({matchedFounders.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedFounders.map((founder) => (
                  <div
                    key={founder.id}
                    onClick={() => {
                      onNavigate('founders');
                      onClose();
                    }}
                    className="p-3 bg-white hover:bg-stone-50 border border-stone-200/80 rounded-xs cursor-pointer group transition-all flex items-center gap-3"
                  >
                    <img
                      src={founder.avatar}
                      alt={founder.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0 border border-stone-200"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-headline font-bold text-sm text-stone-900 group-hover:text-[#0B1F3A] truncate">
                        {founder.name}
                      </p>
                      <p className="text-xs text-stone-500 truncate">
                        {founder.company} <span className="text-stone-300">|</span> {founder.originCity}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#138A4B] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Industries Section */}
          {(filterType === 'all' || filterType === 'industries') && matchedIndustries.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#FF7A00]" /> Industries ({matchedIndustries.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedIndustries.map((ind) => (
                  <div
                    key={ind.id}
                    onClick={() => {
                      onNavigate('industries', ind.name);
                      onClose();
                    }}
                    className="p-3 bg-white hover:bg-stone-50 border border-stone-200/80 rounded-xs cursor-pointer group transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{ind.emoji}</span>
                      <div>
                        <p className="font-headline font-bold text-sm text-stone-900 group-hover:text-[#0B1F3A]">
                          {ind.name}
                        </p>
                        <p className="text-xs text-stone-500 truncate">
                          {ind.featuredStartups.join(', ')}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#FF7A00] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Marketing Breakdown Section */}
          {(filterType === 'all' || filterType === 'marketing') && matchedMarketing.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Marketing Teardowns ({matchedMarketing.length})
                </span>
              </div>
              <div className="space-y-2">
                {matchedMarketing.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      onNavigate('marketing', m.id);
                      onClose();
                    }}
                    className="p-3 bg-white hover:bg-stone-50 border border-stone-200/80 rounded-xs cursor-pointer group transition-all flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-xs font-semibold text-purple-700">{m.startup}</span>
                      <h5 className="font-headline font-bold text-sm text-stone-900 group-hover:text-[#0B1F3A]">
                        {m.title}
                      </h5>
                      <p className="text-xs text-stone-500 line-clamp-1">{m.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-purple-600 shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Failure Lessons Section */}
          {(filterType === 'all' || filterType === 'failures') && matchedFailures.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" /> Failure Post-Mortems ({matchedFailures.length})
                </span>
              </div>
              <div className="space-y-2">
                {matchedFailures.map((fail) => (
                  <div
                    key={fail.id}
                    onClick={() => {
                      onNavigate('failures', fail.id);
                      onClose();
                    }}
                    className="p-3 bg-white hover:bg-stone-50 border border-stone-200/80 rounded-xs cursor-pointer group transition-all flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-xs font-semibold text-rose-700">{fail.startup} ({fail.industry})</span>
                      <h5 className="font-headline font-bold text-sm text-stone-900 group-hover:text-[#0B1F3A]">
                        {fail.coreFailureMode}
                      </h5>
                      <p className="text-xs text-stone-500 line-clamp-1">{fail.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-rose-600 shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info in modal */}
        <div className="p-3 bg-stone-100 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
          <span>Search verified startup research</span>
          <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded-xs font-mono text-[10px]">Esc</kbd> to dismiss</span>
        </div>
      </div>
    </div>
  );
};
