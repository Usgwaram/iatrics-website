import {
  CalendarCheck,
  CheckCircle2,
  Download,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden bg-[linear-gradient(135deg,#f6fcff_0%,#ffffff_45%,#e7f9fb_100%)] pt-14 sm:pt-18 lg:pt-24"
    >
      <div className="section-shell grid items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
        <div>
          <p className="eyebrow">Nigerian telemedicine platform</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-normal text-brand-navy sm:text-6xl lg:text-7xl">
            Healthcare Without Borders
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Consult licensed doctors securely from anywhere in Nigeria through
            video consultation, appointment booking, digital prescriptions, and
            specialist access.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#beta"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-navy"
            >
              Join the Waiting List
            </a>
            <a
              href="#doctors"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-teal hover:text-brand-blue"
            >
              Become a Provider
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-600">
            Iatrics is preparing to launch a trusted digital healthcare platform
            for patients, doctors, and healthcare providers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-slate-500"
            >
              <Download size={18} aria-hidden="true" />
              App Store Coming Soon
            </button>
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-slate-500"
            >
              <Download size={18} aria-hidden="true" />
              Google Play Coming Soon
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-soft">
            <div className="rounded-lg bg-brand-navy p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-cyan">Today</p>
                  <p className="text-xl font-semibold">Virtual clinic</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  Secure
                </span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-4 text-brand-ink">
                  <Video className="text-brand-teal" size={24} />
                  <p className="mt-4 text-sm font-semibold">
                    Video consultation
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Connect with licensed doctors from your phone.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 text-brand-ink">
                  <CalendarCheck className="text-brand-blue" size={24} />
                  <p className="mt-4 text-sm font-semibold">Appointments</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Pick a convenient consultation time.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-blue-100 bg-brand-ice p-5">
                <Stethoscope className="text-brand-blue" size={26} />
                <p className="mt-4 text-sm font-semibold text-brand-navy">
                  Specialist access
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Structured care across specialties, follow-up, and referrals.
                </p>
              </div>
              <div className="rounded-lg border border-blue-100 bg-white p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-brand-teal" size={28} />
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">
                      Privacy-first workflow
                    </p>
                    <p className="text-xs text-slate-500">
                      Built for confidential care.
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {["Upload results", "E-prescription", "Follow-up care"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2
                          className="text-brand-teal"
                          size={18}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
