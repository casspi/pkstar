import { baseURL } from './curl/config'
import { curl } from './curl'
import { uploadFile, fileToBase64 } from '@pkstar/horn-jssdk'
import { withLoading } from '@/utils'
import { blobToBase64, formatDate } from '@pkstar/utils'

// 下载
export const doFileDownload = (data: { filePath: string }) => curl(`common/upload/download`, data)

// 上传
export const doFileUpload = async (data: { file: File }, source: 'attend' | string) => {
  // 文件转blob
  const arrayBuffer = await data.file.arrayBuffer()
  const blob = new Blob([arrayBuffer], { type: data.file.type })
  const base64Str = (await blobToBase64(blob)) as string
  console.log(base64Str)
  // 去除base64Str前缀
  const base64StrWithoutPrefix = base64Str.replace(/^data:image\/\w+;base64,/, '')
  const filename = `${formatDate(Date.now(), 'yyyyMMddhh')}${source}99.jpg`
  const content = [
    {
      filename,
      data: base64StrWithoutPrefix,
      source,
    },
  ]
  console.log('content', content)
  return curl(
    `/user/upload.json`,
    {
      content,
    },
    { method: 'POST' },
  ).then((res) => {
    return res[0]
  })
}
// 利用原生容器去上传
export const doFileUploadWithSdk = withLoading((filePath: string) => {
  return new Promise((resolve, reject) => {
    uploadFile({
      url: baseURL + `/user/upload.json`,
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
