
## `jssdk.compressFile`

> `jssdk.compressFile(Object object)`
<br/>
> 版本无要求

### 功能描述

压缩文件，生成一个临时压缩文件zip包。支持多文件压缩。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| filePaths | Array |  | 是 | 本地文件路径 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| filePath | String | 生产的zip包，本地文件路径 |  |

### 示例代码

```js
jssdk.compressFile({
    files: [
        '/1.png',
        '/2.png',
        //...
    ]
}).then(res => {
    // 成功
    console.log(res.filePath)
}).catch(err => {
    // 错误
})
```