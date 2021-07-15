import React, { useEffect, useState, useReducer } from 'react'
import { Table } from 'antd';

const SelectTable = (props: any) => {
  const { onChange, data, initData, initColums, rowKey='key', rowSelect = {} } = props
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [pageObj, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'change':
        return {
          ...action.data
        }
      default :
        return state
    }
  }, {
    page: 1,
    size: 10
  })

  // 选择
  const onSelectChange = (selectColmun: any) => {
    setSelectedRowKeys(selectColmun)
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: false,
    selections: [
      {
        key: 'all-data',
        text: '全选所有页',
        onSelect: () => {
          // 全选所有页需单独对选中项进行赋值
          const arr = data.map((el: any) => el[rowKey])
          setSelectedRowKeys(arr)
        },
      },
      {
        key: 'clear-data',
        text: '取消所有页',
        onSelect: () => {
          setSelectedRowKeys([])
        },
      },
    ],
    ...rowSelect
  };

  const columns = [
    {
      title: '字段说明',
      dataIndex: 'desc',
    },
  ];

  // 分页
  const pagination = () => {
    const { page, size } = pageObj
    const obj: any = {
      current: page,
      pageSize: size,
      onChange (page: Number, pageSize: Number) {
        dispatch({
          type: 'change',
          data: {
            page,
            size: pageSize
          }
        })
      }
    }
    return obj
  }

  useEffect(() => {
    if(!selectedRowKeys || !selectedRowKeys.length){
      onChange([])
    } else {
      onChange(selectedRowKeys)
    }
  }, [selectedRowKeys])

  useEffect(() => {
    if(initData && initData.length > 0){
      setSelectedRowKeys(initData.map((item: any) => {
        if (item && typeof item === 'object') {
          return item[rowKey]
        } else {
          return item
        }
      }))
    }
  }, [initData])

  return (
    <Table
      rowKey={rowKey}
      columns={initColums || columns}
      dataSource={data}
      rowSelection={rowSelection}
      pagination={pagination()}
    />
  )
}

export default SelectTable
