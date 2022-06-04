import { App } from 'vue'
import { CdnUrl } from '@apility/netflex-cdn-url'
import { cdnUrlInjectionKey } from './injectionKey'

export const netflexCdnUrlPlugin = (
  app: App,
  { cdnUrl }: { cdnUrl: CdnUrl },
) => {
  app.provide(cdnUrlInjectionKey, cdnUrl)
}
