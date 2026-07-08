import type { StructureResolver } from "sanity/structure";

const contentTypes = [
  { id: "article", title: "Articles" },
  { id: "news", title: "News" },
  { id: "faq", title: "FAQs" },
  { id: "doctorProfile", title: "Doctor Profiles" },
  { id: "specialty", title: "Specialties" },
  { id: "service", title: "Services" },
  { id: "testimonial", title: "Testimonials" },
  { id: "partner", title: "Partners" },
  { id: "homepageBanner", title: "Homepage Banners" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Iatrics Content")
    .items([
      ...contentTypes.map(({ id, title }) =>
        S.documentTypeListItem(id).title(title),
      ),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings"),
        ),
    ]);
