export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-07";
export const sanityReadToken = process.env.SANITY_API_READ_TOKEN;

export const isSanityConfigured = Boolean(sanityProjectId && sanityDataset);

// Add these values in Vercel Project Settings -> Environment Variables:
// NEXT_PUBLIC_SANITY_PROJECT_ID=<your Sanity project id>
// NEXT_PUBLIC_SANITY_DATASET=production
// NEXT_PUBLIC_SANITY_API_VERSION=2026-07-07
// SANITY_API_READ_TOKEN=<optional read token for private datasets or draft access>
