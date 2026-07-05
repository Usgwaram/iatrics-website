export type SitePage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  summary: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export const sitePages: SitePage[] = [
  {
    slug: "about",
    title: "About",
    eyebrow: "About Iatrics",
    description: "Learn about Iatrics, its mission, vision, values and commitment to responsible digital healthcare in Nigeria.",
    summary: "Iatrics is building a trusted digital healthcare ecosystem for patients, providers and institutions across Nigeria.",
    sections: [
      { title: "Mission", body: "To make trusted healthcare more accessible by connecting patients with verified professionals through secure digital consultations, education and continuity-of-care tools." },
      { title: "Vision", body: "A Nigeria where high-quality healthcare access is not limited by distance, queues or fragmented systems." },
      { title: "Why Iatrics", body: "Iatrics combines telemedicine, specialist access, medical records, prescriptions, provider tools and health education into one credible healthcare technology platform." },
    ],
  },
  {
    slug: "services",
    title: "Services",
    eyebrow: "Digital health services",
    description: "Explore Iatrics services including video consultations, instant care, appointments, second opinions, prescriptions and referrals.",
    summary: "Iatrics offers patient-facing and provider-facing digital health services designed for secure, convenient and responsible care.",
    sections: [
      { title: "Virtual care", body: "Patients can book or request consultations, share relevant information and connect with healthcare professionals through secure digital workflows." },
      { title: "Continuity of care", body: "Digital prescriptions, result upload, medical records and referral support help care continue beyond a single consultation." },
      { title: "Provider enablement", body: "Doctors and healthcare organizations can use Iatrics to manage availability, consultations, patient communication and digital growth." },
    ],
  },
  {
    slug: "specialties",
    title: "Specialties",
    eyebrow: "Clinical access",
    description: "Iatrics is preparing specialty access across general practice, internal medicine, surgery, paediatrics, mental health and more.",
    summary: "The platform is being designed to support access to a wide range of medical and surgical specialties.",
    sections: [
      { title: "Primary care", body: "General practice and family-focused care will help patients get timely guidance for common health concerns." },
      { title: "Specialist pathways", body: "Specialist consultations and second opinions will support patients who need deeper clinical review." },
      { title: "Responsible referral", body: "When physical examination, procedures or emergency care are needed, patients should be directed to appropriate health facilities." },
    ],
  },
  {
    slug: "for-patients",
    title: "For Patients",
    eyebrow: "Patient care",
    description: "Discover how Iatrics helps patients access doctors, appointments, prescriptions, results upload and follow-up care.",
    summary: "Iatrics helps patients reduce unnecessary travel, avoid avoidable queues and access trusted care more conveniently.",
    sections: [
      { title: "Convenient access", body: "Patients can consult from home, work or while travelling, depending on clinical suitability." },
      { title: "Better preparation", body: "Upload results and describe symptoms before consultation so providers have useful context." },
      { title: "Follow-up support", body: "Digital care pathways help patients receive advice, prescriptions, referrals and follow-up when appropriate." },
    ],
  },
  {
    slug: "for-doctors",
    title: "For Doctors",
    eyebrow: "Provider growth",
    description: "Doctors can apply to join Iatrics, build verified profiles and manage secure digital consultations.",
    summary: "Iatrics gives doctors a professional platform to extend care beyond the physical clinic.",
    sections: [
      { title: "Verified presence", body: "Create a trusted provider profile that reflects your qualifications, specialty and availability." },
      { title: "Digital practice tools", body: "Manage consultations, communication, scheduling and earnings through a structured provider dashboard." },
      { title: "Professional standards", body: "The platform is designed to support responsible digital care, documentation and follow-up." },
    ],
  },
  {
    slug: "partners",
    title: "Partners",
    eyebrow: "Healthcare ecosystem",
    description: "Partner with Iatrics across hospitals, diagnostics, corporate health, insurance, NGOs and government health programmes.",
    summary: "Iatrics works with healthcare institutions and ecosystem partners to expand access and improve care journeys.",
    sections: [
      { title: "Institutional access", body: "Hospitals and diagnostic centres can use digital workflows to support patient triage, results review and follow-up." },
      { title: "Population health", body: "Corporate health teams, insurers, NGOs and agencies can create scalable health access and education programmes." },
      { title: "Partner integrations", body: "Future integrations can connect Iatrics with backend systems, payment providers, communication tools and analytics." },
    ],
  },
  {
    slug: "knowledge-centre",
    title: "Knowledge Centre",
    eyebrow: "Health education",
    description: "Read medical articles, clinical guides, health education resources and digital healthcare insights from Iatrics.",
    summary: "The Iatrics Knowledge Centre will support patients, providers and organizations with credible health education.",
    sections: [
      { title: "Medical articles", body: "Patient-friendly articles will explain common symptoms, conditions, prevention and care pathways." },
      { title: "Clinical resources", body: "Provider-oriented materials will support digital health practice, clinical standards and workflow education." },
      { title: "Webinars", body: "Iatrics will host practical learning sessions for healthcare professionals and the public." },
    ],
  },
  {
    slug: "news",
    title: "News",
    eyebrow: "Newsroom",
    description: "Find Iatrics announcements, launch updates, press releases and event information.",
    summary: "The newsroom keeps patients, providers and partners informed as Iatrics prepares for launch.",
    sections: [
      { title: "Announcements", body: "Follow product milestones, beta access updates and provider onboarding notices." },
      { title: "Press", body: "Official press releases and media resources will be published as the platform grows." },
      { title: "Events", body: "Iatrics will share webinars, partner sessions and community health education activities." },
    ],
  },
  {
    slug: "careers",
    title: "Careers",
    eyebrow: "Build with us",
    description: "Explore future career opportunities at Iatrics across healthcare, technology, operations and partnerships.",
    summary: "Iatrics is building a mission-driven team for healthcare access, technology and ecosystem partnerships.",
    sections: [
      { title: "What we value", body: "We value competence, trust, patient dignity, clinical responsibility and thoughtful product execution." },
      { title: "Future roles", body: "Opportunities may include engineering, product, clinical operations, provider success, partnerships and support." },
      { title: "Get in touch", body: "Interested candidates can contact Iatrics and join the talent interest list before formal hiring begins." },
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    eyebrow: "Contact Iatrics",
    description: "Contact Iatrics for patient support, provider onboarding, partnerships, media or general enquiries.",
    summary: "Reach the Iatrics team for early access, provider onboarding, institutional partnerships or support.",
    sections: [
      { title: "General enquiries", body: "Email info@iatrics.ng for company, media and partnership conversations." },
      { title: "Patient and provider support", body: "Use support@iatrics.ng for support and providers@iatrics.ng for onboarding interest." },
      { title: "Response expectations", body: "Iatrics is preparing for launch, so response times may vary during beta onboarding." },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Privacy",
    description: "Read the Iatrics privacy policy overview for personal data, health information and digital care workflows.",
    summary: "Iatrics is designed to respect privacy and protect sensitive healthcare interactions.",
    sections: [
      { title: "Data responsibility", body: "Iatrics will collect only information needed to deliver services, manage accounts, support care and improve platform safety." },
      { title: "Health information", body: "Medical records, results and consultation information require careful handling, access controls and confidentiality." },
      { title: "Future updates", body: "This policy page should be reviewed by legal counsel before public launch and updated as product features mature." },
    ],
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    eyebrow: "Terms",
    description: "Read the Iatrics terms of service overview for patients, providers and healthcare organizations.",
    summary: "The Iatrics terms define responsible use of the digital healthcare platform.",
    sections: [
      { title: "Platform use", body: "Users must provide accurate information and use Iatrics for appropriate non-emergency healthcare interactions." },
      { title: "Provider responsibilities", body: "Providers remain responsible for professional standards, clinical judgment, documentation and regulatory compliance." },
      { title: "Legal review", body: "This page is production-structured but should receive legal review before launch." },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    eyebrow: "Cookies",
    description: "Read how Iatrics plans to use essential, analytics and product improvement cookies.",
    summary: "Iatrics will use cookies responsibly to support secure sessions, product analytics and service improvement.",
    sections: [
      { title: "Essential cookies", body: "Essential cookies may be used for security, session continuity and basic website functionality." },
      { title: "Analytics cookies", body: "Analytics tools may help Iatrics understand site performance, onboarding interest and product usability." },
      { title: "Consent and updates", body: "Cookie controls and legal review should be finalized before public launch." },
    ],
  },
  {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    eyebrow: "Responsible care",
    description: "Iatrics is not a replacement for emergency care. Read the medical disclaimer for digital consultations.",
    summary: "Iatrics supports convenient consultation and follow-up care, but it does not replace emergency or facility-based care.",
    sections: [
      { title: "Emergency care", body: "Patients with severe symptoms, trauma, breathing difficulty, chest pain, stroke symptoms, heavy bleeding, loss of consciousness or other emergencies should seek immediate hospital care." },
      { title: "Clinical limitations", body: "Some conditions require physical examination, procedures, imaging, laboratory testing or in-person specialist review." },
      { title: "Professional judgment", body: "Digital consultations should support, not replace, responsible clinical judgment and appropriate referral." },
    ],
  },
  {
    slug: "help-centre",
    title: "Help Centre",
    eyebrow: "Support",
    description: "Find help for Iatrics patients, doctors, organizations, account access and beta onboarding.",
    summary: "The Help Centre will guide patients, providers and partners through onboarding and platform use.",
    sections: [
      { title: "Patients", body: "Learn how to join the waiting list, prepare for consultation and upload relevant information." },
      { title: "Doctors", body: "Find guidance on provider registration, verification and dashboard workflows." },
      { title: "Organizations", body: "Request support for partnerships, institutional onboarding and integration planning." },
    ],
  },
  {
    slug: "frequently-asked-questions",
    title: "Frequently Asked Questions",
    eyebrow: "FAQ",
    description: "Answers to common questions about Iatrics, beta access, provider registration, privacy and emergency care.",
    summary: "Find answers to common Iatrics questions before launch.",
    sections: [
      { title: "Beta access", body: "Patients, doctors and organizations can join the beta programme for launch updates." },
      { title: "Privacy", body: "The platform is designed around secure and confidential digital healthcare workflows." },
      { title: "Emergency limitations", body: "Iatrics does not replace emergency hospital care or in-person procedures." },
    ],
  },
];

export function getPageBySlug(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}
