import React, { useState } from 'react';
import { Search, Bookmark, Menu, X, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string, param?: string) => void;
  onOpenSearch: () => void;
  bookmarksCount: number;
  onOpenBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenSearch,
  bookmarksCount,
  onOpenBookmarks
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'stories', label: 'STARTUP STORIES' },
    { id: 'founders', label: 'FOUNDERS' },
    { id: 'industries', label: 'INDUSTRIES' },
    { id: 'marketing', label: 'MARKETING' },
    { id: 'funding', label: 'FUNDING' },
    { id: 'failures', label: 'FAILURE STORIES' },
    { id: 'about', label: 'ABOUT' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B1F3A] text-white border-b border-[#1E3A5F] shadow-sm">
      {/* Top micro-bar for editorial trust & date */}
      <div className="hidden lg:block bg-[#071527] text-xs text-stone-300 py-1 px-6 border-b border-[#152B47]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Case Studies
            </span>
            <span className="text-stone-500">|</span>
            <span className="text-stone-300">National Startup Day Reference Standard</span>
            <span className="text-stone-500">|</span>
            <span className="text-[#FF7A00]">Curated for BBA, MBA & Aspiring Founders</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>DPIIT Benchmark 2026</span>
            <button
              onClick={() => onNavigate('about')}
              className="text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              Editorial Policy
            </button>
          </div>
        </div>
      </div>

      {/* Main Masthead Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Tagline */}
          <div
            onClick={() => onNavigate('home')}
            className="cursor-pointer group flex flex-col justify-center"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-headline font-black text-2xl sm:text-3xl tracking-tight text-white group-hover:text-stone-100 transition-colors">
                INDIAN STARTUP STORIES
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] inline-block mb-1"></span>
            </div>
            <p className="text-xs tracking-wider uppercase text-stone-300 font-medium font-sans">
              Real Founders <span className="text-[#FF7A00]">•</span> Real Journeys <span className="text-[#138A4B]">•</span> Real Stories
            </p>
          </div>

          {/* Actions: Search & Bookmarks & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm bg-[#152B47] hover:bg-[#1E3A5F] text-stone-200 hover:text-white border border-[#254670] rounded-sm transition-all cursor-pointer group"
              aria-label="Search startups, founders, industries"
            >
              <Search className="w-4 h-4 text-[#FF7A00] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-sans text-xs tracking-wide">
                Search <span className="text-stone-400 text-[11px] ml-1">⌘K</span>
              </span>
            </button>

            {/* Bookmarks / Saved Stories */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-2 text-stone-300 hover:text-white bg-[#152B47] hover:bg-[#1E3A5F] border border-[#254670] rounded-sm transition-colors cursor-pointer"
              title="Saved Reading List"
              aria-label="Saved Reading List"
            >
              <Bookmark className="w-4 h-4" />
              <span className="sr-only">View Saved Reading List</span>
              {bookmarksCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF7A00] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </div>
        </div>

        {/* Secondary Navigation Bar (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 border-t border-[#183152] py-2 overflow-x-auto text-xs tracking-wider font-semibold font-sans">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-1.5 transition-colors cursor-pointer whitespace-nowrap rounded-xs ${
                  isActive
                    ? 'text-white bg-[#FF7A00] font-bold'
                    : 'text-stone-300 hover:text-white hover:bg-[#152B47]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071527] border-b border-[#1E3A5F] px-4 pt-3 pb-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 text-sm font-medium tracking-wide flex items-center justify-between rounded-sm ${
                currentTab === item.id
                  ? 'bg-[#FF7A00] text-white font-bold'
                  : 'text-stone-200 hover:bg-[#152B47]'
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </button>
          ))}
          <div className="pt-4 border-t border-[#183152] flex flex-col gap-2 text-xs text-stone-400">
            <button
              onClick={() => {
                onOpenBookmarks();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 py-2 text-stone-200"
            >
              <BookOpen className="w-4 h-4 text-[#FF7A00]" />
              <span>Saved Reading List ({bookmarksCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
