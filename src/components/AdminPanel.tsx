import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, Key, LogOut, Upload, Image as ImageIcon, Plus, Trash2, Edit3, 
  Check, X, Shield, RefreshCw, FileText, Phone, Mail, User, Sparkles, MessageSquare, Layers, Heart, Camera, FolderPlus,
  GraduationCap, Award, Mic, BookOpen, Users, Quote
} from 'lucide-react';
import { useContent, FlowCardItem } from '../context/ContentContext';
import { Milestone, AcademicRecord, ImpactStat, Initiative, MediaItem, Speech, Testimonial, Article } from '../types';

export const AdminPanel: React.FC = () => {
  const { 
    biography, updateBiography,
    flowCards, addFlowCard, updateFlowCard, deleteFlowCard,
    milestones, addMilestone, updateMilestone, deleteMilestone,
    academicRecords, addAcademicRecord, updateAcademicRecord, deleteAcademicRecord,
    impactStats, addImpactStat, updateImpactStat, deleteImpactStat,
    testimonials, addTestimonial, updateTestimonial, deleteTestimonial,
    blogPosts, addBlogPost, updateBlogPost, deleteBlogPost,
    speeches, addSpeech, updateSpeech, deleteSpeech,
    initiatives, addInitiative, updateInitiative, deleteInitiative,
    mediaItems, addMediaItem, updateMediaItem, deleteMediaItem,
    contactMessages, markMessageRead, deleteContactMessage,
    isAdminLoggedIn, adminLogin, adminLogout, adminPassword, changeAdminPassword,
    profilePortrait, setProfilePortrait,
    heroPortrait, setHeroPortrait,
    meetPortrait, setMeetPortrait,
    resetToDefaults
  } = useContent();

  const [isOpen, setIsOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<
    'profile' | 'pictures' | 'journey' | 'leadership' | 'initiatives' | 'academic' | 'media' | 'blog' | 'messages' | 'security'
  >('profile');

  // Local state for bio form
  const [bioForm, setBioForm] = useState(biography);
  const [bioSaved, setBioSaved] = useState(false);

  // Initiatives State
  const [showAddInitiative, setShowAddInitiative] = useState(false);
  const [editingInitiativeId, setEditingInitiativeId] = useState<string | null>(null);
  const [initiativeForm, setInitiativeForm] = useState<Omit<Initiative, 'id'> & { keyGoalsText: string }>({
    category: 'Healthcare',
    title: '',
    tagline: '',
    description: '',
    status: 'Active',
    metrics: '',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    fullStory: '',
    keyGoalsText: '',
    keyGoals: []
  });

  // Media Gallery State
  const [showAddMedia, setShowAddMedia] = useState(false);
  const [editingMediaId, setEditingMediaId] = useState<string | null>(null);
  const [mediaForm, setMediaForm] = useState<Omit<MediaItem, 'id'>>({
    category: 'Community',
    title: '',
    subtitle: '',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
    date: 'July 2026',
    location: 'Kathmandu, Nepal'
  });

  // Leadership Milestones State
  const [showAddMilestone, setShowAddMilestone] = useState(false);
  const [editingMilestoneId, setEditingMilestoneId] = useState<string | null>(null);
  const [milestoneForm, setMilestoneForm] = useState<Omit<Milestone, 'id'> & { highlightsText: string }>({
    year: '2025 - Present',
    category: 'community',
    title: '',
    organization: '',
    role: '',
    description: '',
    impactMetric: '',
    highlightsText: '',
    highlights: []
  });

  // Academic Records State
  const [showAddAcademic, setShowAddAcademic] = useState(false);
  const [editingAcademicId, setEditingAcademicId] = useState<string | null>(null);
  const [academicForm, setAcademicForm] = useState<Omit<AcademicRecord, 'id'>>({
    type: 'education',
    title: '',
    institution: '',
    year: '2024 - 2026',
    details: '',
    badge: 'Honors'
  });

  // Impact Stats State
  const [showAddImpact, setShowAddImpact] = useState(false);
  const [editingImpactId, setEditingImpactId] = useState<string | null>(null);
  const [impactForm, setImpactForm] = useState<Omit<ImpactStat, 'id'>>({
    number: 10000,
    prefix: '',
    suffix: '+',
    label: '',
    description: '',
    iconName: 'Users'
  });

  // Speeches State
  const [showAddSpeech, setShowAddSpeech] = useState(false);
  const [editingSpeechId, setEditingSpeechId] = useState<string | null>(null);
  const [speechForm, setSpeechForm] = useState<Omit<Speech, 'id'> & { takeawaysText: string }>({
    title: '',
    event: '',
    location: 'Kathmandu, Nepal',
    date: 'July 2026',
    duration: '25 min',
    category: 'Youth Leadership',
    summary: '',
    quote: '',
    takeawaysText: '',
    keyTakeaways: []
  });

  // Blog Essays State
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState<Omit<Article, 'id'> & { contentText: string; quotesText: string }>({
    title: '',
    subtitle: '',
    category: 'Healthcare',
    readTime: '6 min read',
    date: 'July 2026',
    excerpt: '',
    contentText: '',
    content: [],
    quotesText: '',
    keyQuotes: []
  });

  // Testimonials State
  const [showAddTestimonial, setShowAddTestimonial] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);
  const [testimonialForm, setTestimonialForm] = useState<Omit<Testimonial, 'id'>>({
    quote: '',
    author: '',
    role: '',
    organization: '',
    category: 'Community Leader'
  });

  // New Flow Card form
  const [showAddFlow, setShowAddFlow] = useState(false);
  const [newFlow, setNewFlow] = useState<Omit<FlowCardItem, 'id'>>({
    year: "'26",
    fullYear: "2026",
    title: "",
    subtitle: "",
    handle: "@leadership_2026",
    handleTag: "Leadership",
    timestamp: "Just added",
    avatar: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format&fit=crop",
    quote: "“New milestone quote...”",
    details: ["Achievement item 1", "Achievement item 2"],
    position: "top"
  });

  // Password change state
  const [newPass, setNewPass] = useState('');
  const [passSaved, setPassSaved] = useState(false);

  // Picture Upload state & handler
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // Helper to compress and resize image files before base64 conversion to fit within Firestore's 1MB size limit
  const compressImage = (file: File, maxWidth = 1000, maxHeight = 1000, quality = 0.75): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            if (width / height > maxWidth / maxHeight) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(e.target?.result as string);
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);

          let currentQuality = quality;
          let compressed = canvas.toDataURL('image/jpeg', currentQuality);

          // Force max base64 size under ~650 KB (750,000 chars) to guarantee it fits in Firestore database
          while (compressed.length > 750000 && currentQuality > 0.25) {
            currentQuality -= 0.1;
            compressed = canvas.toDataURL('image/jpeg', currentQuality);
          }

          resolve(compressed);
        };
        img.onerror = () => resolve(e.target?.result as string);
        img.src = e.target?.result as string;
      };
      reader.onerror = () => resolve('');
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const compressedBase64 = await compressImage(file, 1200, 1200, 0.85);
      if (compressedBase64) {
        setImagePreview(compressedBase64);
        setProfilePortrait(compressedBase64);
      }
    }
  };

  const handleInitiativeFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const compressedBase64 = await compressImage(file, 1200, 1200, 0.85);
      if (compressedBase64) {
        setInitiativeForm(prev => ({ ...prev, image: compressedBase64 }));
      }
    }
  };

  const handleMediaFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const compressedBase64 = await compressImage(file, 1200, 1200, 0.85);
      if (compressedBase64) {
        setMediaForm(prev => ({ ...prev, image: compressedBase64 }));
      }
    }
  };

  const handleSaveInitiative = (e: React.FormEvent) => {
    e.preventDefault();
    if (!initiativeForm.title) return;

    const goals = initiativeForm.keyGoalsText
      ? initiativeForm.keyGoalsText.split('\n').map(g => g.trim()).filter(Boolean)
      : initiativeForm.keyGoals.length > 0 ? initiativeForm.keyGoals : ['Key program objective'];

    const payload = {
      category: initiativeForm.category,
      title: initiativeForm.title,
      tagline: initiativeForm.tagline,
      description: initiativeForm.description,
      status: initiativeForm.status,
      metrics: initiativeForm.metrics,
      image: initiativeForm.image,
      fullStory: initiativeForm.fullStory || initiativeForm.description,
      keyGoals: goals
    };

    if (editingInitiativeId) {
      updateInitiative(editingInitiativeId, payload);
      setEditingInitiativeId(null);
    } else {
      addInitiative(payload);
    }

    setShowAddInitiative(false);
    setInitiativeForm({
      category: 'Healthcare',
      title: '',
      tagline: '',
      description: '',
      status: 'Active',
      metrics: '',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
      fullStory: '',
      keyGoalsText: '',
      keyGoals: []
    });
  };

  const handleStartEditInitiative = (init: Initiative) => {
    setEditingInitiativeId(init.id);
    setInitiativeForm({
      category: init.category,
      title: init.title,
      tagline: init.tagline,
      description: init.description,
      status: init.status,
      metrics: init.metrics,
      image: init.image,
      fullStory: init.fullStory,
      keyGoalsText: init.keyGoals ? init.keyGoals.join('\n') : '',
      keyGoals: init.keyGoals || []
    });
    setShowAddInitiative(true);
  };

  const handleSaveMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaForm.title) return;

    if (editingMediaId) {
      updateMediaItem(editingMediaId, mediaForm);
      setEditingMediaId(null);
    } else {
      addMediaItem(mediaForm);
    }

    setShowAddMedia(false);
    setMediaForm({
      category: 'Community',
      title: '',
      subtitle: '',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
      date: 'July 2026',
      location: 'Kathmandu, Nepal'
    });
  };

  const handleStartEditMedia = (m: MediaItem) => {
    setEditingMediaId(m.id);
    setMediaForm({
      category: m.category,
      title: m.title,
      subtitle: m.subtitle,
      image: m.image,
      date: m.date,
      location: m.location
    });
    setShowAddMedia(true);
  };

  // Milestone Save & Edit
  const handleSaveMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!milestoneForm.title) return;

    const hList = milestoneForm.highlightsText
      ? milestoneForm.highlightsText.split('\n').map(h => h.trim()).filter(Boolean)
      : milestoneForm.highlights.length > 0 ? milestoneForm.highlights : ['Key outcome achieved'];

    const payload = {
      year: milestoneForm.year,
      category: milestoneForm.category,
      title: milestoneForm.title,
      organization: milestoneForm.organization,
      role: milestoneForm.role,
      description: milestoneForm.description,
      impactMetric: milestoneForm.impactMetric,
      highlights: hList
    };

    if (editingMilestoneId) {
      updateMilestone(editingMilestoneId, payload);
      setEditingMilestoneId(null);
    } else {
      addMilestone(payload);
    }

    setShowAddMilestone(false);
    setMilestoneForm({
      year: '2025 - Present',
      category: 'community',
      title: '',
      organization: '',
      role: '',
      description: '',
      impactMetric: '',
      highlightsText: '',
      highlights: []
    });
  };

  const handleStartEditMilestone = (m: Milestone) => {
    setEditingMilestoneId(m.id);
    setMilestoneForm({
      year: m.year,
      category: m.category,
      title: m.title,
      organization: m.organization,
      role: m.role,
      description: m.description,
      impactMetric: m.impactMetric,
      highlightsText: m.highlights ? m.highlights.join('\n') : '',
      highlights: m.highlights || []
    });
    setShowAddMilestone(true);
  };

  // Academic Save & Edit
  const handleSaveAcademic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!academicForm.title) return;

    if (editingAcademicId) {
      updateAcademicRecord(editingAcademicId, academicForm);
      setEditingAcademicId(null);
    } else {
      addAcademicRecord(academicForm);
    }

    setShowAddAcademic(false);
    setAcademicForm({
      type: 'education',
      title: '',
      institution: '',
      year: '2024 - 2026',
      details: '',
      badge: 'Honors'
    });
  };

  const handleStartEditAcademic = (a: AcademicRecord) => {
    setEditingAcademicId(a.id);
    setAcademicForm({
      type: a.type,
      title: a.title,
      institution: a.institution,
      year: a.year,
      details: a.details,
      badge: a.badge
    });
    setShowAddAcademic(true);
  };

  // Impact Stat Save & Edit
  const handleSaveImpact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!impactForm.label) return;

    if (editingImpactId) {
      updateImpactStat(editingImpactId, impactForm);
      setEditingImpactId(null);
    } else {
      addImpactStat(impactForm);
    }

    setShowAddImpact(false);
    setImpactForm({
      number: 10000,
      prefix: '',
      suffix: '+',
      label: '',
      description: '',
      iconName: 'Users'
    });
  };

  const handleStartEditImpact = (s: ImpactStat) => {
    setEditingImpactId(s.id);
    setImpactForm({
      number: s.number,
      prefix: s.prefix || '',
      suffix: s.suffix || '+',
      label: s.label,
      description: s.description,
      iconName: s.iconName
    });
    setShowAddImpact(true);
  };

  // Speech Save & Edit
  const handleSaveSpeech = (e: React.FormEvent) => {
    e.preventDefault();
    if (!speechForm.title) return;

    const takeaways = speechForm.takeawaysText
      ? speechForm.takeawaysText.split('\n').map(t => t.trim()).filter(Boolean)
      : speechForm.keyTakeaways.length > 0 ? speechForm.keyTakeaways : ['Key speech takeaway'];

    const payload = {
      title: speechForm.title,
      event: speechForm.event,
      location: speechForm.location,
      date: speechForm.date,
      duration: speechForm.duration,
      category: speechForm.category,
      summary: speechForm.summary,
      quote: speechForm.quote,
      keyTakeaways: takeaways
    };

    if (editingSpeechId) {
      updateSpeech(editingSpeechId, payload);
      setEditingSpeechId(null);
    } else {
      addSpeech(payload);
    }

    setShowAddSpeech(false);
    setSpeechForm({
      title: '',
      event: '',
      location: 'Kathmandu, Nepal',
      date: 'July 2026',
      duration: '25 min',
      category: 'Youth Leadership',
      summary: '',
      quote: '',
      takeawaysText: '',
      keyTakeaways: []
    });
  };

  const handleStartEditSpeech = (s: Speech) => {
    setEditingSpeechId(s.id);
    setSpeechForm({
      title: s.title,
      event: s.event,
      location: s.location,
      date: s.date,
      duration: s.duration,
      category: s.category,
      summary: s.summary,
      quote: s.quote,
      takeawaysText: s.keyTakeaways ? s.keyTakeaways.join('\n') : '',
      keyTakeaways: s.keyTakeaways || []
    });
    setShowAddSpeech(true);
  };

  // Blog Post / Essay Save & Edit
  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title) return;

    const paragraphs = blogForm.contentText
      ? blogForm.contentText.split('\n\n').map(p => p.trim()).filter(Boolean)
      : blogForm.content.length > 0 ? blogForm.content : ['Essay body content paragraph...'];

    const quotes = blogForm.quotesText
      ? blogForm.quotesText.split('\n').map(q => q.trim()).filter(Boolean)
      : blogForm.keyQuotes || [];

    const payload = {
      title: blogForm.title,
      subtitle: blogForm.subtitle,
      category: blogForm.category,
      readTime: blogForm.readTime,
      date: blogForm.date,
      excerpt: blogForm.excerpt,
      content: paragraphs,
      keyQuotes: quotes
    };

    if (editingBlogId) {
      updateBlogPost(editingBlogId, payload);
      setEditingBlogId(null);
    } else {
      addBlogPost(payload);
    }

    setShowAddBlog(false);
    setBlogForm({
      title: '',
      subtitle: '',
      category: 'Healthcare',
      readTime: '6 min read',
      date: 'July 2026',
      excerpt: '',
      contentText: '',
      content: [],
      quotesText: '',
      keyQuotes: []
    });
  };

  const handleStartEditBlog = (a: Article) => {
    setEditingBlogId(a.id);
    setBlogForm({
      title: a.title,
      subtitle: a.subtitle,
      category: a.category,
      readTime: a.readTime,
      date: a.date,
      excerpt: a.excerpt,
      contentText: a.content ? a.content.join('\n\n') : '',
      content: a.content || [],
      quotesText: a.keyQuotes ? a.keyQuotes.join('\n') : '',
      keyQuotes: a.keyQuotes || []
    });
    setShowAddBlog(true);
  };

  // Testimonial Save & Edit
  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialForm.quote || !testimonialForm.author) return;

    if (editingTestimonialId) {
      updateTestimonial(editingTestimonialId, testimonialForm);
      setEditingTestimonialId(null);
    } else {
      addTestimonial(testimonialForm);
    }

    setShowAddTestimonial(false);
    setTestimonialForm({
      quote: '',
      author: '',
      role: '',
      organization: '',
      category: 'Community Leader'
    });
  };

  const handleStartEditTestimonial = (t: Testimonial) => {
    setEditingTestimonialId(t.id);
    setTestimonialForm({
      quote: t.quote,
      author: t.author,
      role: t.role,
      organization: t.organization,
      category: t.category
    });
    setShowAddTestimonial(true);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(passwordInput)) {
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError('Invalid password. Default is: drnaresh2026 or 9851423026');
    }
  };

  const handleSaveBio = (e: React.FormEvent) => {
    e.preventDefault();
    updateBiography(bioForm);
    setBioSaved(true);
    setTimeout(() => setBioSaved(false), 2500);
  };

  const handleAddFlowSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFlow.title) return;
    addFlowCard(newFlow);
    setShowAddFlow(false);
    setNewFlow({
      year: "'26",
      fullYear: "2026",
      title: "",
      subtitle: "",
      handle: "@leadership_2026",
      handleTag: "Leadership",
      timestamp: "Just added",
      avatar: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format&fit=crop",
      quote: "“New milestone quote...”",
      details: ["Achievement item 1"],
      position: "top"
    });
  };

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPass.length < 4) return;
    changeAdminPassword(newPass);
    setNewPass('');
    setPassSaved(true);
    setTimeout(() => setPassSaved(false), 2500);
  };

  const unreadCount = contactMessages.filter(m => !m.read).length;

  return (
    <>
      {/* Floating Admin Trigger Button (Small Lock Icon Only) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(true)}
          title="Admin CMS Control"
          aria-label="Admin CMS Control"
          className="relative w-11 h-11 rounded-full bg-[#0F172A] text-[#14B8A6] hover:bg-[#0D9488] hover:text-white transition-all shadow-xl border border-[#0D9488]/40 cursor-pointer flex items-center justify-center group"
        >
          <Lock className="w-4.5 h-4.5 text-[#14B8A6] group-hover:text-white transition-colors" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center animate-pulse border-2 border-[#0F172A]">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Admin Panel Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FAF9F5] border border-[#E2E8F0] rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0D9488] text-white">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#0F172A]">
                      Dr. Naresh Bhatta Admin Backend
                    </h2>
                    <p className="text-xs text-[#64748B] font-mono">
                      Dynamic CMS Control · Phone: {biography.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isAdminLoggedIn && (
                    <button
                      onClick={adminLogout}
                      className="px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold hover:bg-red-200 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Logout</span>
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-[#E2E8F0] hover:bg-[#0F172A] hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Login View */}
              {!isAdminLoggedIn ? (
                <div className="py-12 px-4 max-w-md mx-auto text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0D9488] text-white flex items-center justify-center mx-auto shadow-md">
                    <Key className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
                      Admin Authentication
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">
                      Enter passcode to edit content, upload pictures, and view messages.
                    </p>
                  </div>

                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <input
                        type="password"
                        placeholder="Enter admin passcode"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-sm font-mono text-center focus:outline-none focus:border-[#0D9488]"
                        autoFocus
                      />
                    </div>

                    {loginError && (
                      <div className="text-xs text-red-600 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
                        {loginError}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0D9488] transition-colors shadow-md cursor-pointer"
                    >
                      Unlock Admin Panel
                    </button>
                  </form>

                  <div className="p-3 rounded-xl bg-[#0F172A]/5 border border-[#E2E8F0] text-[11px] text-[#64748B] flex items-center justify-center gap-1.5 font-medium">
                    <Shield className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Protected Admin Portal · Restricted & Authorized Access Only</span>
                  </div>
                </div>
              ) : (
                /* Admin Dashboard Main Content */
                <div className="flex-1 overflow-y-auto pt-4 space-y-6">
                  {/* Navigation Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-3 border-b border-[#E2E8F0] whitespace-nowrap shrink-0">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'profile' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>Biography & Info</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('pictures')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'pictures' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Pictures</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('journey')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'journey' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Journey ({flowCards.length})</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('leadership')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'leadership' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Leadership ({milestones.length})</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('initiatives')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'initiatives' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <Heart className="w-3.5 h-3.5" />
                      <span>Policy & Vision ({initiatives.length})</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('academic')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'academic' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Academic ({academicRecords.length})</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('media')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'media' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Gallery ({mediaItems.length})</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('blog')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'blog' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Essays ({blogPosts.length})</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('messages')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer relative ${
                        activeTab === 'messages' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquiries ({contactMessages.length})</span>
                      {unreadCount > 0 && (
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      )}
                    </button>

                    <button
                      onClick={() => setActiveTab('security')}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === 'security' ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      <Key className="w-3.5 h-3.5" />
                      <span>Security</span>
                    </button>
                  </div>

                  {/* TAB 1: Profile & Contact Details */}
                  {activeTab === 'profile' && (
                    <form onSubmit={handleSaveBio} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                            Client Name
                          </label>
                          <input
                            type="text"
                            value={bioForm.name}
                            onChange={(e) => setBioForm({ ...bioForm, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-xs font-bold text-[#0F172A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            value={bioForm.phone}
                            onChange={(e) => setBioForm({ ...bioForm, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-xs font-mono font-bold text-[#0F172A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                            Professional Title
                          </label>
                          <input
                            type="text"
                            value={bioForm.title}
                            onChange={(e) => setBioForm({ ...bioForm, title: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={bioForm.email || ''}
                            onChange={(e) => setBioForm({ ...bioForm, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-xs font-mono text-[#0F172A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                            Location / Practice
                          </label>
                          <input
                            type="text"
                            value={bioForm.location}
                            onChange={(e) => setBioForm({ ...bioForm, location: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                            Hero Tagline Subtitle
                          </label>
                          <input
                            type="text"
                            value={bioForm.heroSubtitle || ''}
                            onChange={(e) => setBioForm({ ...bioForm, heroSubtitle: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                          Inspirational Quote
                        </label>
                        <textarea
                          rows={2}
                          value={bioForm.quote}
                          onChange={(e) => setBioForm({ ...bioForm, quote: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-xs font-serif italic text-[#0F172A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                          Mission Statement
                        </label>
                        <textarea
                          rows={2}
                          value={bioForm.missionStatement}
                          onChange={(e) => setBioForm({ ...bioForm, missionStatement: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-xs text-[#0F172A]"
                        />
                      </div>

                      {/* Story Narrative Section */}
                      <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
                        <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                          Story Section Narrative & Values
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">
                              Story Title
                            </label>
                            <input
                              type="text"
                              value={bioForm.aboutStory?.title || ''}
                              onChange={(e) => setBioForm({ 
                                ...bioForm, 
                                aboutStory: { ...bioForm.aboutStory, title: e.target.value } 
                              })}
                              className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-xs font-bold text-[#0F172A]"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">
                              Story Subtitle
                            </label>
                            <input
                              type="text"
                              value={bioForm.aboutStory?.subtitle || ''}
                              onChange={(e) => setBioForm({ 
                                ...bioForm, 
                                aboutStory: { ...bioForm.aboutStory, subtitle: e.target.value } 
                              })}
                              className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-xs text-[#0F172A]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">
                            Biography Narrative Paragraph 1
                          </label>
                          <textarea
                            rows={3}
                            value={bioForm.aboutStory?.narrative1 || ''}
                            onChange={(e) => setBioForm({ 
                              ...bioForm, 
                              aboutStory: { ...bioForm.aboutStory, narrative1: e.target.value } 
                            })}
                            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-xs text-[#0F172A]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">
                            Biography Narrative Paragraph 2
                          </label>
                          <textarea
                            rows={3}
                            value={bioForm.aboutStory?.narrative2 || ''}
                            onChange={(e) => setBioForm({ 
                              ...bioForm, 
                              aboutStory: { ...bioForm.aboutStory, narrative2: e.target.value } 
                            })}
                            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-xs text-[#0F172A]"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                        {bioSaved ? (
                          <span className="text-xs text-green-700 font-bold flex items-center gap-1">
                            <Check className="w-4 h-4" /> Bio saved & updated live!
                          </span>
                        ) : (
                          <span></span>
                        )}
                        <button
                          type="submit"
                          className="px-6 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2D3B4E] transition-colors cursor-pointer"
                        >
                          Save Profile Changes
                        </button>
                      </div>
                    </form>
                  )}

                  {/* TAB 2: Upload Pictures & Media */}
                  {activeTab === 'pictures' && (
                    <div className="space-y-8">
                      {/* 1. Hero Section Photo */}
                      <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#DC2626] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                              Section 1: Hero
                            </span>
                            <h3 className="font-serif text-lg font-bold text-[#0F172A] mt-1">
                              Hero Section Photo
                            </h3>
                            <p className="text-xs text-[#2B2B2B]/70">
                              Primary portrait displayed prominently on the top Hero greeting screen.
                            </p>
                          </div>
                          <ImageIcon className="w-6 h-6 text-[#DC2626]" />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                          <div className="w-28 h-36 rounded-2xl overflow-hidden border-2 border-[#0F172A] bg-white shrink-0 shadow-md">
                            <img
                              src={heroPortrait || profilePortrait}
                              alt="Hero Portrait Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="space-y-3 flex-1 w-full">
                            <label className="block w-full py-3 px-4 rounded-xl border-2 border-dashed border-[#DC2626]/40 bg-white text-center text-xs font-bold text-[#0F172A] cursor-pointer hover:bg-[#DC2626]/10 transition-colors">
                              <Upload className="w-4 h-4 inline mr-2 text-[#DC2626]" />
                              <span>Upload Hero Image File from Device</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const compressed = await compressImage(file, 1200, 1200, 0.85);
                                    if (compressed) {
                                      setHeroPortrait(compressed);
                                    }
                                  }
                                }}
                                className="hidden"
                              />
                            </label>

                            <div>
                              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">
                                Or Paste Hero Custom Image URL
                              </label>
                              <input
                                type="text"
                                placeholder="https://..."
                                value={heroPortrait.startsWith('data:') ? '' : heroPortrait}
                                onChange={(e) => setHeroPortrait(e.target.value)}
                                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-mono"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2. Story / Meet Section Photo */}
                      <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#1E3A8A] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                              Section 2: Story / Meet
                            </span>
                            <h3 className="font-serif text-lg font-bold text-[#0F172A] mt-1">
                              Story / Meet Section Photo
                            </h3>
                            <p className="text-xs text-[#2B2B2B]/70">
                              Secondary photo displayed alongside Dr. Naresh Bhatta's biographical story.
                            </p>
                          </div>
                          <Camera className="w-6 h-6 text-[#1E3A8A]" />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                          <div className="w-28 h-36 rounded-2xl overflow-hidden border-2 border-[#1E3A8A] bg-white shrink-0 shadow-md">
                            <img
                              src={meetPortrait || profilePortrait}
                              alt="Story Meet Portrait Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="space-y-3 flex-1 w-full">
                            <label className="block w-full py-3 px-4 rounded-xl border-2 border-dashed border-[#1E3A8A]/40 bg-white text-center text-xs font-bold text-[#0F172A] cursor-pointer hover:bg-[#1E3A8A]/10 transition-colors">
                              <Upload className="w-4 h-4 inline mr-2 text-[#1E3A8A]" />
                              <span>Upload Story/Meet Image File from Device</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const compressed = await compressImage(file, 1200, 1200, 0.85);
                                    if (compressed) {
                                      setMeetPortrait(compressed);
                                    }
                                  }
                                }}
                                className="hidden"
                              />
                            </label>

                            <div>
                              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">
                                Or Paste Story/Meet Custom Image URL
                              </label>
                              <input
                                type="text"
                                placeholder="https://..."
                                value={meetPortrait.startsWith('data:') ? '' : meetPortrait}
                                onChange={(e) => setMeetPortrait(e.target.value)}
                                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-mono"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3. General Profile Photo */}
                      <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#0F172A] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                              Default Fallback
                            </span>
                            <h3 className="font-serif text-lg font-bold text-[#0F172A] mt-1">
                              General Profile / Sketch Picture
                            </h3>
                            <p className="text-xs text-[#2B2B2B]/70">
                              Fallback portrait used across site components if specific section images are unassigned.
                            </p>
                          </div>
                          <ImageIcon className="w-6 h-6 text-[#0F172A]" />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                          <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#0F172A] bg-white shrink-0 shadow-md">
                            <img
                              src={profilePortrait}
                              alt="Default Portrait Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="space-y-3 flex-1 w-full">
                            <label className="block w-full py-3 px-4 rounded-xl border-2 border-dashed border-[#0F172A]/40 bg-white text-center text-xs font-bold text-[#0F172A] cursor-pointer hover:bg-[#0D9488]/20 transition-colors">
                              <Upload className="w-4 h-4 inline mr-2 text-[#0F172A]" />
                              <span>Select Image File from Device</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                              />
                            </label>

                            <div>
                              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">
                                Or Paste Custom Image URL
                              </label>
                              <input
                                type="text"
                                placeholder="https://..."
                                value={profilePortrait.startsWith('data:') ? '' : profilePortrait}
                                onChange={(e) => setProfilePortrait(e.target.value)}
                                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-mono"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB: Journey Timeline */}
                  {activeTab === 'journey' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                            Journey Timeline Milestones ({flowCards.length})
                          </h3>
                          <p className="text-xs text-[#2B2B2B]/70">
                            Manage timeline milestone cards displayed in The Journey section.
                          </p>
                        </div>
                        <button
                          onClick={() => setShowAddFlow(!showAddFlow)}
                          className="px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider border border-[#0F766E] hover:bg-[#0F172A] hover:text-[#FAF9F5] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          {showAddFlow ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          <span>{showAddFlow ? 'Close Form' : 'Add Journey Event'}</span>
                        </button>
                      </div>

                      {showAddFlow && (
                        <form onSubmit={handleAddFlowSubmit} className="p-5 rounded-2xl bg-[#FAF9F5] border-2 border-[#0F172A] space-y-4">
                          <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                            Create New Journey Timeline Milestone
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Short Year Badge (e.g. '26)</label>
                              <input
                                type="text"
                                value={newFlow.year}
                                onChange={(e) => setNewFlow({ ...newFlow, year: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Full Year (e.g. 2026)</label>
                              <input
                                type="text"
                                value={newFlow.fullYear}
                                onChange={(e) => setNewFlow({ ...newFlow, fullYear: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Handle / Tag</label>
                              <input
                                type="text"
                                value={newFlow.handleTag}
                                onChange={(e) => setNewFlow({ ...newFlow, handleTag: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Milestone Title</label>
                              <input
                                type="text"
                                placeholder="Milestone Title"
                                value={newFlow.title}
                                onChange={(e) => setNewFlow({ ...newFlow, title: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Subtitle / Context</label>
                              <input
                                type="text"
                                placeholder="Subtitle / Role"
                                value={newFlow.subtitle}
                                onChange={(e) => setNewFlow({ ...newFlow, subtitle: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Key Quote / Impact Statement</label>
                            <textarea
                              placeholder="Key quote or description..."
                              value={newFlow.quote}
                              onChange={(e) => setNewFlow({ ...newFlow, quote: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white italic font-serif"
                              rows={2}
                            />
                          </div>

                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setShowAddFlow(false)}
                              className="px-4 py-2 rounded-lg border text-xs font-bold"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-bold uppercase"
                            >
                              Save Journey Card
                            </button>
                          </div>
                        </form>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {flowCards.map((card) => (
                          <div key={card.id} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="font-mono font-bold bg-[#DC2626] text-white px-2 py-0.5 rounded text-[10px]">
                                  {card.fullYear || card.year}
                                </span>
                                <span className="uppercase text-[10px] font-bold text-[#0D9488]">
                                  {card.handleTag}
                                </span>
                              </div>
                              <h4 className="font-bold text-sm text-[#0F172A] mt-1">{card.title}</h4>
                              <p className="text-xs text-[#475569]">{card.subtitle}</p>
                              <p className="text-xs text-[#0F172A] italic font-serif mt-2">"{card.quote}"</p>
                            </div>

                            <div className="flex items-center justify-end gap-2 border-t pt-2">
                              <button
                                onClick={() => deleteFlowCard(card.id)}
                                className="px-2.5 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold cursor-pointer"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB: Leadership Milestones */}
                  {activeTab === 'leadership' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                            Leadership Milestones & Track Record ({milestones.length})
                          </h3>
                          <p className="text-xs text-[#2B2B2B]/70">
                            Add or update leadership journey entries, NSU governance achievements, and medical association roles.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            if (showAddMilestone) {
                              setShowAddMilestone(false);
                              setEditingMilestoneId(null);
                            } else {
                              setEditingMilestoneId(null);
                              setMilestoneForm({
                                year: '2025 - Present',
                                category: 'community',
                                title: '',
                                organization: '',
                                role: '',
                                description: '',
                                impactMetric: '',
                                highlightsText: '',
                                highlights: []
                              });
                              setShowAddMilestone(true);
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider border border-[#0F766E] hover:bg-[#0F172A] hover:text-[#FAF9F5] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          {showAddMilestone ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          <span>{showAddMilestone ? 'Close Form' : 'Add Milestone'}</span>
                        </button>
                      </div>

                      {showAddMilestone && (
                        <form onSubmit={handleSaveMilestone} className="p-5 rounded-2xl bg-[#FAF9F5] border-2 border-[#0F172A] space-y-4">
                          <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                            {editingMilestoneId ? 'Edit Milestone Entry' : 'Create New Leadership Milestone'}
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Year / Era</label>
                              <input
                                type="text"
                                placeholder="e.g. 2025 - Present"
                                value={milestoneForm.year}
                                onChange={(e) => setMilestoneForm({ ...milestoneForm, year: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Category</label>
                              <select
                                value={milestoneForm.category}
                                onChange={(e) => setMilestoneForm({ ...milestoneForm, category: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                              >
                                <option value="nsu">NSU Student Union</option>
                                <option value="medical">Medical Leadership</option>
                                <option value="community">Community Service</option>
                                <option value="student">Student Activism</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Role Title</label>
                              <input
                                type="text"
                                placeholder="e.g. President / Coordinator"
                                value={milestoneForm.role}
                                onChange={(e) => setMilestoneForm({ ...milestoneForm, role: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Milestone Name / Title</label>
                              <input
                                type="text"
                                placeholder="e.g. Free Medical Health Camps Expansion"
                                value={milestoneForm.title}
                                onChange={(e) => setMilestoneForm({ ...milestoneForm, title: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Organization</label>
                              <input
                                type="text"
                                placeholder="e.g. Nepal Student Union Medical Chapter"
                                value={milestoneForm.organization}
                                onChange={(e) => setMilestoneForm({ ...milestoneForm, organization: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Description</label>
                            <textarea
                              placeholder="Brief summary of responsibilities and achievements..."
                              value={milestoneForm.description}
                              onChange={(e) => setMilestoneForm({ ...milestoneForm, description: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              rows={2}
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Key Impact Metric</label>
                              <input
                                type="text"
                                placeholder="e.g. Impacted 12,000+ rural citizens"
                                value={milestoneForm.impactMetric}
                                onChange={(e) => setMilestoneForm({ ...milestoneForm, impactMetric: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Key Highlights (1 per line)</label>
                              <textarea
                                placeholder="Highlight 1&#10;Highlight 2"
                                value={milestoneForm.highlightsText}
                                onChange={(e) => setMilestoneForm({ ...milestoneForm, highlightsText: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                                rows={2}
                              />
                            </div>
                          </div>

                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setShowAddMilestone(false)}
                              className="px-4 py-2 rounded-lg border text-xs font-bold"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-bold uppercase"
                            >
                              {editingMilestoneId ? 'Update Milestone' : 'Save Milestone'}
                            </button>
                          </div>
                        </form>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {milestones.map((m) => (
                          <div key={m.id} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="font-mono font-bold bg-[#0F172A] text-white px-2 py-0.5 rounded text-[10px]">
                                  {m.year}
                                </span>
                                <span className="uppercase text-[10px] font-bold text-[#C8A96A]">
                                  {m.category}
                                </span>
                              </div>
                              <h4 className="font-bold text-sm text-[#0F172A]">{m.title}</h4>
                              <p className="text-xs text-[#2D3B4E] font-medium">{m.role} · {m.organization}</p>
                              <p className="text-xs text-[#2B2B2B]/70 mt-1 line-clamp-2">{m.description}</p>
                            </div>

                            <div className="flex items-center justify-end gap-2 border-t pt-2">
                              <button
                                onClick={() => handleStartEditMilestone(m)}
                                className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteMilestone(m.id)}
                                className="px-2.5 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB: Academic Records */}
                  {activeTab === 'academic' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                            Academic Journey & Honors ({academicRecords.length})
                          </h3>
                          <p className="text-xs text-[#2B2B2B]/70">
                            Manage medical degrees, university honors, board certifications, and research publications.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            if (showAddAcademic) {
                              setShowAddAcademic(false);
                              setEditingAcademicId(null);
                            } else {
                              setEditingAcademicId(null);
                              setAcademicForm({
                                type: 'education',
                                title: '',
                                institution: '',
                                year: '2024 - 2026',
                                details: '',
                                badge: 'Honors'
                              });
                              setShowAddAcademic(true);
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider border border-[#0F766E] hover:bg-[#0F172A] hover:text-[#FAF9F5] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          {showAddAcademic ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          <span>{showAddAcademic ? 'Close Form' : 'Add Academic Entry'}</span>
                        </button>
                      </div>

                      {showAddAcademic && (
                        <form onSubmit={handleSaveAcademic} className="p-5 rounded-2xl bg-[#FAF9F5] border-2 border-[#0F172A] space-y-4">
                          <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                            {editingAcademicId ? 'Edit Academic Entry' : 'Add Academic Record'}
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Record Type</label>
                              <select
                                value={academicForm.type}
                                onChange={(e) => setAcademicForm({ ...academicForm, type: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                              >
                                <option value="education">Education / Degree</option>
                                <option value="research">Research Publication</option>
                                <option value="award">Honor / Award</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Year / Period</label>
                              <input
                                type="text"
                                placeholder="e.g. 2022 - 2026"
                                value={academicForm.year}
                                onChange={(e) => setAcademicForm({ ...academicForm, year: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Badge Tag</label>
                              <input
                                type="text"
                                placeholder="e.g. First Division / Medalist"
                                value={academicForm.badge}
                                onChange={(e) => setAcademicForm({ ...academicForm, badge: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Title / Qualification</label>
                              <input
                                type="text"
                                placeholder="e.g. Bachelor of Medicine, Bachelor of Surgery (MBBS)"
                                value={academicForm.title}
                                onChange={(e) => setAcademicForm({ ...academicForm, title: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Institution</label>
                              <input
                                type="text"
                                placeholder="e.g. Kathmandu University Medical School"
                                value={academicForm.institution}
                                onChange={(e) => setAcademicForm({ ...academicForm, institution: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Details & Highlights</label>
                            <textarea
                              placeholder="Academic honors, clinical thesis topic, or publication doi..."
                              value={academicForm.details}
                              onChange={(e) => setAcademicForm({ ...academicForm, details: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              rows={2}
                            />
                          </div>

                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setShowAddAcademic(false)}
                              className="px-4 py-2 rounded-lg border text-xs font-bold"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-bold uppercase"
                            >
                              {editingAcademicId ? 'Update Record' : 'Save Record'}
                            </button>
                          </div>
                        </form>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {academicRecords.map((a) => (
                          <div key={a.id} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="font-mono text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">
                                  {a.type}
                                </span>
                                <span className="text-xs font-bold text-[#0F172A]">{a.year}</span>
                              </div>
                              <h4 className="font-bold text-sm text-[#0F172A]">{a.title}</h4>
                              <p className="text-xs text-[#2D3B4E]">{a.institution}</p>
                              <p className="text-xs text-[#2B2B2B]/70 mt-1 line-clamp-2">{a.details}</p>
                            </div>

                            <div className="flex items-center justify-end gap-2 border-t pt-2">
                              <button
                                onClick={() => handleStartEditAcademic(a)}
                                className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteAcademicRecord(a.id)}
                                className="px-2.5 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}



                  {/* TAB: Speeches & Keynotes */}
                  {activeTab === 'speeches' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                            Speeches & Keynote Addresses ({speeches.length})
                          </h3>
                          <p className="text-xs text-[#2B2B2B]/70">
                            Upload keynote transcripts, conference speeches, and quote excerpts.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            if (showAddSpeech) {
                              setShowAddSpeech(false);
                              setEditingSpeechId(null);
                            } else {
                              setEditingSpeechId(null);
                              setSpeechForm({
                                title: '',
                                event: '',
                                location: 'Kathmandu, Nepal',
                                date: 'July 2026',
                                duration: '25 min',
                                category: 'Youth Leadership',
                                summary: '',
                                quote: '',
                                takeawaysText: '',
                                keyTakeaways: []
                              });
                              setShowAddSpeech(true);
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider border border-[#0F766E] hover:bg-[#0F172A] hover:text-[#FAF9F5] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          {showAddSpeech ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          <span>{showAddSpeech ? 'Close Form' : 'Add Speech'}</span>
                        </button>
                      </div>

                      {showAddSpeech && (
                        <form onSubmit={handleSaveSpeech} className="p-5 rounded-2xl bg-[#FAF9F5] border-2 border-[#0F172A] space-y-4">
                          <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                            {editingSpeechId ? 'Edit Speech Record' : 'Add Keynote Speech'}
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Speech Title</label>
                              <input
                                type="text"
                                placeholder="e.g. Empowering Youth in Public Health"
                                value={speechForm.title}
                                onChange={(e) => setSpeechForm({ ...speechForm, title: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Event Name</label>
                              <input
                                type="text"
                                placeholder="e.g. National Youth Conclave"
                                value={speechForm.event}
                                onChange={(e) => setSpeechForm({ ...speechForm, event: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Category</label>
                              <input
                                type="text"
                                placeholder="e.g. Healthcare Leadership"
                                value={speechForm.category}
                                onChange={(e) => setSpeechForm({ ...speechForm, category: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Location</label>
                              <input
                                type="text"
                                placeholder="Kathmandu, Nepal"
                                value={speechForm.location}
                                onChange={(e) => setSpeechForm({ ...speechForm, location: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Date</label>
                              <input
                                type="text"
                                placeholder="July 2026"
                                value={speechForm.date}
                                onChange={(e) => setSpeechForm({ ...speechForm, date: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Duration</label>
                              <input
                                type="text"
                                placeholder="30 min"
                                value={speechForm.duration}
                                onChange={(e) => setSpeechForm({ ...speechForm, duration: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Featured Keynote Quote</label>
                            <textarea
                              placeholder="“Memorable headline quote...”"
                              value={speechForm.quote}
                              onChange={(e) => setSpeechForm({ ...speechForm, quote: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white italic"
                              rows={2}
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Summary / Abstract</label>
                            <textarea
                              placeholder="Keynote speech synopsis..."
                              value={speechForm.summary}
                              onChange={(e) => setSpeechForm({ ...speechForm, summary: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              rows={2}
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Key Takeaways (1 per line)</label>
                            <textarea
                              placeholder="Takeaway 1&#10;Takeaway 2"
                              value={speechForm.takeawaysText}
                              onChange={(e) => setSpeechForm({ ...speechForm, takeawaysText: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              rows={2}
                            />
                          </div>

                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setShowAddSpeech(false)}
                              className="px-4 py-2 rounded-lg border text-xs font-bold"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-bold uppercase"
                            >
                              {editingSpeechId ? 'Update Speech' : 'Save Speech'}
                            </button>
                          </div>
                        </form>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {speeches.map((s) => (
                          <div key={s.id} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-[11px] mb-1">
                                <span className="font-mono bg-[#0D9488] px-2 py-0.5 rounded font-bold">{s.category}</span>
                                <span className="text-[#2B2B2B]/60">{s.date}</span>
                              </div>
                              <h4 className="font-bold text-sm text-[#0F172A]">{s.title}</h4>
                              <p className="text-xs text-[#2D3B4E]">{s.event} · {s.location}</p>
                              <p className="text-xs text-[#2B2B2B]/70 italic mt-1 font-serif">"{s.quote}"</p>
                            </div>

                            <div className="flex items-center justify-end gap-2 border-t pt-2">
                              <button
                                onClick={() => handleStartEditSpeech(s)}
                                className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteSpeech(s.id)}
                                className="px-2.5 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB: Essays & Writings (Articles) */}
                  {activeTab === 'blog' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                            Essays, Articles & Writings ({blogPosts.length})
                          </h3>
                          <p className="text-xs text-[#2B2B2B]/70">
                            Publish opinion essays, health reform papers, and student leadership commentary.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            if (showAddBlog) {
                              setShowAddBlog(false);
                              setEditingBlogId(null);
                            } else {
                              setEditingBlogId(null);
                              setBlogForm({
                                title: '',
                                subtitle: '',
                                category: 'Healthcare',
                                readTime: '6 min read',
                                date: 'July 2026',
                                excerpt: '',
                                contentText: '',
                                content: [],
                                quotesText: '',
                                keyQuotes: []
                              });
                              setShowAddBlog(true);
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider border border-[#0F766E] hover:bg-[#0F172A] hover:text-[#FAF9F5] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          {showAddBlog ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          <span>{showAddBlog ? 'Close Form' : 'Publish New Essay'}</span>
                        </button>
                      </div>

                      {showAddBlog && (
                        <form onSubmit={handleSaveBlog} className="p-5 rounded-2xl bg-[#FAF9F5] border-2 border-[#0F172A] space-y-4">
                          <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                            {editingBlogId ? 'Edit Essay Article' : 'Draft New Essay / Writing'}
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Essay Title</label>
                              <input
                                type="text"
                                placeholder="Title of the Essay"
                                value={blogForm.title}
                                onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Category</label>
                              <select
                                value={blogForm.category}
                                onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                              >
                                <option value="Healthcare">Healthcare</option>
                                <option value="Leadership">Leadership</option>
                                <option value="Youth">Youth</option>
                                <option value="Education">Education</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase mb-1">Read Time & Date</label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder="5 min read"
                                  value={blogForm.readTime}
                                  onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                                  className="w-1/2 px-2 py-2 rounded-lg border text-xs bg-white"
                                />
                                <input
                                  type="text"
                                  placeholder="July 2026"
                                  value={blogForm.date}
                                  onChange={(e) => setBlogForm({ ...blogForm, date: e.target.value })}
                                  className="w-1/2 px-2 py-2 rounded-lg border text-xs bg-white font-mono"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Subtitle / Subheadline</label>
                            <input
                              type="text"
                              placeholder="A secondary title for the article..."
                              value={blogForm.subtitle}
                              onChange={(e) => setBlogForm({ ...blogForm, subtitle: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-serif"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Short Excerpt</label>
                            <textarea
                              placeholder="Brief abstract preview shown on cards..."
                              value={blogForm.excerpt}
                              onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              rows={2}
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Full Article Paragraphs (Separate paragraphs with double newlines)</label>
                            <textarea
                              placeholder="Paragraph 1...&#10;&#10;Paragraph 2..."
                              value={blogForm.contentText}
                              onChange={(e) => setBlogForm({ ...blogForm, contentText: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-serif"
                              rows={5}
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase mb-1">Key Highlight Quotes (1 per line)</label>
                            <textarea
                              placeholder="Quote 1&#10;Quote 2"
                              value={blogForm.quotesText}
                              onChange={(e) => setBlogForm({ ...blogForm, quotesText: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              rows={2}
                            />
                          </div>

                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setShowAddBlog(false)}
                              className="px-4 py-2 rounded-lg border text-xs font-bold"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-bold uppercase"
                            >
                              {editingBlogId ? 'Update Article' : 'Publish Article'}
                            </button>
                          </div>
                        </form>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {blogPosts.map((a) => (
                          <div key={a.id} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-[11px] mb-1">
                                <span className="font-mono bg-[#0F172A] text-white px-2 py-0.5 rounded font-bold">{a.category}</span>
                                <span className="text-[#2B2B2B]/60">{a.date} · {a.readTime}</span>
                              </div>
                              <h4 className="font-bold text-sm text-[#0F172A]">{a.title}</h4>
                              <p className="text-xs text-[#2B2B2B]/70 mt-1 line-clamp-2">{a.excerpt}</p>
                            </div>

                            <div className="flex items-center justify-end gap-2 border-t pt-2">
                              <button
                                onClick={() => handleStartEditBlog(a)}
                                className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteBlogPost(a.id)}
                                className="px-2.5 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}



                  {/* TAB 4: Current Initiatives & Programs Management */}
                  {activeTab === 'initiatives' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                            Current Initiatives & Programs ({initiatives.length})
                          </h3>
                          <p className="text-xs text-[#2B2B2B]/70">
                            Manage active social movements, healthcare camps, and fellowship programs displayed on the site.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            if (showAddInitiative) {
                              setShowAddInitiative(false);
                              setEditingInitiativeId(null);
                            } else {
                              setEditingInitiativeId(null);
                              setInitiativeForm({
                                category: 'Healthcare',
                                title: '',
                                tagline: '',
                                description: '',
                                status: 'Active',
                                metrics: '',
                                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
                                fullStory: '',
                                keyGoalsText: '',
                                keyGoals: []
                              });
                              setShowAddInitiative(true);
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider border border-[#0F766E] hover:bg-[#0F172A] hover:text-[#FAF9F5] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          {showAddInitiative ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          <span>{showAddInitiative ? 'Close Form' : 'Add New Program'}</span>
                        </button>
                      </div>

                      {/* Add/Edit Initiative Form */}
                      {showAddInitiative && (
                        <form onSubmit={handleSaveInitiative} className="p-5 rounded-2xl bg-[#FAF9F5] border-2 border-[#0F172A] space-y-4">
                          <div className="flex items-center justify-between border-b pb-2">
                            <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                              {editingInitiativeId ? 'Edit Initiative Entry' : 'Create New Initiative Program'}
                            </h4>
                            <span className="text-[10px] uppercase font-mono bg-[#0D9488] px-2 py-0.5 rounded font-bold">
                              {editingInitiativeId ? 'Updating' : 'New Draft'}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Title</label>
                              <input
                                type="text"
                                placeholder="Program Name"
                                value={initiativeForm.title}
                                onChange={(e) => setInitiativeForm({ ...initiativeForm, title: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs font-bold bg-white"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Category</label>
                              <select
                                value={initiativeForm.category}
                                onChange={(e) => setInitiativeForm({ ...initiativeForm, category: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                              >
                                <option value="Healthcare">Healthcare</option>
                                <option value="Youth Leadership">Youth Leadership</option>
                                <option value="Education">Education</option>
                                <option value="Social Programs">Social Programs</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Status</label>
                              <select
                                value={initiativeForm.status}
                                onChange={(e) => setInitiativeForm({ ...initiativeForm, status: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                              >
                                <option value="Active">Active</option>
                                <option value="Expanding">Expanding</option>
                                <option value="Upcoming">Upcoming</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Tagline</label>
                              <input
                                type="text"
                                placeholder="Short inspirational quote/tagline"
                                value={initiativeForm.tagline}
                                onChange={(e) => setInitiativeForm({ ...initiativeForm, tagline: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Impact Metric</label>
                              <input
                                type="text"
                                placeholder="e.g., 18,000+ Screenings"
                                value={initiativeForm.metrics}
                                onChange={(e) => setInitiativeForm({ ...initiativeForm, metrics: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Brief Description</label>
                            <textarea
                              placeholder="Summary of the initiative..."
                              value={initiativeForm.description}
                              onChange={(e) => setInitiativeForm({ ...initiativeForm, description: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              rows={2}
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Full Story Narrative</label>
                            <textarea
                              placeholder="Deep-dive background story..."
                              value={initiativeForm.fullStory}
                              onChange={(e) => setInitiativeForm({ ...initiativeForm, fullStory: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              rows={3}
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Key Objectives / Goals (One per line)</label>
                            <textarea
                              placeholder="Operate bi-weekly diagnostic camps&#10;Provide free follow-up consultations&#10;Distribute emergency medicine"
                              value={initiativeForm.keyGoalsText}
                              onChange={(e) => setInitiativeForm({ ...initiativeForm, keyGoalsText: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                              rows={3}
                            />
                          </div>

                          {/* Image Selection / Upload */}
                          <div className="p-3 bg-white border rounded-xl space-y-2">
                            <label className="block text-[11px] font-bold uppercase text-[#0F172A]">Program Banner Photo</label>
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                              {initiativeForm.image && (
                                <img
                                  src={initiativeForm.image}
                                  alt="Preview"
                                  className="w-20 h-14 object-cover rounded-lg border shrink-0 bg-gray-100"
                                />
                              )}
                              <div className="flex-1 w-full space-y-1.5">
                                <label className="block py-2 px-3 rounded-lg border border-dashed border-[#0F172A] bg-[#FAF9F5] text-center text-xs font-bold cursor-pointer hover:bg-[#0D9488]/30">
                                  <Upload className="w-3.5 h-3.5 inline mr-1" /> Upload Image File from Device
                                  <input type="file" accept="image/*" onChange={handleInitiativeFileUpload} className="hidden" />
                                </label>
                                <input
                                  type="text"
                                  placeholder="Or paste image URL (Unsplash, etc.)"
                                  value={initiativeForm.image.startsWith('data:') ? '' : initiativeForm.image}
                                  onChange={(e) => setInitiativeForm({ ...initiativeForm, image: e.target.value })}
                                  className="w-full px-2.5 py-1.5 rounded-lg border text-[11px] font-mono"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-end gap-2 pt-2">
                            <button
                              type="button"
                              onClick={() => {
                                setShowAddInitiative(false);
                                setEditingInitiativeId(null);
                              }}
                              className="px-4 py-2 rounded-lg border text-xs font-bold hover:bg-gray-100 cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2D3B4E] cursor-pointer"
                            >
                              {editingInitiativeId ? 'Update Program' : 'Save Program Entry'}
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Initiatives Cards Listing */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {initiatives.map((item) => (
                          <div key={item.id} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-3">
                            <div className="space-y-2">
                              <div className="relative h-32 rounded-xl overflow-hidden bg-black">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90" />
                                <div className="absolute top-2 left-2 flex gap-1">
                                  <span className="px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-bold">
                                    {item.category}
                                  </span>
                                  <span className="px-2 py-0.5 rounded bg-[#C8A96A] text-[#0F172A] text-[10px] font-bold">
                                    {item.status}
                                  </span>
                                </div>
                              </div>

                              <div className="text-[10px] font-mono font-bold uppercase text-[#2D3B4E]">
                                {item.metrics}
                              </div>
                              <h4 className="font-serif text-base font-bold text-[#0F172A] leading-tight">
                                {item.title}
                              </h4>
                              <p className="text-xs text-[#2B2B2B]/70 line-clamp-2">
                                {item.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-end gap-2 border-t pt-2.5">
                              <button
                                onClick={() => handleStartEditInitiative(item)}
                                className="px-3 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold hover:bg-amber-200 flex items-center gap-1 cursor-pointer"
                              >
                                <Edit3 className="w-3 h-3" /> Edit
                              </button>
                              <button
                                onClick={() => deleteInitiative(item.id)}
                                className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold hover:bg-red-200 flex items-center gap-1 cursor-pointer"
                              >
                                <Trash2 className="w-3 h-3" /> Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 5: Media & Field Gallery Management */}
                  {activeTab === 'media' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                            Media & Field Gallery Archive ({mediaItems.length})
                          </h3>
                          <p className="text-xs text-[#2B2B2B]/70">
                            Upload photos, medical camp highlights, and documentary moments directly to the gallery.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            if (showAddMedia) {
                              setShowAddMedia(false);
                              setEditingMediaId(null);
                            } else {
                              setEditingMediaId(null);
                              setMediaForm({
                                category: 'Community',
                                title: '',
                                subtitle: '',
                                image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
                                date: 'July 2026',
                                location: 'Kathmandu, Nepal'
                              });
                              setShowAddMedia(true);
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider border border-[#0F766E] hover:bg-[#0F172A] hover:text-[#FAF9F5] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          {showAddMedia ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          <span>{showAddMedia ? 'Close Form' : 'Add Field Photo'}</span>
                        </button>
                      </div>

                      {/* Add/Edit Media Item Form */}
                      {showAddMedia && (
                        <form onSubmit={handleSaveMedia} className="p-5 rounded-2xl bg-[#FAF9F5] border-2 border-[#0F172A] space-y-4">
                          <div className="flex items-center justify-between border-b pb-2">
                            <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                              {editingMediaId ? 'Edit Gallery Item' : 'Add New Field Gallery Item'}
                            </h4>
                            <span className="text-[10px] uppercase font-mono bg-[#0D9488] px-2 py-0.5 rounded font-bold">
                              {editingMediaId ? 'Editing' : 'New Photo'}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Photo Caption / Title</label>
                              <input
                                type="text"
                                placeholder="e.g. Rural Health Camp in Pokhara"
                                value={mediaForm.title}
                                onChange={(e) => setMediaForm({ ...mediaForm, title: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs font-bold bg-white"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Category</label>
                              <select
                                value={mediaForm.category}
                                onChange={(e) => setMediaForm({ ...mediaForm, category: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-bold"
                              >
                                <option value="Community">Community</option>
                                <option value="Leadership">Leadership</option>
                                <option value="Photography">Photography</option>
                                <option value="Events">Events</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Subtitle / Details</label>
                            <input
                              type="text"
                              placeholder="e.g. Over 500 patients provided free checkups and consultations."
                              value={mediaForm.subtitle}
                              onChange={(e) => setMediaForm({ ...mediaForm, subtitle: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Date</label>
                              <input
                                type="text"
                                placeholder="e.g. July 2026"
                                value={mediaForm.date}
                                onChange={(e) => setMediaForm({ ...mediaForm, date: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1">Location</label>
                              <input
                                type="text"
                                placeholder="e.g. Gandaki Public Health Office"
                                value={mediaForm.location}
                                onChange={(e) => setMediaForm({ ...mediaForm, location: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border text-xs bg-white"
                              />
                            </div>
                          </div>

                          {/* Image Upload for Media Gallery */}
                          <div className="p-3 bg-white border rounded-xl space-y-2">
                            <label className="block text-[11px] font-bold uppercase text-[#0F172A]">Field Photo Image</label>
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                              {mediaForm.image && (
                                <img
                                  src={mediaForm.image}
                                  alt="Preview"
                                  className="w-20 h-16 object-cover rounded-lg border shrink-0 bg-gray-100"
                                />
                              )}
                              <div className="flex-1 w-full space-y-1.5">
                                <label className="block py-2 px-3 rounded-lg border border-dashed border-[#0F172A] bg-[#FAF9F5] text-center text-xs font-bold cursor-pointer hover:bg-[#0D9488]/30">
                                  <Upload className="w-3.5 h-3.5 inline mr-1" /> Upload Photo File from Device
                                  <input type="file" accept="image/*" onChange={handleMediaFileUpload} className="hidden" />
                                </label>
                                <input
                                  type="text"
                                  placeholder="Or paste image URL"
                                  value={mediaForm.image.startsWith('data:') ? '' : mediaForm.image}
                                  onChange={(e) => setMediaForm({ ...mediaForm, image: e.target.value })}
                                  className="w-full px-2.5 py-1.5 rounded-lg border text-[11px] font-mono"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-end gap-2 pt-2">
                            <button
                              type="button"
                              onClick={() => {
                                setShowAddMedia(false);
                                setEditingMediaId(null);
                              }}
                              className="px-4 py-2 rounded-lg border text-xs font-bold hover:bg-gray-100 cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-5 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2D3B4E] cursor-pointer"
                            >
                              {editingMediaId ? 'Update Photo' : 'Save Photo Entry'}
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Media Items Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {mediaItems.map((item) => (
                          <div key={item.id} className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-2">
                            <div className="space-y-2">
                              <div className="relative h-36 rounded-xl overflow-hidden bg-black">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-bold">
                                  {item.category}
                                </span>
                              </div>

                              <h4 className="font-serif text-sm font-bold text-[#0F172A] leading-tight">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-[#2B2B2B]/70 line-clamp-2">
                                {item.subtitle}
                              </p>
                              <div className="text-[10px] font-mono text-[#2B2B2B]/60 flex items-center justify-between pt-1">
                                <span>📅 {item.date}</span>
                                <span>📍 {item.location}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-end gap-2 border-t pt-2">
                              <button
                                onClick={() => handleStartEditMedia(item)}
                                className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold hover:bg-amber-200 flex items-center gap-1 cursor-pointer"
                              >
                                <Edit3 className="w-3 h-3" /> Edit
                              </button>
                              <button
                                onClick={() => deleteMediaItem(item.id)}
                                className="px-2.5 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold hover:bg-red-200 flex items-center gap-1 cursor-pointer"
                              >
                                <Trash2 className="w-3 h-3" /> Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 6: Contact Messages & Inquiries */}
                  {activeTab === 'messages' && (
                    <div className="space-y-4">
                      <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                        Incoming Visitor Messages ({contactMessages.length})
                      </h3>

                      {contactMessages.length === 0 ? (
                        <div className="p-8 text-center text-xs text-[#2B2B2B]/60 bg-[#FAF9F5] rounded-2xl">
                          No messages received yet.
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {contactMessages.map((msg) => (
                            <div
                              key={msg.id}
                              className={`p-4 rounded-2xl border ${
                                msg.read ? 'bg-white border-[#E2E8F0]' : 'bg-[#0D9488]/10 border-[#0D9488]'
                              } space-y-2`}
                            >
                              <div className="flex items-center justify-between text-xs">
                                <div className="font-bold text-[#0F172A]">{msg.name} ({msg.organization || 'Individual'})</div>
                                <div className="font-mono text-[10px] text-[#2B2B2B]/60">{msg.timestamp}</div>
                              </div>

                              <div className="flex flex-wrap gap-3 text-xs text-[#2B2B2B]">
                                <a href={`tel:${msg.phone}`} className="font-mono font-bold text-green-700 flex items-center gap-1">
                                  <Phone className="w-3 h-3" /> {msg.phone}
                                </a>
                                <a href={`mailto:${msg.email}`} className="text-blue-700 flex items-center gap-1">
                                  <Mail className="w-3 h-3" /> {msg.email}
                                </a>
                                <span className="bg-[#0F172A] text-white px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                                  {msg.purpose}
                                </span>
                              </div>

                              <p className="text-xs text-[#0F172A] bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E2E8F0]/60">
                                "{msg.message}"
                              </p>

                              <div className="flex items-center justify-end gap-2 pt-1">
                                {!msg.read && (
                                  <button
                                    onClick={() => markMessageRead(msg.id)}
                                    className="px-2.5 py-1 bg-green-100 text-green-800 rounded-md text-[10px] font-bold cursor-pointer"
                                  >
                                    Mark as Read
                                  </button>
                                )}
                                <button
                                  onClick={() => deleteContactMessage(msg.id)}
                                  className="p-1 text-red-600 hover:bg-red-50 rounded cursor-pointer"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 5: Security Settings */}
                  {activeTab === 'security' && (
                    <div className="space-y-6 max-w-md mx-auto py-4">
                      <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] space-y-4">
                        <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                          Change Admin Passcode
                        </h3>

                        <form onSubmit={handleChangePasswordSubmit} className="space-y-3">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                              New Passcode
                            </label>
                            <input
                              type="password"
                              placeholder="Enter new admin passcode"
                              value={newPass}
                              onChange={(e) => setNewPass(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs font-mono"
                              required
                            />
                          </div>

                          {passSaved && (
                            <div className="text-xs text-green-700 font-bold bg-green-50 p-2 rounded">
                              Passcode successfully updated!
                            </div>
                          )}

                          <button
                            type="submit"
                            className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#2D3B4E] cursor-pointer"
                          >
                            Update Passcode
                          </button>
                        </form>
                      </div>

                      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                        <div>Reset all content to factory defaults?</div>
                        <button
                          onClick={resetToDefaults}
                          className="px-3 py-1.5 rounded-lg bg-amber-200 text-amber-900 font-bold text-[10px] uppercase hover:bg-amber-300 cursor-pointer"
                        >
                          Reset Defaults
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
