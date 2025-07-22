
## `jssdk.emit`

> `jssdk.emit(Object object)`
<br/>
> 版本无要求

### 功能描述

事件触发。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| name | string |  | 是 | 事件名称 |
| data | any |  | 否 | 回调数据 |

### 示例代码

```js
jssdk.emit({
    name: 'hello',
    data: '你好！'
})
```