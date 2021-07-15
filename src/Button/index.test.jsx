import React from 'react'
import { cleanup, render } from '@testing-library/react';
import { Button } from 'myDumiUi';

afterEach(cleanup)

describe('<Button />', () => {
  it('Button属性测试', () => {
    let types = ['primary', 'success', 'info', 'warning', 'danger']
    let objInfo = {
      'primary': '.el-button--primary',
      'success': '.el-button--success',
      'info': '.el-button--info',
      'warning': '.el-button--warning',
      'danger': '.el-button--danger'
    }
    let i = 0
    while (i < types.length) {
      let type = types[i]
      render(<Button type={type}>主要按钮</Button>)
      let k = types[i]
      expect(document.querySelectorAll(objInfo[k]).length > 0).toBe(true)
      i++
    }
  });
})
