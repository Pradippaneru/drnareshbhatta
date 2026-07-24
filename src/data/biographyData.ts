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
  title: "Physician · Youth Mentor · Public Health Leader · Community Advocate",
  heroSubtitle: "A Digital Biography, Interactive Flow Journey & Movement for Human Service",
  missionStatement: "Healing bodies through clinical excellence, empowering minds through youth leadership, and building resilient communities through selfless service.",
  quote: "“True leadership is not measured by the height of one's pedestal, but by how many lives are lifted standing beside them.”",
  location: "Kathmandu & Pokhara, Nepal | Global Forums",
  phone: "+977 9851423026",
  email: "drnareshbhatta@gmail.com",
  
  aboutStory: {
    title: "The Beginning",
    subtitle: "A Journey Rooted in Compassion, Discipline, and Action",
    narrative1: "My journey did not begin in lecture halls or clinical wards, but in the quiet realization that healing requires far more than prescriptions. Navigating medical training and youth leadership forums, I witnessed how health disparities, lack of youth guidance, and systemic barriers hold back extraordinary potential in our communities.",
    narrative2: "Combining clinical medicine with grassroots leadership became my calling. Leading student bodies taught me how to unite diverse voices toward a shared vision. In hospitals, holding the hands of anxious patients taught me humility and grace. Today, my mission stands unified: bridging healthcare access with youth leadership development.",
    whyMedicine: "Medicine is the purest form of service. Every diagnosis is a promise of hope, every recovery a testament to human resilience.",
    whyLeadership: "Leadership is responsibility in motion. It is creating frameworks where young dreamers find their voice and tools to drive social change.",
    whyServing: "Service gives purpose to skill. When we give back, we build a legacy that outlasts our individual achievements."
  }
};

export const CORE_BELIEFS = [
  {
    title: "Empathy as First Principles",
    description: "Whether examining a patient or addressing a youth forum, deep listening and empathetic understanding precede every decision.",
    iconName: "HeartHandshake"
  },
  {
    title: "Institutional Integrity",
    description: "Building trustworthy organizations requires transparent governance, uncompromising ethics, and accountable stewardship.",
    iconName: "ShieldCheck"
  },
  {
    title: "Youth Empowerment",
    description: "Young minds do not merely represent the future; they are the active catalysts of present transformation when given trust and mentorship.",
    iconName: "Sparkles"
  },
  {
    title: "Equitable Healthcare",
    description: "Quality medical care is a fundamental human dignity, not a privilege reserved for the fortunate few.",
    iconName: "Stethoscope"
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    year: "2025 - Present",
    category: "medical",
    title: "Senior Resident Physician & Community Health Coordinator",
    organization: "National Healthcare Network",
    role: "Clinical Lead & Public Health Specialist",
    description: "Pioneering rural telemedicine nodes and heading preventive health screenings across underserved sub-districts.",
    impactMetric: "12,000+ Patients Consulted",
    highlights: [
      "Established 8 mobile clinic diagnostic units in remote villages.",
      "Introduced digital health record tracking for chronic care patients."
    ]
  },
  {
    id: "m2",
    year: "2023 - 2024",
    category: "nsu",
    title: "President & Senior Youth Advisor",
    organization: "North South University Student Leadership Forum",
    role: "NSU Executive Leader",
    description: "Led 15,000+ student body representations, organized national youth summits, and facilitated campus health reform programs.",
    impactMetric: "15k+ Students Engaged",
    highlights: [
      "Spearheaded the NSU Annual National Youth Leadership Conference.",
      "Launched student mental health helpline & wellness sanctuary."
    ]
  },
  {
    id: "m3",
    year: "2021 - 2023",
    category: "community",
    title: "Founder & Director",
    organization: "Youth Health & Social Impact Movement (YHSIM)",
    role: "Movement Founder",
    description: "Mobilized over 800 medical students and young volunteers for disaster relief, health camps, and youth mentorship.",
    impactMetric: "45+ Health Camps Organized",
    highlights: [
      "Distributed emergency medicine and food rations to flood victims.",
      "Trained 1,200 youth volunteers in basic emergency first aid."
    ]
  },
  {
    id: "m4",
    year: "2018 - 2021",
    category: "student",
    title: "Medical Student Association President",
    organization: "Faculty of Medicine",
    role: "Student President",
    description: "Championed academic reform, peer-to-peer clinical tutoring, and international medical research exchange.",
    impactMetric: "Awarded Best Campus Advocate",
    highlights: [
      "Published 3 peer-reviewed clinical studies on public health awareness.",
      "Organized national medical quiz bowl and ethics symposium."
    ]
  }
];

export const ACADEMIC_RECORDS: AcademicRecord[] = [
  {
    id: "a1",
    type: "education",
    title: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
    institution: "Top Medical University",
    year: "2018 - 2023",
    details: "Graduated with High Honors in Community Medicine and Pathology. Class Representative & Valedictorian nominee.",
    badge: "Honors Graduate"
  },
  {
    id: "a2",
    type: "education",
    title: "North South University (NSU) Leadership Fellow",
    institution: "North South University",
    year: "2019 - 2022",
    details: "Specialized executive modules in Public Health Management, Institutional Governance, and Youth Diplomacy.",
    badge: "NSU Fellow"
  },
  {
    id: "a3",
    type: "research",
    title: "Preventive Cardiology in Low-Resource Urban Settings",
    institution: "Journal of Asian Public Health",
    year: "2024",
    details: "Lead author examining blood pressure screening efficiency in community health camps.",
    badge: "Lead Researcher"
  },
  {
    id: "a4",
    type: "award",
    title: "National Youth Leadership Award",
    institution: "Ministry of Youth & Sports",
    year: "2024",
    details: "Recognized for outstanding contribution to youth mobilization and community emergency healthcare.",
    badge: "National Award"
  },
  {
    id: "a5",
    type: "certificate",
    title: "Advanced Cardiovascular Life Support (ACLS) & Trauma",
    institution: "International Resuscitation Board",
    year: "2023",
    details: "Certified lead emergency responder for critical care medicine.",
    badge: "Certified Specialist"
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "s1",
    number: 25000,
    prefix: "",
    suffix: "+",
    label: "Patients Served",
    description: "Free medical consultations, diagnostics, and essential prescription supplies delivered.",
    iconName: "UserCheck"
  },
  {
    id: "s2",
    number: 50,
    prefix: "",
    suffix: "+",
    label: "Free Health Camps",
    description: "Mobile clinics operated across remote rural districts and underserved urban slums.",
    iconName: "Hospital"
  },
  {
    id: "s3",
    number: 18000,
    prefix: "",
    suffix: "+",
    label: "Youth Mentored",
    description: "Students trained in leadership, health advocacy, public speaking, and community action.",
    iconName: "GraduationCap"
  },
  {
    id: "s4",
    number: 120,
    prefix: "",
    suffix: "+",
    label: "Keynote Speeches",
    description: "Delivered across national university summits, medical congresses, and youth forums.",
    iconName: "Mic"
  }
];

export const INITIATIVES: Initiative[] = [
  {
    id: "init-1",
    category: "Healthcare",
    title: "Rural Diagnostics & Health Bridge",
    tagline: "Bringing specialized clinical care directly to doorstep communities.",
    description: "A continuous mobile health clinic movement utilizing portable ultrasound and ECG devices to screen rural populations for non-communicable diseases.",
    status: "Active",
    metrics: "18,000+ Screenings",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    fullStory: "Rural healthcare often falters due to late diagnoses. Through Rural Diagnostics & Health Bridge, Dr. Abrar mobilized medical volunteers and portable diagnostic gear into villages where the nearest hospital is hours away. Over 18,000 individuals have received early hypertension, diabetes, and cardiovascular screenings free of charge.",
    keyGoals: [
      "Operate bi-weekly diagnostic camps in remote sub-districts.",
      "Provide free follow-up tele-consultations for chronic patients.",
      "Distribute basic emergency medications without cost."
    ]
  },
  {
    id: "init-2",
    category: "Youth Leadership",
    title: "NSU NextGen Leadership Fellowship",
    tagline: "Empowering university youth with ethical governance and public service skills.",
    description: "An intensive 6-month leadership accelerator designed for campus change-makers, providing direct mentorship, public speaking training, and project seed funding.",
    status: "Expanding",
    metrics: "450+ Fellows Graduated",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    fullStory: "Young people are eager to lead but often lack structured mentorship and practical execution frameworks. The NextGen Leadership Fellowship bridges this gap with rigorous workshops on project management, ethical communication, conflict resolution, and grassroots advocacy.",
    keyGoals: [
      "Host annual campus leadership bootcamps.",
      "Fund student-led social impact micro-projects.",
      "Connect emerging student leaders with national policy mentors."
    ]
  },
  {
    id: "init-3",
    category: "Education",
    title: "MedMentors Academic Equity Network",
    tagline: "Democratizing medical education and entrance coaching for underprivileged students.",
    description: "A volunteer network of medical doctors providing free tutoring, entrance preparation, and scholarship counseling to talented rural students.",
    status: "Active",
    metrics: "120+ Medical Scholars",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    fullStory: "Becoming a physician should depend on intellect and compassion, not financial background. MedMentors offers zero-cost preparatory courses, digital study materials, and one-on-one mentorship for aspiring medical students from low-income families.",
    keyGoals: [
      "Maintain a 100% free digital library for medical entrance exams.",
      "Provide 1-on-1 mentorship for high-performing rural applicants.",
      "Offer stipend support for university textbooks."
    ]
  },
  {
    id: "init-4",
    category: "Social Programs",
    title: "Flood Relief & Emergency Medical Taskforce",
    tagline: "Rapid response medical relief during natural disasters and seasonal crises.",
    description: "A deployed taskforce of trained doctors and student volunteers delivering water purification tablets, vaccines, and emergency wound treatment.",
    status: "Active",
    metrics: "3,500+ Flood Victims Relief",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    fullStory: "When extreme weather hits coastal and riverbank areas, waterborne illnesses spike rapidly. Dr. Abrar's taskforce deploys within 24 hours of flood alerts with water purification systems, skin infection treatments, and emergency oral rehydration supplies.",
    keyGoals: [
      "Maintain a 24/7 disaster response medical kit inventory.",
      "Partner with local boat owners for water-isolated village access.",
      "Conduct post-disaster sanitation awareness campaigns."
    ]
  }
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "med-1",
    category: "Community",
    title: "Rural Health Camp in Sylhet Division",
    subtitle: "Over 800 villagers received medical checkups and free prescriptions.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
    date: "November 2024",
    location: "Sylhet, Bangladesh"
  },
  {
    id: "med-2",
    category: "Leadership",
    title: "NSU Youth Leadership Summit Keynote",
    subtitle: "Addressing 1,200 student leaders on ethical governance and social impact.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop",
    date: "August 2024",
    location: "Auditorium 1, North South University"
  },
  {
    id: "med-3",
    category: "Photography",
    title: "Clinical Consultation in Ward 4",
    subtitle: "Docu-series capturing the quiet human moments of clinical care.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    date: "June 2024",
    location: "Dhaka Central Hospital"
  },
  {
    id: "med-4",
    category: "Events",
    title: "National Health Excellence Awards",
    subtitle: "Receiving recognition for grassroots community healthcare initiatives.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    date: "January 2025",
    location: "International Convention City"
  }
];

export const SPEECHES: Speech[] = [
  {
    id: "sp-1",
    title: "Redefining Leadership in the Post-Pandemic World",
    event: "National Youth Leadership Conclave",
    location: "Main Convention Center, Dhaka",
    date: "October 2024",
    duration: "28 min",
    category: "Youth Leadership",
    summary: "Dr. Abrar delivers a powerful keynote on how young leaders must shift from title-seeking to purpose-building, emphasizing emotional intelligence and grassroots action.",
    keyTakeaways: [
      "Leadership is an act of stewardship, not position.",
      "Empathy is a measurable operational multiplier.",
      "The standard you walk past is the standard you accept."
    ],
    quote: "“Your title gives you authority, but only your empathy grants you authentic influence.”"
  },
  {
    id: "sp-2",
    title: "Bridging the Chasm: Healthcare as a Human Right",
    event: "Public Health Ethics Forum",
    location: "Faculty of Medicine Auditorium",
    date: "July 2024",
    duration: "35 min",
    category: "Medical Ethics",
    summary: "An impassioned plea to future physicians to view healthcare as a pillar of social justice rather than purely a commercial transaction.",
    keyTakeaways: [
      "Preventive care saves ten times more lives than late intervention.",
      "Clinical excellence without cultural humility fails the patient.",
      "Community trust is medicine's strongest diagnostic tool."
    ],
    quote: "“When a patient walks into your clinic, they bring not just symptoms, but their entire life story.”"
  },
  {
    id: "sp-3",
    title: "The NSU Legacy: Student Action & Civic Responsibility",
    event: "NSU Student Orientation & Convocation",
    location: "North South University Grand Plaza",
    date: "March 2024",
    duration: "22 min",
    category: "Keynote",
    summary: "Inspiring incoming students to leverage their academic privilege to create tangible, positive changes in surrounding communities.",
    keyTakeaways: [
      "Use your student years to test ideas that serve others.",
      "Failure in service is better than success in isolation.",
      "Build networks based on shared values, not transactional gain."
    ],
    quote: "“The measure of NSU is not just our ranking, but the hope we spark outside our gates.”"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Dr. Abrar didn't just diagnose my father's condition during the rural camp—he arranged the surgery and checked on us every week. He treated us like family.",
    author: "Fatema Begum",
    role: "Community Resident & Patient's Daughter",
    organization: "Sylhet Rural District",
    category: "Patient"
  },
  {
    id: "t2",
    quote: "As my student leader at NSU, Dr. Abrar showed me that leadership isn't about giving orders. It's about being the first person to arrive and the last to leave.",
    author: "Tanvir Hossain",
    role: "NSU Student Council Vice President",
    organization: "North South University",
    category: "Student"
  },
  {
    id: "t3",
    quote: "Rarely do we see a young physician balance rigorous clinical knowledge with such deep socio-political maturity and compassion for public health.",
    author: "Prof. Dr. M. Rahman",
    role: "Head of Community Medicine",
    organization: "Medical Faculty Council",
    category: "Faculty"
  },
  {
    id: "t4",
    quote: "His emergency medical taskforce was the first team to reach our flooded village when roads were cut off. His courage and coordination saved lives.",
    author: "Rafiqul Islam",
    role: "Union Parishad Chairman",
    organization: "Sunamganj Disaster Committee",
    category: "Community Leader"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Why Young Physicians Must Master Public Policy and Civic Leadership",
    subtitle: "Medical school teaches us how to heal individuals. Leadership teaches us how to heal society.",
    category: "Healthcare",
    readTime: "6 min read",
    date: "December 18, 2024",
    excerpt: "The stethoscope can diagnose a lung infection, but it cannot cure damp housing or contaminated groundwater. For medicine to fulfill its highest calling, doctors must step into public advocacy.",
    content: [
      "Throughout medical training, we are drilled on cellular pathways, pharmacological dosage, and surgical technique. Yet when patients leave the hospital, they return to environments that created their illnesses in the first place.",
      "As young doctors, we often feel helpless against systemic poverty, poor health literacy, and bureaucratic delay. But silence is an abdication of duty. When physicians enter policy discussions, we bring empirical truth and human stories to the table.",
      "By combining clinical authority with civic organizing, we transform hospital bedside care into national health reform."
    ],
    keyQuotes: [
      "Medicine without public policy is merely triage on a broken bridge."
    ]
  },
  {
    id: "art-2",
    title: "The NSU Blueprint: Cultivating Ethical Student Leaders in Modern Academics",
    subtitle: "How university campuses can become incubators for social purpose rather than diploma mills.",
    category: "Leadership",
    readTime: "8 min read",
    date: "November 04, 2024",
    excerpt: "Higher education must do more than produce job-ready graduates. It must nurture courageous, empathetic civic leaders capable of steering nations through complex crises.",
    content: [
      "During my tenure as an NSU student leader, I observed two competing philosophies of campus life: careerism vs. community stewardship. While individual ambition is natural, isolating youth from social challenges produces detached elites.",
      "When we launched student-led health initiatives and governance forums at NSU, student engagement soared. Youth do not want passive lectures; they crave meaningful responsibility.",
      "Every university should embed service-learning and peer mentorship into its core culture."
    ],
    keyQuotes: [
      "A university's true legacy is measured by the character of its graduates when no one is watching."
    ]
  },
  {
    id: "art-3",
    title: "Preventive Care in Rural Villages: Small Interventions, Massive Dividends",
    subtitle: "A practical reflection from 50+ free health camps across low-resource sub-districts.",
    category: "Healthcare",
    readTime: "5 min read",
    date: "September 12, 2024",
    excerpt: "A simple 2-minute blood pressure check in a village tea stall can prevent a catastrophic stroke 5 years later. Here is how mobile screening saves lives.",
    content: [
      "High blood pressure is known as the silent killer because it carries no symptoms until organ damage occurs. In rural areas, millions live with undetected hypertension.",
      "Our mobile clinic model relies on low-cost digital monitors and trained youth volunteers. By screening villagers where they gather—bazaars, schools, community centers—we catch risks early.",
      "Health empowerment begins with simple, accessible knowledge."
    ],
    keyQuotes: [
      "An ounce of rural prevention is worth a ton of urban ICU care."
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I invite Dr. Naresh Bhatta to speak at my university, summit, or conference?",
    answer: "Dr. Naresh Bhatta frequently delivers keynote addresses on Youth Leadership, Medical Ethics, Public Health Policy, and Civic Responsibility. You can contact directly at +977 9851423026 or submit a request via the Contact section.",
    category: "Speaking"
  },
  {
    id: "faq-2",
    question: "How can I join or volunteer for the Rural Health Camps & Youth Initiatives?",
    answer: "We welcome medical students, doctors, youth leaders, and general volunteers. Reach out via phone at 9851423026 or fill out the Volunteer Registration form on our Contact page.",
    category: "Volunteer"
  },
  {
    id: "faq-3",
    question: "What is Dr. Naresh Bhatta's focus in public health and youth mentorship?",
    answer: "Dr. Naresh Bhatta bridges healthcare equity with youth leadership development—focusing on rural telemedicine nodes, youth leadership fellowships, and emergency health taskforces.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "How can I contact Dr. Naresh Bhatta for medical or official inquiries?",
    answer: "Direct phone contact is available at +977 9851423026. For clinical consultations or administrative requests, you can also email drnareshbhatta@gmail.com.",
    category: "Consultation"
  }
];
