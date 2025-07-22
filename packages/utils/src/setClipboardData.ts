import { isBrowser } from './isBrowser'

/**
 * 复制到剪切板
 */
export const setClipboardData = isBrowser
  ? (function () {
      if (navigator.clipboard) {
        return (text: string) => navigator.clipboard.writeText(text)
      } else {
        return (text: string) => {
          const input = document.createElement('input')
          input.value = text
          document.body.appendChild(input)
          input.select()
          document.execCommand('Copy')
          document.body.removeChild(input)
        }
      }
    })()
  : () => {}
