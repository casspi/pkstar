## `jssdk.fileToBase64`

> `jssdk.fileToBase64(Object object)`
<br/>
> 版本无要求

### 功能描述

文件转base64。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| filePath | String |  | 是 | 文件路径 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| base64 | String | base64数据 |  |

### 示例代码

```js
jssdk.fileToBase64({
    filePath: '/1.png'
}).then(res => {
    // 成功
    console.log(res)
}).catch(err => {
    // 错误
})
```