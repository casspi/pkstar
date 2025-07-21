import { canIUse } from '../canIUse'

/**
 * 容器插件准备完毕之后通知 `h5`。
 */
export const bootstrap = (callback: () => void) => {
  canIUse() ? window.document.addEventListener('deviceready', callback, false) : callback()
}
