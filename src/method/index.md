## 通用函数

### 对象转字符串（使用&拼接）
```tsx
import React from 'react'
import { setObjToStr, formatTime } from 'myDumiUi'

export default () => {
  const str = setObjToStr({
    a: 11,b: 22
  })
  const nowT = formatTime(5600100, 'hh:mm:ss')
  return (
    <div>
      <p>setObjToStr({JSON.stringify({a: 11,b: 22})})的执行结果为：{str}</p>
      <p>formatTime(5600100, 'hh:mm:ss')的执行结果为: {nowT}</p>
    </div>
  )
}
```

### 函数介绍
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| setObjToStr   | 将对象转换成字符串，并用&拼接   | Function    |  -      | -     |
| formatTime   | 将时间戳转成指定格式的字符串，格式限定为(hh:mm:ss:SSS中的其中几种)   | Function    |  -      | -     |

----

```tsx
import React, { useState, useEffect } from 'react'
import { useInterval, usePrevious } from 'myDumiUi'
import { Button } from 'antd'

export default () => {
  let [nowCount, setNowCount] = useState('获取验证码')
  
  useInterval(() => {
    if (nowCount === '获取验证码') {
      nowCount = 60
    } else {
      nowCount--
    }
    setNowCount(nowCount)
  }, nowCount === '获取验证码' || nowCount <= 0 ? null : 1000)
  // const count = usePrevious(111)
  // console.log(count)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNowCount(2222)
  //   }, 5000)
  // }, [])

  const codeMath = () => {
    if (nowCount === '获取验证码') {
      setNowCount(60)
    }
  }

  return (
    <div>
      <Button type="primary" disabled={nowCount !== '获取验证码'} onClick={codeMath}>{nowCount}</Button>
    </div>
  )
}
```

### 自定义hooks
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| useInterval | 周期执行指定函数(倒计时组件中使用) | Function |        |         |
| usePrevious | 生成不随组件渲染改变的值 | Function  |         |         |

