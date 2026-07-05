import type { LucideIcon } from "lucide-react";
import { MotionReveal } from "./MotionReveal";

export type IconGridItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export function IconGrid({
  items,
  columns = "four",
}: {
  items: IconGridItem[];
  columns?: "three" | "four";
}) {
  const gridClass = columns === "three" ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${gridClass}`}>
      {items.map(({ title, text, icon: Icon }, index) => (
        <MotionReveal key={title} delay={index * 0.035}>
          <article className="card h-full p-6 transition hover:-translate-y-1 hover:shadow-soft">
            <span className="flex size-12 items-center justify-center rounded-lg bg-brand-ice text-brand-blue">
              <Icon size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-brand-navy">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
          </article>
        </MotionReveal>
      ))}
    </div>
  );
}
