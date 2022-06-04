import { inject } from 'vue'
import { cdnUrlInjectionKey } from './injectionKey'

export const useCdnUrl = () => {
  const cdnUrlInjection = inject(cdnUrlInjectionKey)

  if (cdnUrlInjection === undefined) {
    throw new Error('Cdn url injection was not provided')
  }

  return cdnUrlInjection
}
