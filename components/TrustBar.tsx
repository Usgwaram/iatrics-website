import { Home, MapPinned, ShieldCheck, UserCheck } from "lucide-react";

const trustPoints = [
  {
    icon: Home,
    title: "Accessible care",
    text: "Connect from home, work, or while travelling.",
  },
  {
    icon: UserCheck,
    title: "Licensed providers",
    text: "Built for verified healthcare professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Secure consultations",
    text: "Designed with privacy and confidentiality in mind.",
  },
  {
    icon: MapPinned,
    title: "Made for Nigeria",
    text: "Created for the realities of Nigerian healthcare access.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-blue-100 bg-white py-8">
      <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4 rounded-lg p-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-ice text-brand-blue">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-sm font-semibold text-brand-navy">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
