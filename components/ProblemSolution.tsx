import { ArrowRight, HeartPulse } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <article id="problem" className="rounded-lg bg-brand-ice p-6 sm:p-8">
          <p className="eyebrow">The problem</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">
            Healthcare access should not depend on distance, waiting rooms, or
            location.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Across Nigeria, many patients face long hospital queues, travel
            costs, delayed specialist access, and difficulty following up after
            treatment. Doctors also need better digital tools to extend care
            beyond the physical clinic.
          </p>
          <p className="mt-5 text-base font-semibold text-brand-blue">
            Iatrics is being built to close that gap.
          </p>
        </article>

        <article
          id="solution"
          className="rounded-lg border border-blue-100 bg-white p-6 shadow-soft sm:p-8"
        >
          <span className="flex size-12 items-center justify-center rounded-lg bg-teal-50 text-brand-teal">
            <HeartPulse size={26} aria-hidden="true" />
          </span>
          <p className="eyebrow mt-5">The solution</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">
            A digital front door to trusted healthcare.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Iatrics helps patients consult doctors, book appointments, upload
            medical results, receive prescriptions, and access follow-up care
            from a secure mobile platform.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-lg bg-brand-navy p-5 text-white">
            <ArrowRight className="mt-1 shrink-0 text-brand-cyan" size={20} />
            <p className="text-sm leading-6 text-blue-50">
              For doctors, Iatrics provides a structured platform to manage
              consultations, availability, patient communication, and digital
              earnings.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
