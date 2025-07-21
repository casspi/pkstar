
## `jssdk.removeFile`

> `jssdk.removeFile(Object object)`
<br/>
> 版本无要求

### 功能描述

删除本地文件。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| filePath | String |  | 是 | 本地文件路径 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

### 示例代码

```js
jssdk.removeFile({
    filePath: '/1.png'
})
```

