import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { MotionReveal } from "./MotionReveal";
import type { SitePage } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

function ProfessionalContactBlock() {
  return (
    <section className="card p-6 sm:p-8" aria-labelledby="professional-contact-block">
      <h2 id="professional-contact-block" className="text-2xl font-semibold tracking-normal text-brand-navy">
        Iatrics
      </h2>
      <p className="mt-1 text-sm font-semibold text-brand-teal">Healthcare Without Borders</p>
      <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-700 sm:grid-cols-2">
        <div>
          <p className="font-semibold text-brand-navy">Head Office</p>
          <p>{siteConfig.headOffice}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-navy">Email</p>
          <p>{siteConfig.email}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-navy">Support</p>
          <p>{siteConfig.supportEmail}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-navy">Website</p>
          <p>{siteConfig.website}</p>
        </div>
      </div>
      <p className="mt-6 text-sm font-semibold text-brand-navy">{siteConfig.serviceAreaStatement}</p>
    </section>
  );
}

export function PageTemplate({ page }: { page: SitePage }) {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_55%,#e9fbfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="section-shell max-w-5xl">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal text-brand-navy sm:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">{page.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#beta" className="primary-button">Request Early Access</Link>
            <Link href="/contact" className="secondary-button">Contact Iatrics</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-5">
            {page.slug === "contact" ? <ProfessionalContactBlock /> : null}
            {page.sections.map((section, index) => (
              <MotionReveal key={section.title} delay={index * 0.05}>
                <article className="card p-6 sm:p-8">
                  <div className="flex gap-4">
                    <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-ice text-brand-teal">
                      <CheckCircle2 size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-normal text-brand-navy">{section.title}</h2>
                      <p className="mt-3 text-base leading-8 text-slate-700">{section.body}</p>
                    </div>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm title={`Contact Iatrics about ${page.title}`} source={`page-${page.slug}`} />
          </aside>
        </div>
      </section>

      <section className="bg-brand-navy py-14 text-white">
        <div className="section-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-cyan">Iatrics</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal">Healthcare Without Borders</h2>
          </div>
          <Link href="/#beta" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-white">
            Join the beta programme
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
