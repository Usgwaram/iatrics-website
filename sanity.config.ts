import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "iatrics",
  title: "Iatrics CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "seqxp0ah",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [visionTool()],
  schema: {
    types: schemaTypes,
  },
});
