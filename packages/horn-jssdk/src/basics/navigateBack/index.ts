import { callSync } from '../../core'

export interface NavigateBackOptions {
  delta: number
}

export const navigateBack = (options?: NavigateBackOptions) =>
  callSync<void>({
    delta: 1,
    ...options,
    service: 'basics',
    action: 'navigateBack',
  })
