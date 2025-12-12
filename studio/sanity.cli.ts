import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2e51pi9t',
    dataset: 'production'
  },
  
  // studioHost inakaa HAPA (Nje ya deployment)
  studioHost: 'ujenzi-tips-admin',

  deployment: {
    autoUpdates: true,
    appId: 'wkpcuhwd5sjgstnokr4vac4s'
  }
})