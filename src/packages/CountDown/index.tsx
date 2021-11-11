import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useInterval } from '../../Hooks';

interface PropFace {
  startTime: Number;
  onClick: Function;
  disabled: boolean;
  defaultText: string;
  unit: string;
}

export default (props: any) => {
  const {
    startTime = 60,
    onClick,
    disabled,
    defaultText = '获取验证码',
    unit = 's',
  }: PropFace = props;

  // 使用hooks实现
  let [nowCount, setNowCount]: [any, Function] = useState();
  useInterval(
    () => {
      if (nowCount === defaultText) {
        nowCount = startTime;
      } else if (nowCount >= 0) {
        nowCount--;
      }
      if (nowCount === 0) {
        nowCount = defaultText;
      }
      setNowCount(nowCount);
    },
    nowCount === defaultText || nowCount <= 0 ? null : 1000,
  );

  // 开始自减
  const codeMath = () => {
    if (nowCount === defaultText) {
      setNowCount(startTime);
      if (typeof onClick === 'function') {
        onClick();
      }
    }
  };

  useEffect(() => {
    setNowCount(defaultText);
  }, []);

  return (
    <div className="count-down">
      <Button
        type="primary"
        disabled={disabled || nowCount !== defaultText}
        onClick={codeMath}
      >
        {nowCount}
        {nowCount !== defaultText ? unit : ''}
      </Button>
    </div>
  );
};
