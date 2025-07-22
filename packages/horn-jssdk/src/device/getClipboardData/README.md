
## `jssdk.getClipboardData`

> `jssdk.getClipboardData(Object object)`
<br/>
> 版本无要求

### 功能描述

获取系统剪贴板的内容。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| data | string | 剪贴板的内容 |  |

### 示例代码

```js
jssdk.getClipboardData().then(res => {
    const data = res.data
})
```