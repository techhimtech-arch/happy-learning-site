import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'k2tkye84',
    dataset: 'production',
  },
  studioHost: 'myschool',
})