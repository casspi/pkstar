## `jssdk.moveFile`

> `jssdk.moveFile(Object object)`
<br/>
> 版本无要求

### 功能描述

文件移动，可以从临时目录(temps)移动到其他目录。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| from | String |  | 是 | 需要移动的文件路径 |
| to | String |  | 是 | 移动到那个文件下 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| filePath | String | 移动之后返回的文件路径 |  |

### 示例代码

```js
jssdk.moveFile({
    from: 'http://localhost/temps/1.jpg',
    to: 'http://localhost/images/avatar/ha.jpg',
    base64: 'base64数据'
}).then(res => {
    // 成功
    console.log(res.filePath)
    // http://localhost/images/avatar/ha.jpg
}).catch(err => {
    // 错误
})
```
