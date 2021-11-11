## 可选择的表格

```tsx
import React from 'react';
import { SelectTable } from 'fudata-ui';

export default () => {
  const uploadProps = {
    initColums: [
      {
        title: '接口',
        dataIndex: 'jk',
        key: 'jk',
      },
      {
        title: '机构节点',
        dataIndex: 'jg',
        key: 'jg',
      },
      {
        title: '出参数量',
        dataIndex: 'cc',
        key: 'cc',
        sorter: {
          compare: (a, b) => a.cc - b.cc,
          multiple: 3,
        },
        filters: [
          { text: '00', value: '00' },
          { text: 333, value: 333 },
        ],
        // filteredValue: filteredInfo.cc || null,
        onFilter: (value, record) => record.cc === value,
        ellipsis: true,
      },
      {
        title: '接口状态',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '最新检测时间',
        dataIndex: 'lastTime',
        key: 'lastTime',
      },
      {
        title: '历史可用详情',
        dataIndex: 'hisDetail',
        key: 'hisDetail',
      },
      {
        title: '30天内可用率',
        dataIndex: 'three',
        key: 'three',
      },
    ],
    data: [
      {
        id: 0,
        jk: '000',
        jg: '000',
        cc: '00',
        status: '0000',
        lastTime: '0000',
        hisDetail: '00000',
        three: '0000',
      },
      {
        id: 1,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 2,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 3,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 4,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 5,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 6,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 7,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 8,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 9,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 10,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 11,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 12,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
    ],
    rowKey: 'id',
    // 回传上传的文件列表
    onChange(val) {
      console.log(val);
    },
  };
  return (
    <div>
      <SelectTable {...uploadProps} />
    </div>
  );
};
```

## 不可编辑的表格

```tsx
import React from 'react';
import { SelectTable } from 'fudata-ui';

export default () => {
  const uploadProps = {
    initColums: [
      {
        title: '接口',
        dataIndex: 'jk',
        key: 'jk',
      },
      {
        title: '机构节点',
        dataIndex: 'jg',
        key: 'jg',
      },
      {
        title: '出参数量',
        dataIndex: 'cc',
        key: 'cc',
      },
      {
        title: '接口状态',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '最新检测时间',
        dataIndex: 'lastTime',
        key: 'lastTime',
      },
      {
        title: '历史可用详情',
        dataIndex: 'hisDetail',
        key: 'hisDetail',
      },
      {
        title: '30天内可用率',
        dataIndex: 'three',
        key: 'three',
      },
    ],
    data: [
      {
        id: 0,
        jk: '000',
        jg: '000',
        cc: '00',
        status: '0000',
        lastTime: '0000',
        hisDetail: '00000',
        three: '0000',
      },
      {
        id: 1,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 2,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
      {
        id: 3,
        jk: 111,
        jg: 222,
        cc: 333,
        status: 444,
        lastTime: 555,
        hisDetail: 666,
        three: 999,
      },
    ],
    rowKey: 'id',
    // 回传上传的文件列表
    onChange(val) {
      console.log(val);
    },
    initData: [2, 3],
    rowSelect: {
      getCheckboxProps: record => {
        console.log(record);
        return {
          disabled: true,
        };
      },
    },
  };
  return (
    <div>
      <SelectTable {...uploadProps} />
    </div>
  );
};
```

### 属性

| 参数       | 说明                                      | 类型                                | 可选值 | 默认值   |
| ---------- | ----------------------------------------- | ----------------------------------- | ------ | -------- |
| initColums | 默认值表头                                | Array                               | —      | []       |
| data       | 表格列表项                                | Array                               | —      | []       |
| initData   | 默认选择的列表                            | Array                               | —      | []       |
| rowKey     | 表格行 key 的取值，可以是字符串或一个函数 | `string / function(record): string` | —      | key      |
| onChange   | 用于获取上传文件的列表                    | function                            | —      | () => {} |
| rowSelect  | 用于获取上传文件的列表                    | function                            | —      | () => {} |

#### rowSelection

| 参数                    | 说明                                                         | 类型                                                  | 可选值 | 默认值   |
| ----------------------- | ------------------------------------------------------------ | ----------------------------------------------------- | ------ | -------- |
| checkStrictly           | checkable 状态下节点选择完全受控（父子数据选中状态不再关联） | boolean                                               | —      | true     |
| columnTitle             | 自定义列表选择框标题                                         | ReactNode                                             | -      | -        |
| columnWidth             | 自定义列表选择框宽度                                         | string / number                                       | -      | 32px     |
| fixed                   | 把选择框列固定在左边                                         | boolean                                               | -      | -        |
| getCheckboxProps        | 选择框的默认属性配置                                         | function(record)                                      | -      | -        |
| hideSelectAll           | 隐藏全选勾选框与自定义选择项                                 | boolean                                               | -      | false    |
| preserveSelectedRowKeys | 当数据被删除时仍然保留选项的 key                             | boolean                                               | -      | -        |
| renderCell              | 渲染勾选框，用法与 Column 的 render 相同                     | function(checked, record, index, originNode)          | -      | {}       |
| selectedRowKeys         | 指定选中项的 key 数组，需要和 onChange 进行配合              | string[] / number[]                                   | -      | []       |
| defaultSelectedRowKeys  | 默认选中项的 key 数组                                        | string[] / number[]                                   | -      | []       |
| selections              | 自定义选择项 配置项, 设为 true 时使用默认选择项              | object[] / boolean                                    | -      | true     |
| type                    | 多选/单选                                                    | checkbox / radio                                      | -      | checkbox |
| onChange                | 选中项发生变化时的回调                                       | function(selectedRowKeys, selectedRows)               | -      | -        |
| onSelect                | 用户手动选择/取消选择某行的回调                              | function(record, selected, selectedRows, nativeEvent) | -      | -        |
| onSelectAll             | 用户手动选择/取消选择所有行的回调                            | function(selected, selectedRows, changeRows)          | -      | -        |
| onSelectInvert          | 用户手动选择反选的回调                                       | function(selectedRowKeys)                             | -      | -        |
| onSelectNone            | 用户清空选择的回调                                           | function()                                            | -      | -        |
