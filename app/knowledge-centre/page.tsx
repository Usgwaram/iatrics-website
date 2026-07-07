import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { getArticles } from "@/lib/sanity/data";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Knowledge Centre",
  description: "Read Iatrics health articles, medical education resources and digital healthcare insights.",
  path: "/knowledge-centre",
});

export default async function KnowledgeCentrePage() {
  const articles = await getArticles();

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_55%,#e9fbfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="section-shell max-w-5xl">
          <p className="eyebrow">Knowledge Centre</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal text-brand-navy sm:text-6xl">Health articles and education</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            Evidence-minded resources for patients, providers and healthcare organizations across Nigeria.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="card flex h-full flex-col p-6">
              <BookOpen className="text-brand-blue" size={26} aria-hidden="true" />
              <p className="mt-5 text-sm font-semibold text-brand-teal">{article.category || "Health education"}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-brand-navy">{article.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{article.excerpt}</p>
              <Link href={`/knowledge-centre/${article.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand-blue">
                Read article
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
