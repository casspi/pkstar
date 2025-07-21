import { callSync } from '../../core'

export interface NavigateToOptions {
  url: string
}

export const navigateTo = (options: NavigateToOptions) =>
  callSync<void>({
    ...options,
    service: 'basics',
    action: 'navigateTo',
  })
