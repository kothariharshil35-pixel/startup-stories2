import React, { useState } from 'react';
import { AlertCircle, Clock, TrendingDown, BookOpen, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FAILURE_STORIES, FailureCaseStudy } from '../data/failures';

interface FailuresViewProps {
  onSelectStory?: (id: string) => void;
}

export const FailuresView: React.FC<FailuresViewProps> = () => {
  const [activeFailureId, setActiveFailureId] = useState<string>(FAILURE_STORIES[0].id);

  const activeFailure = FAILURE_STORIES.find((f) => f.id === activeFailureId) || FAILURE_STORIES[0];

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header strictly per Section 18 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-widest mb-2">
            <AlertCircle className="w-3.5 h-3.5" />
            Forensic Business Post-Mortems
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
            Startup Lessons From Failure
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-3 font-sans leading-relaxed">
            Instead of celebrating only runaway successes, this section objectively examines the strategic miscalculations, cash flow crises, unit-economics traps, and scaling bottlenecks behind notable Indian venture failures.
          </p>

          <div className="mt-4 p-3 bg-stone-100 border border-stone-300 rounded-xs text-xs text-stone-600 font-sans">
            <strong>Editorial Standard:</strong> Our analyses remain objective, respectful, and focused on educational frameworks for aspiring entrepreneurs and business students.
          </div>
        </div>

        {/* Failure Case Study Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {FAILURE_STORIES.map((item) => {
            const isSelected = item.id === activeFailureId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveFailureId(item.id)}
                className={`p-4 text-left rounded-xs border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md ring-2 ring-rose-500'
                    : 'bg-white hover:bg-stone-50 text-stone-900 border-stone-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1">
                    <span className={isSelected ? 'text-rose-400' : 'text-rose-700'}>
                      {item.industry}
                    </span>
                    <span className={isSelected ? 'text-stone-300' : 'text-stone-400'}>
                      {item.founded}–{item.ceasedOrPivotedYear}
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-sm line-clamp-1">{item.startup}</h4>
                  <p
                    className={`text-xs mt-1 line-clamp-2 ${
                      isSelected ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    {item.coreFailureMode}
                  </p>
                </div>
                <div
                  className={`mt-3 pt-2 border-t text-[11px] font-medium flex items-center justify-between ${
                    isSelected ? 'border-white/10 text-stone-300' : 'border-stone-100 text-stone-500'
                  }`}
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Failure Analysis Detail Card */}
        <div className="bg-white border border-stone-300 rounded-xs shadow-xs overflow-hidden">
          {/* Card Banner */}
          <div className="p-6 sm:p-8 bg-stone-50 border-b border-stone-200">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-3">
              <span className="font-bold text-rose-700 uppercase tracking-widest">
                {activeFailure.industry} • OPERATIONAL POST-MORTEM
              </span>
              <span className="text-stone-500">
                Active Era: {activeFailure.founded} – {activeFailure.ceasedOrPivotedYear}
              </span>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] mb-3">
              Why Did {activeFailure.startup} Face Critical Challenges?
            </h2>

            <p className="font-editorial text-lg text-stone-700 italic leading-relaxed mb-6">
              "{activeFailure.summary}"
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
              <div className="p-3 bg-white border border-stone-200 rounded-xs">
                <span className="text-stone-400 font-semibold block uppercase text-[10px] tracking-wider">
                  Total Capital Raised
                </span>
                <span className="font-bold text-stone-900 mt-0.5 block">{activeFailure.totalFundingRaised}</span>
              </div>

              <div className="p-3 bg-white border border-stone-200 rounded-xs">
                <span className="text-stone-400 font-semibold block uppercase text-[10px] tracking-wider">
                  Peak Scale / Valuation
                </span>
                <span className="font-bold text-stone-900 mt-0.5 block">{activeFailure.peakScale}</span>
              </div>

              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xs sm:col-span-1">
                <span className="text-rose-700 font-semibold block uppercase text-[10px] tracking-wider">
                  Core Failure Vector
                </span>
                <span className="font-bold text-rose-950 mt-0.5 block line-clamp-1">
                  {activeFailure.coreFailureMode}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            {/* Timeline of Rise and Fall */}
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-stone-200 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF7A00]" />
                Chronological Trajectory
              </h3>
              <div className="space-y-3">
                {activeFailure.timeline.map((t, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs p-3 bg-stone-50 rounded-xs border border-stone-200 font-sans">
                    <span className="font-bold text-[#0B1F3A] sm:w-28 shrink-0">{t.period}</span>
                    <p className="text-stone-700 leading-relaxed flex-1">{t.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Anatomical Breakdown */}
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-stone-200 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                Root Cause Analysis
              </h3>
              <div className="space-y-4">
                {activeFailure.anatomicalBreakdown.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white border border-stone-200 rounded-xs shadow-xs">
                    <h4 className="font-headline font-bold text-base text-stone-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {item.analysis}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics & Pitfalls */}
            <div className="p-5 bg-rose-50/50 border border-rose-200 rounded-xs">
              <h4 className="font-headline font-bold text-sm text-rose-950 mb-3 uppercase tracking-wider">
                Financial & Unit Economics Pitfalls
              </h4>
              <ul className="space-y-2 text-xs text-rose-900 font-sans">
                {activeFailure.financialAndUnitEconomicsPitfalls.map((pit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">✕</span>
                    <span>{pit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Takeaways */}
            <div className="p-6 bg-[#0B1F3A] text-white rounded-xs">
              <h4 className="font-headline font-bold text-base text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#FF7A00]" />
                Key Principles for Student Founders & Analysts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
                {activeFailure.studentTakeaways.map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#152B47] border border-[#254670] rounded-xs">
                    <span className="font-bold text-[#FF7A00] block text-sm mb-1">
                      Rule: {item.rule}
                    </span>
                    <p className="text-stone-300 leading-relaxed">{item.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
