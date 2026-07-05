import {
  Activity,
  BadgeCheck,
  BookOpen,
  BriefcaseMedical,
  Building2,
  CalendarCheck,
  ClipboardPlus,
  FileHeart,
  FileText,
  GraduationCap,
  HeartHandshake,
  Hospital,
  Landmark,
  Microscope,
  Newspaper,
  Pill,
  ShieldCheck,
  Stethoscope,
  Users,
  Video,
} from "lucide-react";

export const trustItems = [
  { title: "Verified Doctors", text: "Provider onboarding is designed around identity checks, clinical credentials and professional accountability.", icon: BadgeCheck },
  { title: "Secure Consultations", text: "Encrypted digital care workflows help protect sensitive patient conversations.", icon: ShieldCheck },
  { title: "Protected Medical Records", text: "Medical records, results and prescriptions are handled through privacy-minded product architecture.", icon: FileHeart },
  { title: "Made for Nigeria", text: "Built for Nigerian access realities, provider workflows, payment preferences and specialist scarcity.", icon: Landmark },
];

export const values = [
  "Clinical responsibility",
  "Patient dignity",
  "Trustworthy technology",
  "Access without geography",
  "Provider empowerment",
  "Continuous medical learning",
];

export const services = [
  { title: "Video Consultation", text: "Secure virtual consultations between patients and licensed healthcare professionals.", icon: Video },
  { title: "Instant Consultation", text: "Fast access to available providers for suitable non-emergency concerns.", icon: Activity },
  { title: "Appointment Booking", text: "Structured appointment scheduling for patients, doctors and healthcare teams.", icon: CalendarCheck },
  { title: "Second Opinion", text: "Specialist-backed review pathways for patients seeking additional clinical perspective.", icon: ClipboardPlus },
  { title: "Specialist Consultation", text: "Access to doctors across key medical and surgical specialties.", icon: Stethoscope },
  { title: "Electronic Prescriptions", text: "Digital prescriptions after appropriate clinical assessment and review.", icon: Pill },
  { title: "Medical Records", text: "Organized patient health information for continuity of care.", icon: FileHeart },
  { title: "Laboratory Result Upload", text: "Patients can share investigation results, images and reports before consultation.", icon: FileText },
  { title: "Referral Services", text: "Referral support for patients who need facility care, procedures or specialist follow-up.", icon: HeartHandshake },
  { title: "Provider Marketplace", text: "A trusted discovery layer for doctors, hospitals and health organizations.", icon: Building2 },
];

export const specialties = [
  "General Practice",
  "Internal Medicine",
  "General Surgery",
  "Paediatrics",
  "Obstetrics & Gynaecology",
  "Psychiatry",
  "Orthopaedics",
  "ENT",
  "Dermatology",
  "Cardiology",
  "Neurology",
  "Urology",
  "Ophthalmology",
  "Dentistry",
  "Mental Health",
  "Nutrition",
];

export const institutionSegments = [
  { title: "Hospitals", text: "Extend clinical reach, triage demand and support continuity after discharge.", icon: Hospital },
  { title: "Diagnostic Centres", text: "Support digital result sharing, interpretation workflows and patient follow-up.", icon: Microscope },
  { title: "Corporate Health", text: "Offer employees convenient access to doctors and preventive health education.", icon: BriefcaseMedical },
  { title: "Insurance Partners", text: "Design digital-first care journeys for members and partner provider networks.", icon: ShieldCheck },
  { title: "NGOs", text: "Improve care access and health education across underserved communities.", icon: Users },
  { title: "Government Agencies", text: "Support scalable digital public health access, education and referral pathways.", icon: Landmark },
];

export const researchItems = [
  { title: "Knowledge Hub", text: "Patient-friendly explainers and provider-focused digital health resources.", icon: BookOpen },
  { title: "Medical Articles", text: "Clear health education written with clinical responsibility.", icon: FileText },
  { title: "Research Publications", text: "A future home for digital health research, insights and outcomes reporting.", icon: Microscope },
  { title: "Clinical Guidelines", text: "Practical references to support quality and consistency in digital care.", icon: ClipboardPlus },
  { title: "Health Education", text: "Preventive health content designed for Nigerian families and communities.", icon: GraduationCap },
  { title: "Webinars", text: "Live learning sessions for patients, doctors and healthcare leaders.", icon: Video },
];

export const newsroomItems = [
  { title: "Latest News", text: "Company updates, product milestones and ecosystem developments.", icon: Newspaper },
  { title: "Announcements", text: "Launch updates, beta invitations and provider onboarding notices.", icon: BadgeCheck },
  { title: "Press Releases", text: "Official Iatrics communications for media and institutional partners.", icon: FileText },
  { title: "Events", text: "Webinars, health education sessions and partner engagements.", icon: CalendarCheck },
];

export const testimonials = [
  {
    quote:
      "Iatrics is being shaped around the realities patients face every day: queues, distance, uncertainty and the need for trusted follow-up.",
    name: "Early patient participant",
    role: "Beta interest group",
  },
  {
    quote:
      "The provider workflow is thoughtful: availability, patient context, documentation and payments all belong in one responsible system.",
    name: "Consultant physician",
    role: "Provider advisory circle",
  },
  {
    quote:
      "A credible digital health ecosystem can help institutions reach more people while preserving clinical standards.",
    name: "Healthcare operations lead",
    role: "Institutional partner",
  },
];

export const faqs = [
  {
    question: "Is Iatrics available now?",
    answer:
      "Iatrics is preparing for launch. Patients, doctors and organizations can join the beta programme to receive onboarding updates.",
  },
  {
    question: "Who can become a provider?",
    answer:
      "Licensed doctors and qualified healthcare professionals can apply. Provider onboarding will include verification, profile review and platform training.",
  },
  {
    question: "Can Iatrics handle emergencies?",
    answer:
      "No. Iatrics is not a replacement for emergency medical care. Severe symptoms, trauma, chest pain, breathing difficulty, stroke symptoms, heavy bleeding or loss of consciousness require immediate hospital care.",
  },
  {
    question: "Will consultations and records be private?",
    answer:
      "Iatrics is designed around secure consultations, confidential workflows and careful handling of medical information.",
  },
  {
    question: "Can hospitals and organizations partner with Iatrics?",
    answer:
      "Yes. Hospitals, diagnostic centres, insurers, corporate health teams, NGOs and public-sector organizations can contact Iatrics for partnership discussions.",
  },
  {
    question: "Will there be patient and doctor portals?",
    answer:
      "Yes. Navigation is prepared for future patient login, doctor login and admin portal access, although authentication is not active yet.",
  },
];

export const patientBenefits = [
  "Consult from home, work or while travelling",
  "Book appointments with qualified providers",
  "Access specialist care more easily",
  "Upload results before consultation",
  "Receive digital prescriptions where appropriate",
  "Continue care through follow-up pathways",
  "Use a platform built for privacy and trust",
];

export const doctorBenefits = [
  "Create a verified professional profile",
  "Set availability and consultation preferences",
  "Accept booked or instant consultations",
  "Manage patient interactions in one workflow",
  "Receive consultation earnings securely",
  "Offer follow-up care beyond the clinic",
  "Grow a trusted digital practice",
];
