/**
 * 更具文件地址，返回文件类型
 */
export function getFileType(fileUrl: string) {
  const fileExt = new URL(fileUrl).pathname.split('.').pop()
  return fileExt
}
