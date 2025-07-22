import { callSync } from '../../core'

export interface NavigateToWebviewOptions {
  url: string
}

export const navigateToWebview = (options: NavigateToWebviewOptions) =>
  callSync<void>({
    ...options,
    service: 'basics',
    action: 'navigateToWebview',
  })
