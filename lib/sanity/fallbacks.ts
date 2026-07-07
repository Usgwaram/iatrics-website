import type { CmsArticle, CmsDoctorProfile, CmsNews } from "./types";

export const fallbackArticles: CmsArticle[] = [
  {
    title: "Preparing for a Digital Doctor Consultation",
    slug: "preparing-for-digital-doctor-consultation",
    excerpt:
      "How patients can get the most from a secure virtual consultation by preparing symptoms, medications and investigation results.",
    category: "Patient education",
    author: "Iatrics Clinical Team",
    publishedAt: "2026-07-07",
    seoDescription:
      "Practical guidance for preparing for a telemedicine consultation with Iatrics.",
  },
  {
    title: "Why Follow-up Care Matters",
    slug: "why-follow-up-care-matters",
    excerpt:
      "Follow-up care helps patients clarify next steps, review treatment progress and know when in-person care is needed.",
    category: "Continuity of care",
    author: "Iatrics Clinical Team",
    publishedAt: "2026-07-07",
  },
];

export const fallbackNews: CmsNews[] = [
  {
    title: "Iatrics Beta Programme Opens for Early Interest",
    slug: "iatrics-beta-programme-opens",
    excerpt:
      "Patients, doctors and healthcare organizations can register interest as Iatrics prepares its Nigerian digital healthcare ecosystem.",
    publishedAt: "2026-07-07",
    seoDescription:
      "Iatrics opens beta interest for patients, doctors and healthcare organizations across Nigeria.",
  },
];

export const fallbackDoctors: CmsDoctorProfile[] = [
  {
    fullName: "Iatrics Provider Network",
    slug: "iatrics-provider-network",
    specialty: "Verified healthcare professionals",
    qualifications: ["Licensed medical professionals", "Provider verification pending launch"],
    yearsOfExperience: undefined,
    languages: ["English"],
    consultationTypes: ["Video consultation", "Follow-up care", "Specialist referral"],
    isFeatured: true,
  },
];
