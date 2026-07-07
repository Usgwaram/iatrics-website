import { defineField, defineType } from "sanity";

export const doctorProfile = defineType({
  name: "doctorProfile",
  title: "Doctor Profile",
  type: "document",
  fields: [
    defineField({ name: "fullName", title: "Full Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "fullName", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "specialty", title: "Specialty", type: "string" }),
    defineField({ name: "qualifications", title: "Qualifications", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "yearsOfExperience", title: "Years of Experience", type: "number" }),
    defineField({ name: "languages", title: "Languages", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "profileImage", title: "Profile Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "consultationTypes", title: "Consultation Types", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "isFeatured", title: "Featured", type: "boolean", initialValue: false }),
  ],
});
