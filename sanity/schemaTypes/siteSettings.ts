import { defineField, defineType } from "sanity";

const textArray = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [{ type: "object", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "desc", type: "text" })] }],
  });

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "object",
      fields: [
        defineField({ name: "brandName", type: "string" }),
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
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "subtitle", type: "string" }),
        defineField({ name: "primaryCtaLabel", type: "string" }),
        defineField({ name: "primaryCtaHref", type: "string" }),
        defineField({ name: "secondaryCtaLabel", type: "string" }),
        defineField({ name: "secondaryCtaHref", type: "string" }),
        defineField({ name: "backgroundImageUrl", type: "url" }),
        defineField({
          name: "stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [defineField({ name: "value", type: "string" }), defineField({ name: "label", type: "string" })],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text" }),
        textArray("highlights", "Highlights"),
      ],
    }),
    defineField({
      name: "programs",
      title: "Programs",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text" }),
        textArray("items", "Items"),
      ],
    }),
    defineField({
      name: "facilities",
      title: "Facilities",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        textArray("items", "Items"),
      ],
    }),
    defineField({
      name: "admission",
      title: "Admission",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "badge", type: "string" }),
        defineField({
          name: "steps",
          type: "array",
          of: [
            {
              type: "object",
              fields: [defineField({ name: "step", type: "string" }), defineField({ name: "title", type: "string" }), defineField({ name: "desc", type: "text" })],
            },
          ],
        }),
        defineField({ name: "formTitle", type: "string" }),
        defineField({ name: "submitLabel", type: "string" }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "images",
          type: "array",
          of: [
            {
              type: "object",
              fields: [defineField({ name: "src", type: "url" }), defineField({ name: "alt", type: "string" })],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "name", type: "string" }),
                defineField({ name: "role", type: "string" }),
                defineField({ name: "text", type: "text" }),
                defineField({ name: "rating", type: "number" }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        textArray("items", "Items"),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "details",
          type: "array",
          of: [
            {
              type: "object",
              fields: [defineField({ name: "title", type: "string" }), defineField({ name: "text", type: "string" })],
            },
          ],
        }),
        defineField({ name: "mapEmbedUrl", type: "url" }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [defineField({ name: "q", type: "string" }), defineField({ name: "a", type: "text" })],
            },
          ],
        }),
        defineField({
          name: "whyChooseUs",
          title: "Why Choose Us",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string" }),
            defineField({ name: "title", type: "string" }),
            defineField({
              name: "items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [defineField({ name: "title", type: "string" }), defineField({ name: "desc", type: "text" })],
                },
              ],
            }),
          ],
        }),
        defineField({
          name: "footer",
          title: "Footer",
          type: "object",
          fields: [
            defineField({ name: "brandName", type: "string" }),
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
            defineField({
              name: "programs",
              type: "array",
              of: [{ type: "string" }],
            }),
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
        }),
        defineField({
          name: "floatingButtons",
          title: "Floating Buttons",
          type: "object",
          fields: [
            defineField({ name: "phoneNumber", type: "string" }),
            defineField({ name: "whatsappNumber", type: "string" }),
            defineField({ name: "whatsappMessage", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});
