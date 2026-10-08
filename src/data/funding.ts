export interface FundingRecord {
  startup: string;
  storyId: string;
  industry: string;
  fundingStage: 'Bootstrapped' | 'Public' | 'Series E+' | 'Private';
  founded: number;
  headquarters: string;
  totalVerifiedFunding: string;
  lastKnownValuationOrMcap: string;
  keyInvestors: string[];
  publicListingDetails?: string;
  verificationSource: string;
  verifiedAsOf: string;
  notes: string;
}

export const FUNDING_DATA: FundingRecord[] = [
  {
    startup: 'Zerodha',
    storyId: 'zerodha',
    industry: 'FinTech',
    fundingStage: 'Bootstrapped',
    founded: 2010,
    headquarters: 'Bengaluru, Karnataka',
    totalVerifiedFunding: '₹0 (100% Bootstrapped)',
    lastKnownValuationOrMcap: 'Self-assessed ₹30,000 Cr (~$3.6B) in internal ESOP buybacks',
    keyInvestors: ['No External VC', 'Founders Owned (>90%)'],
    verificationSource: 'MCA Regulatory Filings & Zerodha Statutory Disclosures',
    verifiedAsOf: 'Q3 FY25-26',
    notes: 'The company has never raised a single rupee of institutional venture capital, funding all operations and Rainmatter investments strictly from operational profit.'
  },
  {
    startup: 'Zomato',
    storyId: 'zomato',
    industry: 'FoodTech',
    fundingStage: 'Public',
    founded: 2008,
    headquarters: 'Gurugram, Haryana',
    totalVerifiedFunding: '~$2.6B Prior to IPO',
    lastKnownValuationOrMcap: 'Public Market Cap: ~$25B - $28B (NSE/BSE fluctuating)',
    keyInvestors: ['Info Edge', 'Ant Financial / Alipay', 'Temasek Holdings', 'Tiger Global', 'Fidelity'],
    publicListingDetails: 'Listed July 2021 on NSE / BSE (Ticker: ZOMATO)',
    verificationSource: 'National Stock Exchange (NSE) Statutory Disclosures',
    verifiedAsOf: 'January 2026',
    notes: 'Acquired Blinkit for ₹4,447 Cr in an all-stock deal in 2022; turned consolidated PAT positive across both food delivery and quick commerce.'
  },
  {
    startup: 'Nykaa',
    storyId: 'nykaa',
    industry: 'E-commerce',
    fundingStage: 'Public',
    founded: 2012,
    headquarters: 'Mumbai, Maharashtra',
    totalVerifiedFunding: '~$148M Prior to IPO',
    lastKnownValuationOrMcap: 'Public Market Cap: ~$6B - $7.5B (NSE/BSE fluctuating)',
    keyInvestors: ['Steadview Capital', 'TPG Growth', 'Fidelity Management', 'Harsh Mariwala Family Office'],
    publicListingDetails: 'Listed November 2021 on NSE / BSE (Ticker: NYKAA / FSN)',
    verificationSource: 'BSE India Regulatory Compliance Filings',
    verifiedAsOf: 'February 2026',
    notes: 'Promoters (Falguni Nayar Family) retain majority equity control; operates 150+ offline physical stores nationwide alongside high-margin private brands.'
  },
  {
    startup: 'boAt',
    storyId: 'boat',
    industry: 'Consumer Tech',
    fundingStage: 'Private',
    founded: 2016,
    headquarters: 'New Delhi / Gurugram',
    totalVerifiedFunding: '~$177M across Series B & C',
    lastKnownValuationOrMcap: 'Estimated ~$1.4B in private secondary transactions',
    keyInvestors: ['Warburg Pincus', 'Qualcomm Ventures', 'Malabar Investments', 'Fireside Ventures'],
    verificationSource: 'Imagine Marketing Ltd. DRHP Disclosures & MCA Filings',
    verifiedAsOf: 'December 2025',
    notes: 'Transitioned over 70% of manufacturing assembly to domestic Indian partners under Make in India; ranks in top global wearable audio vendors.'
  },
  {
    startup: 'Razorpay',
    storyId: 'razorpay',
    industry: 'FinTech',
    fundingStage: 'Private',
    founded: 2014,
    headquarters: 'Bengaluru, Karnataka',
    totalVerifiedFunding: '$741.5M across 7 Rounds',
    lastKnownValuationOrMcap: '$7.5B (Series F round valuation)',
    keyInvestors: ['Y Combinator (W15)', 'Lone Pine Capital', 'Alkeon Capital', 'TCV', 'Tiger Global', 'Peak XV (Sequoia)'],
    verificationSource: 'Razorpay Corporate Announcements & Tracxn Verified Records',
    verifiedAsOf: 'Q4 2025',
    notes: 'Awarded formal RBI Payment Aggregator license; actively executing cross-border reverse flip to redomicile parent holding entity to India.'
  },
  {
    startup: 'Meesho',
    storyId: 'meesho',
    industry: 'E-commerce',
    fundingStage: 'Private',
    founded: 2015,
    headquarters: 'Bengaluru, Karnataka',
    totalVerifiedFunding: '$1.06B across 11 Rounds',
    lastKnownValuationOrMcap: '$4.9B (Last primary valuation benchmark)',
    keyInvestors: ['SoftBank Vision Fund 2', 'Prosus Ventures', 'Meta (Facebook)', 'Elevation Capital', 'Peak XV'],
    verificationSource: 'Company Statutory Filings & MCA Registry',
    verifiedAsOf: 'January 2026',
    notes: 'First Indian horizontal e-commerce platform to report operating cash flow positive quarters under 0% commission architecture.'
  },
  {
    startup: 'Swiggy',
    storyId: 'swiggy',
    industry: 'FoodTech',
    fundingStage: 'Public',
    founded: 2014,
    headquarters: 'Bengaluru, Karnataka',
    totalVerifiedFunding: '~$3.6B Prior to IPO',
    lastKnownValuationOrMcap: 'Public Market Cap: ~$11B - $13B (NSE/BSE fluctuating)',
    keyInvestors: ['Prosus (Naspers)', 'SoftBank Vision Fund', 'Accel Partners', 'Elevation Capital', 'Invesco'],
    publicListingDetails: 'Listed November 2024 on NSE / BSE (Ticker: SWIGGY)',
    verificationSource: 'NSE Official Listed Companies Register',
    verifiedAsOf: 'February 2026',
    notes: 'Raised ~₹11,327 Cr in landmark Indian public debut to expand Instamart dark stores and strengthen supply chain infrastructure.'
  },
  {
    startup: 'Physics Wallah',
    storyId: 'physics-wallah',
    industry: 'EdTech',
    founded: 2020,
    headquarters: 'Noida, Uttar Pradesh',
    fundingStage: 'Private',
    totalVerifiedFunding: '$310M across Series A & B',
    lastKnownValuationOrMcap: '$2.8B (Series B valuation benchmark)',
    keyInvestors: ['WestBridge Capital', 'GSV Ventures', 'Hornbill Capital', 'Lightspeed Venture Partners'],
    verificationSource: 'MCA Audited Balance Sheets & Official Press Releases',
    verifiedAsOf: 'Q3 FY25-26',
    notes: 'Maintained consecutive operating profitability through accessible course fees; scaled over 100 hybrid offline Vidyapeeth centers across India.'
  },
  {
    startup: 'OYO',
    storyId: 'oyo',
    industry: 'Hospitality',
    fundingStage: 'Private',
    founded: 2013,
    headquarters: 'Gurugram, Haryana',
    totalVerifiedFunding: '~$3.3B across Equity & Debt',
    lastKnownValuationOrMcap: 'Estimated ~$3.5B - $4.0B in recent debt refinance filings',
    keyInvestors: ['SoftBank Vision Fund', 'Peak XV Partners', 'Lightspeed Venture Partners', 'InCred Wealth'],
    verificationSource: 'Oravel Stays Annual Reports & Global Debt Disclosures',
    verifiedAsOf: 'January 2026',
    notes: 'Successfully pivoted from capital-heavy master lease minimum guarantees to asset-light revenue-sharing software partnerships.'
  },
  {
    startup: 'CRED',
    storyId: 'cred',
    industry: 'FinTech',
    fundingStage: 'Private',
    founded: 2018,
    headquarters: 'Bengaluru, Karnataka',
    totalVerifiedFunding: '$801M across Series A through F',
    lastKnownValuationOrMcap: '$6.4B (Series F round valuation)',
    keyInvestors: ['Peak XV Partners', 'Tiger Global', 'Falcon Edge Capital', 'DST Global', 'Coatue Management', 'Sofina'],
    verificationSource: 'Dreamplug Technologies Filings with Registrar of Companies',
    verifiedAsOf: 'Q4 2025',
    notes: 'Expanded from credit card bill settlement into high-margin consumer credit (CRED Cash), vehicle telemetry (CRED Garage), and payment checkout (CRED Pay).'
  }
];
