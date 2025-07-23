import { insertScript } from '@pkstar/utils'

export const appendBmap = async () => {
  const bmpAk = 'CNX7X1fVOrSAODNDCAeMiWTkZjeruZK8'
  if (typeof (window as any).BMap !== 'undefined') {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    ;(window as any).onBMapCallback = function () {
      console.log('bmap 成功')
      resolve((window as any).BMap)
    }
    insertScript(`https://api.map.baidu.com/api?v=3.0&ak=${bmpAk}&callback=onBMapCallback`).catch(
      () => {
        reject('百度地图引入失败')
      },
    )
  })
}
