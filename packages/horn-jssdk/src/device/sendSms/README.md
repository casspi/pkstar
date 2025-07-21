
## `jssdk.sendSms`

> `jssdk.sendSms(Object object)`
<br/>
> 版本无要求

### 功能描述

拉起手机发送短信界面。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| phoneNumber | String |  | 是 | 预填到发送短信面板的手机号 |
| content | String |  | 是 | 预填到发送短信面板的内容 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

### 示例代码

```js
jssdk.sendSms({
    phoneNumber: '13111111111',
    content: 'xxxxx',
})
```
