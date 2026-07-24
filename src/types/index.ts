export type NavigationTab = 
  | 'home'
  | 'about'
  | 'journey'
  | 'vision'
  | 'leadership'
  | 'academic'
  | 'impact'
  | 'initiatives'
  | 'media'
  | 'speeches'
  | 'testimonials'
  | 'blog'
  | 'contact';

export interface Milestone {
  id: string;
  year: string;
  category: 'student' | 'nsu' | 'medical' | 'community';
  title: string;
  organization: string;
  role: string;
  description: string;
  impactMetric?: string;
  highlights: string[];
  featuredImage?: string;
}

export interface AcademicRecord {
  id: string;
  type: 'education' | 'medical_training' | 'research' | 'certificate' | 'award';
  title: string;
  institution: string;
  year: string;
  details: string;
  badge?: string;
  link?: string;
}

export interface ImpactStat {
  id: string;
  number: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  iconName: string;
}

export interface Initiative {
  id: string;
  category: 'Healthcare' | 'Education' | 'Youth Leadership' | 'Social Programs';
  title: string;
  tagline: string;
  description: string;
  status: 'Active' | 'Expanding' | 'Upcoming';
  metrics: string;
  image: string;
  fullStory: string;
  keyGoals: string[];
}

export interface MediaItem {
  id: string;
  category: 'Photography' | 'Events' | 'Community' | 'Leadership';
  title: string;
  subtitle: string;
  image: string;
  date: string;
  location: string;
}

export interface Speech {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  duration: string;
  category: 'Youth Leadership' | 'Medical Ethics' | 'Community Action' | 'Keynote';
  videoUrl?: string;
  audioUrl?: string;
  summary: string;
  keyTakeaways: string[];
  quote: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  category: 'Patient' | 'Student' | 'Faculty' | 'Community Leader';
  avatar?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'Healthcare' | 'Leadership' | 'Youth' | 'Education' | 'Ethics';
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  keyQuotes: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Speaking' | 'Volunteer' | 'Consultation';
}
