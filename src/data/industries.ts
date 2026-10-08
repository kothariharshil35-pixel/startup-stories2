export interface IndustryInfo {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  featuredStartups: string[];
  keyGrowthDrivers: string[];
  marketSizeIndia: string;
  accentColor: string;
  iconBg: string;
}

export const INDUSTRIES_DATA: IndustryInfo[] = [
  {
    id: 'fintech',
    name: 'FinTech',
    emoji: '💰',
    tagline: 'Financial Services & Payments',
    description: 'Democratizing equity investing, digital UPI payments, merchant gateways, and consumer credit through open APIs and unified banking rails.',
    featuredStartups: ['Zerodha', 'Razorpay', 'CRED'],
    keyGrowthDrivers: ['India Stack (Aadhaar, e-KYC, DigiLocker)', 'UPI Transaction Dominance', 'Surge in Retail Demat Accounts'],
    marketSizeIndia: '$150B+ projected sector valuation by 2030',
    accentColor: '#0B1F3A',
    iconBg: 'bg-blue-50 text-blue-900 border-blue-200'
  },
  {
    id: 'foodtech',
    name: 'FoodTech',
    emoji: '🍔',
    tagline: 'Hyperlocal Logistics & Dining',
    description: 'Connecting millions of dining enthusiasts, culinary creators, and instant grocery seekers through high-density last-mile fleets.',
    featuredStartups: ['Zomato', 'Swiggy'],
    keyGrowthDrivers: ['Urban Time-Poverty', 'Dark Store Micro-Fulfillment Networks', 'Rising Middle-Class Dining Spend'],
    marketSizeIndia: '$25B+ annualized food & instant delivery ecosystem',
    accentColor: '#DC2626',
    iconBg: 'bg-red-50 text-red-900 border-red-200'
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    emoji: '🛒',
    tagline: 'Direct Retail & Social Bharat Selling',
    description: 'Empowering small manufacturers, regional boutique resellers, and specialized lifestyle brands to bypass traditional retail distribution cartels.',
    featuredStartups: ['Meesho', 'Nykaa'],
    keyGrowthDrivers: ['Tier-2/3 Smartphone Penetration', '0% Seller Commission Innovation', 'Content & Masterclass Discovery'],
    marketSizeIndia: '$130B+ projected GMV by 2028',
    accentColor: '#138A4B',
    iconBg: 'bg-emerald-50 text-emerald-900 border-emerald-200'
  },
  {
    id: 'edtech',
    name: 'EdTech',
    emoji: '🎓',
    tagline: 'Democratized Affordable Learning',
    description: 'Replacing predatory multi-lakh coaching fees with accessible, high-engagement digital courses, live doubt solving, and hybrid physical centers.',
    featuredStartups: ['Physics Wallah'],
    keyGrowthDrivers: ['Aspirations for Top STEM & Medical Seats', 'Affordable 4G/5G Connectivity', 'Community-Led Pedagogy'],
    marketSizeIndia: '$10B+ emerging test-prep & skilling universe',
    accentColor: '#7C3AED',
    iconBg: 'bg-purple-50 text-purple-900 border-purple-200'
  },
  {
    id: 'consumer-tech',
    name: 'Consumer Tech',
    emoji: '🎧',
    tagline: 'Wearables & Lifestyle Hardware',
    description: 'Transforming consumer electronics into vibrant youth fashion statements, optimized for Indian acoustic preferences and everyday durability.',
    featuredStartups: ['boAt'],
    keyGrowthDrivers: ['Make in India Electronics Manufacturing', 'Fast Product Iteration Cycles', 'Youth Pop-Culture & Cricket Synergy'],
    marketSizeIndia: 'Over 130M+ wearable devices shipped annually',
    accentColor: '#FF7A00',
    iconBg: 'bg-amber-50 text-amber-900 border-amber-200'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    emoji: '🏨',
    tagline: 'Standardized Stays & Managed Travel',
    description: 'Organizing fragmented budget hotels into predictable, clean, digitally bookable rooms powered by dynamic revenue optimization software.',
    featuredStartups: ['OYO'],
    keyGrowthDrivers: ['Domestic Pilgrimage & Weekend Travel Boom', 'Asset-Light Franchise Operating Software', 'Standardized Sanitation Guarantees'],
    marketSizeIndia: '$32B+ domestic hospitality & lodging sector',
    accentColor: '#B91C1C',
    iconBg: 'bg-rose-50 text-rose-900 border-rose-200'
  },
  {
    id: 'healthtech',
    name: 'HealthTech',
    emoji: '🏥',
    tagline: 'Digital Pharma & Teleconsultation',
    description: 'Digitizing medicine deliveries, teleconsultations, and diagnostic tests across metro and tier-2 districts through temperature-controlled supply chains.',
    featuredStartups: ['PharmEasy', 'Practo'],
    keyGrowthDrivers: ['Chronic Disease Management', 'Unified Health Interface (Ayushman Bharat)', 'Direct-to-Door Discounting'],
    marketSizeIndia: '$21B+ digital healthcare market potential',
    accentColor: '#0D9488',
    iconBg: 'bg-teal-50 text-teal-900 border-teal-200'
  },
  {
    id: 'saas',
    name: 'SaaS',
    emoji: '💻',
    tagline: 'Cloud Enterprise Software from India',
    description: 'Building world-class cloud products from Chennai, Bengaluru, and Pune for Fortune 500 enterprises with unmatched cost and talent leverage.',
    featuredStartups: ['Freshworks', 'Zoho'],
    keyGrowthDrivers: ['Global Enterprise Cloud Migration', 'High-Density Software Engineering Base', 'Capital-Efficient Product Building'],
    marketSizeIndia: '$50B+ global software value created from India',
    accentColor: '#2563EB',
    iconBg: 'bg-sky-50 text-sky-900 border-sky-200'
  }
];

export const ECOSYSTEM_STATISTICS = {
  recognisedStartups: '200,000+',
  tierTwoThreeRatio: '53%',
  statesPoliciesCount: '32',
  sourceOfficial: 'DPIIT & Startup India — National Startup Day Official Briefings',
  sourceDate: 'Verified Baseline (Startup India Public Database)'
};
