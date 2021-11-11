import { cleanup } from '@testing-library/react';
import { setObjToStr, formatTime, deepCopy } from 'fudata-ui';

afterEach(cleanup);

describe('函数测试用例', () => {
  it('对象转字符串测试', () => {
    let str = setObjToStr({ a: 1, b: 1 });
    expect(str).toEqual('a=1&b=1');
  });
  it('时间戳转换指定格式测试', () => {
    let str = formatTime(5600100, 'hh:mm:ss');
    expect(str).toEqual('01:33:20');
  });
  it('对象的深拷贝测试', () => {
    let a = { a: { a: 1 } };
    let b = deepCopy(a);
    expect(a !== b).toEqual(true);
  });
});
