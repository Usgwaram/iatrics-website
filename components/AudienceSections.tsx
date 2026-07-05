import { CheckCircle2, UserRound, UsersRound } from "lucide-react";

const patientBenefits = [
  "Consult from home",
  "Book appointments easily",
  "Access doctors across specialties",
  "Upload investigation results",
  "Receive prescriptions digitally",
  "Get follow-up care",
  "Use secure payments",
];

const doctorBenefits = [
  "Create a verified provider profile",
  "Set availability",
  "Accept booked or instant consultations",
  "Manage patient interactions",
  "Receive consultation earnings",
  "Offer follow-up care",
  "Grow a trusted digital practice",
];

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 shrink-0 text-brand-teal"
            size={20}
            aria-hidden="true"
          />
          <span className="text-sm leading-6 text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function AudienceSections() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <article id="patients" className="rounded-lg bg-brand-navy p-6 text-white sm:p-8">
          <span className="flex size-12 items-center justify-center rounded-lg bg-white/10 text-brand-cyan">
            <UserRound size={26} aria-hidden="true" />
          </span>
          <p className="eyebrow mt-5 text-brand-cyan">For patients</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            Quality care, closer to you.
          </h2>
          <p className="mt-5 text-base leading-8 text-blue-50">
            With Iatrics, patients can avoid unnecessary travel, reduce waiting
            time, and access qualified doctors from wherever they are.
          </p>
          <BenefitList items={patientBenefits} />
          <a
            href="#beta"
            className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-white"
          >
            Join as an Early Patient
          </a>
        </article>

        <article
          id="doctors"
          className="rounded-lg border border-blue-100 bg-brand-ice p-6 sm:p-8"
        >
          <span className="flex size-12 items-center justify-center rounded-lg bg-white text-brand-blue">
            <UsersRound size={26} aria-hidden="true" />
          </span>
          <p className="eyebrow mt-5">For doctors</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">
            Expand your practice beyond your clinic.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Iatrics helps doctors deliver care digitally while maintaining
            professional standards, flexible scheduling, and secure payment
            workflows.
          </p>
          <BenefitList items={doctorBenefits} />
          <a
            href="#beta"
            className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
          >
            Apply as a Provider
          </a>
        </article>
      </div>
    </section>
  );
}
