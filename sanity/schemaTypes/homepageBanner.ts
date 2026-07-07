import { defineField, defineType } from "sanity";

export const homepageBanner = defineType({
  name: "homepageBanner",
  title: "Homepage Banner",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 3 }),
    defineField({ name: "primaryButtonText", title: "Primary Button Text", type: "string" }),
    defineField({ name: "primaryButtonUrl", title: "Primary Button URL", type: "string" }),
    defineField({ name: "secondaryButtonText", title: "Secondary Button Text", type: "string" }),
    defineField({ name: "secondaryButtonUrl", title: "Secondary Button URL", type: "string" }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: false }),
  ],
});
