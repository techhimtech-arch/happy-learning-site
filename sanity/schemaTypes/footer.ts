import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "quickLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [defineField({ name: "label", type: "string" }), defineField({ name: "href", type: "string" })],
        },
      ],
    }),
    defineField({ name: "programs", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "contactDetails",
      type: "array",
      of: [
        {
          type: "object",
          fields: [defineField({ name: "label", type: "string" }), defineField({ name: "text", type: "string" })],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [defineField({ name: "platform", type: "string" }), defineField({ name: "href", type: "url" })],
        },
      ],
    }),
    defineField({ name: "copyrightText", type: "string" }),
    defineField({ name: "poweredByText", type: "string" }),
    defineField({ name: "poweredByHref", type: "url" }),
  ],
});
