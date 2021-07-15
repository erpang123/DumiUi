## 倒计时按钮

```tsx
import React from 'react'
import { CountDown } from 'myDumiUi'

export default () => {
  const downProps = {
    onClick () {
      console.log(111)
    },
    disabled: false,
    startTime: 10
  }
  return (
    <CountDown {...downProps}/>
  )
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| startTime     | 倒计时的时间   | Number  |   —     |    60     |
| defaultText   | 按钮上的默认文案 | string | —     | 获取验证码   |
| unit    | 时间的单位  | string  | —     | s   |
| disabled     | 按钮是否可以点击   | Boolean    |   — |    false |
| onClick     | 点击按钮，开始倒计时后的回调函数   | Function    | — | —   |
