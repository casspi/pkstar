## `jssdk.uploadFile`

> `jssdk.uploadFile(Object object)` <br/> 版本无要求

### 功能描述

将本地资源上传到服务器。客户端发起一个 `HTTPS POST` 请求，其中 `content-type` 为 `multipart/form-data`。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| url | String |  | 是 | 开发者服务器地址 |
| filePath | String |  | 是 | 要上传文件资源的路径 (本地路径) |
| name | String |  | 是 | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 |
| header | Object |  | 否 | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 |
| formData | Object |  | 否 | HTTP 请求中其他额外的 form data |
| timeout | number |  | 否 | 超时时间，单位为毫秒 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 |           类型            |       说明       | 最低版本 |
| :--: | :-----------------------: | :--------------: | :------: |
| data | String/Object/Arraybuffer | 服务器返回的数据 |          |

#### `object.fail` 回调函数

|  属性  |  类型  |   说明   |        最低版本        |
| :----: | :----: | :------: | :--------------------: |
| errMsg | String | 错误信息 |                        |
| errno  | Number |  错误码  | **错误码详情设计待定** |

### 示例代码

```js
jssdk
  .uploadFile({
    url: 'https://ip:prot/upload',
    filePath: '/1.png',
    name: 'file',
  })
  .then((res) => {
    // 成功
  })
  .catch((err) => {
    // 错误
  })
```
