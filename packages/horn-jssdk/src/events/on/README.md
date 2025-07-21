
## `jssdk.on`

> `jssdk.on(Object object)`
<br/>
> 版本无要求

### 功能描述

消息事件监听。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| name | string |  | 是 | 事件名称 |
| key | string |  | 是 | 事件回调标识 |
| success | Function |  | 否 | 事件回调函数 |
| fail | Function |  | 否 | 调用失败的回调函数 |

### 示例代码

```js
jssdk.on({
    name: 'hello',
    key: '1',
    success: (res) => {
        console.log(res)
    }
})
```


