import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { isSanityConfigured, sanityApiVersion, sanityDataset, sanityProjectId, sanityReadToken } from "./env";

const fallbackProjectId = "replace-with-project-id";

export const sanityClient = createClient({
  projectId: sanityProjectId || fallbackProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: !sanityReadToken,
  token: sanityReadToken,
});

const builder = createImageUrlBuilder({
  projectId: sanityProjectId || fallbackProjectId,
  dataset: sanityDataset,
});

export function urlForImage(source: unknown) {
  if (!isSanityConfigured || !source) {
    return null;
  }

  return builder.image(source);
}

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}, fallback: T): Promise<T> {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    const data = await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });

    return data ?? fallback;
  } catch {
    return fallback;
  }
}
