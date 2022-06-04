import { InjectionKey } from 'vue'
import { CdnUrl } from '@apility/netflex-cdn-url'

export const cdnUrlInjectionKey: InjectionKey<CdnUrl> = Symbol('cdnUrlInjection')
