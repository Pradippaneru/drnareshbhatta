import React, { createContext, useContext, useState, useEffect } from 'react';
import { BIOGRAPHY, MILESTONES, ACADEMIC_RECORDS, IMPACT_STATS, ARTICLES, SPEECHES, FAQ_ITEMS, INITIATIVES, MEDIA_ITEMS, TESTIMONIALS } from '../data/biographyData';
import { Milestone, AcademicRecord, ImpactStat, Article, Speech, FAQItem, Initiative, MediaItem, Testimonial } from '../types';
import portraitImage from '../assets/images/dr_naresh_bhatta_portrait_1786291605566.jpg';
import pencilSketchPortrait from '../assets/images/dr_abrar_pencil_sketch_1784883239603.jpg';
import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  deleteDoc
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface BiographyData {
  name: string;
  title: string;
  heroSubtitle: string;
  missionStatement: string;
  quote: string;
  location: string;
  phone: string;
  email: string;
  aboutStory: {
    title: string;
    subtitle: string;
    narrative1: string;
    narrative2: string;
    whyMedicine: string;
    whyLeadership: string;
    whyServing: string;
  };
}

export interface FlowCardItem {
  id: string;
  year: string;
  fullYear: string;
  title: string;
  subtitle: string;
  handle: string;
  handleTag: string;
  timestamp: string;
  avatar: string;
  quote: string;
  details: string[];
  position: 'top' | 'bottom';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  purpose: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface ContentContextType {
  biography: BiographyData;
  updateBiography: (data: Partial<BiographyData>) => void;
  flowCards: FlowCardItem[];
  addFlowCard: (card: Omit<FlowCardItem, 'id'>) => void;
  updateFlowCard: (id: string, card: Partial<FlowCardItem>) => void;
  deleteFlowCard: (id: string) => void;
  milestones: Milestone[];
  addMilestone: (milestone: Omit<Milestone, 'id'>) => void;
  updateMilestone: (id: string, milestone: Partial<Milestone>) => void;
  deleteMilestone: (id: string) => void;
  academicRecords: AcademicRecord[];
  addAcademicRecord: (record: Omit<AcademicRecord, 'id'>) => void;
  updateAcademicRecord: (id: string, record: Partial<AcademicRecord>) => void;
  deleteAcademicRecord: (id: string) => void;
  impactStats: ImpactStat[];
  addImpactStat: (stat: Omit<ImpactStat, 'id'>) => void;
  updateImpactStat: (id: string, stat: Partial<ImpactStat>) => void;
  deleteImpactStat: (id: string) => void;
  testimonials: Testimonial[];
  addTestimonial: (t: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, t: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  blogPosts: Article[];
  addBlogPost: (post: Omit<Article, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<Article>) => void;
  deleteBlogPost: (id: string) => void;
  speeches: Speech[];
  addSpeech: (speech: Omit<Speech, 'id'>) => void;
  updateSpeech: (id: string, speech: Partial<Speech>) => void;
  deleteSpeech: (id: string) => void;
  initiatives: Initiative[];
  addInitiative: (initiative: Omit<Initiative, 'id'>) => void;
  updateInitiative: (id: string, initiative: Partial<Initiative>) => void;
  deleteInitiative: (id: string) => void;
  mediaItems: MediaItem[];
  addMediaItem: (item: Omit<MediaItem, 'id'>) => void;
  updateMediaItem: (id: string, item: Partial<MediaItem>) => void;
  deleteMediaItem: (id: string) => void;
  contactMessages: ContactMessage[];
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'timestamp' | 'read'>) => void;
  markMessageRead: (id: string) => void;
  deleteContactMessage: (id: string) => void;
  // Loading state
  isContentLoading: boolean;
  // Auth state
  isAdminLoggedIn: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;
  adminPassword: string;
  changeAdminPassword: (newPass: string) => void;
  // Dynamic sketch / main image / section images
  profilePortrait: string;
  setProfilePortrait: (imgUrlOrBase64: string) => void;
  heroPortrait: string;
  setHeroPortrait: (imgUrlOrBase64: string) => void;
  meetPortrait: string;
  setMeetPortrait: (imgUrlOrBase64: string) => void;
  resetToDefaults: () => void;
}

const DEFAULT_FLOW_CARDS: FlowCardItem[] = [
  {
    id: "card-25",
    year: "'25",
    fullYear: "2025",
    title: "Legal Reform, Governance & Pragmatic Nationalism",
    subtitle: "Pursuing Bachelor of Laws (LLB) in Constitutional Law while advancing economic freedom, judicial reform, and meritocracy.",
    handle: "@policy_reformer",
    handleTag: "Policy Reformer",
    timestamp: "Present · Active",
    avatar: portraitImage,
    quote: "“Pragmatic Nationalism: Every policy must be judged on one fundamental question: Does it improve the lives of the Nepali people?”",
    details: [
      "Pursuing LLB with a focus on constitutional governance, legislative reform, and anti-corruption frameworks.",
      "Formulating policy blueprints for free-market capitalism, industrialization, and 5 million sustainable jobs.",
      "Advocating for digital government, merit-based education, and universal quality healthcare."
    ],
    position: "top"
  },
  {
    id: "card-23",
    year: "'23",
    fullYear: "2023",
    title: "Jajarkot Earthquake Emergency Relief & Healthcare Protection",
    subtitle: "Led frontline medical response during the 2023 Jajarkot earthquake and spearheaded national campaigns for healthcare worker security.",
    handle: "@disaster_response",
    handleTag: "Emergency Relief",
    timestamp: "2023",
    avatar: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=400&auto=format&fit=crop",
    quote: "“When disaster strikes, true leadership means being the first on the ground and staying until hope is restored.”",
    details: [
      "Deployed volunteer medical teams providing emergency trauma care and relief supplies in Jajarkot.",
      "Championed legal protections for healthcare professionals against workplace violence.",
      "Conducted nationwide youth forums on democratic accountability and public justice."
    ],
    position: "bottom"
  },
  {
    id: "card-21",
    year: "'21",
    fullYear: "2021",
    title: "COVID-19 Frontline & Medical Education Fee Reduction Movement",
    subtitle: "Served on the pandemic frontline while coordinating national student advocacy that reduced medical school fees by NPR 2 Million.",
    handle: "@medical_reform",
    handleTag: "Medical Reform",
    timestamp: "2020 - 2022",
    avatar: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop",
    quote: "“By making medical education affordable, we unlocked doors for thousands of brilliant future doctors across Nepal.”",
    details: [
      "Spokesperson & Coordinator for Medical Student Struggle Committee, slashing medical fees from NPR 6M to NPR 4M.",
      "Served continuous ICU and emergency shifts during peak COVID-19 pandemic waves.",
      "Led the Engineering Education Fee and Quality Movement for academic standards and transparency."
    ],
    position: "top"
  },
  {
    id: "card-18",
    year: "'18",
    fullYear: "2018",
    title: "President, Kathmandu University Student Welfare Council & Doctors Network",
    subtitle: "Elected to lead national medical student and doctor bodies, organizing 100+ free health camps across Nepal.",
    handle: "@student_president",
    handleTag: "Student Welfare",
    timestamp: "2017 - 2020",
    avatar: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format&fit=crop",
    quote: "“Politics is not about power; it is about responsibility. Leadership is measured by lives improved.”",
    details: [
      "Past President of KU Student Welfare Council & Federation of Nepalese Medical Students.",
      "Organized over 100 free medical camps delivering healthcare to 25,000+ rural citizens.",
      "Actively supported civic campaigns seeking justice, transparency, and institutional accountability."
    ],
    position: "bottom"
  },
  {
    id: "card-15",
    year: "'15",
    fullYear: "2015",
    title: "Gorkha Earthquake Relief & Academic Distinction",
    subtitle: "Mobilized immediate medical aid during the 2015 7.8 magnitude earthquake; Top 3 Regional SLC & Top 20 National Science.",
    handle: "@national_leader",
    handleTag: "Crisis Response",
    timestamp: "2015",
    avatar: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop",
    quote: "“Excellence is a habit formed through discipline, intellectual curiosity, and love for the motherland.”",
    details: [
      "Delivered emergency trauma care and supplies to earthquake survivors across affected districts.",
      "National Science Olympiad Winner & Represented Sudurpashchim in Table Tennis at the 5th National Games.",
      "Pursued MBBS with honors in Community Medicine, Physiology, and Public Health."
    ],
    position: "top"
  }
];

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [biography, setBiography] = useState<BiographyData>(() => {
    const saved = localStorage.getItem('dr_naresh_biography');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.email === 'drnareshbhatta@gmail.com') {
          parsed.email = 'nareshandroid2@gmail.com';
        }
        return parsed;
      } catch {
        return BIOGRAPHY;
      }
    }
    return BIOGRAPHY;
  });

  const [flowCards, setFlowCards] = useState<FlowCardItem[]>(() => {
    const saved = localStorage.getItem('dr_naresh_flowcards');
    return saved ? JSON.parse(saved) : DEFAULT_FLOW_CARDS;
  });

  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    const saved = localStorage.getItem('dr_naresh_milestones');
    return saved ? JSON.parse(saved) : MILESTONES;
  });

  const [academicRecords, setAcademicRecords] = useState<AcademicRecord[]>(() => {
    const saved = localStorage.getItem('dr_naresh_academic');
    return saved ? JSON.parse(saved) : ACADEMIC_RECORDS;
  });

  const [impactStats, setImpactStats] = useState<ImpactStat[]>(() => {
    const saved = localStorage.getItem('dr_naresh_impact');
    return saved ? JSON.parse(saved) : IMPACT_STATS;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('dr_naresh_testimonials');
    return saved ? JSON.parse(saved) : TESTIMONIALS;
  });

  const [blogPosts, setBlogPosts] = useState<Article[]>(() => {
    const saved = localStorage.getItem('dr_naresh_blogs');
    return saved ? JSON.parse(saved) : ARTICLES;
  });

  const [speeches, setSpeeches] = useState<Speech[]>(() => {
    const saved = localStorage.getItem('dr_naresh_speeches');
    return saved ? JSON.parse(saved) : SPEECHES;
  });

  const [initiatives, setInitiatives] = useState<Initiative[]>(() => {
    const saved = localStorage.getItem('dr_naresh_initiatives');
    return saved ? JSON.parse(saved) : INITIATIVES;
  });

  const [mediaItems, setMediaItems] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem('dr_naresh_media');
    return saved ? JSON.parse(saved) : MEDIA_ITEMS;
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('dr_naresh_messages');
    return saved ? JSON.parse(saved) : [
      {
        id: "msg-1",
        name: "Youth Summit Org",
        email: "summit@nepalyouth.org",
        phone: "9841000000",
        organization: "Nepal Youth Summit",
        purpose: "Keynote Speaking",
        message: "Requesting Dr. Naresh Bhatta as guest speaker on public health leadership.",
        timestamp: "2026-07-24 10:15 AM",
        read: false
      }
    ];
  });

  const [profilePortrait, setProfilePortraitState] = useState<string>(() => {
    const saved = localStorage.getItem('dr_naresh_portrait');
    if (saved && saved !== pencilSketchPortrait) {
      return saved;
    }
    return '';
  });

  const [heroPortrait, setHeroPortraitState] = useState<string>(() => {
    const saved = localStorage.getItem('dr_naresh_hero_portrait');
    return saved || localStorage.getItem('dr_naresh_portrait') || '';
  });

  const [meetPortrait, setMeetPortraitState] = useState<string>(() => {
    const saved = localStorage.getItem('dr_naresh_meet_portrait');
    return saved || localStorage.getItem('dr_naresh_portrait') || '';
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('dr_naresh_admin_auth') === 'true';
  });

  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return localStorage.getItem('dr_naresh_admin_password') || 'drnaresh2026';
  });

  const [adminPasswordHint, setAdminPasswordHintState] = useState<string>(() => {
    return localStorage.getItem('dr_naresh_admin_hint') || 'Year/Prefix (drnaresh2026) or official phone number';
  });

  const [isContentLoading, setIsContentLoading] = useState<boolean>(true);

  // LocalStorage Sync
  useEffect(() => {
    localStorage.setItem('dr_naresh_biography', JSON.stringify(biography));
  }, [biography]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_flowcards', JSON.stringify(flowCards));
  }, [flowCards]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_milestones', JSON.stringify(milestones));
  }, [milestones]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_academic', JSON.stringify(academicRecords));
  }, [academicRecords]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_impact', JSON.stringify(impactStats));
  }, [impactStats]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_blogs', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_speeches', JSON.stringify(speeches));
  }, [speeches]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_initiatives', JSON.stringify(initiatives));
  }, [initiatives]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_media', JSON.stringify(mediaItems));
  }, [mediaItems]);

  useEffect(() => {
    localStorage.setItem('dr_naresh_messages', JSON.stringify(contactMessages));
  }, [contactMessages]);

  useEffect(() => {
    try {
      localStorage.setItem('dr_naresh_portrait', profilePortrait);
    } catch (e) {
      console.warn('LocalStorage portrait write warning:', e);
    }
  }, [profilePortrait]);

  useEffect(() => {
    try {
      localStorage.setItem('dr_naresh_hero_portrait', heroPortrait);
    } catch (e) {
      console.warn('LocalStorage hero portrait write warning:', e);
    }
  }, [heroPortrait]);

  useEffect(() => {
    try {
      localStorage.setItem('dr_naresh_meet_portrait', meetPortrait);
    } catch (e) {
      console.warn('LocalStorage meet portrait write warning:', e);
    }
  }, [meetPortrait]);

  // Firebase Firestore Real-Time Sync & Seeding
  useEffect(() => {
    let unsubscribeBio: () => void = () => {};
    try {
      unsubscribeBio = onSnapshot(doc(db, 'site_settings', 'main'), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.biography) {
            const bioData = { ...data.biography };
            if (bioData.email === 'drnareshbhatta@gmail.com') {
              bioData.email = 'nareshandroid2@gmail.com';
              setDoc(doc(db, 'site_settings', 'main'), { biography: bioData }, { merge: true }).catch(console.error);
            }
            setBiography(bioData);
          }
          if (data.profilePortrait) setProfilePortraitState(data.profilePortrait);
          if (data.heroPortrait) setHeroPortraitState(data.heroPortrait);
          if (data.meetPortrait) setMeetPortraitState(data.meetPortrait);

          if (data.adminPassword) setAdminPassword(data.adminPassword);
          if (data.adminPasswordHint) setAdminPasswordHintState(data.adminPasswordHint);
        } else {
          setDoc(doc(db, 'site_settings', 'main'), {
            biography: BIOGRAPHY,
            profilePortrait: '',
            heroPortrait: '',
            meetPortrait: '',
            adminPassword: 'drnaresh2026',
            adminPasswordHint: 'Year/Prefix (drnaresh2026) or official phone number'
          }).catch(console.error);
        }
        setIsContentLoading(false);
      }, (err) => {
        console.warn('Firestore bio listener warning:', err);
        setIsContentLoading(false);
      });
    } catch (e) {
      console.warn('Firestore bio error:', e);
      setIsContentLoading(false);
    }

    const syncCollection = <T extends { id: string }>(
      collName: string, 
      setter: React.Dispatch<React.SetStateAction<T[]>>, 
      defaultData: T[],
      storageKey?: string
    ) => {
      try {
        return onSnapshot(collection(db, collName), (snapshot) => {
          if (snapshot.empty && defaultData.length > 0) {
            let initialItems = defaultData;
            if (storageKey) {
              const saved = localStorage.getItem(storageKey);
              if (saved) {
                try {
                  const parsed = JSON.parse(saved);
                  if (Array.isArray(parsed) && parsed.length > 0) {
                    initialItems = parsed;
                  }
                } catch (e) {
                  console.warn('LocalStorage parse warning for', collName, e);
                }
              }
            }
            initialItems.forEach(item => {
              setDoc(doc(db, collName, item.id), item).catch(console.error);
            });
            setter(initialItems);
          } else if (!snapshot.empty) {
            const items: T[] = [];
            snapshot.forEach(docSnap => {
              items.push({ ...docSnap.data(), id: docSnap.id } as T);
            });

            // Automatically upload any locally saved items that are missing from Firestore database
            if (storageKey) {
              const saved = localStorage.getItem(storageKey);
              if (saved) {
                try {
                  const parsed = JSON.parse(saved);
                  if (Array.isArray(parsed)) {
                    parsed.forEach((localItem: T) => {
                      if (!items.some(remoteItem => remoteItem.id === localItem.id)) {
                        setDoc(doc(db, collName, localItem.id), localItem).catch(console.error);
                        items.push(localItem);
                      }
                    });
                  }
                } catch (e) {
                  console.warn('LocalStorage check warning for', collName, e);
                }
              }
            }

            setter(items);
          }
        }, (err) => console.warn(`Firestore listener warning for ${collName}:`, err));
      } catch (e) {
        console.warn(`Firestore error for ${collName}:`, e);
        return () => {};
      }
    };

    const unSubFlow = syncCollection('flow_cards', setFlowCards, DEFAULT_FLOW_CARDS, 'dr_naresh_flowcards');
    const unSubMilestones = syncCollection('milestones', setMilestones, MILESTONES, 'dr_naresh_milestones');
    const unSubAcademic = syncCollection('academic_records', setAcademicRecords, ACADEMIC_RECORDS, 'dr_naresh_academic');
    const unSubImpact = syncCollection('impact_stats', setImpactStats, IMPACT_STATS, 'dr_naresh_impact');
    const unSubTestimonials = syncCollection('testimonials', setTestimonials, TESTIMONIALS, 'dr_naresh_testimonials');
    const unSubBlogs = syncCollection('blog_posts', setBlogPosts, ARTICLES, 'dr_naresh_blogs');
    const unSubSpeeches = syncCollection('speeches', setSpeeches, SPEECHES, 'dr_naresh_speeches');
    const unSubInitiatives = syncCollection('initiatives', setInitiatives, INITIATIVES, 'dr_naresh_initiatives');
    const unSubMedia = syncCollection('media_items', setMediaItems, MEDIA_ITEMS, 'dr_naresh_media');
    const unSubMessages = syncCollection('contact_messages', setContactMessages, [], 'dr_naresh_messages');

    return () => {
      unsubscribeBio();
      if (unSubFlow) unSubFlow();
      if (unSubMilestones) unSubMilestones();
      if (unSubAcademic) unSubAcademic();
      if (unSubImpact) unSubImpact();
      if (unSubTestimonials) unSubTestimonials();
      if (unSubBlogs) unSubBlogs();
      if (unSubSpeeches) unSubSpeeches();
      if (unSubInitiatives) unSubInitiatives();
      if (unSubMedia) unSubMedia();
      if (unSubMessages) unSubMessages();
    };
  }, []);

  const updateBiography = (data: Partial<BiographyData>) => {
    setBiography(prev => {
      const updated = { ...prev, ...data };
      setDoc(doc(db, 'site_settings', 'main'), { biography: updated }, { merge: true }).catch(console.error);
      return updated;
    });
  };

  const addFlowCard = (card: Omit<FlowCardItem, 'id'>) => {
    const newCard: FlowCardItem = {
      ...card,
      id: `card-${Date.now()}`
    };
    setFlowCards(prev => [newCard, ...prev]);
    setDoc(doc(db, 'flow_cards', newCard.id), newCard).catch(console.error);
  };

  const updateFlowCard = (id: string, updated: Partial<FlowCardItem>) => {
    setFlowCards(prev => {
      const next = prev.map(c => c.id === id ? { ...c, ...updated } : c);
      const item = next.find(c => c.id === id);
      if (item) setDoc(doc(db, 'flow_cards', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };

  const deleteFlowCard = (id: string) => {
    setFlowCards(prev => prev.filter(c => c.id !== id));
    deleteDoc(doc(db, 'flow_cards', id)).catch(console.error);
  };

  // Milestones Handlers
  const addMilestone = (milestone: Omit<Milestone, 'id'>) => {
    const item: Milestone = { ...milestone, id: `m-${Date.now()}` };
    setMilestones(prev => [item, ...prev]);
    setDoc(doc(db, 'milestones', item.id), item).catch(console.error);
  };
  const updateMilestone = (id: string, updated: Partial<Milestone>) => {
    setMilestones(prev => {
      const next = prev.map(m => m.id === id ? { ...m, ...updated } : m);
      const item = next.find(m => m.id === id);
      if (item) setDoc(doc(db, 'milestones', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };
  const deleteMilestone = (id: string) => {
    setMilestones(prev => prev.filter(m => m.id !== id));
    deleteDoc(doc(db, 'milestones', id)).catch(console.error);
  };

  // Academic Records Handlers
  const addAcademicRecord = (record: Omit<AcademicRecord, 'id'>) => {
    const item: AcademicRecord = { ...record, id: `a-${Date.now()}` };
    setAcademicRecords(prev => [item, ...prev]);
    setDoc(doc(db, 'academic_records', item.id), item).catch(console.error);
  };
  const updateAcademicRecord = (id: string, updated: Partial<AcademicRecord>) => {
    setAcademicRecords(prev => {
      const next = prev.map(a => a.id === id ? { ...a, ...updated } : a);
      const item = next.find(a => a.id === id);
      if (item) setDoc(doc(db, 'academic_records', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };
  const deleteAcademicRecord = (id: string) => {
    setAcademicRecords(prev => prev.filter(a => a.id !== id));
    deleteDoc(doc(db, 'academic_records', id)).catch(console.error);
  };

  // Impact Stats Handlers
  const addImpactStat = (stat: Omit<ImpactStat, 'id'>) => {
    const item: ImpactStat = { ...stat, id: `s-${Date.now()}` };
    setImpactStats(prev => [...prev, item]);
    setDoc(doc(db, 'impact_stats', item.id), item).catch(console.error);
  };
  const updateImpactStat = (id: string, updated: Partial<ImpactStat>) => {
    setImpactStats(prev => {
      const next = prev.map(s => s.id === id ? { ...s, ...updated } : s);
      const item = next.find(s => s.id === id);
      if (item) setDoc(doc(db, 'impact_stats', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };
  const deleteImpactStat = (id: string) => {
    setImpactStats(prev => prev.filter(s => s.id !== id));
    deleteDoc(doc(db, 'impact_stats', id)).catch(console.error);
  };

  // Testimonials Handlers
  const addTestimonial = (t: Omit<Testimonial, 'id'>) => {
    const item: Testimonial = { ...t, id: `t-${Date.now()}` };
    setTestimonials(prev => [item, ...prev]);
    setDoc(doc(db, 'testimonials', item.id), item).catch(console.error);
  };
  const updateTestimonial = (id: string, updated: Partial<Testimonial>) => {
    setTestimonials(prev => {
      const next = prev.map(t => t.id === id ? { ...t, ...updated } : t);
      const item = next.find(t => t.id === id);
      if (item) setDoc(doc(db, 'testimonials', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };
  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
    deleteDoc(doc(db, 'testimonials', id)).catch(console.error);
  };

  const addBlogPost = (post: Omit<Article, 'id'>) => {
    const newPost: Article = {
      ...post,
      id: `blog-${Date.now()}`
    };
    setBlogPosts(prev => [newPost, ...prev]);
    setDoc(doc(db, 'blog_posts', newPost.id), newPost).catch(console.error);
  };

  const updateBlogPost = (id: string, updated: Partial<Article>) => {
    setBlogPosts(prev => {
      const next = prev.map(p => p.id === id ? { ...p, ...updated } : p);
      const item = next.find(p => p.id === id);
      if (item) setDoc(doc(db, 'blog_posts', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
    deleteDoc(doc(db, 'blog_posts', id)).catch(console.error);
  };

  const addSpeech = (speech: Omit<Speech, 'id'>) => {
    const newSpeech: Speech = {
      ...speech,
      id: `speech-${Date.now()}`
    };
    setSpeeches(prev => [newSpeech, ...prev]);
    setDoc(doc(db, 'speeches', newSpeech.id), newSpeech).catch(console.error);
  };

  const updateSpeech = (id: string, updated: Partial<Speech>) => {
    setSpeeches(prev => {
      const next = prev.map(s => s.id === id ? { ...s, ...updated } : s);
      const item = next.find(s => s.id === id);
      if (item) setDoc(doc(db, 'speeches', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };

  const deleteSpeech = (id: string) => {
    setSpeeches(prev => prev.filter(s => s.id !== id));
    deleteDoc(doc(db, 'speeches', id)).catch(console.error);
  };

  const addInitiative = (item: Omit<Initiative, 'id'>) => {
    const newItem: Initiative = {
      ...item,
      id: `init-${Date.now()}`
    };
    setInitiatives(prev => [newItem, ...prev]);
    setDoc(doc(db, 'initiatives', newItem.id), newItem).catch(console.error);
  };

  const updateInitiative = (id: string, updated: Partial<Initiative>) => {
    setInitiatives(prev => {
      const next = prev.map(i => i.id === id ? { ...i, ...updated } : i);
      const item = next.find(i => i.id === id);
      if (item) setDoc(doc(db, 'initiatives', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };

  const deleteInitiative = (id: string) => {
    setInitiatives(prev => prev.filter(i => i.id !== id));
    deleteDoc(doc(db, 'initiatives', id)).catch(console.error);
  };

  const addMediaItem = (item: Omit<MediaItem, 'id'>) => {
    const newItem: MediaItem = {
      ...item,
      id: `med-${Date.now()}`
    };
    setMediaItems(prev => [newItem, ...prev]);
    setDoc(doc(db, 'media_items', newItem.id), newItem).catch(console.error);
  };

  const updateMediaItem = (id: string, updated: Partial<MediaItem>) => {
    setMediaItems(prev => {
      const next = prev.map(m => m.id === id ? { ...m, ...updated } : m);
      const item = next.find(m => m.id === id);
      if (item) setDoc(doc(db, 'media_items', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };

  const deleteMediaItem = (id: string) => {
    setMediaItems(prev => prev.filter(m => m.id !== id));
    deleteDoc(doc(db, 'media_items', id)).catch(console.error);
  };

  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'timestamp' | 'read'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      timestamp: new Date().toLocaleString(),
      read: false
    };
    setContactMessages(prev => [newMsg, ...prev]);
    setDoc(doc(db, 'contact_messages', newMsg.id), newMsg).catch(console.error);
  };

  const markMessageRead = (id: string) => {
    setContactMessages(prev => {
      const next = prev.map(m => m.id === id ? { ...m, read: true } : m);
      const item = next.find(m => m.id === id);
      if (item) setDoc(doc(db, 'contact_messages', id), item, { merge: true }).catch(console.error);
      return next;
    });
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages(prev => prev.filter(m => m.id !== id));
    deleteDoc(doc(db, 'contact_messages', id)).catch(console.error);
  };

  const setProfilePortrait = (imgUrlOrBase64: string) => {
    setProfilePortraitState(imgUrlOrBase64);
    try {
      localStorage.setItem('dr_naresh_portrait', imgUrlOrBase64);
    } catch (e) {
      console.warn('LocalStorage write warning:', e);
    }
    setDoc(doc(db, 'site_settings', 'main'), { profilePortrait: imgUrlOrBase64 }, { merge: true }).catch(console.error);
  };

  const setHeroPortrait = (imgUrlOrBase64: string) => {
    setHeroPortraitState(imgUrlOrBase64);
    try {
      localStorage.setItem('dr_naresh_hero_portrait', imgUrlOrBase64);
    } catch (e) {
      console.warn('LocalStorage hero write warning:', e);
    }
    setDoc(doc(db, 'site_settings', 'main'), { heroPortrait: imgUrlOrBase64 }, { merge: true }).catch(console.error);
  };

  const setMeetPortrait = (imgUrlOrBase64: string) => {
    setMeetPortraitState(imgUrlOrBase64);
    try {
      localStorage.setItem('dr_naresh_meet_portrait', imgUrlOrBase64);
    } catch (e) {
      console.warn('LocalStorage meet write warning:', e);
    }
    setDoc(doc(db, 'site_settings', 'main'), { meetPortrait: imgUrlOrBase64 }, { merge: true }).catch(console.error);
  };

  const adminLogin = (pass: string): boolean => {
    if (pass === adminPassword || pass === 'drnaresh2026' || pass === '9851423026') {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('dr_naresh_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('dr_naresh_admin_auth');
  };

  const changeAdminPassword = (newPass: string) => {
    setAdminPassword(newPass);
    localStorage.setItem('dr_naresh_admin_password', newPass);

    setDoc(doc(db, 'site_settings', 'main'), {
      adminPassword: newPass
    }, { merge: true }).catch(console.error);
  };

  const resetToDefaults = () => {
    setBiography(BIOGRAPHY);
    setFlowCards(DEFAULT_FLOW_CARDS);
    setMilestones(MILESTONES);
    setAcademicRecords(ACADEMIC_RECORDS);
    setImpactStats(IMPACT_STATS);
    setTestimonials(TESTIMONIALS);
    setBlogPosts(ARTICLES);
    setSpeeches(SPEECHES);
    setInitiatives(INITIATIVES);
    setMediaItems(MEDIA_ITEMS);
    setProfilePortraitState(portraitImage);
    localStorage.clear();
  };

  return (
    <ContentContext.Provider value={{
      biography,
      updateBiography,
      flowCards,
      addFlowCard,
      updateFlowCard,
      deleteFlowCard,
      milestones,
      addMilestone,
      updateMilestone,
      deleteMilestone,
      academicRecords,
      addAcademicRecord,
      updateAcademicRecord,
      deleteAcademicRecord,
      impactStats,
      addImpactStat,
      updateImpactStat,
      deleteImpactStat,
      testimonials,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      blogPosts,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      speeches,
      addSpeech,
      updateSpeech,
      deleteSpeech,
      initiatives,
      addInitiative,
      updateInitiative,
      deleteInitiative,
      mediaItems,
      addMediaItem,
      updateMediaItem,
      deleteMediaItem,
      contactMessages,
      addContactMessage,
      markMessageRead,
      deleteContactMessage,
      isContentLoading,
      isAdminLoggedIn,
      adminLogin,
      adminLogout,
      adminPassword,
      changeAdminPassword,
      profilePortrait,
      setProfilePortrait,
      heroPortrait,
      setHeroPortrait,
      meetPortrait,
      setMeetPortrait,
      resetToDefaults
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
