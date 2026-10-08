import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Bookmark,
  Share2,
  Printer,
  ShieldCheck,
  Check,
  ExternalLink,
  BookOpen,
  Volume2,
  VolumeX,
  Type,
  Award,
  ChevronRight,
  Sparkles,
  Copy,
  Tag
} from 'lucide-react';
import { Story, STORIES } from '../data/stories';
import { STORY_PAGES_SEO } from '../data/seoKeywords';

interface StoryViewProps {
  story: Story;
  onBack: () => void;
  onSelectStory: (id: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  story,
  onBack,
  onSelectStory,
  isBookmarked,
  onToggleBookmark
}) => {
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  // Scroll to top on story change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsPlayingAudio(false);
    setAudioProgress(0);
  }, [story.id]);

  // Simulated Audio Narrator
  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  // Citation generators for BBA/MBA college students
  const citationAPA = `Sharma, A., et al. (2026). "${story.title}". Indian Startup Stories Editorial Archive. https://indianstartupstories.in/startup-stories/${story.slug}`;
  const citationHarvard = `Indian Startup Stories, 2026. ${story.title} [online] Available at: <https://indianstartupstories.in/startup-stories/${story.slug}> [Accessed ${new Date().toLocaleDateString('en-GB')}].`;
  const citationChicago = `Indian Startup Stories. "${story.title}." Last modified ${story.updatedDate}. https://indianstartupstories.in/startup-stories/${story.slug}.`;

  const copyToClipboard = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCitation(format);
    setTimeout(() => setCopiedCitation(null), 2500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: story.subtitle,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const relatedStories = STORIES.filter((s) => story.relatedStoryIds.includes(s.id));

  const textClass =
    textSize === 'xlarge'
      ? 'text-xl leading-relaxed'
      : textSize === 'large'
      ? 'text-lg leading-relaxed'
      : 'text-base leading-relaxed';

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-24">
      {/* Top Reading Navigation Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 py-2.5 transition-all">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-[#0B1F3A] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Startup Stories</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 text-xs text-stone-600">
            {/* Audio summary simulator */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xs transition-colors cursor-pointer border ${
                isPlayingAudio
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-stone-100 hover:bg-stone-200 border-stone-200'
              }`}
              title="Listen to audio overview"
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span className="hidden sm:inline font-medium">Playing Audio ({audioProgress}%)</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline font-medium">Listen Overview</span>
                </>
              )}
            </button>

            {/* Font size toggle */}
            <div className="flex items-center bg-stone-100 rounded-xs p-0.5 border border-stone-200">
              <button
                onClick={() => setTextSize('normal')}
                className={`px-2 py-0.5 text-xs rounded-xs font-medium ${
                  textSize === 'normal' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500'
                }`}
                title="Normal text"
              >
                A
              </button>
              <button
                onClick={() => setTextSize('large')}
                className={`px-2 py-0.5 text-xs rounded-xs font-medium ${
                  textSize === 'large' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500'
                }`}
                title="Larger text"
              >
                A+
              </button>
            </div>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(story.id)}
              className={`p-1.5 border rounded-xs transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-[#FF7A00] text-white border-[#FF7A00]'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-200'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark story'}
            >
              <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-xs transition-colors cursor-pointer"
              title="Share article link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>

            {/* Print */}
            <button
              onClick={() => window.print()}
              className="hidden sm:flex p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-xs transition-colors cursor-pointer"
              title="Print article / Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        {/* Breadcrumb path */}
        <div className="flex items-center gap-1.5 text-xs text-stone-500 uppercase tracking-widest font-semibold mb-4">
          <span className="hover:text-stone-900 cursor-pointer" onClick={onBack}>Startup Stories</span>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-[#FF7A00]">{story.category}</span>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800">{story.company}</span>
        </div>

        {/* Layout per PRD Section 11:
            CATEGORY
            BIG BLOG HEADLINE
            Short description
            Author • Date • Reading Time
        */}
        <div className="space-y-4 mb-8">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#FF7A00] bg-orange-100/60 border border-orange-200/80 px-2.5 py-1 rounded-xs">
            {story.category}
          </span>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.12]">
            {story.title}
          </h1>

          <p className="font-editorial text-xl sm:text-2xl text-stone-700 leading-relaxed italic">
            {story.subtitle}
          </p>

          {/* Author, Date, Reading Time, and Updated Date */}
          <div className="pt-2 border-t border-b border-stone-300 py-3 flex flex-wrap items-center justify-between text-xs text-stone-600 gap-y-2">
            <div className="flex items-center gap-3">
              <div>
                <span className="font-bold text-stone-900 block">{story.author.name}</span>
                <span className="text-stone-500">{story.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-stone-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Published: {story.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {story.readTime}
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-medium">Updated: {story.updatedDate}</span>
            </div>
          </div>

          {/* Main Keyword and 2 Related Keywords */}
          {STORY_PAGES_SEO[story.id] && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-700 bg-stone-100/80 p-2.5 rounded-xs border border-stone-200">
              <span className="font-bold text-stone-900 uppercase tracking-wider text-[10px] flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#FF7A00]" />
                Target Keywords:
              </span>
              <span>
                <span className="text-stone-400 font-normal">Main:</span>{' '}
                <strong className="text-[#0B1F3A]">{STORY_PAGES_SEO[story.id].mainKeyword}</strong>
              </span>
              <span className="text-stone-300">•</span>
              <span>
                <span className="text-stone-400 font-normal">Related:</span>{' '}
                <span className="text-stone-800 font-medium">{STORY_PAGES_SEO[story.id].relatedKeywords[0]}</span>
                <span className="text-stone-300 mx-1.5">/</span>
                <span className="text-stone-800 font-medium">{STORY_PAGES_SEO[story.id].relatedKeywords[1]}</span>
              </span>
            </div>
          )}
        </div>

        {/* IMAGE 1: REAL HERO IMAGE per PRD Section 11 & Section 12 (Compact Height) */}
        <figure className="mb-8 bg-white border border-stone-300 rounded-xs overflow-hidden shadow-xs">
          <img
            src={story.heroImage.url}
            alt={story.title}
            className="w-full h-44 sm:h-52 md:h-56 object-cover"
          />
          <figcaption className="p-3 bg-white text-xs text-stone-600 font-sans border-t border-stone-200">
            <p className="font-medium text-stone-800">{story.heroImage.caption}</p>
            {/* Image credit strictly per Section 12 */}
            <p className="text-[11px] text-stone-500 mt-1">
              <strong>Image credit:</strong> <span className="text-stone-700">{story.heroImage.credit}</span>
            </p>
          </figcaption>
        </figure>

        {/* QUICK FACTS BOX per PRD Section 11 */}
        <section className="bg-white border-2 border-[#0B1F3A] p-6 rounded-xs shadow-xs mb-12">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
            <h3 className="font-headline text-xs font-black uppercase tracking-widest text-[#0B1F3A] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FF7A00]" />
              QUICK FACTS — {story.company.toUpperCase()}
            </h3>
            <span className="text-[11px] text-stone-400 font-medium">Verified by Editorial Team</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs">
              <span className="text-stone-400 font-semibold block uppercase text-[10px] tracking-wider">Founded</span>
              <span className="font-bold text-stone-900 text-sm mt-0.5 block">{story.quickFacts.founded}</span>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs">
              <span className="text-stone-400 font-semibold block uppercase text-[10px] tracking-wider">Founders</span>
              <span className="font-bold text-stone-900 text-sm mt-0.5 block">{story.quickFacts.founders}</span>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs">
              <span className="text-stone-400 font-semibold block uppercase text-[10px] tracking-wider">Headquarters</span>
              <span className="font-bold text-stone-900 text-sm mt-0.5 block">{story.quickFacts.headquarters}</span>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs">
              <span className="text-stone-400 font-semibold block uppercase text-[10px] tracking-wider">Funding Stage</span>
              <span className="font-bold text-emerald-800 text-sm mt-0.5 block">{story.quickFacts.fundingStage}</span>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs sm:col-span-2">
              <span className="text-stone-400 font-semibold block uppercase text-[10px] tracking-wider">Flagship Product</span>
              <span className="font-bold text-stone-900 text-sm mt-0.5 block">{story.quickFacts.flagshipProduct}</span>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs sm:col-span-2 md:col-span-3">
              <span className="text-stone-400 font-semibold block uppercase text-[10px] tracking-wider">Business Model</span>
              <span className="font-medium text-stone-800 text-xs mt-0.5 block leading-relaxed">{story.quickFacts.businessModel}</span>
            </div>

            <div className="p-3 bg-orange-50/70 border border-orange-200 rounded-xs sm:col-span-2 md:col-span-3">
              <span className="text-[#FF7A00] font-bold block uppercase text-[10px] tracking-wider">Key Operating Metric</span>
              <span className="font-bold text-[#0B1F3A] text-xs sm:text-sm mt-0.5 block">{story.quickFacts.keyMetric}</span>
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT BODY per PRD Section 11:
            - The Beginning
            - The Problem
            - Business Model
            - Marketing Strategy
            - Challenges
            - Lessons
        */}
        <div className={`space-y-8 text-stone-800 ${textClass}`}>
          {/* Introduction */}
          <div className="space-y-4">
            {story.introduction.map((p, idx) => (
              <p key={idx} className="font-sans leading-relaxed text-stone-800">
                {p}
              </p>
            ))}
          </div>

          {/* Section: The Beginning (Question-Answer Format for AEO) */}
          <section className="pt-4">
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4 pb-2 border-b border-stone-200">
              How Did {story.company} Get Started and Find Its Initial Idea?
            </h2>
            <div className="space-y-4 font-sans leading-relaxed">
              {story.theBeginning.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* IMAGE 2: FOUNDER PORTRAIT per PRD Section 12 (Compact Size) */}
          <figure className="my-6 max-w-lg mx-auto bg-white border border-stone-300 rounded-xs overflow-hidden shadow-xs">
            <img
              src={story.founderImage.url}
              alt={`Founder portrait of ${story.company}`}
              className="w-full h-44 sm:h-48 object-cover"
            />
            <figcaption className="p-3 bg-white text-xs text-stone-600 font-sans border-t border-stone-200">
              <p className="font-medium text-stone-800">{story.founderImage.caption}</p>
              {/* Image credit strictly per Section 12 */}
              <p className="text-[11px] text-stone-500 mt-1">
                <strong>Image credit:</strong> <span className="text-stone-700">{story.founderImage.credit}</span>
              </p>
            </figcaption>
          </figure>

          {/* Section: The Problem (Question-Answer Format for AEO) */}
          <section className="pt-4">
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4 pb-2 border-b border-stone-200">
              What Problem in the Indian Market Was {story.company} Solving?
            </h2>
            <div className="space-y-4 font-sans leading-relaxed">
              {story.theProblem.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Section: Technology & Product (Question-Answer Format for AEO) */}
          <section className="pt-4">
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4 pb-2 border-b border-stone-200">
              What Technology Architecture Powered {story.company}'s Scaling?
            </h2>
            <div className="space-y-4 font-sans leading-relaxed">
              {story.technologyAndProduct.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* IMAGE 3: PRODUCT / PLATFORM IMAGE per PRD Section 12 (Compact Size) */}
          <figure className="my-6 max-w-lg mx-auto bg-white border border-stone-300 rounded-xs overflow-hidden shadow-xs">
            <img
              src={story.productImage.url}
              alt={`Product interface of ${story.company}`}
              className="w-full h-44 sm:h-48 object-cover"
            />
            <figcaption className="p-3 bg-white text-xs text-stone-600 font-sans border-t border-stone-200">
              <p className="font-medium text-stone-800">{story.productImage.caption}</p>
              {/* Image credit strictly per Section 12 */}
              <p className="text-[11px] text-stone-500 mt-1">
                <strong>Image credit:</strong> <span className="text-stone-700">{story.productImage.credit}</span>
              </p>
            </figcaption>
          </figure>

          {/* Section: Business Model (Question-Answer Format for AEO) */}
          <section className="pt-4">
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4 pb-2 border-b border-stone-200">
              What Is {story.company}'s Business Model and Revenue Engine?
            </h2>
            <div className="space-y-4 font-sans leading-relaxed">
              {story.businessModel.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Section: Marketing Strategy (Question-Answer Format for AEO) */}
          <section className="pt-4">
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4 pb-2 border-b border-stone-200">
              How Did {story.company} Approach Marketing and Customer Acquisition?
            </h2>
            <div className="space-y-4 font-sans leading-relaxed">
              {story.marketingStrategy.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Section: Challenges (Question-Answer Format for AEO) */}
          <section className="pt-4">
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4 pb-2 border-b border-stone-200">
              What Critical Challenges Did {story.company} Overcome While Growing?
            </h2>
            <div className="space-y-4 font-sans leading-relaxed">
              {story.challenges.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Section: Lessons (Question-Answer Format for AEO) */}
          <section className="pt-6">
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-6 pb-2 border-b border-stone-200">
              What Are the Key Entrepreneurship Lessons From {story.company}?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {story.keyLessons.map((lesson) => (
                <div
                  key={lesson.number}
                  className="bg-white border border-stone-300 p-5 rounded-xs shadow-xs relative"
                >
                  <span className="font-headline font-black text-2xl text-[#FF7A00] mb-2 block">
                    0{lesson.number}.
                  </span>
                  <h3 className="font-headline font-bold text-base text-stone-900 mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Final Takeaway (Question-Answer Format for AEO) */}
          <section className="pt-6">
            <div className="bg-[#0B1F3A] text-white p-6 sm:p-8 rounded-xs shadow-md border-l-4 border-[#FF7A00]">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF7A00] block mb-2">
                What Is the Strategic Takeaway From {story.company}?
              </span>
              <p className="font-editorial text-lg sm:text-xl text-stone-100 leading-relaxed italic">
                "{story.finalTakeaway}"
              </p>
            </div>
          </section>
        </div>

        {/* TRUST & VERIFICATION SYSTEM per PRD Section 13 */}
        <section className="mt-14 pt-8 border-t-2 border-stone-300">
          <div className="bg-white border border-stone-300 p-6 sm:p-8 rounded-xs shadow-xs space-y-6">
            {/* Editorial Research Box */}
            <div className="flex items-start gap-3 bg-emerald-50/70 border border-emerald-200 p-4 rounded-xs">
              <ShieldCheck className="w-5 h-5 text-[#138A4B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-headline font-bold text-sm text-emerald-950">
                  🟢 Editorial Research & Verification
                </h4>
                <p className="text-xs text-emerald-900 mt-1 leading-relaxed font-sans">
                  This article was prepared using publicly available company information, government sources and independent reporting. Time-sensitive figures are presented with their relevant date.
                </p>
              </div>
            </div>

            {/* Sources List strictly per Section 13 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 font-sans text-xs">
              <div>
                <h5 className="font-headline font-bold text-xs uppercase tracking-wider text-stone-900 mb-2 border-b border-stone-200 pb-1">
                  Primary Sources
                </h5>
                <ul className="space-y-1.5 text-stone-700">
                  {story.sources.primary.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#FF7A00]">•</span>
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-headline font-bold text-xs uppercase tracking-wider text-stone-900 mb-2 border-b border-stone-200 pb-1">
                  Independent Sources
                </h5>
                <ul className="space-y-1.5 text-stone-700">
                  {story.sources.independent.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#138A4B]">•</span>
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC CITATION GENERATOR FOR STUDENTS */}
        <section className="mt-8 bg-stone-100 border border-stone-200 p-5 rounded-xs font-sans text-xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0B1F3A]" />
              <h4 className="font-headline font-bold text-stone-900">
                Cite this Case Study (For BBA/MBA Students & Researchers)
              </h4>
            </div>
            {copiedCitation && (
              <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Copied {copiedCitation} format!
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => copyToClipboard(citationAPA, 'APA')}
              className="p-2.5 bg-white hover:bg-stone-50 border border-stone-200 rounded-xs text-left cursor-pointer transition-colors"
            >
              <span className="font-bold text-stone-800 block text-[11px]">Copy APA Format</span>
              <span className="text-stone-500 text-[10px] truncate block mt-0.5">Sharma, A. (2026)...</span>
            </button>

            <button
              onClick={() => copyToClipboard(citationHarvard, 'Harvard')}
              className="p-2.5 bg-white hover:bg-stone-50 border border-stone-200 rounded-xs text-left cursor-pointer transition-colors"
            >
              <span className="font-bold text-stone-800 block text-[11px]">Copy Harvard Format</span>
              <span className="text-stone-500 text-[10px] truncate block mt-0.5">Indian Startup Stories (2026)...</span>
            </button>

            <button
              onClick={() => copyToClipboard(citationChicago, 'Chicago')}
              className="p-2.5 bg-white hover:bg-stone-50 border border-stone-200 rounded-xs text-left cursor-pointer transition-colors"
            >
              <span className="font-bold text-stone-800 block text-[11px]">Copy Chicago Format</span>
              <span className="text-stone-500 text-[10px] truncate block mt-0.5">Indian Startup Stories (2026)...</span>
            </button>
          </div>
        </section>

        {/* RELATED STORIES per PRD Section 11 */}
        {relatedStories.length > 0 && (
          <section className="mt-14 pt-8 border-t-2 border-stone-300">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200">
              <h3 className="font-headline text-xl font-extrabold text-[#0B1F3A]">
                Related Startup Stories
              </h3>
              <span className="text-xs text-stone-500">More case studies in {story.category}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedStories.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectStory(rel.id)}
                  className="bg-white border border-stone-200 hover:border-stone-400 p-4 rounded-xs cursor-pointer group transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#FF7A00] uppercase tracking-wider block mb-1">
                      {rel.category} • {rel.readTime}
                    </span>
                    <h4 className="font-headline font-bold text-sm text-stone-900 group-hover:text-[#0B1F3A] line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-700 group-hover:text-[#FF7A00]">
                    <span>Read {rel.company} Case Study</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
