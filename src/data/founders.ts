export interface Founder {
  id: string;
  name: string;
  company: string;
  companyId: string;
  role: string;
  avatar: string;
  education: string;
  background: string;
  philosophy: string;
  famousQuote: string;
  yearStarted: number;
  originCity: string;
  keyAchievements: string[];
}

export const FOUNDERS: Founder[] = [
  {
    id: 'nithin-kamath',
    name: 'Nithin Kamath',
    company: 'Zerodha',
    companyId: 'zerodha',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    education: 'Bangalore Institute of Technology (BE in Telecommunications)',
    background: 'Sub-broker and active retail proprietary trader with over 12 years of hands-on capital market experience before founding Zerodha.',
    philosophy: 'Build for customer trust and sustainability over chasing vanity venture valuations. If you eliminate friction and do not charge hidden fees, happy customers will become your greatest marketing team.',
    famousQuote: 'We never wanted to build a company to sell it. We wanted to build something we would personally love to use as active traders every single morning.',
    yearStarted: 2010,
    originCity: 'Shivamogga / Bengaluru, Karnataka',
    keyAchievements: [
      'Built India\'s most profitable bootstrapped brokerage with zero venture funding',
      'Created Varsity, the world\'s largest free financial literacy initiative',
      'Pioneered the flat ₹20 discount broking model across Indian capital markets'
    ]
  },
  {
    id: 'deepinder-goyal',
    name: 'Deepinder Goyal',
    company: 'Zomato',
    companyId: 'zomato',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    education: 'Indian Institute of Technology Delhi (Integrated M.Tech in Mathematics & Computing)',
    background: 'Senior Management Analyst at Bain & Company, where he conceived Foodiebay after scanning cafeteria paper menus.',
    philosophy: 'Speed of execution and relentless reinvention matter more than clinging to your original plan. If your customers are moving toward quick commerce, move faster than anyone else.',
    famousQuote: 'The moment you feel comfortable in a hyper-growth consumer business, you are already falling behind. Constantly break your own assumptions.',
    yearStarted: 2008,
    originCity: 'Muktsar, Punjab',
    keyAchievements: [
      'Took Zomato from an office intranet menu scanner to an iconic public company on NSE/BSE',
      'Acquired and turned around Blinkit, conquering India\'s 10-minute quick commerce sector',
      'Cultivated one of India\'s most viral, witty social media and moment-marketing brands'
    ]
  },
  {
    id: 'falguni-nayar',
    name: 'Falguni Nayar',
    company: 'Nykaa',
    companyId: 'nykaa',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    education: 'Sydenham College & Indian Institute of Management Ahmedabad (IIM-A)',
    background: 'Managing Director at Kotak Mahindra Capital with 20+ years of high-stakes corporate investment banking and IPO advising experience.',
    philosophy: 'Authenticity cannot be discounted. When dealing with products that go on someone\'s face and hair, genuine curation, expert guidance, and 100% brand authenticity will always defeat grey-market bargains.',
    famousQuote: 'I wanted to experience the journey of creating something from scratch. Age is just an arbitrary number when you have conviction and domain mastery.',
    yearStarted: 2012,
    originCity: 'Mumbai, Maharashtra',
    keyAchievements: [
      'Became India\'s first self-made woman billionaire through a blockbuster IPO',
      'Built an omnichannel beauty empire with 150+ Luxe and On-Trend offline stores',
      'Blended masterclass beauty content with e-commerce conversion at national scale'
    ]
  },
  {
    id: 'aman-gupta',
    name: 'Aman Gupta',
    company: 'boAt',
    companyId: 'boat',
    role: 'Co-founder & CMO',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    education: 'Delhi University, Chartered Accountant (ICAI) & Kellogg School of Management / ISB',
    background: 'Director of Sales at Harman International (JBL), giving him deep insight into audio distribution channels and young Indian consumer aspirations.',
    philosophy: 'Do not sell boring technical specs to youth who want swagger. Sell passion, music, cricket, and street-style identity. Make the gadget a badge of personal style.',
    famousQuote: 'Hum bhi bana lenge! We proved that an Indian consumer lifestyle brand could take on multinational giants and win the hearts of our youth.',
    yearStarted: 2016,
    originCity: 'New Delhi',
    keyAchievements: [
      'Propelled boAt into the top five wearable audio brands globally by volume',
      'Cultivated the passionate "boAthead" consumer tribe across music and cricket',
      'Became a household entrepreneurial mentor as a beloved investor on Shark Tank India'
    ]
  },
  {
    id: 'harshil-mathur',
    name: 'Harshil Mathur',
    company: 'Razorpay',
    companyId: 'razorpay',
    role: 'Co-founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    education: 'Indian Institute of Technology Roorkee (B.Tech in Computer Science)',
    background: 'Software engineer and entrepreneur admitted to Y Combinator Winter 2015 cohort with co-founder Shashank Kumar.',
    philosophy: 'Treat developers as the ultimate decision-makers. If your documentation is pristine, your sandbox is instantaneous, and your API response is ultra-reliable, developers will advocate for you relentlessly.',
    famousQuote: 'Payments are the lifeblood of commerce. When a checkout fails, a business loses a customer forever. Our job is to make payment failure virtually impossible.',
    yearStarted: 2014,
    originCity: 'Jodhpur, Rajasthan',
    keyAchievements: [
      'Built India\'s most developer-friendly payment gateway, powering millions of merchants',
      'Expanded from pure payment processing into full-suite neobanking with RazorpayX',
      'Successfully acquired official Payment Aggregator licenses from the Reserve Bank of India'
    ]
  },
  {
    id: 'vidit-aatrey',
    name: 'Vidit Aatrey',
    company: 'Meesho',
    companyId: 'meesho',
    role: 'Co-founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    education: 'Indian Institute of Technology Delhi (B.Tech in Electrical Engineering)',
    background: 'Operations and strategy executive at ITC Limited and InMobi before pioneering social commerce in India.',
    philosophy: 'True digital empowerment in India happens when you serve the next 500 million citizens across Tier 2 and Tier 3 cities with zero-commission platforms and extreme frugality.',
    famousQuote: 'E-commerce in Bharat isn\'t about selling thousand-dollar gadgets to executives. It\'s about helping small-town mothers and boutique sellers earn dignity and independent income.',
    yearStarted: 2015,
    originCity: 'Delhi-NCR',
    keyAchievements: [
      'Pioneered 0% seller commission in Indian e-commerce, shaking up traditional marketplace economics',
      'Built Valmo, an innovative decentralized logistics network reducing small parcel delivery costs',
      'Empowered millions of female micro-entrepreneurs to launch independent digital storefronts'
    ]
  },
  {
    id: 'sriharsha-majety',
    name: 'Sriharsha Majety',
    company: 'Swiggy',
    companyId: 'swiggy',
    role: 'Co-founder & Group CEO',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    education: 'BITS Pilani (BE in Electrical & MSc Physics) & Indian School of Business (ISB)',
    background: 'Associate at Nomura Securities London; previously launched Bundl Technologies logistics platform before learning critical lessons on fleet control.',
    philosophy: 'In consumer internet, convenience is the ultimate moat. If you can reliably solve time-starved urban problems in under 30 minutes, you earn the right to serve everyday household needs.',
    famousQuote: 'When we launched Swiggy, we decided never to compromise on owning our delivery fleet. That single hard choice made all the difference between success and failure.',
    yearStarted: 2014,
    originCity: 'Vijayawada, Andhra Pradesh',
    keyAchievements: [
      'Pioneered dedicated hyperlocal fleet logistics with strict zero-minimum-order SLAs',
      'Pioneered 10-15 minute dark store quick commerce in India with Swiggy Instamart',
      'Steered Swiggy to a historic multi-billion dollar public listing in late 2024'
    ]
  },
  {
    id: 'alakh-pandey',
    name: 'Alakh Pandey',
    company: 'Physics Wallah',
    companyId: 'physics-wallah',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    education: 'Harcourt Butler Technical University (HBTU Kanpur, Dropout to teach)',
    background: 'Passionate offline coaching tutor in Prayagraj who began uploading free physics tutorials on a whiteboard to YouTube in 2014.',
    philosophy: 'Education is a fundamental human right, not a predatory luxury product. High-quality coaching should never cost a family their life savings.',
    famousQuote: 'Padh lo chahe kahin se, selection hoga yahin se! As long as our students feel that their teacher genuinely cares about their future, no corporation can defeat us.',
    yearStarted: 2020,
    originCity: 'Prayagraj (Allahabad), Uttar Pradesh',
    keyAchievements: [
      'Built India\'s only profitable EdTech unicorn with over 10 million YouTube students',
      'Disrupted the ₹1,50,000 coaching cartel by offering comprehensive courses at ₹4,000',
      'Successfully scaled over 100+ hybrid offline PW Vidyapeeth coaching institutes'
    ]
  },
  {
    id: 'ritesh-agarwal',
    name: 'Ritesh Agarwal',
    company: 'OYO',
    companyId: 'oyo',
    role: 'Founder & Group CEO',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    education: 'Thiel Fellowship Fellow (College Dropout at age 19)',
    background: 'Traveled across India on budget buses exploring unbranded guest houses, launching Oravel Stays in 2012 before standardizing rooms with OYO in 2013.',
    philosophy: 'Large traditional sectors like budget hospitality are ripe for technology standardization. Transform unorganized inventory into predictable, clean, digitally bookable experiences.',
    famousQuote: 'Start small, think big, and don\'t be afraid to take on massive challenges. Every setback is just data for your next iteration.',
    yearStarted: 2013,
    originCity: 'Bissam Cuttack, Rayagada, Odisha',
    keyAchievements: [
      'First Indian founder selected for the global Peter Thiel Fellowship',
      'Transformed tens of thousands of unbranded budget hotels into a unified brand',
      'Successfully steered OYO through the global pandemic toward consecutive profitable quarters'
    ]
  },
  {
    id: 'kunal-shah',
    name: 'Kunal Shah',
    company: 'CRED',
    companyId: 'cred',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    education: 'Wilson College (BA in Philosophy) & Narsee Monjee Institute of Management Studies (Dropout)',
    background: 'Serial entrepreneur who previously founded FreeCharge (acquired by Snapdeal for $400M in 2015), angel investor, and leading voice on Indian internet economics.',
    philosophy: 'Trust is the rarest currency in emerging economies. Build products that reward high-trust, financially disciplined citizens, and craft an experience so aesthetically pleasing that it feels like art.',
    famousQuote: 'Good design is not how something looks; it is how it makes you feel about yourself while using it. Elevate the user\'s status and dignity.',
    yearStarted: 2018,
    originCity: 'Mumbai, Maharashtra',
    keyAchievements: [
      'Created an elite community of over 13+ million verified high-credit-score consumers',
      'Pioneered viral, self-deprecating IPL advertising that defined a cultural generation',
      'Processes approximately one-third of all credit card bill payments in India'
    ]
  }
];
