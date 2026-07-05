"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Patients", href: "#patients" },
  { label: "Doctors", href: "#doctors" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
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

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full text-sm font-medium text-slate-700 transition hover:text-brand-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#beta"
            className="focus-ring rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy"
          >
            Join the Waiting List
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-blue-100 text-brand-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-blue-100 bg-white px-4 py-4 shadow-soft md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-ice hover:text-brand-blue"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#beta"
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Join the Waiting List
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
