
## `jssdk.scanCode`

> `jssdk.scanCode(Object object)`
<br/>
> 版本无要求

### 功能描述

扫描二维码。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| title | String |  | 否 | 扫码页面标题 |
| onlyFromCamera | Boolean | false  | 否 | 是否只能从相机扫码，不允许从相册选择图片 |
| flashlight | Boolean | true  | 否 | 是否开启手电筒 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| url | String | 二维码地址 |  |

### 示例代码

```js
jssdk.scanCode({
    success (res) {
        console.log(res)
    }
})
```
