import { notFound } from "next/navigation";
import { PortableContent } from "@/components/PortableContent";
import { SocialShare } from "@/components/SocialShare";
import { getNewsBySlug, getNewsItems } from "@/lib/sanity/data";
import { createMetadata, siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  const newsItems = await getNewsItems();
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    return createMetadata({ title: "News", path: `/news/${slug}` });
  }

  return createMetadata({
    title: item.seoTitle || item.title,
    description: item.seoDescription || item.excerpt || siteConfig.description,
    path: `/news/${slug}`,
    image: item.featuredImageUrl,
  });
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  const url = `${siteConfig.url}/news/${item.slug}`;

  return (
    <article>
      <section className="bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_55%,#e9fbfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="section-shell max-w-4xl">
          <p className="eyebrow">Newsroom</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-brand-navy sm:text-6xl">{item.title}</h1>
          {item.excerpt ? <p className="mt-6 text-lg leading-8 text-slate-700">{item.excerpt}</p> : null}
          <div className="mt-8">
            <SocialShare title={item.title} url={url} />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell max-w-4xl">
          <PortableContent value={item.body} />
        </div>
      </section>
    </article>
  );
}
