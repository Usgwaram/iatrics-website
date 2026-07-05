import { AlertTriangle, LockKeyhole, ShieldCheck } from "lucide-react";

export function Security() {
  return (
    <section id="security" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Security and disclaimer</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">
            Built for privacy, trust, and responsible care.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Iatrics is designed to support confidential healthcare interactions.
            Medical information is handled with respect for privacy, security,
            and professional standards.
          </p>
        </div>
        <div className="grid gap-5">
          <article className="rounded-lg border border-blue-100 bg-brand-ice p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue">
                <ShieldCheck size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">
                  Secure consultations
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Designed for private digital healthcare interactions with
                  structured clinical workflows.
                </p>
              </div>
            </div>
          </article>
          <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-brand-teal">
                <LockKeyhole size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">
                  Confidential by design
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Patient information, documents, and consultation history are
                  treated with care from the start.
                </p>
              </div>
            </div>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-amber-700">
                <AlertTriangle size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-amber-950">
                  Medical disclaimer
                </h3>
                <p className="mt-2 text-sm leading-6 text-amber-950/80">
                  Iatrics is not a replacement for emergency medical care.
                  Patients with severe symptoms, trauma, breathing difficulty,
                  chest pain, stroke symptoms, heavy bleeding, loss of
                  consciousness, or other emergencies should seek immediate
                  hospital care.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
