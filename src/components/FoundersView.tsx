import React, { useState } from 'react';
import { Users, ArrowRight, GraduationCap, Quote, Building, MapPin, Sparkles } from 'lucide-react';
import { FOUNDERS, Founder } from '../data/founders';

interface FoundersViewProps {
  onSelectStory: (companyId: string) => void;
}

export const FoundersView: React.FC<FoundersViewProps> = ({ onSelectStory }) => {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);
  const [filterCity, setFilterCity] = useState<string>('All');

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead Header matching Section 15 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-2">
            <Users className="w-3.5 h-3.5" />
            Executive Leadership Directory
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
            Meet the Founders
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-3 font-sans leading-relaxed">
            The visionary entrepreneurs behind India's boldest enterprises. Explore their educational journeys, early operating struggles, leadership philosophies, and company building playbooks.
          </p>
        </div>

        {/* Founder Cards Grid strictly matching Section 15 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.id}
              className="bg-white border border-stone-200 hover:border-stone-400 rounded-xs shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Header profile */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-stone-200 shrink-0 group-hover:border-[#FF7A00] transition-colors"
                  />
                  <div>
                    <h3 className="font-headline font-bold text-xl text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                      {founder.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                      <span className="text-[#0B1F3A] font-extrabold">{founder.company}</span>
                      <span>•</span>
                      <span>{founder.role}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-stone-400 mt-1">
                      <MapPin className="w-3 h-3 text-[#138A4B]" />
                      <span>{founder.originCity}</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="py-2.5 px-3 bg-stone-50 border-l-2 border-[#0B1F3A] text-xs text-stone-700 font-sans mb-4">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900 mb-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#0B1F3A]" />
                    <span>Education & Background</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-snug">{founder.education}</p>
                </div>

                {/* Philosophy / Famous Quote */}
                <blockquote className="font-editorial text-sm text-stone-700 italic border-l-2 border-[#FF7A00] pl-3 py-1 my-3 bg-stone-50/50">
                  "{founder.famousQuote}"
                </blockquote>

                {/* Key Achievements Bullet points */}
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                    Milestones
                  </span>
                  <ul className="space-y-1 text-xs text-stone-600 font-sans">
                    {founder.keyAchievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#138A4B] font-bold">✓</span>
                        <span className="line-clamp-1">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: "View Founder Story →" strictly per Section 15 */}
              <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">Established {founder.yearStarted}</span>
                <button
                  onClick={() => onSelectStory(founder.companyId)}
                  className="font-headline font-bold text-xs text-[#0B1F3A] group-hover:text-[#FF7A00] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View Founder Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
