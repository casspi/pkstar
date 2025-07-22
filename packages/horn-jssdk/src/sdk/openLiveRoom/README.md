
## `jssdk.openLiveRoom`

> `jssdk.openLiveRoom(Object object)`
<br/>
> 版本无要求

### 功能描述

打开直播室。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| id | String |  | 是 | - |
| vehicleQuantity | Number |  | 是 | - |
| subTitle | String |  | 是 | - |
| pushUrl | String |  | 是 | - |
| pullUrl | String |  | 是 | - |
| roomId | String |  | 是 | - |
| userId | String |  | 是 | - |
| userName | String |  | 是 | - |
| accelerateUrl | String |  | 是 | - |
| city | String |  | 是 | - |
| startTime | String |  | 是 | - |
| name | String |  | 是 | - |
| anchorPermisson | String |  | 是 | - |
| status | String |  | Number | - |
| org.id | String |  | 是 | - |
| org.name | String |  | 是 | - |

### 示例代码

```js
jssdk.openLiveRoom({
  // ...
  userId: 'xxxx',
  userName: 'xxxx',
  name: 'xxxx',
  anchorPermisson: 'xxxx',
  org: {
    id: '1',
    name: '1',
  },
})
```
