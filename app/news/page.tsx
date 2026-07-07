import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { getNewsItems } from "@/lib/sanity/data";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "News",
  description: "Read Iatrics news, launch updates, announcements, press releases and event information.",
  path: "/news",
});

export default async function NewsPage() {
  const newsItems = await getNewsItems();

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_55%,#e9fbfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="section-shell max-w-5xl">
          <p className="eyebrow">Newsroom</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal text-brand-navy sm:text-6xl">Latest Iatrics news</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            Announcements, launch updates, press releases and events from the Iatrics team.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.slug} className="card flex h-full flex-col p-6">
              <Newspaper className="text-brand-blue" size={26} aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold tracking-normal text-brand-navy">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.excerpt}</p>
              <Link href={`/news/${item.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand-blue">
                Read update
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
