## `jssdk.getLocationByBMap`

> `jssdk.getLocationByBMap(Object object)` <br/> 版本无要求

### 功能描述

行驶证识别

```
{
    service: 'bmapSDK',
    action: 'getLocationByBMap',
}
```

### 参数

#### `Object object`

|  属性   |   类型   | 默认值 | 必填 |          说明          |
| :-----: | :------: | :----: | :--: | :--------------------: |
| success | Function |        |  否  | 接口调用成功的回调函数 |
|  fail   | Function |        |  否  | 接口调用失败的回调函数 |

#### `object.success` 回调函数

|     属性     |  类型  |                说明                 | 最低版本 |
| :----------: | :----: | :---------------------------------: | :------: |
|   address    | string |                地址                 |          |
|   country    | string |                国家                 |          |
| countryCode  | string |              国家编码               |          |
|   province   | string |                省份                 |          |
|     city     | string |                城市                 |          |
|   district   | string |                区域                 |          |
|    street    | string |                街道                 |          |
| streetNumber | string |              街道号码               |          |
|   cityCode   | string |              城市编码               |          |
|    adCode    | string |            行政区划编码             |          |
|   latitude   | number |  纬度，范围为 -90~90，负数表示南纬  |          |
|  longitude   | number | 经度，范围为 -180~180，负数表示西经 |          |

#### `object.fail` 回调函数

|  属性  |  类型  |   说明   |        最低版本        |
| :----: | :----: | :------: | :--------------------: |
| errMsg | String | 错误信息 |                        |
| errno  | Number |  错误码  | **错误码详情设计待定** |

### 示例代码

```js
jssdk
  .getLocationByBMap()
  .then((res) => {
    // 成功
    console.log(res.address)
  })
  .catch((err) => {
    // 错误
  })
```
