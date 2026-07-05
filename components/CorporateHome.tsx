import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { AnimatedHeroVisual } from "./AnimatedHeroVisual";
import { FAQAccordion } from "./FAQAccordion";
import { IconGrid } from "./IconGrid";
import { LeadForm } from "./LeadForm";
import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";
import {
  doctorBenefits,
  institutionSegments,
  newsroomItems,
  patientBenefits,
  researchItems,
  services,
  specialties,
  testimonials,
  trustItems,
  values,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
          {item}
        </span>
      ))}
    </div>
  );
}

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 shrink-0 text-brand-teal" size={20} aria-hidden="true" />
          <span className="text-sm leading-6 text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CorporateHome() {
  return (
    <>
      <section id="top" className="overflow-hidden bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_48%,#e9fbfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <MotionReveal>
            <p className="eyebrow">Iatrics digital healthcare ecosystem</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-normal text-brand-navy sm:text-6xl lg:text-7xl">
              Healthcare Without Borders
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Connecting patients with licensed healthcare professionals through secure digital consultations.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Iatrics connects patients, doctors, hospitals and healthcare organizations through telemedicine, specialist consultations, digital health services and medical education.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#beta" className="primary-button gap-2">
                <Download size={18} aria-hidden="true" />
                Download App
              </Link>
              <Link href="#beta" className="secondary-button">Join Waiting List</Link>
              <Link href="/for-doctors" className="secondary-button">Become a Provider</Link>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <AnimatedHeroVisual />
          </MotionReveal>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white py-8">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ title, text, icon: Icon }) => (
            <article key={title} className="flex gap-4 rounded-lg p-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-ice text-brand-blue">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-brand-navy">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About Iatrics"
            title="A trusted digital front door for Nigerian healthcare."
            text="Iatrics is designed to make healthcare access simpler, safer and more connected for patients, providers and institutions."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: "Mission", body: "Make trusted healthcare more accessible through secure digital consultations, specialist access and continuity tools." },
              { title: "Vision", body: "A Nigeria where quality healthcare access is not limited by distance, waiting rooms or fragmented systems." },
              { title: "Why Iatrics", body: "The platform brings patients, providers, records, prescriptions, referrals and education into one healthcare ecosystem." },
              { title: "Core Values", body: values.join(", ") },
            ].map((item) => (
              <MotionReveal key={item.title}>
                <article className="card h-full p-6">
                  <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Services" title="Digital health services built for real clinical workflows." />
          <div className="mt-10">
            <IconGrid items={services} />
          </div>
        </div>
      </section>

      <section id="specialties" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Specialties"
            title="Specialist access across primary, medical, surgical and wellness needs."
            text="Iatrics is preparing a broad provider network across high-demand specialties for Nigerian patients and families."
            align="center"
          />
          <div className="mt-10">
            <PillList items={specialties} />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-brand-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brand-cyan">How It Works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Two journeys. One secure care ecosystem.</h2>
          </div>
          <div className="grid gap-5">
            {[
              { title: "Patient Journey", steps: ["Create a profile", "Choose a service", "Consult securely", "Continue care with prescriptions, advice or referral"] },
              { title: "Provider Journey", steps: ["Apply for verification", "Build a provider profile", "Set availability", "Manage consultations, records and earnings"] },
            ].map((journey) => (
              <article key={journey.title} className="rounded-lg bg-white/10 p-6">
                <h3 className="text-xl font-semibold">{journey.title}</h3>
                <ol className="mt-5 grid gap-3">
                  {journey.steps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-6 text-blue-50">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-cyan text-xs font-bold text-brand-navy">{index + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="patients-doctors" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <article className="rounded-lg bg-brand-ice p-6 sm:p-8">
            <p className="eyebrow">For Patients</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">Quality care, closer to you.</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">Avoid unnecessary travel, reduce waiting time and access qualified doctors from wherever you are.</p>
            <BenefitList items={patientBenefits} />
            <Link href="#beta" className="primary-button mt-8">Join Waiting List</Link>
          </article>
          <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-soft sm:p-8">
            <p className="eyebrow">For Doctors</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">Expand your practice beyond your clinic.</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">Use a verified provider profile, structured consultations and a dashboard built for responsible digital practice.</p>
            <BenefitList items={doctorBenefits} />
            <div className="mt-8 rounded-lg bg-brand-navy p-5 text-white">
              <p className="font-semibold">Provider Dashboard preview</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">Manage availability, consultations, patient context, prescriptions, follow-up and earnings from one professional workspace.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="institutions" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Healthcare Institutions" title="Partner infrastructure for the wider health ecosystem." />
          <div className="mt-10">
            <IconGrid items={institutionSegments} columns="three" />
          </div>
        </div>
      </section>

      <section id="research" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Research & Innovation" title="Knowledge, education and responsible digital health innovation." />
          <div className="mt-10">
            <IconGrid items={researchItems} columns="three" />
          </div>
        </div>
      </section>

      <section id="newsroom" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Newsroom" title="Latest news, announcements, press releases and events." />
          <div className="mt-10">
            <IconGrid items={newsroomItems} columns="four" />
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Testimonials" title="Built with patients, doctors and partners in mind." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card p-6">
                <p className="text-base leading-8 text-slate-700">“{item.quote}”</p>
                <p className="mt-6 font-semibold text-brand-navy">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beta" className="bg-brand-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-brand-cyan">Beta Programme</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Join the Iatrics beta programme.</h2>
            <p className="mt-5 text-base leading-8 text-blue-50">Patients can join the waiting list, doctors can begin registration interest, and healthcare organizations can request partnership access.</p>
            <div id="future-auth" className="mt-8 rounded-lg bg-white/10 p-5">
              <p className="font-semibold">Future authentication prepared</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">Patient Login, Doctor Login and Admin Portal links are reserved for future account access.</p>
            </div>
          </div>
          <LeadForm title="Join beta, register as a doctor, or request access" source="beta-programme" />
        </div>
      </section>

      <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions before launch." />
          <FAQAccordion />
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Talk to Iatrics." text="Contact us for patient support, provider onboarding, institutional partnerships, media or beta access." />
            <div className="mt-8 grid gap-4">
              {[
                { label: "Email", value: siteConfig.email, icon: Mail },
                { label: "WhatsApp", value: siteConfig.whatsapp, icon: MessageCircle },
                { label: "Phone", value: siteConfig.phone, icon: Phone },
                { label: "Location", value: siteConfig.address, icon: MapPin },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <Icon size={20} className="text-brand-blue" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">{label}</p>
                    <p className="text-sm text-slate-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-blue-100 bg-white p-5">
              <p className="font-semibold text-brand-navy">Google Map</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Map embed placeholder for the future Iatrics office or support location in Lagos, Nigeria.</p>
            </div>
          </div>
          <LeadForm title="Contact form" source="contact-form" />
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-cyan">Healthcare Without Borders</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl">Build the future of Nigerian digital healthcare with Iatrics.</h2>
          </div>
          <Link href="#beta" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-white">
            Request Early Access
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="sr-only" aria-label="Security and medical disclaimer">
        <h2>Security and Medical Disclaimer</h2>
        <p>Iatrics is not a replacement for emergency medical care. Patients with severe symptoms should seek immediate hospital care.</p>
        <ShieldCheck aria-hidden="true" />
      </section>
    </>
  );
}
