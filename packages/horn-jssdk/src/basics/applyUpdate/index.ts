import { callSync } from '../../core'

/**
 * 更新前端资源文件。
 */
export const applyUpdate = () =>
  callSync<void>({
    service: 'basics',
    action: 'applyUpdate',
  })
