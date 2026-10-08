import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { BookmarkDrawer } from './components/BookmarkDrawer';
import { HomeView } from './components/HomeView';
import { StoryView } from './components/StoryView';
import { StoryGridView } from './components/StoryGridView';
import { FoundersView } from './components/FoundersView';
import { FundingView } from './components/FundingView';
import { MarketingView } from './components/MarketingView';
import { FailuresView } from './components/FailuresView';
import { IndustriesView } from './components/IndustriesView';
import { AboutView } from './components/AboutView';
import { PageKeywordsBanner } from './components/PageKeywordsBanner';
import { STORIES, getStoryById } from './data/stories';
import { getPageSEO, updateDocumentSEO } from './data/seoKeywords';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedStoryId, setSelectedStoryId] = useState<string>('zerodha');
  const [tabParam, setTabParam] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);

  // Persisted Bookmarks in localStorage
  const [savedStoryIds, setSavedStoryIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('iss_saved_stories');
      return stored ? JSON.parse(stored) : ['zerodha', 'zomato'];
    } catch {
      return ['zerodha', 'zomato'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('iss_saved_stories', JSON.stringify(savedStoryIds));
    } catch (e) {
      console.error('Failed to save bookmarks to localStorage', e);
    }
  }, [savedStoryIds]);

  const handleToggleBookmark = (id: string) => {
    setSavedStoryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemoveBookmark = (id: string) => {
    setSavedStoryIds((prev) => prev.filter((item) => item !== id));
  };

  const handleClearAllBookmarks = () => {
    setSavedStoryIds([]);
  };

  // Navigation router
  const handleNavigate = (tab: string, param?: string) => {
    if (tab === 'story' && param) {
      setSelectedStoryId(param);
      setCurrentTab('story');
    } else {
      setCurrentTab(tab);
      setTabParam(param);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeStory = getStoryById(selectedStoryId) || STORIES[0];
  const currentSEO = getPageSEO(currentTab, selectedStoryId);

  useEffect(() => {
    updateDocumentSEO(currentSEO);
  }, [currentSEO]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717] font-sans">
      {/* Universal Editorial Masthead Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        bookmarksCount={savedStoryIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Page Keywords & Taxonomy Banner (Every page displays Main Keyword and 2 Related Keywords) */}
      <PageKeywordsBanner seo={currentSEO} />

      {/* Main View Switcher */}
      <div className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onSelectStory={(id) => handleNavigate('story', id)}
            onNavigateTab={handleNavigate}
            savedIds={savedStoryIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentTab === 'story' && (
          <StoryView
            story={activeStory}
            onBack={() => handleNavigate('stories')}
            onSelectStory={(id) => handleNavigate('story', id)}
            isBookmarked={savedStoryIds.includes(activeStory.id)}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentTab === 'stories' && (
          <StoryGridView
            onSelectStory={(id) => handleNavigate('story', id)}
            savedIds={savedStoryIds}
            onToggleBookmark={handleToggleBookmark}
            initialCategory={tabParam}
          />
        )}

        {currentTab === 'founders' && (
          <FoundersView onSelectStory={(companyId) => handleNavigate('story', companyId)} />
        )}

        {currentTab === 'funding' && (
          <FundingView onSelectStory={(storyId) => handleNavigate('story', storyId)} />
        )}

        {currentTab === 'marketing' && (
          <MarketingView onSelectStory={(storyId) => handleNavigate('story', storyId)} />
        )}

        {currentTab === 'failures' && (
          <FailuresView onSelectStory={(id) => handleNavigate('story', id)} />
        )}

        {currentTab === 'industries' && (
          <IndustriesView
            initialIndustry={tabParam}
            onSelectStory={(id) => handleNavigate('story', id)}
            savedIds={savedStoryIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentTab === 'about' && <AboutView />}
      </div>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Slide-over Saved Reading List Drawer */}
      <BookmarkDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedIds={savedStoryIds}
        onRemoveBookmark={handleRemoveBookmark}
        onClearAll={handleClearAllBookmarks}
        onNavigateStory={(id) => handleNavigate('story', id)}
      />

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
