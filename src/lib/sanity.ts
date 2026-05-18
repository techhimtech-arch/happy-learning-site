import { createClient } from "@sanity/client";

// In Vite, we try to get VITE_ variables first. 
// If they are missing (e.g. deployed without env vars), we fallback to the known project ID.
// We also check for process.env.SANITY_STUDIO_PROJECT_ID which might be injected.
const getProjectId = () => {
  if (typeof process !== "undefined" && process.env?.SANITY_STUDIO_PROJECT_ID) {
    return process.env.SANITY_STUDIO_PROJECT_ID;
  }
  return import.meta.env.VITE_SANITY_PROJECT_ID ?? "k2tkye84";
};

const getDataset = () => {
  if (typeof process !== "undefined" && process.env?.SANITY_STUDIO_DATASET) {
    return process.env.SANITY_STUDIO_DATASET;
  }
  return import.meta.env.VITE_SANITY_DATASET ?? "production";
};

const projectId = getProjectId();
const dataset = getDataset();
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION ?? "2025-05-08";

export const isSanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId: projectId || "k2tkye84", // Ensure it's never an empty string
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
