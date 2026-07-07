import { notFound } from "next/navigation";
import { PortableContent } from "@/components/PortableContent";
import { SocialShare } from "@/components/SocialShare";
import { getArticleBySlug, getArticles } from "@/lib/sanity/data";
import { createMetadata, siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return createMetadata({ title: "Article", path: `/knowledge-centre/${slug}` });
  }

  return createMetadata({
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt || siteConfig.description,
    path: `/knowledge-centre/${slug}`,
    image: article.featuredImageUrl,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const url = `${siteConfig.url}/knowledge-centre/${article.slug}`;

  return (
    <article>
      <section className="bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_55%,#e9fbfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="section-shell max-w-4xl">
          <p className="eyebrow">{article.category || "Knowledge Centre"}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-brand-navy sm:text-6xl">{article.title}</h1>
          {article.excerpt ? <p className="mt-6 text-lg leading-8 text-slate-700">{article.excerpt}</p> : null}
          <div className="mt-8">
            <SocialShare title={article.title} url={url} />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell max-w-4xl">
          <PortableContent value={article.body} />
        </div>
      </section>
    </article>
  );
}
