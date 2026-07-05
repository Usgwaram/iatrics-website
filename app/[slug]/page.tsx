import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/PageTemplate";
import { getPageBySlug, sitePages } from "@/lib/pages";
import { createMetadata } from "@/lib/site";

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return createMetadata({
      title: "Page Not Found",
      description: "The requested Iatrics page could not be found.",
      path: `/${slug}`,
    });
  }

  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
  });
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <PageTemplate page={page} />;
}
