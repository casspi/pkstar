
## `jssdk.getFileInfo`

> `jssdk.getFileInfo(Object object)`
<br/>
> 版本无要求

### 功能描述

获取文件详情信息。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| filePath | String |  | 是 | 本地文件路径 |
| fileType | `image`、 `video`、 `other` |  | 是 | 文件类型 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| filePath | String | 本地文件路径 |  |
| size | Number | 文件大小，单位B |  |
| width | Number | 文件宽度 |  |
| height | Number | 文件高度 |  |
| duration | Number | 视频长度，单位秒 |  |

### 示例代码

```js
jssdk.getFileInfo({
    filePath: '/1.png'
}).then(res => {
    // 成功
    console.log(res)
}).catch(err => {
    // 错误
})
```

