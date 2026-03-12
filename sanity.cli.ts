import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 't6u9lw9u',
    dataset: 'production'
  },
  deployment: {
    appId: 'p9tctk4sm8bwo6y28bvskdm9',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: false,
  }
})
