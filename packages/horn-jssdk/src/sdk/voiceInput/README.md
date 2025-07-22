## `jssdk.voiceInput`

> `jssdk.voiceInput(Object object)` <br/> 版本无要求

### 功能描述

语音识别

```js
{
    service: 'xfSDK',
    action: 'voiceInput',
}
```

### 参数

#### `Object object`

|  属性   |   类型   | 默认值 | 必填 |          说明          |
| :-----: | :------: | :----: | :--: | :--------------------: |
| success | Function |        |  否  | 接口调用成功的回调函数 |
|  fail   | Function |        |  否  | 接口调用失败的回调函数 |

#### `object.success` 回调函数

|  属性   |  类型  |       说明       | 最低版本 |
| :-----: | :----: | :--------------: | :------: |
| content | String | 识别获取到的内容 |          |

#### `object.fail` 回调函数

|  属性  |  类型  |   说明   |        最低版本        |
| :----: | :----: | :------: | :--------------------: |
| errMsg | String | 错误信息 |                        |
| errno  | Number |  错误码  | **错误码详情设计待定** |

### 示例代码

```js
jssdk
  .voiceInput()
  .then((res) => {
    // 成功
    console.log(res.content)
  })
  .catch((err) => {
    // 错误
  })
```
