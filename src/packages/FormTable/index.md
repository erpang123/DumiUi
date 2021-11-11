---
title: form内嵌table表格
---

## Form 中内嵌 Table

### 使用组件内部 form

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'antd';
import { FormTable } from 'fudata-ui';
import './index.less';

export default () => {
  const formRef = useRef();
  const [dataList, setDataList] = useState([]);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      type: 'radio',
      disabled: true,
    },
    {
      title: <span>111地区</span>,
      dataIndex: 'city',
      type: 'checkbox',
      disabled: true,
    },
    {
      title: <span className="require-icon">参数</span>,
      dataIndex: 'cs',
      type: 'input',
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      title: '地区',
      dataIndex: 'city1',
      type: 'select',
      lists: [
        {
          value: 'hz',
          label: '杭州',
        },
        {
          value: 'nb',
          label: '宁波',
        },
        {
          value: 'sx',
          label: '绍兴',
        },
      ],
    },
  ];

  // 填充默认值
  const fillTableValue = () => {
    const mockList = JSON.parse(JSON.stringify(dataList));
    mockList[0].cs = 'asdafasd';
    formRef.current.setFieldsValue({
      formRow: mockList,
    });
  };

  // 提交
  const submitForm = () => {
    formRef.current
      .validateFields()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const list = [
      {
        name: 'asd',
        sex: true,
        city: true,
        cs: '',
        city1: '',
      },
      {
        name: '444',
        sex: true,
        city: false,
        cs: 32323,
        city1: 'sx',
      },
      {
        name: '333',
        sex: false,
        city: true,
        cs: 555,
        city1: 'nb',
      },
      {
        name: '222',
        sex: false,
        city: false,
        cs: 444,
        city1: 'hz',
      },
      {
        name: '111',
        sex: true,
        city: true,
        cs: 33,
        city1: 'nb',
      },
    ];
    setDataList(list);
    formRef.current.setFieldsValue({
      formRow: list,
    });
  }, []);

  return (
    <>
      <FormTable
        onRef={ref => (formRef.current = ref)}
        columns={columns}
        dataSource={dataList}
      />
      <div style={{ marginTop: '15px' }}>
        <Button onClick={submitForm} style={{ marginRight: '16px' }}>
          submit
        </Button>
        <Button onClick={fillTableValue}>fill-value</Button>
      </div>
    </>
  );
};
```

### 外部自定义 form，不要传 onRef，多层 form 会出现错误

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import { FormTable } from 'fudata-ui';
export default () => {
  const [formRef] = Form.useForm();
  const [dataList, setDataList] = useState([]);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      type: 'radio',
      disabled: true,
    },
    {
      title: <span>111地区</span>,
      dataIndex: 'city',
      type: 'checkbox',
      disabled: true,
    },
    {
      title: <span className="require-icon">参数</span>,
      dataIndex: 'cs',
      type: 'input',
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      title: '地区',
      dataIndex: 'city1',
      type: 'select',
      lists: [
        {
          value: 'hz',
          label: '杭州',
        },
        {
          value: 'nb',
          label: '宁波',
        },
        {
          value: 'sx',
          label: '绍兴',
        },
      ],
    },
  ];

  // 填充默认值
  const fillTableValue = () => {
    const mockList = JSON.parse(JSON.stringify(dataList));
    mockList[0].cs = 'asdafasd';
    formRef.setFieldsValue({
      note: 'Hello world!',
      formRowKey: mockList,
    });
  };

  // 提交
  const submitForm = () => {
    formRef
      .validateFields()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const list = [
      {
        name: 'asd',
        sex: true,
        city: true,
        cs: '',
        city1: '',
      },
    ];
    setDataList(list);
    formRef.setFieldsValue({
      formRowKey: list,
    });
  }, []);

  return (
    <>
      <Form form={formRef}>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <FormTable
          formRowKey="formRowKey"
          columns={columns}
          dataSource={dataList}
        />
      </Form>
      <div style={{ marginTop: '15px' }}>
        <Button onClick={submitForm} style={{ marginRight: '16px' }}>
          submit
        </Button>
        <Button onClick={fillTableValue}>fill-value</Button>
      </div>
    </>
  );
};
```

### 结合 Form 表单使用

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { FormTable, Form } from 'fudata-ui';

export default () => {
  const formRef = useRef();

  const [dataList, setDataList] = useState([]);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      type: 'radio',
      disabled: true,
    },
    {
      title: <span>111地区</span>,
      dataIndex: 'city',
      type: 'checkbox',
      disabled: true,
    },
    {
      title: <span className="require-icon">参数</span>,
      dataIndex: 'cs',
      type: 'input',
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      title: '地区',
      dataIndex: 'city1',
      type: 'select',
      lists: [
        {
          value: 'hz',
          label: '杭州',
        },
        {
          value: 'nb',
          label: '宁波',
        },
        {
          value: 'sx',
          label: '绍兴',
        },
      ],
    },
  ];

  const onSubmit = () => {
    formRef.current
      .validateFields()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onReset = () => {
    formRef.current.resetFields();
  };

  const onFill = () => {
    const date1 = window.moment('2019-05-05 12:01');
    const date2 = window.moment('2020-05-05 12:01');
    formRef.current.setFieldsValue({
      username: 'admin',
      sex: 'boy',
      timeRange: [date1, date2],
      formRowKey: [
        {
          name: 'asd',
          sex: true,
          city: true,
          cs: 'asdasd',
          city1: 'hz',
        },
      ],
    });
  };

  const rFormProps = {
    formProps: {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    },
    dataList: [
      {
        type: 'Input',
        label: 'Username',
        name: 'username',
        rules: [{ required: true, message: 'Please input your username!' }],
      },
      {
        type: 'DatePicker',
        dateType: 'RangePicker',
        label: '时间区间',
        name: 'timeRange',
        defaultPicker: {
          showTime: { format: 'HH:mm' },
          format: 'YYYY-MM-DD HH:mm',
          onChange(value) {
            console.log(value);
          },
        },
      },
      {
        type: 'radio',
        label: 'Sex',
        name: 'sex',
        option: [
          {
            sendValue: 'boy',
            showValue: 'boy',
          },
          {
            sendValue: 'gril',
            showValue: 'gril',
          },
        ],
      },
      {
        type: 'slot',
        key: 'slot',
        selfLayout: {
          wrapperCol: {
            offset: 0,
            span: 24,
          },
        },
        slotComponent: () => {
          return (
            <FormTable
              formRowKey="formRowKey"
              columns={columns}
              dataSource={dataList}
            />
          );
        },
      },
    ],
  };

  useEffect(() => {
    const list = [
      {
        name: 'asd',
        sex: true,
        city: true,
        cs: '',
        city1: '',
      },
    ];
    setDataList(list);
    formRef.current.setFieldsValue({
      username: 'cdb',
      sex: 'boy',
    });
  }, []);

  return (
    <div>
      <Form onRef={ref => (formRef.current = ref)} {...rFormProps}></Form>
      <div>
        <Button
          className="submit-btn"
          type="primary"
          onClick={onSubmit}
          htmlType="submit"
        >
          Submit
        </Button>
        <Button
          className="reset-btn"
          onClick={onReset}
          htmlType="button"
          style={{ marginLeft: '8px' }}
        >
          Reset
        </Button>
        <Button
          className="set-default-btn"
          type="link"
          htmlType="button"
          style={{ marginLeft: '8px' }}
          onClick={onFill}
        >
          Fill form
        </Button>
      </div>
    </div>
  );
};
```

### Attributes

| 参数       | 说明                                      | 类型     | 可选值 | 默认值  |
| ---------- | ----------------------------------------- | -------- | ------ | ------- |
| columns    | 表格列的配置描述，具体项见下表            | Array    | -      | []      |
| dataSource | 数据数组                                  | Array    | -      | []      |
| rowKey     | 表格行 key 的取值，可以是字符串或一个函数 | string   | —      | rIndex  |
| formRowKey |                                           | string   | —      | formRow |
| onRef      | 传递内部的 form 到上层（如果）            | function | —      | -       |

### columns

| 参数      | 说明                                                 | 类型    | 可选值                         | 默认值 |
| --------- | ---------------------------------------------------- | ------- | ------------------------------ | ------ |
| title     | 列头显示文字                                         | string  | -                              | -      |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string  | -                              | -      |
| disabled  | 不可操作                                             | Boolean | -                              | false  |
| type      | 类型                                                 | string  | radio，checkbox，input，select | -      |
| rules     | 数据数组                                             | Array   | -                              | -      |
| lists     | 数据数组（type=select 时生效）                       | Array   | -                              | []     |
