import React from 'react';
import { ShieldCheck, BookOpen, Check, Award, FileText, Users, Mail, Sparkles, Scale, RefreshCw } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Masthead Header strictly per Section 19 */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] block mb-2">
            Independent Business Publication
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
            Our Mission & Standards
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-3 font-sans">
            Bridging rigorous academic research with accessible business journalism for India's next generation of builders.
          </p>
        </div>

        {/* Mission Statement Quote Box strictly per Section 19 */}
        <section className="bg-white border-2 border-[#0B1F3A] p-8 sm:p-12 rounded-xs shadow-xs relative">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7A00] block mb-4">
            OUR MISSION
          </span>

          <blockquote className="font-editorial text-2xl sm:text-3xl text-[#0B1F3A] italic leading-snug border-l-4 border-[#FF7A00] pl-6 py-2 my-4">
            "Indian Startup Stories exists to document the people, ideas and decisions behind India's startup ecosystem."
          </blockquote>

          <div className="mt-8 pt-6 border-t border-stone-200 text-stone-700 text-base leading-relaxed font-sans space-y-4">
            <p>
              We believe that startup stories should be much more than sensational success headlines or transient valuation gossip.
            </p>
            <p className="font-semibold text-stone-900">
              Behind every transformative company are:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-stone-800 font-headline font-bold text-sm">
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
                <span>Ideas.</span>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#138A4B]"></span>
                <span>Experiments.</span>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Failures.</span>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>Pivots.</span>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>People.</span>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Decisions.</span>
              </div>
            </div>
            <p className="pt-2">
              Our core goal is to make those messy, courageous journeys transparent and accessible to college students, aspiring entrepreneurs, researchers, and anyone curious about the mechanics of modern enterprise.
            </p>
          </div>
        </section>

        {/* Editorial Policy strictly per Section 20 */}
        <section className="bg-white border border-stone-300 p-8 sm:p-12 rounded-xs shadow-xs space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A4B] block mb-1">
              ETHICS & INTEGRITY
            </span>
            <h2 className="font-headline text-3xl font-extrabold text-[#0B1F3A]">
              Editorial Policy: What We Believe
            </h2>
            <p className="text-stone-600 text-sm mt-1 font-sans">
              Every case study published on this platform adheres to five non-negotiable verification rules.
            </p>
          </div>

          <div className="space-y-6 divide-y divide-stone-100">
            {/* 1. We verify */}
            <div className="pt-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                01
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-stone-900">
                  We verify.
                </h3>
                <p className="text-sm text-stone-600 font-sans leading-relaxed mt-1">
                  Important financial and operational claims must be verified against regulatory authorities (MCA filings, SEBI prospectuses, RBI registries) and verified earnings disclosures rather than promotional press releases.
                </p>
              </div>
            </div>

            {/* 2. We cite */}
            <div className="pt-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm shrink-0">
                02
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-stone-900">
                  We cite.
                </h3>
                <p className="text-sm text-stone-600 font-sans leading-relaxed mt-1">
                  Readers should always be able to inspect where information came from. Every case study carries explicit primary sources and accredited independent business press citations (Reuters, Economic Times, Mint, Business Standard).
                </p>
              </div>
            </div>

            {/* 3. We update */}
            <div className="pt-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
                03
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-stone-900">
                  We update.
                </h3>
                <p className="text-sm text-stone-600 font-sans leading-relaxed mt-1">
                  Startup metrics, market caps, and funding rounds evolve rapidly. Time-sensitive figures are presented alongside a visible "Last Updated" timestamp so students never cite stale data.
                </p>
              </div>
            </div>

            {/* 4. We distinguish fact from analysis */}
            <div className="pt-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm shrink-0">
                04
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-stone-900">
                  We distinguish fact from analysis.
                </h3>
                <p className="text-sm text-stone-600 font-sans leading-relaxed mt-1">
                  Company marketing claims and editorial interpretation should never be presented as the same thing. When an entrepreneur claims a metric, we identify it as self-reported; when an auditor verifies a balance sheet, we state it as statutory fact.
                </p>
              </div>
            </div>

            {/* 5. We correct */}
            <div className="pt-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm shrink-0">
                05
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-stone-900">
                  We correct.
                </h3>
                <p className="text-sm text-stone-600 font-sans leading-relaxed mt-1">
                  If a factual discrepancy or revised regulatory disclosure comes to light, the case study is updated promptly with a transparent editorial correction note.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Use Guide for Students */}
        <section className="bg-[#0B1F3A] text-white p-8 sm:p-12 rounded-xs shadow-md">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF7A00] mb-2">
            <BookOpen className="w-4 h-4" />
            Curriculum & Classroom Use
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-white mb-4">
            How College Students Can Use These Case Studies
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed font-sans mb-6">
            Designed for students enrolled in BBA, MBA, Digital Business, Entrepreneurship, and Corporate Finance programs across Indian universities and global business schools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 bg-[#152B47] border border-[#254670] rounded-xs">
              <h4 className="font-bold text-stone-100 text-sm mb-1">
                For Term Papers & Case Presentations
              </h4>
              <p className="text-stone-300 leading-relaxed">
                Use the verified unit economics, marketing strategies, and primary sources directly in your seminar slides. Each case study includes one-click APA, Harvard, and Chicago citation copying.
              </p>
            </div>

            <div className="p-4 bg-[#152B47] border border-[#254670] rounded-xs">
              <h4 className="font-bold text-stone-100 text-sm mb-1">
                For Aspiring Student Founders
              </h4>
              <p className="text-stone-300 leading-relaxed">
                Analyze why Zerodha chose bootstrapping over VC, how boAt tuned products for Indian audio tastes, and how Byju's and Doodhwala stumbled so you can avoid costly operational errors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
