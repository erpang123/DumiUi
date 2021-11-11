import React from 'react';

import './button.css';
// import './button.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: any) => {
  const {
    buttonDisabled,
    loading,
    nativeType,
    type,
    buttonSize,
    children,
  } = props;
  return (
    <button
      disabled={buttonDisabled || loading}
      // autofocus={autofocus}
      type={nativeType}
      className={`
        el-button 
        ${type ? 'el-button--' + type : ''} 
        ${buttonSize ? 'el-button--' + buttonSize : ''} 
      `}
    >
      {children}
    </button>
  );
};
