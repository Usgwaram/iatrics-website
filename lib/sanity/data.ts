import { faqs, services, specialties, testimonials } from "@/lib/content";
import type { CmsArticle, CmsDoctorProfile, CmsFaq, CmsHomepageBanner, CmsNamedItem, CmsNews, CmsPartner, CmsSiteSettings, CmsTestimonial } from "./types";
import { fallbackArticles, fallbackDoctors, fallbackNews } from "./fallbacks";
import {
  articleBySlugQuery,
  articlesQuery,
  doctorBySlugQuery,
  doctorsQuery,
  faqsQuery,
  homepageBannerQuery,
  newsBySlugQuery,
  newsQuery,
  partnersQuery,
  servicesQuery,
  siteSettingsQuery,
  specialtiesQuery,
  testimonialsQuery,
} from "./queries";
import { sanityFetch } from "./client";

export async function getArticles() {
  return sanityFetch<CmsArticle[]>(articlesQuery, {}, fallbackArticles);
}

export async function getArticleBySlug(slug: string) {
  const fallback = fallbackArticles.find((article) => article.slug === slug) || null;
  return sanityFetch<CmsArticle | null>(articleBySlugQuery, { slug }, fallback);
}

export async function getNewsItems() {
  return sanityFetch<CmsNews[]>(newsQuery, {}, fallbackNews);
}

export async function getNewsBySlug(slug: string) {
  const fallback = fallbackNews.find((item) => item.slug === slug) || null;
  return sanityFetch<CmsNews | null>(newsBySlugQuery, { slug }, fallback);
}

export async function getDoctors() {
  return sanityFetch<CmsDoctorProfile[]>(doctorsQuery, {}, fallbackDoctors);
}

export async function getDoctorBySlug(slug: string) {
  const fallback = fallbackDoctors.find((doctor) => doctor.slug === slug) || null;
  return sanityFetch<CmsDoctorProfile | null>(doctorBySlugQuery, { slug }, fallback);
}

export async function getCmsServices() {
  const fallback = services.map<CmsNamedItem>((item) => ({
    name: item.title,
    description: item.text,
    isFeatured: true,
  }));
  return sanityFetch<CmsNamedItem[]>(servicesQuery, {}, fallback);
}

export async function getCmsSpecialties() {
  const fallback = specialties.map<CmsNamedItem>((name) => ({ name, isFeatured: true }));
  return sanityFetch<CmsNamedItem[]>(specialtiesQuery, {}, fallback);
}

export async function getCmsFaqs() {
  const fallback = faqs.map<CmsFaq>((faq, order) => ({ ...faq, order }));
  return sanityFetch<CmsFaq[]>(faqsQuery, {}, fallback);
}

export async function getCmsTestimonials() {
  const fallback = testimonials.map<CmsTestimonial>((testimonial) => ({
    ...testimonial,
    isFeatured: true,
  }));
  return sanityFetch<CmsTestimonial[]>(testimonialsQuery, {}, fallback);
}

export async function getCmsPartners() {
  return sanityFetch<CmsPartner[]>(partnersQuery, {}, []);
}

export async function getHomepageBanner() {
  return sanityFetch<CmsHomepageBanner | null>(homepageBannerQuery, {}, null);
}

export async function getSiteSettings() {
  return sanityFetch<CmsSiteSettings | null>(siteSettingsQuery, {}, null);
}
