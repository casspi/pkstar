
## `jssdk.clearFile`

> `jssdk.clearFile(Object object)`
<br/>
> 版本无要求

### 功能描述

根据文件夹来删除文件。`/` 删除全部文件 、`images/` 删除图片下文件

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| dir | String |  | 是 | 文件夹路径 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

### 示例代码

```js
jssdk.clearFile({
    dir: 'images/'
})
```
