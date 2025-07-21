
## `jssdk.setClipboardData`

> `jssdk.setClipboardData(Object object)`
<br/>
> 版本无要求

### 功能描述

设置系统剪贴板的内容。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| data | String |  | 是 | 剪贴板的内容 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

### 示例代码

```js
jssdk.setClipboardData({
    data: '123456'
})
```
