export interface FailureCaseStudy {
  id: string;
  slug: string;
  startup: string;
  industry: string;
  founded: number;
  ceasedOrPivotedYear: number;
  founders: string[];
  totalFundingRaised: string;
  peakScale: string;
  coreFailureMode: string;
  summary: string;
  heroImage: string;
  timeline: Array<{
    period: string;
    event: string;
  }>;
  anatomicalBreakdown: Array<{
    title: string;
    analysis: string;
  }>;
  financialAndUnitEconomicsPitfalls: string[];
  studentTakeaways: Array<{
    rule: string;
    explanation: string;
  }>;
}

export const FAILURE_STORIES: FailureCaseStudy[] = [
  {
    id: 'byjus',
    slug: 'byjus-hyper-acquisition-collapse',
    startup: 'Byju\'s (Think & Learn Pvt. Ltd.)',
    industry: 'EdTech',
    founded: 2011,
    ceasedOrPivotedYear: 2024,
    founders: ['Byju Raveendran', 'Divya Gokulnath'],
    totalFundingRaised: '~$5.8B across equity and debt (including a $1.2B Term Loan B)',
    peakScale: 'Valued at $22 Billion at peak; over 150 million registered learners',
    coreFailureMode: 'Over-leveraged debt acquisitions, aggressive sales governance culture, and severe liquidity mismanagement',
    summary: 'How India\'s most valuable tech unicorn unravelled under a crushing $1.2B foreign debt burden, unintegrated multi-million dollar global acquisitions, and regulatory audits after the post-COVID offline reopening.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    timeline: [
      { period: '2015-2019', event: 'Rapid growth backed by marquee global investors; smartphone adoption powers app engagement.' },
      { period: '2020-2021', event: 'COVID lock-downs trigger massive remote learning boom; company embarks on multi-billion dollar acquisition spree (Aakash for $950M, WhiteHat Jr for $300M, Great Learning for $600M) and raises a $1.2B Term Loan B.' },
      { period: '2022-2023', event: 'Schools and offline tuition centers reopen; demand for expensive tablet-based digital courses drops sharply; debt lenders demand accelerated loan repayment amid auditor delays.' },
      { period: '2024', event: 'Board resignations, insolvency petitions by lenders and cricket board (BCCI), and emergency rights issues at 99% valuation discount.' }
    ],
    anatomicalBreakdown: [
      {
        title: '1. The Fatal Temptation of Expensive Debt for M&A',
        analysis: 'Raising a $1.2B syndicated Term Loan B (TLB) from Wall Street institutional lenders with strict covenants left zero margin for operational error. When macro interest rates rose and EdTech demand normalized, the interest burden crippled daily working capital.'
      },
      {
        title: '2. Aggressive High-Pressure Sales Culture Damaging Trust',
        analysis: 'Byju\'s relied on massive outbound sales armies calling parents and pushing multi-year EMI financing packages. When parents faced job stress post-COVID, refund demands surged, damaging brand credibility.'
      },
      {
        title: '3. Digesting Multiple Large Acquisitions Simultaneously',
        analysis: 'Attempting to integrate a dozen disparate companies across coding, higher ed, test prep, and US education diluted managerial focus and exploded operating overhead.'
      }
    ],
    financialAndUnitEconomicsPitfalls: [
      'Customer Acquisition Cost (CAC) exceeded the realized lifetime value of one-off annual course purchases',
      'High refund rates and chargebacks on third-party EMI finance agreements',
      'Mounting fixed corporate overhead and multi-million dollar celebrity and sports sponsorship commitments'
    ],
    studentTakeaways: [
      {
        rule: 'Debt is not equity',
        explanation: 'Venture equity can absorb market cycles; institutional debt has strict legal repayment covenants that can trigger bankruptcy at the first default.'
      },
      {
        rule: 'Sales incentives must align with customer well-being',
        explanation: 'Encouraging salespeople to push loans onto families who cannot afford them destroys long-term reputational equity.'
      },
      {
        rule: 'Beware the COVID windfall fallacy',
        explanation: 'Treating a once-in-a-century pandemic lockdown spike as permanent baseline demand leads to catastrophic over-hiring and over-expansion.'
      }
    ]
  },
  {
    id: 'doodhwala',
    slug: 'doodhwala-micro-delivery-unit-economics',
    startup: 'Doodhwala (Banger Tech Pvt. Ltd.)',
    industry: 'Quick Commerce / Grocery',
    founded: 2015,
    ceasedOrPivotedYear: 2019,
    founders: ['Aakash Agarwal', 'Ebrahim Akbari'],
    totalFundingRaised: '~$14M',
    peakScale: 'Fulfilled over 130,000 daily milk deliveries across Bengaluru, Pune, and Hyderabad',
    coreFailureMode: 'Negative contribution margins on low-ticket daily essentials without high-margin basket density',
    summary: 'A classic case study in early Indian micro-delivery: how delivering a single ₹30 milk packet every morning with low delivery margins bled cash faster than venture capital could sustain.',
    heroImage: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=1200&q=80',
    timeline: [
      { period: '2015', event: 'Launched in Bengaluru to solve morning fresh milk subscription delivery before 7:00 AM.' },
      { period: '2017-2018', event: 'Expanded rapidly across Bengaluru, Pune, and Hyderabad, reaching 100K+ daily orders with venture funding.' },
      { period: '2019', event: 'Capital dried up in the series B funding winter; failed to cross-sell enough high-margin items to offset fleet fuel and last-mile costs; halted operations abruptly.' }
    ],
    anatomicalBreakdown: [
      {
        title: '1. The Brutal Arithmetic of Low Average Order Values (AOV)',
        analysis: 'Milk in India is a government-regulated, low-margin staple. Retailers make only ₹1 to ₹2 per liter. Delivering a single bottle to an apartment door cost between ₹6 to ₹9 in delivery partner logistics and vehicle maintenance.'
      },
      {
        title: '2. The Unfulfilled Promise of Bread and Egg Cross-Selling',
        analysis: 'The founding thesis assumed that once milk arrived at 6 AM, consumers would also buy butter, bread, imported juices, and high-margin fruits. In reality, most consumers took the cheap milk and bought their groceries elsewhere.'
      },
      {
        title: '3. Competition from Well-Funded Conglomerates',
        analysis: 'Competitors like BigBasket (BB Daily) and Swiggy (Supr Daily) entered the micro-delivery space with massive balance sheets, subsidizing deliveries and squeezing independent startups out.'
      }
    ],
    financialAndUnitEconomicsPitfalls: [
      'Gross profit per delivery was lower than the last-mile delivery partner payout',
      'High vehicle wear-and-tear and morning route inefficiencies in sprawling gated communities',
      'Negative contribution margin after accounting for cold chain storage refrigeration losses'
    ],
    studentTakeaways: [
      {
        rule: 'Every unit delivered must have a realistic path to positive contribution margin',
        explanation: 'You cannot make up for negative unit economics on every delivery through sheer volume; scaling a negative-margin product only burns money faster.'
      },
      {
        rule: 'Subscription frequency does not equal basket profitability',
        explanation: 'Having a user interact with your app 30 times a month is useless if each transaction yields a net financial loss.'
      }
    ]
  },
  {
    id: 'stayzilla',
    slug: 'stayzilla-marketplace-orchestration-trap',
    startup: 'Stayzilla (Inasra Technologies)',
    industry: 'Hospitality / Travel',
    founded: 2005,
    ceasedOrPivotedYear: 2017,
    founders: ['Yogendra Vasupal', 'Rupal Yogendra', 'Sachit Singhi'],
    totalFundingRaised: '~$34M (Backed by Matrix Partners and Nexus Venture Partners)',
    peakScale: 'Listed 55,000 homestays and budget properties across 4,000 towns in India',
    coreFailureMode: 'High customer acquisition burn, unorganized homestay supply reliability, and capital exhaustion',
    summary: 'How India\'s pioneering homestay and alternative lodging platform ran out of working capital trying to educate two-sided markets before consumer readiness matured.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    timeline: [
      { period: '2005-2012', event: 'Operated profitably as Inasra, an online hotel booking platform with zero venture capital.' },
      { period: '2013-2015', event: 'Rebranded as Stayzilla, raised Series A and B from top venture firms to build India\'s Airbnb for homestays and rural tourism.' },
      { period: '2016-2017', event: 'Massive CAC inflation in the battle against MakeMyTrip, Goibibo, and OYO; abruptly suspended operations in February 2017 amid billing disputes.' }
    ],
    anatomicalBreakdown: [
      {
        title: '1. Becoming Trapped in an Unwinnable Ad Bidding War',
        analysis: 'As Google AdWords keywords for travel surged, Stayzilla had to pay exorbitant fees to acquire holiday travelers who had low repeat booking frequency (once or twice a year).'
      },
      {
        title: '2. The Operational Nightmare of Unstandardized Homestay Supply',
        analysis: 'Unlike urban hotel chains, rural homestay hosts frequently forgot to check their digital calendars, accepted walk-in guests directly, or lacked power backup, creating catastrophic guest experiences and refund disputes.'
      },
      {
        title: '3. Premature Market Timing',
        analysis: 'In 2014, the concept of staying inside a stranger\'s home was deeply alien to conservative Indian families who prioritized safety and predictability above bohemian authenticity.'
      }
    ],
    financialAndUnitEconomicsPitfalls: [
      'Customer acquisition cost exceeded customer lifetime value due to annual booking infrequency',
      'Heavily subsidized promotional discounts to entice skeptical first-time homestay travelers',
      'High customer support overhead managing remote property grievances across rural India'
    ],
    studentTakeaways: [
      {
        rule: 'Market timing is everything in platform economics',
        explanation: 'Being too early to a cultural shift is functionally indistinguishable from being wrong. The market must be culturally ready for your business model.'
      },
      {
        rule: 'Avoid low-frequency, high-CAC traps',
        explanation: 'If customers only buy once a year, paying high digital ad fees to acquire them without organic viral loops will exhaust your balance sheet.'
      }
    ]
  },
  {
    id: 'koovs',
    slug: 'koovs-fast-fashion-inventory-burn',
    startup: 'Koovs',
    industry: 'E-commerce / Fashion',
    founded: 2012,
    ceasedOrPivotedYear: 2019,
    founders: ['Rajesh Kamra', 'Lord Waheed Alli', 'Robert Bready'],
    totalFundingRaised: '~$100M+ (Listed on London AIM exchange)',
    peakScale: 'Celebrated as India\'s coolest western fast-fashion platform inspired by ASOS',
    coreFailureMode: 'High inventory write-downs, return-to-origin (RTO) logistics drain, and inability to out-spend Myntra',
    summary: 'The collapse of India\'s beloved British fast-fashion destination highlights the extreme hazards of holding heavy seasonal fashion inventory against multi-brand horizontal giants.',
    heroImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    timeline: [
      { period: '2012-2015', event: 'Launched in Gurgaon with private London design teams, pioneering catwalk runway videos and exclusive youth fashion.' },
      { period: '2016-2018', event: 'Listed on London\'s Alternative Investment Market (AIM); struggled to raise continuous equity as fashion trends rotated.' },
      { period: '2019', event: 'Entered business administration in the UK after strategic backer Future Group failed to inject planned capital; operations ceased.' }
    ],
    anatomicalBreakdown: [
      {
        title: '1. The Curse of Seasonal Fashion Inventory Holding',
        analysis: 'Koovs designed and manufactured proprietary collections in London and China. If a winter coat line or summer dress style did not sell within eight weeks, it had to be marked down at 70% liquidation losses.'
      },
      {
        title: '2. Crushing Return Rates on Cash-on-Delivery (COD)',
        analysis: 'Over 60% of young Indian online fashion orders were placed via Cash on Delivery. Young shoppers frequently ordered multiple sizes, tried them on, and rejected the parcel at the door, forcing Koovs to absorb reverse logistics freight costs.'
      },
      {
        title: '3. Asymmetrical Competition Against Flipkart & Myntra',
        analysis: 'Myntra operated as an asset-light marketplace with thousands of vendor brands sharing inventory risk, while Koovs bore the entire inventory risk alone on its own balance sheet.'
      }
    ],
    financialAndUnitEconomicsPitfalls: [
      'Massive unsold seasonal inventory write-offs destroying gross margins',
      'Reverse logistics shipping costs on rejected Cash-on-Delivery shipments',
      'High international production lead times unable to match fast Zara/H&M supply chains'
    ],
    studentTakeaways: [
      {
        rule: 'Inventory risk kills niche fashion e-commerce',
        explanation: 'Holding physical seasonal inventory without high sales velocity exposes startups to devastating terminal write-downs.'
      },
      {
        rule: 'Cash on delivery introduces structural reverse-logistics friction',
        explanation: 'In fashion, high return rates can easily turn an apparently healthy 40% gross margin into a deeply negative net margin.'
      }
    ]
  },
  {
    id: 'tinyowl',
    slug: 'tinyowl-premature-blitzscaling-trap',
    startup: 'TinyOwl Technology',
    industry: 'FoodTech',
    founded: 2014,
    ceasedOrPivotedYear: 2016,
    founders: ['Harshvardhan Mandad', 'Gaurav Choudhary', 'Saurabh Goyal', 'Tanuj Khandelwal', 'Shikhar Paliwal'],
    totalFundingRaised: '~$28M (Backed by Matrix Partners, Sequoia Capital India)',
    peakScale: 'Over 1,000 employees across Mumbai, Delhi, Bengaluru, Pune, and Hyderabad',
    coreFailureMode: 'Premature multi-city blitzscaling before achieving positive contribution margins in its home market',
    summary: 'A cautionary tale of the 2015 Indian food-delivery boom: how five IIT Bombay graduates expanded into five major cities within months, offering massive discounts before fixing basic restaurant order dispatch economics.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    timeline: [
      { period: 'Early 2014', event: 'Launched in Powai, Mumbai by five IIT Bombay batchmates; quickly became a hit among college students.' },
      { period: 'Late 2014-2015', event: 'Raised millions from top venture funds; launched aggressive marketing campaigns and expanded to five metro cities simultaneously.' },
      { period: 'Late 2015-2016', event: 'Burned through cash reserves subsidizing orders; forced to conduct painful layoffs that resulted in hostage situations at regional offices; assets acquired by Roadrunnr (Runnr).' }
    ],
    anatomicalBreakdown: [
      {
        title: '1. Expanding Geographically Before Achieving Product-Market Fit',
        analysis: 'TinyOwl launched in Pune, Bengaluru, Delhi, and Hyderabad before proving that an order in Mumbai could ever be delivered profitably. Replicating an unproven model across five new offices simply multiplied the burn rate by five.'
      },
      {
        title: '2. The Customer Addiction to Artificial Discounts',
        analysis: 'To compete with Foodpanda and Swiggy, TinyOwl offered 50% discount codes funded entirely by venture capital. The moment discounts ceased, customer retention dropped off a cliff.'
      },
      {
        title: '3. Hyper-Hiring and Organizational Chaos',
        analysis: 'The company expanded from 50 to over 1,000 staff within months. When the funding environment turned cold in late 2015, the founders had no choice but to execute abrupt mass layoffs.'
      }
    ],
    financialAndUnitEconomicsPitfalls: [
      'Burning over ₹300 per order in discounts and logistics to fulfill a ₹200 food order',
      'Overstaffed city-level sales teams with unchecked operational spending',
      'Running out of cash runway before completing necessary Series C financing'
    ],
    studentTakeaways: [
      {
        rule: 'Master one city before entering ten',
        explanation: 'In hyperlocal operations, geographical density and positive unit economics in one postal code must precede nationwide expansion.'
      },
      {
        rule: 'Discount-driven growth is an illusion of product-market fit',
        explanation: 'If users only use your app when you pay them to do so via coupons, you have not built a viable business; you have built a money giveaway.'
      }
    ]
  }
];
