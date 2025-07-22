## `jssdk.licenseOCR`

> `jssdk.licenseOCR(Object object)` <br/> 版本无要求

### 功能描述

行驶证识别

```
{
    service: 'ztSDK',
    action: 'licenseOCR',
}
```

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| filePath | String |  | 否 | 图片路径，支持本地图/网络图 |
| current | 'licenseScan' 、 'licenseCapture' 、 'vinScan' |  | 否 | 打开相机的类型 |
| actions | ('licenseScan' 、 'licenseCapture' 、 'vinScan')[] |  | 否 | 相机类型功能 |
| album | Boolean | 否 | 是否支持本地相册选取 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

|   属性   |       类型        |       说明       | 最低版本 |
| :------: | :---------------: | :--------------: | :------: |
| content  | String 、String[] | 识别获取到的内容 |          |
| filePath |      String       |  识别的图片路径  |          |

#### `object.fail` 回调函数

|  属性  |  类型  |   说明   |        最低版本        |
| :----: | :----: | :------: | :--------------------: |
| errMsg | String | 错误信息 |                        |
| errno  | Number |  错误码  | **错误码详情设计待定** |

### 示例代码

```js
jssdk
  .licenseOCR()
  .then((res) => {
    // 成功
    console.log(res.content)
    console.log(res.filePath)
  })
  .catch((err) => {
    // 错误
  })
```
