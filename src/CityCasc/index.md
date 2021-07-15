## 省份和城市选择器

```tsx
import React from 'react'
import { CityCasc } from 'myDumiUi'
import './index.less'

export default () => {
  const otherProps = {
    allowClear:  false,
    changeOnSelect: true,
    className: 'city-casc'
  }
  return (
    <CityCasc otherProps={otherProps}/>
  )
}
```

```tsx
import React, { useState, useEffect } from 'react'
import { Axios } from 'myDumiUi'
import './index.less'

export default () => {
  const [nowMon, setNowMon] = useState()
  const [nowYear, setNowYear] = useState()

  const headTs = ['日', '一', '二', '三', '四', '五', '六']

  // 刷新当月日历表
  const listDiv = () => {
    if (!nowMon) {
      return null
    }
    const nWeek = new Date(nowYear, nowMon - 1, 1).getDay() // 周几（0-6）,每月的第一天
    const lDate = new Date(nowYear, nowMon - 1, 0).getDate() // 上月的最后一天
    const allD = new Date(nowYear, nowMon, 0).getDate() // 一月总天数
    let fDate = nWeek === 0 ? 1 : lDate - nWeek + 1
    const lr = Math.ceil((allD - (7 - nWeek)) / 7) + 1
    let dom = []
    let fBool = nWeek === 0 ? false : true // 首次未达到上限
    let pCls = 'old-cls'
    for (let i = 0; i < lr; i++) {
      const nDom = <div className='box-auto'>
        {
          headTs.map(() => {
            let maxDate = lDate
            // 是否达到上月的上限，达到后修改为本月上限
            if (!fBool) {
              maxDate = allD
              pCls = ''
            }
            if (fDate > maxDate) {
              fDate = 1
              // 达到上月上限
              if (fBool) {
                fBool = false
                pCls = ''
              } else {
              // 达到本月上限
                fBool = true
                pCls = 'old-cls'
              }
            }
            return (
              <p className={pCls}>{fDate++}</p>
            )
          })
        }
      </div>
      dom.push(nDom)
    }
    return dom
  }

  // 上一个月
  const prevTime = () => {
    let nMon = nowMon - 1
    if (nMon <= 0) {
      nMon = 12
      const nYear = nowYear - 1
      setNowYear(nYear)
    }
    setNowMon(nMon)
  }

  // 下一个月
  const nextTime = () => {
    let nMon = nowMon + 1
    if (nMon > 12) {
      nMon = 1
      const nYear = nowYear + 1
      setNowYear(nYear)
    }
    setNowMon(nMon)
  }

  useEffect(() => {
    const nT = new Date()
    const nMon = nT.getMonth() + 1 // 月份
    const nYear = nT.getFullYear() // 年份
    setNowMon(nMon)
    setNowYear(nYear)

    // Axios({
    //   url: '/api/user',
    //   method: 'get'
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  }, [])

  return (
    <div>
      <div className='d-time'>
        <button onClick={prevTime}>prev</button>
        <p className='s-time'>{nowYear} 年 - {nowMon} 月</p>
        <button onClick={nextTime}>next</button>
      </div>
      <div>
        <div className='d-list'>
          <div className='box-auto'>
            {
              headTs.map((el: any) => {
                return (<p>{el}</p>)
              })
            }
          </div>
        </div>
      </div>
      <div>
        <div className='d-list d-bottom'>
          {
            listDiv()
          }
        </div>
      </div>
    </div>
  )
}
```

```tsx
import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { Axios } from 'myDumiUi'

export default () => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'code',
      dataIndex: 'code',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'class',
      dataIndex: 'class',
    },
    {
      title: 'code1',
      dataIndex: 'code1',
    },
  ]
  //  获取所有的基金列表
  const getAllList = () => {
    Axios({
      url: `/api/v1/fund/all`,
      method: 'get'
    }).then(res => {
      const arr = res.data || []
      const lists = arr.map(el => {
        const [id = '', code = '', name = '', class = '', code1 = ''] = el
        return {
          id,
          code,
          name,
          class,
          code1
        }
      })
      console.log(lists)
      setDataSource(lists)
    }).catch(err =>  {
      console.log(err)
    })
  }

  useEffect(() => {
    getAllList()
  }, [])

  return (
    <Table dataSource={dataSource} columns={columns}></Table>
  )
}
```


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | 下拉列表项   | Array    |  -      | 城市列表     |
| otherProps |  其他属性（完全等同antd中的cascader）  | Object    |  -      | -     |

#### otherProps下的属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| allowClear   | 是否支持清除   | boolean    |  -      | true     |
| autoFocus | 自动获取焦点  | boolean    |  -      | false     |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化  | boolean    |  -      | false     |
| className | 自定义类名  | string    |  -      | -     |
| defaultValue | 默认的选中项  | string[]    |  -      | []     |
| disabled | 禁用  | boolean    |  -      | false     |
| displayRender | 选择后展示的渲染函数  | (label, selectedOptions) => ReactNode    |  -      | label => label.join(' / ')     |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover'  | string    |  -      | 'click'     |
| showSearch | 在选择框中显示搜索框  | boolean    |  -      | false     |
| onChange | 选择完成后的回调  | (value, selectedOptions) => void    |  -      | -     |
