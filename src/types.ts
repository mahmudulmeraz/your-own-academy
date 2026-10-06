export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedOverview: string;
  imageUrl: string;
  features: string[];
  capacity?: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  grades: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Athletics' | 'Arts & Music' | 'STEM & Innovation' | 'Campus Life' | 'Leadership';
  imageUrl: string;
  aspect: 'wide' | 'tall' | 'square';
  caption: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  relationship: string;
  avatarUrl: string;
  quote: string;
  yearOrGrade: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Academic' | 'Student Achievement' | 'Admissions' | 'Campus Event';
  date: string;
  imageUrl: string;
  excerpt: string;
  readTime: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Campus & Safety' | 'Tuition & Aid';
}

export interface EnquiryFormData {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  gradeLevel: string;
  academicYear: string;
  preferredContact: 'phone' | 'email' | 'campus-visit';
  message: string;
}
