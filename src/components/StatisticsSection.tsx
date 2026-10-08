import React from 'react';
import { TrendingUp, MapPin, Building2, ExternalLink, ShieldCheck } from 'lucide-react';
import { ECOSYSTEM_STATISTICS } from '../data/industries';

export const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-[#0B1F3A] text-white py-16 border-y border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#152B47] text-[#FF7A00] text-xs font-bold uppercase tracking-widest rounded-xs mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Macro Landscape
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Does India's Macro Startup Ecosystem Look Like?
          </h2>
          <p className="text-stone-300 text-sm mt-2 font-sans">
            Official figures published by Startup India and the Department for Promotion of Industry and Internal Trade (DPIIT) reflecting the nationwide entrepreneurial footprint.
          </p>
        </div>

        {/* 3 Oversized Statistics Cards as specified in PRD Section 8 & Section 22 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Stat 1: 200,000+ */}
          <div className="bg-[#152B47] border border-[#254670] p-8 rounded-xs text-center relative overflow-hidden group hover:border-[#FF7A00] transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF7A00]">
              <Building2 className="w-6 h-6" />
            </div>
            {/* Oversized typography Section 22 */}
            <div className="font-headline font-black text-5xl sm:text-6xl text-white tracking-tight">
              200,000+
            </div>
            <h3 className="font-headline font-bold text-base text-stone-200 mt-2">
              DPIIT-recognised Startups
            </h3>
            <p className="text-xs text-stone-400 mt-2 leading-relaxed font-sans">
              Formally registered and accredited enterprises contributing to nationwide innovation, technology development, and employment generation.
            </p>
          </div>

          {/* Stat 2: 53% */}
          <div className="bg-[#152B47] border border-[#254670] p-8 rounded-xs text-center relative overflow-hidden group hover:border-[#FF7A00] transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-[#138A4B]">
              <MapPin className="w-6 h-6" />
            </div>
            {/* Oversized typography Section 22 */}
            <div className="font-headline font-black text-5xl sm:text-6xl text-white tracking-tight">
              53%
            </div>
            <h3 className="font-headline font-bold text-base text-stone-200 mt-2">
              Startups from Tier 2 & 3 Cities
            </h3>
            <p className="text-xs text-stone-400 mt-2 leading-relaxed font-sans">
              More than half of accredited Indian startups now emerge from non-metro regional hubs, proving that innovation is decentralizing across Bharat.
            </p>
          </div>

          {/* Stat 3: 32 */}
          <div className="bg-[#152B47] border border-[#254670] p-8 rounded-xs text-center relative overflow-hidden group hover:border-[#FF7A00] transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            {/* Oversized typography Section 22 */}
            <div className="font-headline font-black text-5xl sm:text-6xl text-white tracking-tight">
              32
            </div>
            <h3 className="font-headline font-bold text-base text-stone-200 mt-2">
              States & UTs with Startup Policies
            </h3>
            <p className="text-xs text-stone-400 mt-2 leading-relaxed font-sans">
              Dedicated state-level legislative and funding frameworks offering incubation grants, seed subsidies, and tax incentives across India.
            </p>
          </div>
        </div>

        {/* Source and Date Attribution Note strictly conforming to Section 8 */}
        <div className="mt-8 pt-6 border-t border-[#1C3659] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            <span><strong>Source:</strong> {ECOSYSTEM_STATISTICS.sourceOfficial}</span>
          </div>
          <span className="italic">{ECOSYSTEM_STATISTICS.sourceDate}</span>
        </div>
      </div>
    </section>
  );
};
