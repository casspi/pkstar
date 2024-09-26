/**
 * 说明
 */
export async function getClipboardData() {
  try {
    return navigator.clipboard.readText()
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err)
  }
}
