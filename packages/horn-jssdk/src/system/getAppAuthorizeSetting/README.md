## `jssdk.getAppAuthorizeSetting`

> `jssdk.getAppAuthorizeSetting(Object object)`
<br/>
> 版本无要求

### 功能描述

获取 APP 授权设置。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| albumAuthorized | `authorized`/`denied`/`not determined` | 允许使用相册的开关 |  |
| cameraAuthorized | `authorized`/`denied`/`not determined` | 允许使用摄像头的开关 |  |
| locationAuthorized | `authorized`/`denied`/`not determined` | 允许使用定位的开关 |  |
| microphoneAuthorized | `authorized`/`denied`/`not determined` | 允许使用麦克风的开关 |  |
| notificationAuthorized | `authorized`/`denied`/`not determined` | 允许使用通知的开关 |  |
| phoneCalendarAuthorized | `authorized`/`denied`/`not determined` | 允许使用读写日历的开关 |  |

**说明：**

- `authorized` 表示已经获得授权，无需再次请求授权；
- `denied` 表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户打开系统设置，在设置页中打开权限）
- `non determined` 表示尚未请求授权，APP会在下一次调用系统相应权限时请求；

### 示例代码

```js
jssdk.getConfig({
    success (res) {
        console.log(res)
    }
})
```
