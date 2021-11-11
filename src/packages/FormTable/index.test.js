import React, { useState, useEffect, useRef } from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Button } from 'antd';
import { FormTable } from 'fudata-ui';
import './index.less';

afterEach(cleanup);

const TestFormTable = props => {
  const { domClick } = props;
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
      title: <span>城市</span>,
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

  // 提交
  const submitForm = () => {
    formRef.current
      .validateFields()
      .then(res => {
        domClick(res);
      })
      .catch(err => {
        domClick(null);
      });
  };

  // 填充默认值
  const fillTableValue = () => {
    const mockList = JSON.parse(JSON.stringify(dataList));
    mockList[0].cs = 'asdafasd';
    formRef.current.setFieldsValue({
      formRow: mockList,
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
    formRef.current.setFieldsValue({
      formRow: list,
    });
  }, []);

  return (
    <div>
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
    </div>
  );
};

describe('表单内嵌表格测试用例', () => {
  it('表单提交测试', done => {
    let domClick = jest.fn(value => {
      try {
        expect(value).toEqual({
          formRow: [
            { name: 'asd', sex: true, city: true, cs: 'asdafasd', city1: '' },
          ],
        });
      } catch {
        expect(value).toBeNull();
      }
      done();
    });
    let wrap = render(<TestFormTable domClick={domClick} />);
    let submitBrn = wrap.getByText('submit');
    let fillBtn = wrap.getByText('fill-value');
    fireEvent.click(fillBtn);
    fireEvent.click(submitBrn);
  });
});
