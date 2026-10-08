export interface MarketingCaseStudy {
  id: string;
  slug: string;
  title: string;
  startup: string;
  storyId: string;
  pillar: string;
  readTime: string;
  summary: string;
  heroImage: string;
  coreConcepts: string[];
  breakdown: Array<{
    heading: string;
    description: string;
    tactics: string[];
    quoteOrExample?: string;
  }>;
  metricsAndImpact: string[];
  takeawaysForStudents: string[];
}

export const MARKETING_STUDIES: MarketingCaseStudy[] = [
  {
    id: 'zomato-voice',
    slug: 'zomato-social-media-voice',
    title: 'How Zomato Built a Distinctive Social Media Voice',
    startup: 'Zomato',
    storyId: 'zomato',
    pillar: 'Moment Marketing & Cultural Humor',
    readTime: '6 min read',
    summary: 'A detailed teardown of how Zomato abandoned corporate stiffness to craft an authentic, witty, and contextual social personality that earns millions of organic impressions daily.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    coreConcepts: ['Contextual Notification Triggers', 'Meme Jacking', 'Hyperlocal Food Empathy', 'Outdoor Minimalist Copywriting'],
    breakdown: [
      {
        heading: '1. Humanizing Push Notifications into Daily Banter',
        description: 'Most consumer apps treat push notifications as aggressive sales megaphones yelling "USE COUPON 50% OFF NOW". Zomato realized users mute irritating discount spam.',
        tactics: [
          'Timing notifications to circadian hunger rhythms (e.g. 11:45 AM before office lunch, 11:30 PM for midnight snacks)',
          'Referencing relatable emotional dilemmas: "Khaane mein kya hai? The hardest question since 1947."',
          'Seasonal contextual empathy: rainy day pakoda notifications, Monday morning chai motivation.'
        ],
        quoteOrExample: '"Kheer is good, but have you ever tried sleeping for 8 hours without anxiety?" — Zomato push alert'
      },
      {
        heading: '2. Minimalist Outdoor Billboards That Go Viral Online',
        description: 'Instead of cramming fifty food photos, QR codes, and promo discount codes onto a billboard, Zomato mastered high-contrast, two-color copywriting that demands immediate double-takes.',
        tactics: [
          'High visual contrast: Bold white sans-serif typography set on signature Zomato red background',
          'Riddles and pop-culture puns: "Tu cheese badi hai mast mast" placed next to artisanal pizza imagery',
          'Creating offline ads engineered specifically to be photographed and shared on LinkedIn and Instagram'
        ]
      },
      {
        heading: '3. Agile Social Media Response to Live Cultural Events',
        description: 'During ICC Cricket World Cups, viral television drama, or national elections, Zomato\'s creative team operates like a newsroom bullpen, creating response content within 15 minutes.',
        tactics: [
          'Live match momentum reactions: Dispatching delivery courier memes as Indian batters hit sixes',
          'Engaging in friendly Twitter banter with competing brands, turning rivalry into entertainment',
          'Empowering creative teams with zero bureaucratic approval friction for fast meme execution'
        ]
      }
    ],
    metricsAndImpact: [
      'Over 85% of push notifications opened without coupon discount incentives',
      'Consistently ranked #1 in organic brand engagement across Indian Twitter/X and Instagram',
      'Millions of earned media impressions across marketing trade press without paid ad spend'
    ],
    takeawaysForStudents: [
      'Write copy the way real people speak to their best friends, not like a corporate committee.',
      'Context beats pure discounting: delivering the right joke at 11 PM creates higher conversion than a 20% coupon at 9 AM.',
      'Design outdoor media for the smartphone camera lens: the best billboard is one that millions of people photograph and tweet.'
    ]
  },
  {
    id: 'boat-youth-culture',
    slug: 'boat-youth-culture-branding',
    title: 'How boAt Used Youth Culture to Build a Brand',
    startup: 'boAt',
    storyId: 'boat',
    pillar: 'Community Tribes & Lifestyle Positioning',
    readTime: '6 min read',
    summary: 'How an Indian hardware challenger bypassed technical spec sheets to connect audio accessories with cricket, hip-hop, fashion, and young digital identity.',
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    coreConcepts: ['Lifestyle Over Hardware Specs', 'Tribal Identity ("boAtheads")', 'Cricket & Music Synergy', 'Aman Gupta Personal Brand'],
    breakdown: [
      {
        heading: '1. Converting Hardware Specs into Emotional Swag',
        description: 'Sony and Sennheiser advertised frequency response curves, driver diameters in millimeters, and total harmonic distortion. College students did not care.',
        tactics: [
          'Renaming product lines into evocative attitude descriptors: "Bassheads", "Rockerz", "Airdopes"',
          'Designing headphones in vibrant neon colors, camouflage, and street textures rather than boring office gray',
          'Positioning headphones as wearable fashion jewelry draped around the neck'
        ],
        quoteOrExample: '"We never sold audio equipment. We sold youth swagger, music attitude, and Indian pride." — Aman Gupta'
      },
      {
        heading: '2. The "boAthead" Community Archetype',
        description: 'boAt refused to refer to its customers as users or transaction units. By labeling them "boAtheads", they created a sense of belonging to an energetic youth movement.',
        tactics: [
          'User-generated content amplification: Reposting students wearing boAt headsets on college campuses',
          'Co-branding with youth festivals, college cultural fests, and local underground rap ciphers',
          'Fast turnaround limited-edition artist merchandise drops'
        ]
      },
      {
        heading: '3. Strategic Cultural Anchors: Cricket and Street Music',
        description: 'In India, cricket and cinema are the two universal religions. boAt bypassed conventional TV commercial buys to sign long-term IPL team partnerships and young cricket icons.',
        tactics: [
          'Partnering with hard-hitting cricketers (Hardik Pandya, KL Rahul, Shreyas Iyer)',
          'Aligning with independent rap and Punjabi music creators (Diljit Dosanjh, AP Dhillon)',
          'Leveraging Shark Tank India visibility to showcase authentic founder accessibility'
        ]
      }
    ],
    metricsAndImpact: [
      'Grew from a ₹499 charging cable to over ₹3,000+ Cr in annual consumer hardware revenue',
      'Surpassed multinational incumbents to claim over 30% domestic market share in wearable audio',
      'One of the highest repeat purchase loyalty rates in Indian consumer electronics'
    ],
    takeawaysForStudents: [
      'In commoditized hardware, cultural brand positioning is the ultimate pricing moat.',
      'Give your customers a proud collective identity (a tribe name) rather than treating them like account IDs.',
      'Align your product with cultural passion points that your target audience already obsesses over.'
    ]
  },
  {
    id: 'nykaa-content-commerce',
    slug: 'nykaa-content-to-commerce',
    title: 'How Nykaa Turned Content Into Commerce',
    startup: 'Nykaa',
    storyId: 'nykaa',
    pillar: 'Educational Funnels & High-AOV Conversion',
    readTime: '6 min read',
    summary: 'A deep dive into how Falguni Nayar transformed beauty masterclasses, shade-finder tutorials, and certified expert consultations into India\'s most profitable e-commerce engine.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    coreConcepts: ['Education-Led Purchasing Loops', 'The Nykaa Beauty Book', 'Micro-Influencer Armies', 'Omnichannel Validation'],
    breakdown: [
      {
        heading: '1. Eliminating Friction via Educational Content',
        description: 'Beauty and skincare have notoriously high purchase anxiety: "Will this foundation suit my undertone? Will this serum irritate my skin?" Pure shopping catalogs cannot solve this anxiety.',
        tactics: [
          'Building "The Beauty Book" blog with thousands of dermatologically reviewed guides',
          'Interactive Shade Finder algorithms matching real Indian skin complexions with global foundation formulas',
          'Video masterclasses with celebrity makeup artists explaining step-by-step application techniques'
        ],
        quoteOrExample: '"If you educate a consumer on skincare science, you never have to beg them to make a purchase." — Falguni Nayar'
      },
      {
        heading: '2. High-Trust Micro-Influencer Co-Creation',
        description: 'Rather than solely relying on mega Bollywood celebrities who might be perceived as paid endorsers, Nykaa partnered with hundreds of micro-influencers.',
        tactics: [
          'Sending curated preview boxes to tier-2 city beauty vloggers who test formulas on live video',
          'Launching Kay Beauty in genuine product formulation partnership with Katrina Kaif, giving it authentic celebrity credibility',
          'Rewarding makeup artists with affiliate creator commissions'
        ]
      },
      {
        heading: '3. Omnichannel Stores as Content Physicalization',
        description: 'Nykaa realized physical stores are not relics of the past; they are physical extension studios for sensory confirmation.',
        tactics: [
          'Trained in-store Beauty Advisors acting as educators rather than pushy commission salespeople',
          'In-store makeover stations replicating online YouTube tutorials in real life',
          'Synchronizing offline store purchases with digital loyalty points, maximizing customer lifetime value'
        ]
      }
    ],
    metricsAndImpact: [
      'Average Order Value (AOV) significantly higher than horizontal marketplaces like Amazon and Flipkart',
      'Over 60% of first-time online shoppers reported learning about their skincare routine through Nykaa guides',
      'Achieved consolidated profitability ahead of public market debut'
    ],
    takeawaysForStudents: [
      'Content is not a side project; when executed with pedagogical rigor, it is the highest-ROI acquisition funnel.',
      'Solve customer anxiety before asking for their credit card.',
      'Blend physical touchpoints with digital convenience to build generational consumer trust.'
    ]
  },
  {
    id: 'cred-entertainment',
    slug: 'cred-branding-as-entertainment',
    title: 'How CRED Made Financial Services Entertaining',
    startup: 'CRED',
    storyId: 'cred',
    pillar: 'Brand as Entertainment & Nostalgic Subversion',
    readTime: '6 min read',
    summary: 'How Kunal Shah and Tanmay Bhat revolutionized Indian television and digital advertising by flipping revered celebrity archetypes into absurd, unforgettable humor.',
    heroImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80',
    coreConcepts: ['Celebrity Persona Inversion', 'Nostalgia Marketing', 'Self-Deprecating Brand Self-Awareness', 'Aesthetic Vault UI'],
    breakdown: [
      {
        heading: '1. Flipping the Celebrity Persona (The Dravid Masterstroke)',
        description: 'Traditional financial advertising uses serious celebrities looking solemn and advising customers on saving for their retirement. CRED did the exact opposite.',
        tactics: [
          'Taking Rahul Dravid—India\'s calmest, most disciplined cricket legend—and having him smash side mirrors in a Bengaluru traffic jam screaming "Indiranagar ka gunda hoon main!"',
          'Having 90s singer Kumar Sanu sing insurance disclaimers, and Olympic gold medalist Neeraj Chopra play aggressive journalists',
          'Treating the celebrity not as an authority figure, but as an absurdist comedy actor'
        ],
        quoteOrExample: '"Indiranagar ka gunda hoon main!" — Rahul Dravid in CRED\'s iconic 2021 IPL commercial'
      },
      {
        heading: '2. Audacious Self-Deprecating Honesty',
        description: 'Instead of claiming CRED would change the universe, their commercials openly acknowledged the absurdity of their reward coins: "Download CRED. Not because it makes sense, but because we spent our entire marketing budget making this ad."',
        tactics: [
          'Treating modern audiences as media-savvy consumers who see through pretentious corporate claims',
          'Inviting viewers to laugh along with the joke, creating immense goodwill and social shareability',
          'Sparking nationwide tweet storms that lasted weeks after every IPL ad slot'
        ]
      },
      {
        heading: '3. Neumorphic App Design as a Sensory Luxury Product',
        description: 'The app itself was engineered like a luxury timepiece: dark mode gradients, 60fps haptics, and custom metallic animations.',
        tactics: [
          'Transforming the mundane act of paying a credit card bill into an interactive tactile delight',
          'Restricting access strictly to credit scores above 750, transforming membership into an aspirational badge'
        ]
      }
    ],
    metricsAndImpact: [
      'Over 100+ million organic video views on YouTube and Twitter with zero media spend on reposts',
      'The "Indiranagar ka Gunda" campaign entered Indian pop culture and Harvard Business School case studies',
      'Captured over 30% of all Indian credit card payment volume through an exclusive club model'
    ],
    takeawaysForStudents: [
      'When your product offers similar core utility to competitors, entertainment and distinctive style become your ultimate differentiator.',
      'Never underestimate the power of nostalgia and self-deprecating wit in building cultural affinity.',
      'Treat design as a first-class feature: aesthetic beauty creates pride of ownership in software.'
    ]
  },
  {
    id: 'zerodha-education',
    slug: 'zerodha-varsity-marketing-asset',
    title: 'How Zerodha Used Education as a Marketing Asset',
    startup: 'Zerodha',
    storyId: 'zerodha',
    pillar: 'Zero-CAC Funnels & Customer Empowerment',
    readTime: '6 min read',
    summary: 'A forensic analysis of how Zerodha achieved massive market leadership without spending money on Google ads, IPL sponsorships, or celebrity brand ambassadors.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    coreConcepts: ['Zero-CAC Inbound Flywheel', 'Zerodha Varsity Open Curriculum', 'No-Spam Customer Relationship', 'Rainmatter Ecosystem'],
    breakdown: [
      {
        heading: '1. Zerodha Varsity as an Open Public Good',
        description: 'While traditional brokerages pushed confusing stock tips through high-pressure telecallers, Zerodha hired top educator Karthik Rangappa to write a free, comprehensive encyclopedia of investing.',
        tactics: [
          'Publishing 13+ in-depth curriculum modules covering technical analysis, options strategies, risk management, and personal finance',
          'Completely free access: no forced signup popups, no credit cards, no sales upsells, no spam emails',
          'Clear illustrations, real-world case studies, and certification quizzes validating student learning'
        ],
        quoteOrExample: '"If you educate someone on financial risk and empower them to think independently, they will naturally trade with you when they are ready." — Nithin Kamath'
      },
      {
        heading: '2. The Zero-Spam, Zero-Cold-Calling Policy',
        description: 'In an industry notorious for cold-calling consumers at dinner time offering speculative day-trading tips, Zerodha instituted a strict zero-calling rule.',
        tactics: [
          'Zero unsolicited phone calls, zero SMS spam, zero relationship manager commission incentives',
          'Treating user contact data with absolute sanctity, creating unprecedented organic word-of-mouth trust',
          'Active traders advised their friends, parents, and colleagues to switch to Zerodha purely to escape broker phone harassment'
        ]
      },
      {
        heading: '3. Rainmatter: Compounding Ecosystem Goodwill',
        description: 'Rather than distributing profits into executive private jets, the Kamath brothers created Rainmatter—investing over ₹1,000 Cr of internal profits into climate, health, and fintech startups.',
        tactics: [
          'Investing patient capital into complementary startups (Smallcase, Sensibull, Ditto Insurance)',
          'Positioning Zerodha as an ethical, benevolent steward of India\'s financial future'
        ]
      }
    ],
    metricsAndImpact: [
      'Grew to 10+ million clients with a marketing ad budget of essentially zero',
      'Varsity receives tens of millions of annual visits, making it the world\'s most read investing curriculum',
      'Generated thousands of crores in net profit while venture-funded rivals burned hundreds of millions on TV ads'
    ],
    takeawaysForStudents: [
      'True marketing is not advertising; it is building something so genuinely useful that users cannot stop talking about it.',
      'Respecting user attention and privacy is a rare, defensible competitive advantage in noisy digital industries.',
      'Educational inbound content compounds exponentially over decades; paid ad clicks stop the millisecond your budget runs out.'
    ]
  }
];
