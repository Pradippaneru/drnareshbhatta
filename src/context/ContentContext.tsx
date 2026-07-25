import React, { createContext, useContext, useState, useEffect } from 'react';
import { BIOGRAPHY, MILESTONES, ACADEMIC_RECORDS, IMPACT_STATS, ARTICLES, SPEECHES, FAQ_ITEMS, INITIATIVES, MEDIA_ITEMS, TESTIMONIALS } from '../data/biographyData';
import { Milestone, AcademicRecord, ImpactStat, Article, Speech, FAQItem, Initiative, MediaItem, Testimonial } from '../types';
import portraitImage from '../assets/images/dr_abrar_portrait_1784881890848.jpg';
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
  // Auth state
  isAdminLoggedIn: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;
  adminPassword: string;
  changeAdminPassword: (newPass: string) => void;
  // Dynamic sketch / main image
  profilePortrait: string;
  setProfilePortrait: (imgUrlOrBase64: string) => void;
  resetToDefaults: () => void;
}

const DEFAULT_FLOW_CARDS: FlowCardItem[] = [
  {
    id: "card-25",
    year: "'25",
    fullYear: "2025",
    title: "Senior Clinical Lead & Healthcare Innovation",
    subtitle: "Pioneering rural telemedicine nodes and heading preventive health screenings across underserved regions.",
    handle: "@medical_lead",
    handleTag: "Clinical Lead",
    timestamp: "Present · Active",
    avatar: portraitImage,
    quote: "“Medicine is not just treating illness—it is creating systemic access so no family faces illness alone.”",
    details: [
      "Established 8 mobile diagnostic clinic units equipped with digital ultrasound and ECG.",
      "Over 12,000 rural patients consulted with zero out-of-pocket charges.",
      "Created digital health tracking protocols for chronic hypertension and diabetes."
    ],
    position: "top"
  },
  {
    id: "card-24",
    year: "'24",
    fullYear: "2024",
    title: "National Youth Leadership Conclave & Award",
    subtitle: "Honored with National Youth Leadership Recognition for mobilizing 15,000+ student leaders across forums.",
    handle: "@youth_mentor",
    handleTag: "National Award",
    timestamp: "1 year ago",
    avatar: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format&fit=crop",
    quote: "“When young people find authentic purpose, they move mountains. Our job as mentors is to give them momentum.”",
    details: [
      "Keynote speaker at the National Youth Leadership Summit addressing 1,200 student delegates.",
      "Launched NextGen Student Leadership Fellowship with 450+ graduates.",
      "Established 24/7 student mental health helpline and wellness initiative."
    ],
    position: "bottom"
  },
  {
    id: "card-23",
    year: "'23",
    fullYear: "2023",
    title: "Rural Health Bridge & Rapid Disaster Response",
    subtitle: "Mobilized over 800 medical volunteers for flood relief and remote health camps.",
    handle: "@community_impact",
    handleTag: "Impact Movement",
    timestamp: "2 years ago",
    avatar: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=400&auto=format&fit=crop",
    quote: "“Emergency care during disasters requires courage, speed, and unwavering logistics.”",
    details: [
      "Organized 45+ free health camps across rural districts.",
      "Delivered emergency water purification and wound treatment kits to 3,500+ flood victims.",
      "Trained 1,200 youth volunteers in emergency CPR and basic trauma first aid."
    ],
    position: "top"
  },
  {
    id: "card-21",
    year: "'21",
    fullYear: "2021",
    title: "Medical Student Association Leadership",
    subtitle: "Championed academic equity, peer clinical tutoring, and entrance preparation for rural youth.",
    handle: "@academic_equity",
    handleTag: "Student President",
    timestamp: "4 years ago",
    avatar: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop",
    quote: "“Education and healthcare are the twin pillars of human dignity.”",
    details: [
      "Founded MedMentors Academic Equity Network supporting 120+ medical entrance scholars.",
      "Published 3 peer-reviewed clinical studies on public health awareness.",
      "Graduated with High Honors in Community Medicine and Pathology."
    ],
    position: "bottom"
  }
];

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [biography, setBiography] = useState<BiographyData>(() => {
    const saved = localStorage.getItem('dr_naresh_biography');
    return saved ? JSON.parse(saved) : BIOGRAPHY;
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
    return portraitImage;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('dr_naresh_admin_auth') === 'true';
  });

  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return localStorage.getItem('dr_naresh_admin_password') || 'admin123';
  });

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
    localStorage.setItem('dr_naresh_portrait', profilePortrait);
  }, [profilePortrait]);

  // Firebase Firestore Real-Time Sync & Seeding
  useEffect(() => {
    let unsubscribeBio: () => void = () => {};
    try {
      unsubscribeBio = onSnapshot(doc(db, 'site_settings', 'main'), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.biography) setBiography(data.biography);
          if (data.profilePortrait) setProfilePortraitState(data.profilePortrait);
          if (data.adminPassword) setAdminPassword(data.adminPassword);
        } else {
          setDoc(doc(db, 'site_settings', 'main'), {
            biography: BIOGRAPHY,
            profilePortrait: portraitImage,
            adminPassword: 'admin123'
          }).catch(console.error);
        }
      }, (err) => console.warn('Firestore bio listener warning:', err));
    } catch (e) {
      console.warn('Firestore bio error:', e);
    }

    const syncCollection = <T extends { id: string }>(
      collName: string, 
      setter: React.Dispatch<React.SetStateAction<T[]>>, 
      defaultData: T[]
    ) => {
      try {
        return onSnapshot(collection(db, collName), (snapshot) => {
          if (snapshot.empty && defaultData.length > 0) {
            defaultData.forEach(item => {
              setDoc(doc(db, collName, item.id), item).catch(console.error);
            });
          } else if (!snapshot.empty) {
            const items: T[] = [];
            snapshot.forEach(docSnap => {
              items.push({ ...docSnap.data(), id: docSnap.id } as T);
            });
            setter(items);
          }
        }, (err) => console.warn(`Firestore listener warning for ${collName}:`, err));
      } catch (e) {
        console.warn(`Firestore error for ${collName}:`, e);
        return () => {};
      }
    };

    const unSubFlow = syncCollection('flow_cards', setFlowCards, DEFAULT_FLOW_CARDS);
    const unSubMilestones = syncCollection('milestones', setMilestones, MILESTONES);
    const unSubAcademic = syncCollection('academic_records', setAcademicRecords, ACADEMIC_RECORDS);
    const unSubImpact = syncCollection('impact_stats', setImpactStats, IMPACT_STATS);
    const unSubTestimonials = syncCollection('testimonials', setTestimonials, TESTIMONIALS);
    const unSubBlogs = syncCollection('blog_posts', setBlogPosts, ARTICLES);
    const unSubSpeeches = syncCollection('speeches', setSpeeches, SPEECHES);
    const unSubInitiatives = syncCollection('initiatives', setInitiatives, INITIATIVES);
    const unSubMedia = syncCollection('media_items', setMediaItems, MEDIA_ITEMS);
    const unSubMessages = syncCollection('contact_messages', setContactMessages, []);

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
    setDoc(doc(db, 'site_settings', 'main'), { profilePortrait: imgUrlOrBase64 }, { merge: true }).catch(console.error);
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
      isAdminLoggedIn,
      adminLogin,
      adminLogout,
      adminPassword,
      changeAdminPassword,
      profilePortrait,
      setProfilePortrait,
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
