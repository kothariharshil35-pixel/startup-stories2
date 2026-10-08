import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Clock, Lightbulb, Target, Award, CheckCircle2 } from 'lucide-react';
import { MARKETING_STUDIES, MarketingCaseStudy } from '../data/marketing';

interface MarketingViewProps {
  onSelectStory: (storyId: string) => void;
}

export const MarketingView: React.FC<MarketingViewProps> = ({ onSelectStory }) => {
  const [activeStudyId, setActiveStudyId] = useState<string>(MARKETING_STUDIES[0].id);

  const activeStudy = MARKETING_STUDIES.find((m) => m.id === activeStudyId) || MARKETING_STUDIES[0];

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead Header strictly per Section 17 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Digital Business & Growth Strategy
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
            Marketing & Growth Teardowns
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-3 font-sans leading-relaxed">
            Essential case studies designed specifically for students studying Digital Marketing, MBA, BBA, and Consumer Behavior. Explore how India's top brands conquer customer acquisition without falling into the paid-ad trap.
          </p>
        </div>

        {/* 5 Featured Articles Selector per Section 17 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {MARKETING_STUDIES.map((study) => {
            const isSelected = study.id === activeStudyId;
            return (
              <button
                key={study.id}
                onClick={() => setActiveStudyId(study.id)}
                className={`p-4 text-left rounded-xs border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md ring-2 ring-[#FF7A00]'
                    : 'bg-white hover:bg-stone-50 text-stone-900 border-stone-200'
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                      isSelected ? 'text-[#FF7A00]' : 'text-stone-400'
                    }`}
                  >
                    {study.startup}
                  </span>
                  <h4 className="font-headline font-bold text-xs sm:text-sm line-clamp-2 leading-snug">
                    {study.title}
                  </h4>
                </div>
                <div
                  className={`mt-3 pt-2 border-t text-[11px] font-medium flex items-center justify-between ${
                    isSelected ? 'border-white/10 text-stone-300' : 'border-stone-100 text-stone-500'
                  }`}
                >
                  <span>{study.readTime}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active In-Depth Teardown Card */}
        <div className="bg-white border border-stone-300 rounded-xs shadow-sm overflow-hidden">
          {/* Hero Banner inside teardown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-stone-200 bg-stone-50">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase tracking-wider mb-2">
                  <span>{activeStudy.startup}</span>
                  <span>•</span>
                  <span>{activeStudy.pillar}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-stone-500">
                    <Clock className="w-3 h-3" /> {activeStudy.readTime}
                  </span>
                </div>

                <h2 className="font-headline font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] leading-tight mb-4">
                  {activeStudy.title}
                </h2>

                <p className="font-editorial text-lg text-stone-700 italic leading-relaxed">
                  "{activeStudy.summary}"
                </p>
              </div>

              {/* Core Concepts */}
              <div className="mt-6 pt-4 border-t border-stone-200">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                  Strategic Frameworks Analyzed
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.coreConcepts.map((concept) => (
                    <span
                      key={concept}
                      className="px-2.5 py-1 bg-stone-200 text-stone-800 text-xs font-semibold rounded-xs"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-900 overflow-hidden">
              <img
                src={activeStudy.heroImage}
                alt={activeStudy.title}
                className="w-full h-full min-h-[280px] object-cover opacity-90 hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Breakdown Steps */}
          <div className="p-6 sm:p-10 space-y-10">
            <div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-6 pb-2 border-b-2 border-stone-900">
                Playbook Breakdown & Real-World Tactics
              </h3>

              <div className="space-y-8">
                {activeStudy.breakdown.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 border border-stone-200 p-6 rounded-xs">
                    <h4 className="font-headline font-bold text-lg text-stone-900 mb-2">
                      {item.heading}
                    </h4>
                    <p className="text-sm text-stone-700 leading-relaxed font-sans mb-4">
                      {item.description}
                    </p>

                    {item.quoteOrExample && (
                      <div className="p-3 bg-white border-l-3 border-[#FF7A00] text-xs font-medium text-stone-800 italic mb-4 font-editorial text-sm">
                        {item.quoteOrExample}
                      </div>
                    )}

                    <div>
                      <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">
                        Execution Details:
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-600 font-sans">
                        {item.tactics.map((tac, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <span className="text-[#FF7A00] font-bold">•</span>
                            <span>{tac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Impact */}
            <div className="bg-emerald-50/60 border border-emerald-200 p-6 rounded-xs">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#138A4B]" />
                <h4 className="font-headline font-bold text-base text-emerald-950">
                  Measurable Growth & Market Impact
                </h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-emerald-900 font-sans">
                {activeStudy.metricsAndImpact.map((metric, mIdx) => (
                  <li key={mIdx} className="p-3 bg-white border border-emerald-200 rounded-xs">
                    <span className="font-bold text-emerald-800 block mb-1">Impact {mIdx + 1}</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Takeaways for Students */}
            <div className="bg-[#0B1F3A] text-white p-6 sm:p-8 rounded-xs">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-[#FF7A00]" />
                <h4 className="font-headline font-bold text-lg text-white">
                  Actionable Lessons for BBA / MBA & Digital Business Students
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                {activeStudy.takeawaysForStudents.map((takeaway, tIdx) => (
                  <div key={tIdx} className="p-4 bg-[#152B47] border border-[#254670] rounded-xs">
                    <span className="text-[#FF7A00] font-bold block mb-1 text-[11px] uppercase tracking-wider">
                      Principle 0{tIdx + 1}
                    </span>
                    <p className="text-stone-200 leading-relaxed">{takeaway}</p>
                  </div>
                ))}
              </div>

              {/* Link to Full Startup Case Study */}
              <div className="mt-6 pt-4 border-t border-[#1C3659] flex items-center justify-between">
                <span className="text-xs text-stone-300">
                  Want the full financial and operational breakdown of {activeStudy.startup}?
                </span>
                <button
                  onClick={() => onSelectStory(activeStudy.storyId)}
                  className="bg-[#FF7A00] hover:bg-[#E06C00] text-white font-headline font-bold text-xs px-4 py-2 rounded-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Read Full {activeStudy.startup} Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
