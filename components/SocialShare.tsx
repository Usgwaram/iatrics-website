import { AtSign, Mail, Send, Share2 } from "lucide-react";

export function SocialShare({ title, url }: { title: string; url: string }) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const links = [
    { label: "Share on X", href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, icon: AtSign },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, icon: Share2 },
    { label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, icon: Send },
    { label: "Share by email", href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`, icon: Mail },
  ];

  return (
    <div className="flex flex-wrap gap-3" aria-label="Social sharing">
      {links.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="focus-ring inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-ice">
          <Icon size={16} aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
}
