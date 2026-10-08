import React, { useState } from 'react';
import { DollarSign, ShieldCheck, Filter, ArrowRight, ExternalLink, Info, Search } from 'lucide-react';
import { FUNDING_DATA, FundingRecord } from '../data/funding';

interface FundingViewProps {
  onSelectStory: (storyId: string) => void;
}

export const FundingView: React.FC<FundingViewProps> = ({ onSelectStory }) => {
  const [stageFilter, setStageFilter] = useState<string>('All');
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredRecords = FUNDING_DATA.filter((item) => {
    const matchesStage = stageFilter === 'All' || item.fundingStage === stageFilter;
    const matchesIndustry = industryFilter === 'All' || item.industry === industryFilter;
    const matchesSearch =
      !searchQuery ||
      item.startup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyInvestors.some((inv) => inv.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStage && matchesIndustry && matchesSearch;
  });

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header strictly per Section 16 */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-2">
            <DollarSign className="w-3.5 h-3.5" />
            Capitalization & Capital Structure
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
            Startup Funding Tracker
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-3 font-sans leading-relaxed">
            A verified comparative ledger of capital raised, public listings, and bootstrapped capitalization models across India's premier enterprises.
          </p>

          {/* Verification Disclaimer Banner strictly per Section 16 */}
          <div className="mt-4 flex items-center gap-2.5 p-3 bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 rounded-xs">
            <ShieldCheck className="w-4 h-4 text-[#138A4B] shrink-0" />
            <span>
              <strong>Editorial Guarantee:</strong> We do not publish speculative valuations or unverified rumors. All funding stages and valuations reflect verified statutory filings, ROC submissions, and stock exchange disclosures with dates.
            </span>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white border border-stone-200 p-4 rounded-xs shadow-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by startup or investor..."
              className="w-full bg-stone-50 border border-stone-200 text-xs pl-9 pr-3 py-2.5 rounded-xs focus:outline-none focus:border-[#0B1F3A]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Stage filter */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-stone-400 font-semibold mr-1">Stage:</span>
              {['All', 'Bootstrapped', 'Public', 'Private'].map((stage) => (
                <button
                  key={stage}
                  onClick={() => setStageFilter(stage)}
                  className={`px-3 py-1.5 rounded-xs font-semibold transition-colors cursor-pointer ${
                    stageFilter === stage
                      ? 'bg-[#0B1F3A] text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>

            {/* Industry filter */}
            <div className="flex items-center gap-1 text-xs ml-auto sm:ml-4">
              <span className="text-stone-400 font-semibold mr-1">Industry:</span>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="bg-stone-100 border border-stone-200 text-xs px-2.5 py-1.5 rounded-xs font-semibold text-stone-700 focus:outline-none"
              >
                <option value="All">All Industries</option>
                <option value="FinTech">FinTech</option>
                <option value="FoodTech">FoodTech</option>
                <option value="E-commerce">E-commerce</option>
                <option value="EdTech">EdTech</option>
                <option value="Consumer Tech">Consumer Tech</option>
                <option value="Hospitality">Hospitality</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Funding Table strictly adhering to Section 16 */}
        <div className="bg-white border border-stone-200 rounded-xs shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="bg-[#0B1F3A] text-white font-headline uppercase tracking-wider text-[11px] border-b border-stone-200">
                  <th className="py-4 px-4 font-bold">Startup</th>
                  <th className="py-4 px-4 font-bold">Industry</th>
                  <th className="py-4 px-4 font-bold">Funding Stage</th>
                  <th className="py-4 px-4 font-bold">Founded</th>
                  <th className="py-4 px-4 font-bold">Valuation / Public Mcap</th>
                  <th className="py-4 px-4 font-bold">Verification & As Of</th>
                  <th className="py-4 px-4 font-bold text-right">Story</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-stone-400">
                      No funding records match your filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map((item) => (
                    <tr key={item.startup} className="hover:bg-stone-50 transition-colors">
                      {/* Startup */}
                      <td className="py-4 px-4">
                        <div className="font-headline font-bold text-sm text-stone-900">
                          {item.startup}
                        </div>
                        <div className="text-[11px] text-stone-400">{item.headquarters}</div>
                      </td>

                      {/* Industry */}
                      <td className="py-4 px-4">
                        <span className="font-semibold text-stone-800">{item.industry}</span>
                      </td>

                      {/* Funding Stage */}
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block font-bold px-2 py-0.5 rounded-xs text-[11px] uppercase tracking-wider ${
                            item.fundingStage === 'Bootstrapped'
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : item.fundingStage === 'Public'
                              ? 'bg-blue-100 text-blue-900 border border-blue-300'
                              : 'bg-stone-100 text-stone-800 border border-stone-200'
                          }`}
                        >
                          {item.fundingStage}
                        </span>
                        {item.publicListingDetails && (
                          <span className="block text-[10px] text-stone-500 mt-1">
                            {item.publicListingDetails}
                          </span>
                        )}
                      </td>

                      {/* Founded */}
                      <td className="py-4 px-4 font-semibold text-stone-800">
                        {item.founded}
                      </td>

                      {/* Valuation / Mcap */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-stone-900">
                          {item.lastKnownValuationOrMcap}
                        </div>
                        <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                          Backers: {item.keyInvestors.join(', ')}
                        </div>
                      </td>

                      {/* Verification & Date */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1 text-[#138A4B] font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate max-w-xs">{item.verificationSource}</span>
                        </div>
                        <div className="text-[10px] text-stone-400 mt-0.5">
                          As of: <span className="font-medium text-stone-600">{item.verifiedAsOf}</span>
                        </div>
                      </td>

                      {/* Action */}
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => onSelectStory(item.storyId)}
                          className="font-headline font-bold text-xs text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-1 ml-auto cursor-pointer transition-colors"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footnote notes */}
          <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span>Showing {filteredRecords.length} of {FUNDING_DATA.length} verified startup records</span>
            <span className="italic">Data cross-referenced with MCA records and stock exchange filings</span>
          </div>
        </div>
      </div>
    </div>
  );
};
