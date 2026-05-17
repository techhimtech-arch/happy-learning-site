import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? "k2tkye84";
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";
export default defineConfig({
  name: "default",
  title: "Bright Path Education CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
