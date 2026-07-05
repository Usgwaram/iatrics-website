"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const mainLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Specialties", href: "/specialties" },
  { label: "Patients", href: "/for-patients" },
  { label: "Doctors", href: "/for-doctors" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: "/knowledge-centre" },
  { label: "Contact", href: "/contact" },
];

const actionLinks = [
  { label: "Download App", href: "/#beta" },
  { label: "Book Consultation", href: "/#beta" },
  { label: "Become a Doctor", href: "/for-doctors" },
];

const portalLinks = [
  { label: "Patient Login", href: "/#future-auth" },
  { label: "Doctor Login", href: "/#future-auth" },
  { label: "Admin Portal", href: "/#future-auth" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-full" aria-label="Iatrics home">
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand-navy text-base font-bold text-white">I</span>
          <span className="text-xl font-bold text-brand-navy">Iatrics</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {mainLinks.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-full text-sm font-medium text-slate-700 transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/#beta" className="secondary-button px-4 py-2.5">Download App</Link>
          <Link href="/#beta" className="primary-button px-4 py-2.5">Book Consultation</Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-blue-100 text-brand-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div id="mobile-navigation" className="border-t border-blue-100 bg-white px-4 py-4 shadow-soft xl:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {[...mainLinks, ...actionLinks, ...portalLinks].map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-ice hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
