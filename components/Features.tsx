import {
  Banknote,
  CalendarCheck,
  FileUp,
  LayoutDashboard,
  Pill,
  Sparkles,
  Stethoscope,
  Video,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Video Consultations",
    text: "Speak with doctors securely from your phone.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    text: "Choose convenient consultation times.",
  },
  {
    icon: Sparkles,
    title: "Instant Consultation",
    text: "Access care quickly when available.",
  },
  {
    icon: Stethoscope,
    title: "Specialist Access",
    text: "Connect with doctors across different specialties.",
  },
  {
    icon: FileUp,
    title: "Upload Results",
    text: "Share lab results, images, and reports before consultation.",
  },
  {
    icon: Pill,
    title: "E-Prescriptions",
    text: "Receive digital prescriptions after clinical review.",
  },
  {
    icon: Banknote,
    title: "Secure Payments",
    text: "Pay safely through integrated payment channels.",
  },
  {
    icon: LayoutDashboard,
    title: "Provider Dashboard",
    text: "Doctors manage availability, consultations, and earnings.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Core features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">
            Everything needed for secure digital care.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-brand-ice text-brand-blue">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
