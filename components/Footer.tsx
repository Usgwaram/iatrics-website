const links = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Medical Disclaimer", href: "#security" },
  { label: "Contact", href: "mailto:info@iatrics.ng" },
];

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-2 rounded-full"
            aria-label="Iatrics home"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-brand-navy text-base font-bold text-white">
              I
            </span>
            <span className="text-xl font-bold text-brand-navy">Iatrics</span>
          </a>
          <p className="mt-3 text-sm text-slate-600">
            Healthcare Without Borders
          </p>
          <p className="mt-1 text-sm text-slate-500">iatrics.ng</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring rounded-full text-sm font-medium text-slate-600 transition hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
