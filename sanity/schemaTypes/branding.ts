import { defineField, defineType } from "sanity";

export const branding = defineType({
  name: "branding",
  title: "Branding",
  type: "document",
  fields: [
    defineField({ name: "brandName", title: "Brand Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
  ],
});
