import type { PortableTextBlock } from "next-sanity";

export type SanityImage = {
  asset?: {
    _ref?: string;
    url?: string;
  };
  alt?: string;
};

export type CmsArticle = {
  title: string;
  slug: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  category?: string;
  author?: string;
  featuredImage?: SanityImage;
  featuredImageUrl?: string;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type CmsNews = Omit<CmsArticle, "category" | "author">;

export type CmsDoctorProfile = {
  fullName: string;
  slug: string;
  specialty?: string;
  qualifications?: string[];
  yearsOfExperience?: number;
  languages?: string[];
  bio?: PortableTextBlock[];
  profileImage?: SanityImage;
  profileImageUrl?: string;
  consultationTypes?: string[];
  isFeatured?: boolean;
};

export type CmsNamedItem = {
  name: string;
  slug?: string;
  description?: string;
  icon?: string;
  isFeatured?: boolean;
};

export type CmsFaq = {
  question: string;
  answer: string;
  category?: string;
  order?: number;
};

export type CmsTestimonial = {
  name: string;
  role?: string;
  quote: string;
  image?: SanityImage;
  imageUrl?: string;
  isFeatured?: boolean;
};

export type CmsPartner = {
  name: string;
  logo?: SanityImage;
  logoUrl?: string;
  website?: string;
  category?: string;
};

export type CmsHomepageBanner = {
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  isActive?: boolean;
};

export type CmsSiteSettings = {
  siteName?: string;
  tagline?: string;
  headOffice?: string;
  serviceArea?: string;
  email?: string;
  supportEmail?: string;
  providerEmail?: string;
  phone?: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  xTwitter?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
};
