export interface PageSEO {
  pageId: string;
  pageName: string;
  title: string;
  description: string;
  mainKeyword: string;
  relatedKeywords: [string, string];
}

export const MAIN_PAGES_SEO: Record<string, PageSEO> = {
  home: {
    pageId: 'home',
    pageName: 'Home',
    title: 'Indian Startup Stories – Real Founder Journeys',
    description: 'Discover the verified journeys, business models, and growth strategies behind India\'s boldest startups. Explore 10 in-depth launch case studies today.',
    mainKeyword: 'Indian Startup Stories',
    relatedKeywords: ['Indian Founders', 'Startup Ecosystem India']
  },
  stories: {
    pageId: 'stories',
    pageName: 'Startup Stories',
    title: 'Startup Stories & Business Models | India Tech',
    description: 'Explore verified case studies on India\'s top startups. Analyze unit economics, scaling decisions, and business models built for sustainable profitability.',
    mainKeyword: 'Startup Business Models',
    relatedKeywords: ['Indian Unicorns Case Studies', 'Startup Economics India']
  },
  founders: {
    pageId: 'founders',
    pageName: 'Meet the Founders',
    title: 'Meet Indian Startup Founders | Vision & Leadership',
    description: 'Explore authentic leadership philosophies, education, and founding journeys of top Indian entrepreneurs shaping the nation\'s high-growth digital economy.',
    mainKeyword: 'Indian Startup Founders',
    relatedKeywords: ['Tech Entrepreneurs India', 'Founder Leadership Philosophy']
  },
  industries: {
    pageId: 'industries',
    pageName: 'Explore Industries',
    title: 'Explore 8 Indian Startup Sectors & Market Trends',
    description: 'Analyze market trends, tailwinds, and leading players across FinTech, FoodTech, E-commerce, EdTech, D2C, and SaaS. Discover India\'s key industrial drivers.',
    mainKeyword: 'Indian Startup Industries',
    relatedKeywords: ['Indian Tech Sectors', 'DPIIT Market Verticals']
  },
  marketing: {
    pageId: 'marketing',
    pageName: 'Marketing Teardowns',
    title: 'Digital Marketing Teardowns | Indian Startup Case Studies',
    description: 'Examine how top Indian startups mastered moment marketing, youth branding, and content funnels without unsustainable ad spend. Learn key growth playbooks.',
    mainKeyword: 'Startup Marketing Strategies',
    relatedKeywords: ['Digital Business Growth', 'Indian Consumer Branding']
  },
  funding: {
    pageId: 'funding',
    pageName: 'Funding Tracker',
    title: 'Indian Startup Funding Tracker | Verified Capital Data',
    description: 'Track verified funding rounds, capitalization stages, and valuation data across leading Indian startups. Access trusted regulatory disclosures and facts.',
    mainKeyword: 'Startup Funding India',
    relatedKeywords: ['Venture Capital Disclosures', 'Bootstrapped vs VC Models']
  },
  failures: {
    pageId: 'failures',
    pageName: 'Failure Stories',
    title: 'Startup Lessons From Failure | Forensic Business Analysis',
    description: 'Analyze post-mortems of notable Indian startups. Learn from unit-economics traps, cash burn pitfalls, and over-expansion to build resilient modern ventures.',
    mainKeyword: 'Startup Failure Lessons',
    relatedKeywords: ['Unit Economics Pitfalls', 'Startup Post-Mortems India']
  },
  about: {
    pageId: 'about',
    pageName: 'About & Editorial Policy',
    title: 'Our Mission & Editorial Policy | Indian Startup Stories',
    description: 'Learn our rigorous fact-checking standards, citation policies, and educational mission for business students studying Indian entrepreneurship and markets.',
    mainKeyword: 'Startup Research Methodology',
    relatedKeywords: ['Editorial Fact-Checking Standards', 'Academic Business Citing']
  }
};

export const STORY_PAGES_SEO: Record<string, PageSEO> = {
  zerodha: {
    pageId: 'zerodha',
    pageName: 'Zerodha Case Study',
    title: 'Zerodha Case Study: How Bootstrapping Beat Indian Brokers',
    description: 'Learn how Nithin and Nikhil Kamath built Zerodha without VC funding. Explore Kite trading tech, flat-fee pricing, and Varsity educational marketing funnels.',
    mainKeyword: 'Zerodha Startup Story',
    relatedKeywords: ['Bootstrapped Discount Broking', 'Varsity Financial Education']
  },
  zomato: {
    pageId: 'zomato',
    pageName: 'Zomato Case Study',
    title: 'Zomato Case Study: Restaurant Menus to Public Market Giant',
    description: 'Discover how Deepinder Goyal scaled Zomato from office menu scans to public profitability and Blinkit quick commerce. Analyze its food-tech platform model.',
    mainKeyword: 'Zomato Business Model',
    relatedKeywords: ['Food Delivery Tech India', 'Blinkit Quick Commerce Strategy']
  },
  nykaa: {
    pageId: 'nykaa',
    pageName: 'Nykaa Case Study',
    title: 'Nykaa Case Study: Falguni Nayar\'s Omnichannel Beauty Empire',
    description: 'Discover how Falguni Nayar created Nykaa at age 50. Learn how curated content, authentic brands, and omnichannel stores built a profitable e-commerce empire.',
    mainKeyword: 'Nykaa E-Commerce Strategy',
    relatedKeywords: ['Falguni Nayar Omnichannel Retail', 'Beauty Content To Commerce']
  },
  boat: {
    pageId: 'boat',
    pageName: 'boAt Case Study',
    title: 'boAt Case Study: How Lifestyle Branding Won Indian Youth',
    description: 'Discover how Aman Gupta built boAt into a global wearable leader. Learn how bass-heavy audio tuning and youth pop culture outpaced global tech incumbents.',
    mainKeyword: 'boAt Lifestyle Branding',
    relatedKeywords: ['D2C Consumer Electronics India', 'Aman Gupta Youth Marketing']
  },
  razorpay: {
    pageId: 'razorpay',
    pageName: 'Razorpay Case Study',
    title: 'Razorpay Case Study: India\'s Digital Payment Rails',
    description: 'Learn how Harshil Mathur and Shashank Kumar built Razorpay. Discover how developer-friendly APIs and smart transaction routing transformed Indian checkouts.',
    mainKeyword: 'Razorpay Payment Gateway',
    relatedKeywords: ['FinTech Infrastructure India', 'Harshil Mathur Developer API']
  },
  meesho: {
    pageId: 'meesho',
    pageName: 'Meesho Case Study',
    title: 'Meesho Case Study: How Social Commerce Empowered Bharat',
    description: 'Discover how Meesho pioneered a 0% seller commission model to open e-commerce for millions of small-town entrepreneurs and value-conscious shoppers across India.',
    mainKeyword: 'Meesho Social Commerce',
    relatedKeywords: ['Zero-Commission Bharat Marketplace', 'Vidit Aatrey Reseller Model']
  },
  swiggy: {
    pageId: 'swiggy',
    pageName: 'Swiggy Case Study',
    title: 'Swiggy Case Study: Hyperlocal Fleet & Instamart Strategy',
    description: 'Explore the logistical systems behind Swiggy\'s success. Analyze dedicated delivery fleet economics, Instamart dark stores, and its landmark public listing.',
    mainKeyword: 'Swiggy Hyperlocal Logistics',
    relatedKeywords: ['Instamart Dark Store Economics', 'Sriharsha Majety Food Delivery']
  },
  'physics-wallah': {
    pageId: 'physics-wallah',
    pageName: 'Physics Wallah Case Study',
    title: 'Physics Wallah Case Study: Affordable EdTech Revolution',
    description: 'Discover how Alakh Pandey disrupted expensive test coaching. Learn how ₹4,000 course pricing and authentic teaching created India\'s profitable EdTech unicorn.',
    mainKeyword: 'Physics Wallah EdTech Model',
    relatedKeywords: ['Affordable Education Disruption', 'Alakh Pandey YouTube Community']
  },
  oyo: {
    pageId: 'oyo',
    pageName: 'OYO Case Study',
    title: 'OYO Case Study: Budget Hotel Standardization & Turnaround',
    description: 'Analyze Ritesh Agarwal\'s journey building OYO. Learn how algorithmic property management software and standardization transformed budget travel in India.',
    mainKeyword: 'OYO Rooms Hospitality Tech',
    relatedKeywords: ['Budget Hotel Standardization', 'Ritesh Agarwal Dynamic Pricing']
  },
  cred: {
    pageId: 'cred',
    pageName: 'CRED Case Study',
    title: 'CRED Case Study: Luxury Brand Design as Product Experience',
    description: 'Discover how Kunal Shah turned credit-card bill payments into an aspirational club. Learn how viral humor, premium design, and trust economics built CRED.',
    mainKeyword: 'CRED Branding and Design',
    relatedKeywords: ['Kunal Shah Trust Economics', 'Credit Card Rewards Ecosystem']
  }
};

export function getPageSEO(currentTab: string, storyId?: string): PageSEO {
  if (currentTab === 'story' && storyId && STORY_PAGES_SEO[storyId]) {
    return STORY_PAGES_SEO[storyId];
  }
  return MAIN_PAGES_SEO[currentTab] || MAIN_PAGES_SEO.home;
}

function setOrCreateMeta(nameOrProp: 'name' | 'property', attrValue: string, contentValue: string) {
  let el = document.querySelector(`meta[${nameOrProp}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(nameOrProp, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', contentValue);
}

export function updateDocumentSEO(seo: PageSEO) {
  if (typeof document === 'undefined') return;

  // Title (strict 30-60 characters)
  document.title = seo.title;

  // Standard Meta Description (strict 120-160 characters)
  setOrCreateMeta('name', 'description', seo.description);

  // Meta Keywords (Main keyword + 2 related keywords)
  setOrCreateMeta('name', 'keywords', `${seo.mainKeyword}, ${seo.relatedKeywords[0]}, ${seo.relatedKeywords[1]}`);

  // OpenGraph Tags
  setOrCreateMeta('property', 'og:title', seo.title);
  setOrCreateMeta('property', 'og:description', seo.description);

  // Twitter Cards
  setOrCreateMeta('name', 'twitter:title', seo.title);
  setOrCreateMeta('name', 'twitter:description', seo.description);
}
