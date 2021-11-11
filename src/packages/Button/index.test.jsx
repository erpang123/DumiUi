import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Button } from 'fudata-ui';

afterEach(cleanup);

describe('按钮测试用例', () => {
  it('Button样式属性测试', () => {
    let types = ['primary', 'success', 'info', 'warning', 'danger'];
    let objInfo = {
      primary: 'el-button--primary',
      success: 'el-button--success',
      info: 'el-button--info',
      warning: 'el-button--warning',
      danger: 'el-button--danger',
    };
    let i = 0;
    while (i < types.length) {
      let type = types[i];
      // let testId = objInfo[type];
      let wrap = render(<Button type={type}>主要按钮</Button>);
      let elms = wrap.getAllByText('主要按钮') || [];
      let element = elms[elms.length - 1];
      expect(element).toHaveClass(objInfo[type]);
      i++;
    }
  });
  it('disabled测试', () => {
    let wrap = render(<Button buttonDisabled={true}>主要按钮</Button>);
    let element = wrap.getByText('主要按钮');
    expect(element).toBeDisabled();
  });
});
