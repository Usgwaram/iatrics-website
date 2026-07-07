import { groq } from "next-sanity";

const imageProjection = `"featuredImageUrl": featuredImage.asset->url`;
const profileImageProjection = `"profileImageUrl": profileImage.asset->url`;
const logoProjection = `"logoUrl": logo.asset->url`;

export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    category,
    author,
    featuredImage,
    ${imageProjection},
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    body,
    category,
    author,
    featuredImage,
    ${imageProjection},
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const newsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    ${imageProjection},
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const newsBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    body,
    featuredImage,
    ${imageProjection},
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const doctorsQuery = groq`
  *[_type == "doctorProfile"] | order(isFeatured desc, fullName asc) {
    fullName,
    "slug": slug.current,
    specialty,
    qualifications,
    yearsOfExperience,
    languages,
    profileImage,
    ${profileImageProjection},
    consultationTypes,
    isFeatured
  }
`;

export const doctorBySlugQuery = groq`
  *[_type == "doctorProfile" && slug.current == $slug][0] {
    fullName,
    "slug": slug.current,
    specialty,
    qualifications,
    yearsOfExperience,
    languages,
    bio,
    profileImage,
    ${profileImageProjection},
    consultationTypes,
    isFeatured
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(isFeatured desc, name asc) {
    name,
    "slug": slug.current,
    description,
    icon,
    isFeatured
  }
`;

export const specialtiesQuery = groq`
  *[_type == "specialty"] | order(isFeatured desc, name asc) {
    name,
    "slug": slug.current,
    description,
    icon,
    isFeatured
  }
`;

export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc, question asc) {
    question,
    answer,
    category,
    order
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(isFeatured desc, name asc) {
    name,
    role,
    quote,
    image,
    "imageUrl": image.asset->url,
    isFeatured
  }
`;

export const partnersQuery = groq`
  *[_type == "partner"] | order(name asc) {
    name,
    logo,
    ${logoProjection},
    website,
    category
  }
`;

export const homepageBannerQuery = groq`
  *[_type == "homepageBanner" && isActive == true] | order(_updatedAt desc)[0] {
    headline,
    subheadline,
    primaryButtonText,
    primaryButtonUrl,
    secondaryButtonText,
    secondaryButtonUrl,
    isActive
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    headOffice,
    serviceArea,
    email,
    supportEmail,
    providerEmail,
    phone,
    whatsapp,
    facebook,
    instagram,
    xTwitter,
    linkedin,
    youtube,
    tiktok
  }
`;
