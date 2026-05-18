import { defineField, defineType } from "sanity";

export const downloadableFile = defineType({
  name: "downloadableFile",
  title: "Downloadable PDF / Documents",
  type: "document",
  fields: [
    defineField({ 
      name: "title", 
      title: "Document Name", 
      type: "string", 
      description: "Example: 'Fee Structure 2026' or 'Holiday List'" 
    }),
    defineField({ 
      name: "file", 
      title: "Upload File", 
      type: "file",
      options: { accept: ".pdf,.doc,.docx" }
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Syllabus", "Fee Structure", "Holiday List", "Other"]
      }
    })
  ],
});
