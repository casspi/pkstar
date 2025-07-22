
## `jssdk.vibrateShort`

> `jssdk.vibrateShort(Object object)`
<br/>
> 版本无要求

### 功能描述

使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效 。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| type | String |  | 是 | 震动强度类型，有效值为：`heavy`、`medium`、`light` |

### 示例代码

```js
jssdk.vibrateShort({
    type: 'heavy',
})
```