export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">{text}</p> : null}
    </div>
  );
}
