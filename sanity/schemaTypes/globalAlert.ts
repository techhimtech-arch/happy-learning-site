import { defineField, defineType } from "sanity";

export const globalAlert = defineType({
  name: "globalAlert",
  title: "Global Alert Banner",
  type: "document",
  fields: [
    defineField({ 
      name: "isActive", 
      title: "Banner On/Off", 
      type: "boolean", 
      description: "Toggle this to show or hide the alert banner on the website.",
      initialValue: false
    }),
    defineField({ 
      name: "message", 
      title: "Alert Message", 
      type: "string",
      description: "Example: 'Admissions Open for 2026-2027! Apply Now'"
    }),
    defineField({ 
      name: "link", 
      title: "Action Link (Optional)", 
      type: "url",
      description: "Where should the user go when they click the banner?"
    }),
  ],
});
