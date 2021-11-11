import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  TreeSelect,
} from 'antd';
// import UploadComponent from '../Upload'

import './index.less';

const { TreeNode } = TreeSelect;

const { Option } = Select;
const { RangePicker } = DatePicker;

export default (props: any) => {
  const {
    formProps = {
      initialValues: {},
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    dataList = [],
    onFinish = (values: any) => {},
    onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    },
    onRef,
    formValue = {},
  } = props;
  const [form] = Form.useForm();
  const [treeValue, setTreeValue] = useState('');
  const [uploadUrl, setUploadUrl] = useState('');

  useEffect(() => {
    // 回传当前form
    onRef && onRef(form);
    const url = form.getFieldValue('headUrl');
    setUploadUrl(url);
  }, []);

  // 上传成功的回调，同步form表单
  const uploadChange = (val: any, name: any) => {
    const { url } = val;
    form.setFieldsValue({
      [name]: url,
    });
  };

  // tree的选择
  const onTreeChange = (val: any) => {
    console.log(val);
  };

  // 创建树结构
  const createTreeNode = (arr: any) => {
    if (Array.isArray(arr)) {
      const nNode: any = arr.map(el => {
        if (el.children) {
          const sNode: any = createTreeNode(el.children);
          return (
            <TreeNode key={el.value} value={el.value} title={el.title}>
              {sNode}
            </TreeNode>
          );
        }
        return <TreeNode key={el.value} value={el.value} title={el.title} />;
      });
      return nNode;
    }
    return null;
  };

  const createItemList = (dataList: any) => {
    if (Array.isArray(dataList)) {
      return dataList.map((el, index) => {
        return (
          <Form.Item
            {...el.selfLayout}
            key={el.key || el.name || index}
            label={el.label}
            name={el.name}
            rules={el.rules}
          >
            {el.type === 'Input' ? (
              <Input
                type={el.defaultType || 'text'}
                disabled={el.disabled}
                placeholder={
                  el.placeholder || `请输入${el.label || el.name || ''}`
                }
              />
            ) : el.type === 'Textarea' ? (
              <Input.TextArea
                disabled={el.disabled}
                placeholder={
                  el.placeholder || `请输入 ${el.label || el.name || ''}`
                }
              />
            ) : el.type === 'Button' ? (
              <Button
                type={el.btnType || 'default'}
                onClick={el.onClick}
                htmlType={el.htmlType}
              >
                {el.btnText}
              </Button>
            ) : el.type === 'Select' ? (
              <Select
                disabled={el.disabled}
                placeholder={
                  el.placeholder || `请选择${el.label || el.name || ''}`
                }
                onChange={el.onChange}
                allowClear={el.allowClear}
                {...(el.otherProps || {})}
              >
                {el.optionLists &&
                  Array.isArray(el.optionLists) &&
                  el.optionLists.map((ol: any) => (
                    <Option key={ol.sendValue} value={ol.sendValue}>
                      {ol.showValue}
                    </Option>
                  ))}
              </Select>
            ) : el.type === 'DatePicker' ? (
              el.dateType === 'TimePicker' ? (
                <TimePicker {...el.defaultPicker} />
              ) : el.dateType === 'RangePicker' ? (
                <RangePicker {...el.defaultPicker} />
              ) : (
                <DatePicker {...el.defaultPicker} />
              )
            ) : el.type === 'slot' && el.slotComponent ? (
              <div className="ant-slot">
                {typeof el.slotComponent === 'function'
                  ? el.slotComponent()
                  : el.slotComponent}
              </div>
            ) : el.type === 'radio' ? (
              <Radio.Group disabled={el.disabled}>
                {Array.isArray(el.option)
                  ? el.option.map((ol: any, ri: any) => {
                      return (
                        <Radio key={ri} value={ol.sendValue}>
                          {ol.showValue}
                        </Radio>
                      );
                    })
                  : null}
              </Radio.Group>
            ) : el.type === 'checkbox' ? (
              <Checkbox.Group {...el.checkProps} />
            ) : el.type === 'treeSelect' ? (
              <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={treeValue}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="请选择"
                allowClear
                treeDefaultExpandAll
                onChange={onTreeChange}
              >
                {createTreeNode(el.list)}
              </TreeSelect>
            ) : (
              <span>
                {(el.key && formValue[el.key]) ||
                  (el.name && formValue[el.name]) ||
                  '--'}
              </span>
            )}
          </Form.Item>
        );
      });
    }
    return null;
  };

  return (
    (onRef && (
      <Form
        {...formProps}
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {createItemList(dataList)}
      </Form>
    )) ||
    createItemList(dataList)
  );
};
