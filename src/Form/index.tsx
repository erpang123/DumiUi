import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Select, DatePicker, TimePicker, Radio, TreeSelect } from 'antd';
import UploadComponent from '../Upload'

import './index.less'

const { TreeNode } = TreeSelect;

const { Option } = Select;
const { RangePicker } = DatePicker;

export default (props: any) => {
  const {
    formProps = {
      initialValues: {},
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    },
    dataList = [],
    onFinish = (values: any) => {
      alert(values);
    },
    onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    },
    onRef
  } = props
  const [form] = Form.useForm();
  const [treeValue, setTreeValue] = useState('')
  const [uploadUrl, setUploadUrl] = useState('')

  useEffect(() => {
    // 回传当前form
    onRef && onRef(form)
    const url = form.getFieldValue('headUrl')
    setUploadUrl(url)
  }, [])

  // 上传成功的回调，同步form表单
  const uploadChange = (val: any, name: any) => {
    const { url } = val
    form.setFieldsValue({
      [name]: url
    })
  }

  // tree的选择
  const onTreeChange = (val: any) => {
    console.log(val)
  }

  // 创建树结构
  const createTreeNode = (arr: any) => {
    if (Array.isArray(arr)) {
      const nNode: any = arr.map(el => {
        if (el.children) {
          const sNode: any = createTreeNode(el.children)
          return (
            <TreeNode key={el.value} value={el.value} title={el.title}>
              {sNode}
            </TreeNode>
          )
        } else {
          return (
            <TreeNode key={el.value} value={el.value} title={el.title} />
          )
        }
      })
      return nNode
    }
    return null
  }

  return (
    <Form
      {...formProps}
      form={form}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {
        Array.isArray(dataList) && dataList.map((el, index) => {
          return (
            <Form.Item
              {...el.selfLayout}
              key={el.key || el.name || index}
              label={el.label}
              name={el.name}
              rules={el.rules}
            >
              {
                el.type === 'Input' ? <Input type={el.defaultType || 'text'} disabled={el.disabled} placeholder={el.placeholder || `请输入${el.label || el.name || ''}`} /> :
                el.type === 'Button' ? <Button type={el.btnType || 'default'} onClick={el.onClick} htmlType={el.htmlType}>{el.btnText}</Button> :
                el.type === 'Select' ?
                <Select placeholder={el.placeholder || `请选择${el.label || el.name || ''}`} onChange={el.onChange} allowClear={el.allowClear}>
                  {
                    el.optionLists && Array.isArray(el.optionLists) && el.optionLists.map((ol: any) => (
                      <Option key={ol.sendValue} value={ol.sendValue}>{ol.showValue}</Option>
                    ))
                  }
                </Select> :
                el.type === 'upload' ? 
                // 如果子组件内需要使用props。自定义组件在嵌入form.item中时，需要多包裹一层空节点（form.item会对子节点做一层拷贝并添加一些属性，会导致组件中的部分属性被清除。）
                <>
                  <UploadComponent {...el.uploadProps} value={uploadUrl} onChange={(obj: any) => uploadChange(obj, el.name)} />
                </>
                :
                el.type === 'DatePicker' ? el.dateType === 'TimePicker' ? <TimePicker {...el.defaultPicker}/> : el.dateType === 'RangePicker' ? <RangePicker {...el.defaultPicker}/> :
                <DatePicker {...el.defaultPicker}/> :
                el.type === 'slot' && el.slotComponent ? <div className="ant-slot"><el.slotComponent></el.slotComponent></div> :
                el.type === 'radio' ? (
                  <Radio.Group
                    disabled={el.disabled}
                  >
                    {
                      Array.isArray(el.option) ? el.option.map((ol: any, index: any) => {
                        return (
                          <Radio key={index} value={ol.sendValue}>{ol.showValue}</Radio>
                        )
                      }) : null
                    }
                  </Radio.Group>
                ) : el.type === 'checkbox' ? (
                  <Checkbox.Group {...el.checkProps}></Checkbox.Group>
                ) : el.type === 'treeSelect' ? (
                  <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={treeValue}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    onChange={onTreeChange}
                  >
                    {
                      createTreeNode(el.list)
                    }
                  </TreeSelect>
                ) :
                null
              }
            </Form.Item>
          )
        })
      }
    </Form>
  )
}
