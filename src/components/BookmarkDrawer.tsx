import React from 'react';
import { X, Bookmark, ArrowRight, Trash2, BookOpen } from 'lucide-react';
import { Story, STORIES } from '../data/stories';

interface BookmarkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
  onNavigateStory: (id: string) => void;
}

export const BookmarkDrawer: React.FC<BookmarkDrawerProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemoveBookmark,
  onClearAll,
  onNavigateStory
}) => {
  if (!isOpen) return null;

  const savedStories = STORIES.filter((s) => savedIds.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-[#F7F5F0] h-full shadow-2xl flex flex-col border-l border-stone-300 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-[#0B1F3A] text-white flex items-center justify-between border-b border-[#1E3A5F]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#FF7A00]" />
            <div>
              <h3 className="font-headline font-bold text-base">Saved Reading List</h3>
              <p className="text-xs text-stone-300">
                {savedStories.length} {savedStories.length === 1 ? 'case study' : 'case studies'} saved for research
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white hover:bg-[#152B47] rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Story List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedStories.length === 0 ? (
            <div className="text-center py-16 px-4">
              <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h4 className="font-headline font-bold text-stone-700 text-base">Your reading list is empty</h4>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Click the bookmark icon on any startup story to save it here for reference while writing college case reports.
              </p>
            </div>
          ) : (
            savedStories.map((story) => (
              <div
                key={story.id}
                className="bg-white border border-stone-200 p-3.5 rounded-xs shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[11px] font-bold text-[#FF7A00] uppercase tracking-wider">
                      {story.company} • {story.category}
                    </span>
                    <h5 className="font-headline font-bold text-sm text-stone-900 line-clamp-1 mt-0.5">
                      {story.title}
                    </h5>
                  </div>
                  <button
                    onClick={() => onRemoveBookmark(story.id)}
                    className="text-stone-400 hover:text-rose-600 p-1 shrink-0"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-stone-500 line-clamp-2 mb-3 font-sans">
                  {story.subtitle}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
                  <span className="text-stone-400">{story.readTime}</span>
                  <button
                    onClick={() => {
                      onNavigateStory(story.id);
                      onClose();
                    }}
                    className="font-bold text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedStories.length > 0 && (
          <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between text-xs">
            <button
              onClick={onClearAll}
              className="text-stone-500 hover:text-rose-600 font-medium cursor-pointer"
            >
              Clear all bookmarks
            </button>
            <span className="text-stone-400">Stored locally in browser</span>
          </div>
        )}
      </div>
    </div>
  );
};
