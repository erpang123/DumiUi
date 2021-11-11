import React, { useEffect, useState } from 'react';
import { Table, Radio, Checkbox, Select, Form, Input } from 'antd';

const EditableRow = ({ index, formRowKey, ...props }: any) => {
  const name = formRowKey || 'formRow';
  return (
    <Form.List name={name}>
      {() => {
        return <tr {...props} />;
      }}
    </Form.List>
  );
};

const EditableCell = ({
  title,
  children,
  dataIndex,
  record,
  type,
  disabled,
  lists,
  rules,
  ...restProps
}: any) => {
  if (!record) {
    return <td {...restProps}>{children}</td>;
  }
  const rIndex = record.rIndex;

  const text = record[dataIndex];
  let childNode = (
    <Form.Item
      style={{ margin: 0 }}
      name={[rIndex, dataIndex]}
      rules={rules || []}
    >
      {type === 'radio' ? (
        <Radio disabled={disabled} checked={text} />
      ) : type === 'checkbox' ? (
        <Checkbox disabled={disabled} checked={text} />
      ) : type === 'input' ? (
        <Input disabled={disabled} />
      ) : type === 'select' ? (
        <Select style={{ width: 160 }} disabled={disabled}>
          {(lists || []).map((ls: any) => (
            <Select.Option
              key={ls.value}
              value={ls.value}
              disabled={ls.disabled || false}
            >
              {ls.label}
            </Select.Option>
          ))}
        </Select>
      ) : (
        <span>{text}</span>
      )}
    </Form.Item>
  );

  return <td {...restProps}>{childNode}</td>;
};

const EditTable = (props: any) => {
  const { columns: cLists = [], dataSource, rowKey, formRowKey } = props;
  const [dataList, setDataList] = useState([]);

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  // 自动扩展列表字段rIndex用来table的rowKey
  const setListsKey = (arr: any) => {
    let lists = [];
    if (Array.isArray(arr)) {
      lists = arr.map((el: any, index: number) => {
        return {
          rIndex: index,
          ...el,
        };
      });
    }
    return lists;
  };

  useEffect(() => {
    const list = dataSource || [];
    setDataList(list);
  }, [dataSource]);

  // 表格表头
  const headList = cLists.map((el: any) => {
    const { title, dataIndex, type, disabled, lists = [], rules } = el;
    return {
      title,
      dataIndex,
      onCell: (record: any) => ({
        record,
        dataIndex,
        title,
        type,
        disabled,
        lists,
        rules,
      }),
    };
  });

  return (
    <Table
      pagination={{
        pageSize: 3,
      }}
      onRow={() => {
        return {
          formRowKey,
        };
      }}
      components={components}
      rowClassName={() => 'editable-row'}
      rowKey={rowKey || 'rIndex'}
      columns={headList}
      dataSource={setListsKey(dataList)}
    />
  );
};

export default (props: any) => {
  const [form] = Form.useForm();
  const { columns = [], dataSource = [], rowKey, onRef, formRowKey } = props;

  useEffect(() => {
    if (onRef) {
      onRef(form);
    }
  }, []);
  return onRef ? (
    <Form form={form}>
      <EditTable
        columns={columns}
        dataSource={dataSource}
        rowKey={rowKey}
        formRowKey={formRowKey}
      />
    </Form>
  ) : (
    <EditTable
      columns={columns}
      dataSource={dataSource}
      rowKey={rowKey}
      formRowKey={formRowKey}
    />
  );
};
