## `jssdk.base64ToFile`

> `jssdk.base64ToFile(Object object)`
<br/>
> 版本无要求

### 功能描述

base64转文件。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| base64 | String |  | 是 | base64数据 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| filePath | String | 文件路径 |  |

### 示例代码

```js
jssdk.base64ToFile({
    base64: 'base64数据'
}).then(res => {
    // 成功
    console.log(res)
}).catch(err => {
    // 错误
})
```