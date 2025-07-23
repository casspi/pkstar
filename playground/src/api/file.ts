import { baseURL } from './curl/config'
import { curl } from './curl'
import { uploadFile } from '@pkstar/horn-jssdk'
import { withLoading } from '@/utils'

// 下载
export const doFileDownload = (data: { filePath: string }) => curl(`common/upload/download`, data)

// 上传
export const doFileUpload = (data: { file: File }) => {
  const fd = new FormData()
  Object.entries(data).forEach(([key, item]) => {
    fd.append(key, item as any)
  })
  return curl(`common/upload/upload`, fd, { method: 'POST' })
}
// 利用原生容器去上传
export const doFileUploadWithSdk = withLoading((filePath: string) => {
  return new Promise((resolve, reject) => {
    uploadFile({
      url: baseURL + `common/upload/upload`,
      header: {},
      formData: {},
      filePath,
      name: 'file',
    })
      .then((res) => {
        if (res.status === 0) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
      .catch((_) => {
        reject(_)
      })
  })
})
