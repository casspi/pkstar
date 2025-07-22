/**
 * 是否能够使用 HornApi
 */
export const canIUse = () => {
  return window.navigator.userAgent.includes('HornApp')
}
