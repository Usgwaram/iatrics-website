import Link from "next/link";
import { AtSign, Globe2, MessageCircle, Share2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { getSiteSettings } from "@/lib/sanity/data";

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Healthcare",
    links: [
      { label: "Services", href: "/services" },
      { label: "Specialties", href: "/specialties" },
      { label: "For Patients", href: "/for-patients" },
      { label: "For Doctors", href: "/for-doctors" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Centre", href: "/knowledge-centre" },
      { label: "Help Centre", href: "/help-centre" },
      { label: "Frequently Asked Questions", href: "/frequently-asked-questions" },
      { label: "Support", href: "mailto:support@iatrics.ng" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Medical Disclaimer", href: "/medical-disclaimer" },
    ],
  },
];

export async function Footer() {
  const settings = await getSiteSettings();
  const footerContact = {
    headOffice: settings?.headOffice || siteConfig.headOffice,
    email: settings?.email || siteConfig.email,
    supportEmail: settings?.supportEmail || siteConfig.supportEmail,
    website: siteConfig.website,
    serviceArea: settings?.serviceArea || siteConfig.serviceAreaStatement,
  };
  const socialLinks = [
    { label: "LinkedIn", href: settings?.linkedin || "https://www.linkedin.com/company/iatrics", icon: Share2 },
    { label: "X", href: settings?.xTwitter || "https://twitter.com/iatricsng", icon: AtSign },
    { label: "Instagram", href: settings?.instagram || "https://www.instagram.com/iatricsng", icon: MessageCircle },
    { label: "Facebook", href: settings?.facebook || "https://www.facebook.com/iatricsng", icon: Globe2 },
  ];

  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="section-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr]">
          <div>
            <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-full" aria-label="Iatrics home">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand-navy text-base font-bold text-white">I</span>
              <span className="text-xl font-bold text-brand-navy">Iatrics</span>
            </Link>
            <p className="mt-2 text-sm font-semibold text-brand-teal">Healthcare Without Borders</p>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-600">
              <div>
                <p className="font-semibold text-brand-navy">Head Office</p>
                <p>{footerContact.headOffice}</p>
              </div>
              <div>
                <p className="font-semibold text-brand-navy">Email</p>
                <p>{footerContact.email}</p>
              </div>
              <div>
                <p className="font-semibold text-brand-navy">Support</p>
                <p>{footerContact.supportEmail}</p>
              </div>
              <div>
                <p className="font-semibold text-brand-navy">Website</p>
                <p>{footerContact.website}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-brand-navy">{footerContact.serviceArea}</p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} className="focus-ring flex size-10 items-center justify-center rounded-full border border-blue-100 text-brand-blue transition hover:bg-brand-ice">
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-sm font-semibold text-brand-navy">{group.title}</h2>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link key={link.label} href={link.href} className="focus-ring rounded-full text-sm text-slate-600 transition hover:text-brand-blue">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-blue-100 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Iatrics. Healthcare Without Borders.
        </div>
      </div>
    </footer>
  );
}
