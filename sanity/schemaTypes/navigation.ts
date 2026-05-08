import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [defineField({ name: "label", type: "string" }), defineField({ name: "href", type: "string" })],
        },
      ],
    }),
    defineField({ name: "ctaLabel", type: "string" }),
    defineField({ name: "ctaHref", type: "string" }),
  ],
});
