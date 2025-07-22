## `jssdk.downloadFile`

> `jssdk.downloadFile(Object object)` <br/> 版本无要求

### 功能描述

下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| url | String |  | 是 | 下载资源的 url |
| filePath | String |  | 否 | 指定文件下载后存储的路径 (本地路径) |
| header | Object |  | 否 | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 |
| timeout | number |  | 否 | 超时时间，单位为毫秒 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

|    属性    |  类型  |        说明         | 最低版本 |
| :--------: | :----: | :-----------------: | :------: |
|  filePath  | String | 文件路径 (本地路径) |          |
| statusCode | number |     HTTP 状态码     |          |

#### `object.fail` 回调函数

|  属性  |  类型  |   说明   |        最低版本        |
| :----: | :----: | :------: | :--------------------: |
| errMsg | String | 错误信息 |                        |
| errno  | Number |  错误码  | **错误码详情设计待定** |

### 示例代码

```js
jssdk
  .uploadFile({
    url: 'https://www.baidu.com/1.png',
  })
  .then((res) => {
    // 成功
    console.log(res.filePath)
  })
  .catch((err) => {
    // 错误
  })
```
