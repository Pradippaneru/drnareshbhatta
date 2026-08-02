import {
  Milestone,
  AcademicRecord,
  ImpactStat,
  Initiative,
  MediaItem,
  Speech,
  Testimonial,
  Article,
  FAQItem
} from '../types';

export const BIOGRAPHY = {
  name: "Dr. Naresh Bhatta",
  title: "National Leader | Healthcare Professional | Public Policy Reformer | Advocate for a Prosperous Nepal",
  heroSubtitle: "National Leadership Profile, Interactive Story Timeline & Vision for a Sovereign, Prosperous Nepal",
  missionStatement: "To dedicate my life to building a prosperous, developed, democratic, and self-reliant Nepal—where economic freedom, quality public services, strong institutions, and equal opportunity empower every citizen to achieve their fullest potential.",
  quote: "“Politics is not about power; it is about responsibility. Leadership is measured not by promises made, but by lives improved.”",
  location: "Sudurpashchim & Kathmandu, Nepal",
  phone: "+977 9851423026",
  email: "nareshandroid2@gmail.com",
  motto: "Results over rhetoric. Service over power. Nation above politics.",
  leadershipMotto: "Results over rhetoric. Service over power. Nation above politics.",
  
  aboutStory: {
    title: "A Story of Courage, Public Duty, and Action",
    subtitle: "From Top Regional Student & Frontline Doctor to National Youth Leader and Policy Reformer",
    narrative1: "Dr. Naresh Bhatta is a Nepali physician, public policy reformer, youth leader, and social advocate committed to building a prosperous, sovereign, and globally respected Nepal. His public life has been defined by leadership in national student movements, healthcare reform, disaster response, constitutional advocacy, and grassroots public service. Guided by the principles of economic freedom, democratic accountability, meritocracy, and national unity, Dr. Bhatta envisions a Nepal where every citizen has the opportunity to prosper through enterprise, quality education, accessible healthcare, and transparent governance.",
    narrative2: "His long-term public mission is to help transform Nepal into one of Asia's most developed, self-reliant, and investment-friendly nations through visionary leadership, institutional reform, and people-centered governance. Having served as Coordinator of the Medical Student Struggle Committee, President of Kathmandu University Student Welfare Council, Nepal Doctors Network, and Federation of Nepalese Medical Students, Dr. Bhatta spearheaded nationwide advocacy that successfully reduced medical tuition fees from NPR 6 million to NPR 4 million, made healthcare workers safer, and delivered frontline relief during the 2015 Gorkha Earthquake, COVID-19 pandemic, 2023 Jajarkot Earthquake, and over 100 free health camps.",
    whyMedicine: "Medicine is a sacred trust. Healing a patient restores dignity to a family, while fixing healthcare policy protects an entire generation.",
    whyLeadership: "Leadership is responsibility in motion—organizing citizens, challenging corruption, and empowering young dreamers to transform Nepal.",
    whyServing: "Service above self. A nation becomes great when its citizens are free to enterprise, innovate, and prosper with dignity."
  }
};

export const NATIONAL_VISION = [
  {
    title: "Prosperous Nepal",
    description: "Build a high-income Nepal through capitalism, entrepreneurship, industrialization, innovation, infrastructure development, tourism, hydropower, agriculture modernization, and technology.",
    iconName: "TrendingUp"
  },
  {
    title: "Strong Democracy",
    description: "Protect constitutional democracy, strengthen democratic institutions, uphold the rule of law, and ensure accountable governance.",
    iconName: "Scale"
  },
  {
    title: "Good Governance",
    description: "Create an efficient, corruption-free government that serves citizens with transparency, digital transformation, and professional public administration.",
    iconName: "ShieldCheck"
  },
  {
    title: "Human Development",
    description: "Guarantee quality healthcare and education as fundamental national priorities while expanding opportunities for every Nepali regardless of geography or economic status.",
    iconName: "Stethoscope"
  },
  {
    title: "National Sovereignty",
    description: "Advance an independent foreign policy that safeguards Nepal's sovereignty while expanding strategic economic and diplomatic partnerships.",
    iconName: "Globe"
  }
];

export const PUBLIC_LEADERSHIP = [
  { role: "Past President", organization: "Kathmandu University Student Welfare Council" },
  { role: "Past President", organization: "Nepal Doctors Network" },
  { role: "Past President", organization: "Federation of Nepalese Medical Students" },
  { role: "Coordinator & Spokesperson", organization: "Medical Student Struggle Committee" },
  { role: "National Student Leader", organization: "Engineering Education Fee and Quality Movement" }
];

export const NATIONAL_ACHIEVEMENTS = [
  {
    title: "Medical Education Reform",
    description: "Provided leadership in nationwide advocacy that contributed to reducing undergraduate medical education fees from approximately NPR 6 million to NPR 4 million, helping make medical education more affordable for future generations."
  },
  {
    title: "Education Reform",
    description: "Led campaigns promoting affordability, academic quality, and accountability within Nepal's higher education system."
  },
  {
    title: "Healthcare Worker Protection",
    description: "Advocated for stronger legal protections against violence directed toward healthcare professionals."
  },
  {
    title: "Constitutional & Democratic Advocacy",
    description: "Participated in peaceful civic movements supporting constitutional governance, democratic values, responsible public leadership, and accountability."
  },
  {
    title: "Public Justice",
    description: "Actively supported campaigns seeking justice, transparency, and institutional accountability in nationally significant public issues, including the Nirmala Panta case."
  }
];

export const HUMANITARIAN_LEADERSHIP = [
  {
    title: "COVID-19 Response",
    description: "Served on the frontline during the COVID-19 pandemic, contributing to emergency healthcare delivery and public health efforts."
  },
  {
    title: "Jajarkot Earthquake (2023)",
    description: "Participated in volunteer medical relief missions providing emergency healthcare and humanitarian assistance."
  },
  {
    title: "Gorkha Earthquake (2015)",
    description: "Contributed to emergency medical response and relief efforts for affected communities."
  },
  {
    title: "Community Service",
    description: "Organized and participated in more than 100 free health camps, extending healthcare services to rural and underserved populations throughout Nepal."
  }
];

export const POLICY_PRIORITIES = [
  "Rapid Economic Growth through Free-Market Capitalism",
  "Five Million Sustainable Jobs",
  "Industrialization and Manufacturing",
  "Hydropower and Renewable Energy Expansion",
  "Agricultural Modernization",
  "Tourism Development",
  "Digital Government",
  "Universal Quality Healthcare",
  "Merit-Based Education",
  "Judicial Reform",
  "Anti-Corruption Measures",
  "Youth Employment and Entrepreneurship",
  "National Security and Border Management",
  "Infrastructure Development",
  "Environmental Sustainability"
];

export const LEADERSHIP_PHILOSOPHY = {
  philosophy: "Politics is not about power; it is about responsibility. Leadership is measured not by promises made, but by lives improved. A nation becomes truly great when its citizens are free to dream, empowered to create, and confident that justice, opportunity, and dignity belong to everyone.",
  motto: "Results over rhetoric. Service over power. Nation above politics.",
  leadershipMotto: "Results over rhetoric. Service over power. Nation above politics.",
  quotes: [
    "Every Nepali deserves the opportunity to live with dignity, security, and hope.",
    "A nation does not become great by chance—it becomes great when its people dare to dream, its institutions choose integrity, and its leaders place the nation above themselves."
  ],
  principles: [
    { title: "Nation Above Self", desc: "Placing the sovereign interest and dignity of Nepal above personal or partisan gain." },
    { title: "Service Before Power", desc: "Viewing leadership purely as public stewardship rather than an avenue to authority." },
    { title: "Integrity Before Popularity", desc: "Standing for ethical truth and institutional honesty regardless of political trends." },
    { title: "Unity Over Division", desc: "Bridging provincial, social, and economic divides to build a cohesive national spirit." },
    { title: "Opportunity Through Enterprise", desc: "Empowering citizens with free enterprise, innovation, and private initiative." },
    { title: "Compassion Through Action", desc: "Translating empathy into concrete medical, legal, and humanitarian relief." },
    { title: "Accountability Without Exception", desc: "Zero tolerance for corruption and ensuring uncompromising public transparency." }
  ],
  pragmaticNationalism: "Dr. Naresh Bhatta believes that a nation's success should be measured not by ideology, but by outcomes. Every policy should be judged on one simple question: Does it improve the lives of the Nepali people? His approach combines economic freedom with responsible governance, encouraging private enterprise, entrepreneurship, innovation, and investment while ensuring the state fulfills its essential responsibilities in healthcare, education, justice, national security, infrastructure, and social protection. Rather than being bound by rigid political doctrines, he advocates pragmatic governance—adopting policies that are proven to work, whether they originate from the political left, right, or center. His guiding principle is that Nepal should embrace ideas based on evidence, effectiveness, and the national interest.",
  visionNewNepal: "Dr. Bhatta envisions a Nepal where young people no longer leave their homeland because opportunity exists at home; where farmers prosper through modern agriculture; where industries manufacture products proudly bearing the label \"Made in Nepal\"; where every child receives quality education regardless of background; where every family can access quality healthcare without financial hardship; and where honest work, innovation, and integrity are rewarded. He believes Nepal can become one of Asia's most dynamic economies by embracing entrepreneurship, industrialization, hydropower, tourism, technology, scientific research, and good governance. Economic growth must create opportunity in every province and improve the lives of ordinary citizens."
};

export const PERSONAL_VALUES = [
  "Patriotism",
  "Integrity",
  "Accountability",
  "Meritocracy",
  "Compassion",
  "Courage",
  "Transparency",
  "National Unity",
  "Service Above Self",
  "Evidence-Based Policy",
  "Pragmatic"
];

export const CORE_BELIEFS = [
  {
    title: "Pragmatic Nationalism",
    description: "Every policy must be judged on one fundamental question: Does it improve the lives, prosperity, and security of the Nepali people?",
    iconName: "ShieldCheck"
  },
  {
    title: "Economic Freedom & Enterprise",
    description: "Unlocking Nepal's true potential through free-market capitalism, industrialization, hydropower expansion, and generating 5 million sustainable jobs.",
    iconName: "TrendingUp"
  },
  {
    title: "Democratic Accountability",
    description: "Upholding constitutional democracy, rule of law, anti-corruption transparency, and merit-based governance across all public institutions.",
    iconName: "Scale"
  },
  {
    title: "Universal Quality Healthcare & Education",
    description: "Guaranteeing accessible healthcare and meritocracy in education as fundamental national priorities for every citizen regardless of geography.",
    iconName: "Stethoscope"
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    year: "2024 - Present",
    category: "community",
    title: "Legal Reform & National Policy Visionary",
    organization: "Bachelor of Laws (LLB) & Public Policy Reform",
    role: "Policy Reformer & Constitutional Scholar",
    description: "Pursuing Bachelor of Laws (LLB) focused on constitutional governance, legislative reform, and anti-corruption policies for a Prosperous Nepal.",
    impactMetric: "National Policy Blueprint",
    highlights: [
      "Formulating blueprints for free-market capitalism, 5 million jobs, and digital government.",
      "Advocating for judicial reform, anti-corruption measures, and meritocratic governance."
    ]
  },
  {
    id: "m2",
    year: "2023",
    category: "medical",
    title: "Jajarkot Earthquake Relief & Healthcare Protection Advocacy",
    organization: "Volunteer Medical Relief & Public Advocacy",
    role: "Emergency Medical Responder",
    description: "Led frontline medical relief during the 2023 Jajarkot earthquake and championed legal protections against violence directed toward healthcare workers.",
    impactMetric: "Disaster Emergency Relief",
    highlights: [
      "Deployed volunteer medical teams providing emergency trauma care and supplies to affected communities.",
      "Spearheaded national campaigns for healthcare worker security and public justice."
    ]
  },
  {
    id: "m3",
    year: "2020 - 2022",
    category: "student",
    title: "Medical Education Reform Leader & COVID-19 Frontline",
    organization: "Medical Student Struggle Committee & Frontline Healthcare",
    role: "Coordinator & Spokesperson",
    description: "Led nationwide student advocacy reducing undergraduate medical fees from ~NPR 6M to NPR 4M and served on the pandemic frontline.",
    impactMetric: "NPR 2M Fee Cut / Student",
    highlights: [
      "Successfully advocated for affordable medical education across Nepal.",
      "Served in emergency ICUs during COVID-19 pandemic and led Engineering Education Fee Quality Movement."
    ]
  },
  {
    id: "m4",
    year: "2017 - 2020",
    category: "nsu",
    title: "President, KU Student Welfare Council & Nepal Doctors Network",
    organization: "Kathmandu University & Federation of Nepalese Medical Students",
    role: "Past President",
    description: "Elected leader representing medical students across Nepal, organizing 100+ health camps and championing civic accountability.",
    impactMetric: "100+ Free Health Camps",
    highlights: [
      "Led Kathmandu University Student Welfare Council and Federation of Nepalese Medical Students.",
      "Delivered free healthcare consultations to 25,000+ rural citizens across Nepal."
    ]
  },
  {
    id: "m5",
    year: "2015",
    category: "community",
    title: "Gorkha Earthquake Emergency Medical Response",
    organization: "Nepal Disaster Medical Relief Taskforce",
    role: "Volunteer Medical Responder",
    description: "Mobilized emergency medical aid and relief supplies during the devastating 7.8 magnitude Gorkha earthquake.",
    impactMetric: "Emergency Aid Mobilized",
    highlights: [
      "Delivered trauma care, wound treatment, and hygiene supplies to rural earthquake survivors.",
      "Demonstrated courage and service during one of Nepal's most critical humanitarian crises."
    ]
  }
];

export const ACADEMIC_RECORDS: AcademicRecord[] = [
  {
    id: "a1",
    type: "education",
    title: "Bachelor of Laws (LLB)",
    institution: "Nepal Law Faculty",
    year: "Ongoing",
    details: "Focused on constitutional law, governance, legislative reform, anti-corruption policies, and public policy.",
    badge: "Ongoing LLB"
  },
  {
    id: "a2",
    type: "education",
    title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    institution: "Kathmandu University",
    year: "Graduated",
    details: "Comprehensive medical degree with strong academic focus on physiology, public health, and healthcare leadership.",
    badge: "MBBS Physician"
  },
  {
    id: "a3",
    type: "education",
    title: "Higher Secondary Education (Science)",
    institution: "National Education Board",
    year: "Top Distinction",
    details: "Ranked among the National Top 20 students in Science across Nepal.",
    badge: "National Top 20"
  },
  {
    id: "a4",
    type: "education",
    title: "School Leaving Certificate (SLC)",
    institution: "Sudurpashchim School Board",
    year: "Top Distinction",
    details: "Ranked among the Top 3 students in the Sudurpashchim Region of Nepal.",
    badge: "Top 3 Regional"
  },
  {
    id: "a5",
    type: "award",
    title: "National Science Olympiad Winner",
    institution: "National Science Association",
    year: "Honour",
    details: "Winner of the National Science Olympiad and District Topper (Class 8). Multiple awards in debate, public speaking, and science competitions.",
    badge: "Olympiad Winner"
  },
  {
    id: "a6",
    type: "award",
    title: "National Sports Distinction - Table Tennis",
    institution: "Sudurpashchim Province Sports Council",
    year: "5th National Games",
    details: "National Table Tennis Player representing Sudurpashchim Province in the 5th National Games of Nepal.",
    badge: "National Player"
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "s1",
    number: 25000,
    prefix: "",
    suffix: "+",
    label: "Patients Served",
    description: "Free medical consultations, diagnostics, and prescriptions delivered in rural camps.",
    iconName: "UserCheck"
  },
  {
    id: "s2",
    number: 100,
    prefix: "",
    suffix: "+",
    label: "Free Health Camps",
    description: "Organized across remote villages and underserved provinces throughout Nepal.",
    iconName: "Hospital"
  },
  {
    id: "s3",
    number: 2,
    prefix: "NPR ",
    suffix: "M",
    label: "Fee Cut / Student",
    description: "Reduction in undergraduate medical tuition fees achieved through nationwide advocacy.",
    iconName: "GraduationCap"
  },
  {
    id: "s4",
    number: 5,
    prefix: "",
    suffix: "M",
    label: "Jobs Target Vision",
    description: "National economic policy target for youth employment, industrialization, and enterprise.",
    iconName: "TrendingUp"
  }
];

export const INITIATIVES: Initiative[] = [
  {
    id: "init-1",
    category: "Education Reform",
    title: "Medical & Higher Education Reform Campaign",
    tagline: "Making medical and technical education affordable, transparent, and merit-based.",
    description: "A nationwide advocacy movement that reduced medical school fees by NPR 2 Million and established standards of quality and accountability in higher education.",
    status: "Active Impact",
    metrics: "NPR 2M Fee Cut Achieved",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    fullStory: "As Coordinator of the Medical Student Struggle Committee and leader of student welfare bodies, Dr. Naresh Bhatta led peaceful nationwide advocacy. The movement succeeded in reducing medical tuition fees from NPR 6 Million to NPR 4 Million, ensuring that medical education depends on intellect and dedication rather than wealth.",
    keyGoals: [
      "Ensure merit-based medical and technical university admissions.",
      "Promote financial transparency in higher education tuition fees.",
      "Advocate for academic quality, faculty standards, and student rights."
    ]
  },
  {
    id: "init-2",
    category: "Healthcare Access",
    title: "Rural Health Camps & Community Service",
    tagline: "Extending essential healthcare to rural and underserved populations across Nepal.",
    description: "Organized and participated in over 100 free health camps delivering consultations, medicines, and diagnostic checkups to remote villages.",
    status: "Active",
    metrics: "25,000+ Citizens Treated",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    fullStory: "Healthcare should never be a luxury dictated by geography or income. Through over 100 mobile health camps across Sudurpashchim and other remote regions of Nepal, Dr. Bhatta and volunteer teams provided free consultations, preventive care, and medication to underserved families.",
    keyGoals: [
      "Provide free diagnostic checkups in remote rural districts.",
      "Deliver essential medications and preventive health education.",
      "Train local youth in emergency first response and community hygiene."
    ]
  },
  {
    id: "init-3",
    category: "Humanitarian Response",
    title: "Disaster Emergency Relief Taskforce",
    tagline: "Frontline medical response during earthquakes, pandemics, and national emergencies.",
    description: "Deployed on the frontlines during the 2015 Gorkha Earthquake, COVID-19 pandemic, and 2023 Jajarkot Earthquake to save lives.",
    status: "Active Deployment",
    metrics: "3 Major National Crises",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    fullStory: "When natural disasters strike Nepal, immediate medical intervention is critical. Dr. Bhatta served on the frontlines during the 2015 Gorkha Earthquake, provided continuous care in ICUs during the COVID-19 pandemic, and mobilized emergency medical relief to earthquake victims in Jajarkot in 2023.",
    keyGoals: [
      "Deploy rapid response medical volunteer units within 24 hours.",
      "Distribute emergency trauma supplies and clean drinking water.",
      "Provide long-term health monitoring for disaster-affected families."
    ]
  },
  {
    id: "init-4",
    category: "Public Governance",
    title: "Prosperous Nepal Policy Blueprint",
    tagline: "Building a high-income, self-reliant Nepal through capitalism, enterprise, and good governance.",
    description: "A comprehensive policy reform roadmap focusing on 5 million jobs, industrialization, hydropower expansion, tourism, and digital government.",
    status: "Expanding Vision",
    metrics: "5 Million Jobs Roadmap",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    fullStory: "Nepal possesses immense natural wealth, youth talent, and strategic potential. The Prosperous Nepal Blueprint outlines evidence-based reforms: fostering private enterprise, expanding hydropower exports, modernizing agriculture, reforming the judiciary, and creating a transparent digital government.",
    keyGoals: [
      "Drive free-market economic policies to generate 5 million jobs.",
      "Expand hydropower generation and clean energy export.",
      "Establish digital administrative governance and zero-tolerance anti-corruption."
    ]
  }
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "med-1",
    category: "Disaster Relief",
    title: "Medical Relief Mission in Earthquake-Affected Jajarkot",
    subtitle: "Delivering emergency trauma care and supplies to affected communities.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
    date: "November 2023",
    location: "Jajarkot, Sudurpashchim/Karnali, Nepal"
  },
  {
    id: "med-2",
    category: "Leadership",
    title: "Kathmandu University Student Leadership Address",
    subtitle: "Speaking on meritocracy, student welfare, and educational accessibility.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop",
    date: "August 2022",
    location: "Kathmandu University, Dhulikhel"
  },
  {
    id: "med-3",
    category: "Community Care",
    title: "Rural Health Camp in Far-Western Nepal",
    subtitle: "Providing free consultations to over 500 rural villagers.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    date: "May 2023",
    location: "Sudurpashchim Province, Nepal"
  },
  {
    id: "med-4",
    category: "Policy Forum",
    title: "National Policy Conclave on Economic Reform",
    subtitle: "Presenting strategies for youth employment, hydropower, and good governance.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    date: "January 2025",
    location: "Kathmandu, Nepal"
  }
];

export const SPEECHES: Speech[] = [
  {
    id: "sp-1",
    title: "Pragmatic Nationalism & The Blueprint for a Prosperous Nepal",
    event: "National Policy Reform Conclave",
    location: "Kathmandu, Nepal",
    date: "January 2025",
    duration: "32 min",
    category: "National Vision",
    summary: "Dr. Naresh Bhatta outlines a non-ideological, results-driven governance model focused on economic freedom, industrialization, 5M jobs, and institutional integrity.",
    keyTakeaways: [
      "Politics is not about power; it is about responsibility and lives improved.",
      "Pragmatic nationalism judges policy strictly on outcomes for citizens.",
      "Economic enterprise and good governance are the twin engines of Nepal's future."
    ],
    quote: "“Results over rhetoric. Service over power. Nation above politics.”"
  },
  {
    id: "sp-2",
    title: "Education as a National Priority: Integrity, Merit & Affordability",
    event: "Medical & Higher Education Reform Assembly",
    location: "Kathmandu University Auditorium",
    date: "September 2023",
    duration: "25 min",
    category: "Education Reform",
    summary: "Reflecting on the successful medical tuition fee reduction campaign and calling for meritocracy across all higher education institutions in Nepal.",
    keyTakeaways: [
      "Access to higher education must be earned by intellect and dedication, not wealth.",
      "Institutions must be transparent, accountable, and student-centered.",
      "Protecting healthcare professionals ensures a healthy nation."
    ],
    quote: "“When we make education affordable, we unlock the boundless potential of Nepal's youth.”"
  },
  {
    id: "sp-3",
    title: "Frontline Duty: Lessons in Courage from Earthquake Relief to COVID-19",
    event: "Humanitarian Medical Service Forum",
    location: "Nepal Doctors Network Conference",
    date: "December 2023",
    duration: "28 min",
    category: "Humanitarian Service",
    summary: "Sharing frontline experiences from the 2015 Gorkha Earthquake, COVID-19 ICUs, and 2023 Jajarkot Earthquake, urging young doctors to serve with compassionate courage.",
    keyTakeaways: [
      "Crisis reveals true character; leadership means standing firm in the storm.",
      "Grassroots health camps rebuild hope in underserved communities.",
      "Nation above self in every call of duty."
    ],
    quote: "“Leadership is measured not by promises made, but by lives improved when help is needed most.”"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Dr. Naresh Bhatta led the movement that slashed medical fees by NPR 2 Million. Because of his courage, hundreds of talented students like me are studying medicine today.",
    author: "Bikram Joshi",
    role: "Medical Student & Student Union Representative",
    organization: "Kathmandu University",
    category: "Student"
  },
  {
    id: "t2",
    quote: "During the Jajarkot earthquake, Dr. Bhatta's medical team arrived in our remote village with trauma medicines and warm care when we felt forgotten.",
    author: "Ram Bahadur Thapa",
    role: "Local Community Representative",
    organization: "Jajarkot District, Nepal",
    category: "Community Leader"
  },
  {
    id: "t3",
    quote: "Dr. Bhatta combines deep medical dedication with a clear legal and policy vision for Nepal's governance. He leads with integrity and pragmatic action.",
    author: "Prof. Dr. K. Sharma",
    role: "Senior Medical Educator",
    organization: "Nepal Medical Council Forum",
    category: "Faculty"
  },
  {
    id: "t4",
    quote: "Over 100 health camps in remote areas prove his commitment to public service. He doesn't just talk about change; he delivers tangible results.",
    author: "Saraswati Bhattarai",
    role: "Community Health Advocate",
    organization: "Sudurpashchim Health Network",
    category: "Patient"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Pragmatic Nationalism: Why Outcomes Must Supersede Ideology in Nepal",
    subtitle: "A non-doctrinaire approach to economic freedom, good governance, and national sovereignty.",
    category: "Public Policy",
    readTime: "7 min read",
    date: "January 15, 2025",
    excerpt: "Every policy in Nepal should be judged on one simple question: Does it improve the lives of the Nepali people? How pragmatic governance can unlock rapid development.",
    content: [
      "For decades, Nepal's political debate has been bogged down by abstract ideological dogma. Meanwhile, our youth migrate abroad for employment, and critical infrastructure lags behind.",
      "Pragmatic Nationalism bridges economic enterprise with accountable public service. By encouraging private investment, expanding hydropower, modernizing agriculture, and eliminating corruption, we build a self-reliant economy.",
      "The goal is simple: an enabler government that empowers citizens to innovate, enterprise, and prosper with dignity."
    ],
    keyQuotes: [
      "Results over rhetoric. Service over power. Nation above politics."
    ]
  },
  {
    id: "art-2",
    title: "The Battle for Affordable Medical Education in Nepal",
    subtitle: "How student advocacy reduced medical fees by NPR 2 Million and protected academic standards.",
    category: "Education Reform",
    readTime: "8 min read",
    date: "November 20, 2024",
    excerpt: "Medical education should be accessible to those with merit and compassion, regardless of economic background. Reflections from the Medical Student Struggle Committee.",
    content: [
      "When undergraduate medical fees approached NPR 6 Million, aspiring doctors from middle- and low-income families faced an impossible barrier.",
      "Through organized advocacy, the Medical Student Struggle Committee mobilized medical students across Nepal. We insisted on cost transparency, reduction to NPR 4 Million, and strong quality controls.",
      "True educational reform creates an environment where talent, integrity, and dedication determine success."
    ],
    keyQuotes: [
      "When education is affordable, a nation's youth becomes its greatest asset."
    ]
  },
  {
    id: "art-3",
    title: "Frontline Lessons from Disaster Medical Relief: Gorkha to Jajarkot",
    subtitle: "Building resilient emergency healthcare networks for Nepal's vulnerable regions.",
    category: "Healthcare",
    readTime: "6 min read",
    date: "October 05, 2024",
    excerpt: "Experiencing emergency triage in the aftermath of major earthquakes highlights the urgent need for decentralized emergency healthcare and trained community responders.",
    content: [
      "When the ground shook during the 2015 Gorkha Earthquake and the 2023 Jajarkot Earthquake, roads were blocked and local health centers overwhelmed.",
      "Mobilizing rapid volunteer medical units demonstrated that emergency preparedness saves lives. Decentralized health stocks and community first responders are essential.",
      "Compassion through action is the foundation of public health resilience."
    ],
    keyQuotes: [
      "In times of national crisis, duty requires us to stand on the frontlines."
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I invite Dr. Naresh Bhatta to speak at a conference, university, or youth summit?",
    answer: "Dr. Naresh Bhatta frequently delivers keynote speeches on Pragmatic Nationalism, Public Policy Reform, Medical Education, and Youth Leadership. You can contact directly at +977 9851423026 or email drnareshbhatta@gmail.com.",
    category: "Speaking"
  },
  {
    id: "faq-2",
    question: "How can I volunteer for Dr. Naresh Bhatta's Rural Health Camps & Disaster Relief initiatives?",
    answer: "We welcome medical professionals, law students, youth volunteers, and civic advocates. Reach out via phone at +977 9851423026 or through the Contact page form.",
    category: "Volunteer"
  },
  {
    id: "faq-3",
    question: "What are Dr. Naresh Bhatta's key policy priorities for Nepal?",
    answer: "His priorities include rapid economic growth through free-market capitalism, creating 5 million sustainable jobs, industrialization, hydropower expansion, digital government, universal quality healthcare, meritocratic education, and anti-corruption governance.",
    category: "Policy"
  },
  {
    id: "faq-4",
    question: "What is Dr. Naresh Bhatta's background in medical education reform?",
    answer: "As Coordinator & Spokesperson of the Medical Student Struggle Committee and Past President of student welfare bodies, he led advocacy that successfully reduced medical tuition fees from NPR 6M to NPR 4M.",
    category: "General"
  }
];

