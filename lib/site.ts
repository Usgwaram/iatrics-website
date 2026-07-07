import type { Metadata } from "next";

export const siteConfig = {
  name: "Iatrics",
  domain: "iatrics.ng",
  url: "https://iatrics.ng",
  tagline: "Healthcare Without Borders",
  email: "info@iatrics.ng",
  supportEmail: "support@iatrics.ng",
  providersEmail: "providers@iatrics.ng",
  phone: "+234 800 IATRICS",
  whatsapp: "+234 800 IATRICS",
  website: "www.iatrics.ng",
  headOffice: "Abuja, Federal Capital Territory, Nigeria",
  address: "Abuja, Federal Capital Territory, Nigeria",
  serviceAreaStatement:
    "Serving patients and healthcare professionals across Nigeria.",
  serviceAreaShort: "Serving Nigeria nationwide.",
  description:
    "Iatrics is a Nigerian digital healthcare ecosystem headquartered in Abuja, serving patients and healthcare professionals across Nigeria through secure telemedicine, specialist consultations, digital health services and medical education.",
};

export const defaultKeywords = [
  "Iatrics",
  "telemedicine Nigeria",
  "digital healthcare Nigeria",
  "online doctors",
  "secure video consultation",
  "specialist consultation",
  "medical education",
  "electronic prescriptions",
];

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle =
    title === siteConfig.name ? `${siteConfig.name} | ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    keywords: defaultKeywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_NG",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const healthcareOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthcareOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.ico`,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Head Office",
    addressLocality: "Abuja",
    addressRegion: "Federal Capital Territory",
    addressCountry: "NG",
  },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  medicalSpecialty: [
    "PrimaryCare",
    "InternalMedicine",
    "Pediatrics",
    "Cardiovascular",
    "Psychiatric",
  ],
  sameAs: [
    "https://www.linkedin.com/company/iatrics",
    "https://twitter.com/iatricsng",
    "https://www.instagram.com/iatricsng",
  ],
};
