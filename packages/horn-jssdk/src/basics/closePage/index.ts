import { callSync } from '../../core'

export const closePage = () =>
  callSync<void>({
    service: 'basics',
    action: 'closePage',
  })
