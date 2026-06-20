export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export interface InsuranceProvider {
  name: string;
  logo: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  hours: { day: string; time: string }[];
  social: { platform: string; url: string; icon: string }[];
}
