## Form

### 纵向表单框
```tsx
import React, { useState, useRef } from 'react'
import 'antd/dist/antd.css';
import { Button } from 'antd'
import { Form } from 'myDumiUi'
export default () => {
  const formRef = useRef()

  const onSubmit = () => {
    const value = formRef.current.getFieldsValue()
    console.log('点击按钮', value)
  }

  const onReset = () => {
    formRef.current.resetFields();
  }

  const onFill = () => {
    formRef.current.setFieldsValue({
      username: 'admin',
      note: 'Hello world!',
      sex: 'boy',
      gender: 'male',
      adree: 'hangzhou'
    });
  }

  const rFormProps = {
    formProps: {
      initialValues: {
        headUrl: 'https://filebuck.oss-cn-hangzhou.aliyuncs.com/fsUpload/03cc1b5f20af25b9_154x154.png'
      },
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    },
    dataList: [
      {
        type: 'Input',
        label: 'Username',
        name: 'username',
        rules: [{ required: true, message: 'Please input your username!' }]
      },
      {
        type: 'Input',
        label: 'Note',
        name: 'note',
        rules: [{ required: true, message: 'Please input your note!' }]
      },
      {
        type: 'upload',
        label: 'headImg',
        name: 'headUrl',
        uploadProps: {
          limitType: ['image/jpeg', 'image/jpg', 'image/png'],
          unit: 'MB',
          errText: '仅支持jpg png格式图片!'
        }
      },
      {
        type: 'DatePicker',
        label: '时间',
        name: 'time',
        defaultPicker: {
          picker: 'month',
          onChange (value) {
            console.log(value)
          }
        }
      },
      {
        type: 'DatePicker',
        dateType: 'RangePicker',
        label: '时间区间',
        name: 'timeRange',
        defaultPicker: {
          showTime: { format: 'HH:mm' },
          format: 'YYYY-MM-DD HH:mm',
          onChange (value) {
            console.log(value)
          }
        }
      },
      {
        type: 'radio',
        label: 'Sex',
        name: 'sex',
        option: [
          {
            sendValue: 'boy',
            showValue: 'boy'
          }, {
            sendValue: 'gril',
            showValue: 'gril'
          }
        ]
      },
      {
        type: 'checkbox',
        label: 'city',
        name: 'city',
        checkProps: {
          options: [
            {
              label: 'hangzhou',
              value: '1'
            },
            {
              label: 'ningbo',
              value: '2'
            }
          ]
        }
      },
      {
        type: 'Select',
        label: 'Gender',
        name: 'gender',
        allowClear: true,
        optionLists: [
          {
            sendValue: 'male',
            showValue: 'male'
          },
          {
            sendValue: 'female',
            showValue: 'female'
          },
          {
            sendValue: 'other',
            showValue: 'other'
          }
        ],
        onChange: (value) => {
          const form = formRef.current
          console.log(form)
          switch (value) {
            case 'male':
              form.setFieldsValue({
                note: 'Hi, man!',
              });
              break;
      
            case 'female':
              form.setFieldsValue({
                note: 'Hi, lady!',
              });
              break;
      
            case 'other':
              form.setFieldsValue({
                note: 'Hi there!',
              });
              break;
            
            default:
              break
          }
          console.log(value)
        }
      },
      {
        type: 'treeSelect',
        key: 'adree',
        label: 'adree',
        name: 'adree',
        list: [
          {
            value: 'zhejiang',
            title: '浙江',
            children: [
              {
                value: 'hangzhou',
                title: '杭州',
                children: [
                  {
                    value: 'yuhang',
                    title: '余杭'
                  }, 
                  {
                    value: 'gongshu',
                    title: '拱墅'
                  }
                ]
              },
              {
                value: 'ningbo',
                title: '宁波',
                children: [
                  {
                    value: 'jiangbei',
                    title: <b style={{ color: '#08c' }}>江北</b>
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'slot',
        key: 'slot',
        selfLayout: {
          wrapperCol: {
            offset: 8,
            span: 16,
          }
        },
        slotComponent: () => {
          return (
            <>
              <Button className="submit-btn" type='primary' onClick={onSubmit} htmlType='submit'>Submit</Button>
              <Button className="reset-btn" onClick={onReset} htmlType='button' style={{marginLeft: '8px'}}>Reset</Button>
              <Button className="set-default-btn" type="link" htmlType="button" style={{marginLeft: '8px'}} onClick={onFill}>Fill form</Button>
            </>
          )
        },
      }
    ]
  }

  return (
    <div style={{width: '400px'}}>
      <Form onRef={(ref) => formRef.current = ref} {...rFormProps}></Form>
    </div>
  )
}
```

### 横向搜索框
```tsx
import React, { useRef } from 'react'
import { Button } from 'antd'
import { Form } from 'myDumiUi'

export default () => {
  const formRef = useRef()
  const rFormProps = {
    formProps: {
      layout: 'inline'
    },
    dataList: [
      {
        type: 'Input',
        name: 'username'
      },
      {
        type: 'DatePicker',
        dateType: 'RangePicker',
        name: 'timeRange',
        defaultPicker: {
          showTime: { format: 'HH:mm' },
          format: 'YYYY-MM-DD HH:mm',
          onChange (value) {
            console.log(value)
          }
        }
      },
      {
        type: 'Select',
        name: 'gender',
        allowClear: true,
        optionLists: [
          {
            sendValue: 'male',
            showValue: 'male'
          },
          {
            sendValue: 'female',
            showValue: 'female'
          },
          {
            sendValue: 'other',
            showValue: 'other'
          }
        ],
        onChange: (value) => {
          console.log(value)
        }
      },
      {
        type: 'slot',
        key: 'slot',
        slotComponent: () => {
          return (
            <>
              <Button className="submit-btn" type='primary' onClick={onSubmit} htmlType='submit'>Search</Button>
              <Button className="reset-btn" onClick={onReset} htmlType='button' style={{marginLeft: '8px'}}>Reset</Button>
            </>
          )
        }
      }
    ]
  }
  // 查询
  const onSubmit = () => {
    const value = formRef.current.getFieldsValue()
    console.log('点击按钮', value)
  }
  // 重置
  const onReset = () => {
    formRef.current.resetFields();
  }
  
  return (
    <Form onRef={(ref) => formRef.current = ref} {...rFormProps}></Form>
  )
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| formProps | form的通用属性（参考antd中from的api） | Object | — |
| dataList     | 列表项   | Array  |   —     |    []     |
| onFinish     | 成功函数   | Function    | — | —   |
| onFinishFailed     |  失败函数  | Function    | — | —   |
| onRef     | Form对象   | Function  | — | —   |

----

#### formProps
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| colon | 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | boolean  |  —  | true |
| component     | 设置 Form 渲染元素，为 false 则不创建 DOM 节点   | ComponentType | false  |   —     |    form     |
| initialValues     | 表单默认值，只有初始化以及重置时生效   | object    |   — | —   |
| labelAlign     | label 标签的文本对齐方式   | left | right    | — | right   |
| labelCol     |  label 标签布局，同 Col 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}  | object    | — | { span: 8 }   |
| layout     | 表单布局   | horizontal | vertical | inline    | — | horizontal   |
| wrapperCol     | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol   | object    | — | { span: 16 }   |
| size     | 设置字段组件的尺寸（仅限 antd 组件）   | small | middle | large    | — | —   |

----

### dataList的单个对象
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 表单类型   | String  |   Input, Button, Select, Checkbox, slot    |    —     |
| placeholder     | 提示   | String    |   — |    —    |
| selfLayout     | 每个列表的布局   | Object    | — | {labelCol: { span: 8 }, wrapperCol: { span: 16 }}   |
| label     |  label 标签的文本  | ReactNode    | — | —   |
| key     | key值   | Function    | — | —   |
| name     |  表单名称  | Function    | — | —   |
| rules     | 校验规则   | Rule[]    | — | —   |

----

### type=Button
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| btnType     | 按钮类型   | String    | — | 'default   |
| htmlType     | 设置 button 原生的 type 值   | string    | — | button   |
| btnText     | 按钮文案   | String    | — | —   |
| onClick     | 点击事件   | Function    | — | —   |

----

### type=Select
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| optionLists     | 下拉列表项   | Array    | — | []   |
| onChange     | 点击事件   | Function    | — | —   |
| allowClear     | 清空   | Boolean    | true, false | false   |

----

### type=slot
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| slotComponent     | 插槽   | Function    | — | —   |

----

### type=treeSelect
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| list     | 树结构的列表   | Array    | — | —   |

#### TreeNode props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 默认根据此属性值进行筛选（其值在整个树范围内唯一）   | string    | — | —   |
| title     | 树节点显示的内容   | ReactNode/String    | — | —   |
