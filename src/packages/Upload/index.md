## 文件上传

```tsx
import React from 'react';
import { Upload } from 'fudata-ui';

export default () => {
  const uploadProps = {
    value:
      'https://filebuck.oss-cn-hangzhou.aliyuncs.com/fsUpload/03cc1b5f20af25b9_154x154.png',
    limitType: ['image/jpeg', 'image/jpg', 'image/png'],
    unit: 'MB',
    errText: '仅支持jpg png格式图片!',
    // 是否显示上传文件列表
    showListBool: true,
    // 多选文件
    // multiple: true,
    // 回传上传的文件列表
    onChange(val) {
      console.log(val);
    },
    // 上传接口
    // uploadFileFun () {

    // }
  };
  return (
    <div>
      <Upload {...uploadProps} />
    </div>
  );
};
```

## 可拖拽上传

```tsx
import React from 'react';
// import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Upload } from 'fudata-ui';

// import 'antd/dist/antd.css';

export default () => {
  const uploadProps = {
    value: '',
    dragBool: true, // 开启拖动上传
    limitType: ['text/csv'],
    errText: '仅支持csv格式的文件!',
    unit: 'MB',
    listType: 'text',
    multiple: true,
    // uploadBtnSlot: (
    //   // <div>
    //   //   <Button icon={<UploadOutlined />}>Select File</Button>
    //   // </div>
    //   <>
    //     <p className="ant-upload-drag-icon">
    //       <InboxOutlined />
    //     </p>
    //     <p className="ant-upload-text">Click or drag file to this area to upload</p>
    //     <p className="ant-upload-hint">
    //       Support for a single or bulk upload. Strictly prohibit from uploading company data or other
    //       band files
    //     </p>
    //   </>
    // ),
    onChange(val) {
      console.log(val);
    },
  };
  return <Upload {...uploadProps} />;
};
```

### 属性

| 参数          | 说明                                                               | 类型     | 可选值 | 默认值                                   |
| ------------- | ------------------------------------------------------------------ | -------- | ------ | ---------------------------------------- |
| value         | 默认值                                                             | String   | —      | []                                       |
| limitType     | 上传的文件格式                                                     | Array    | —      | ['image/jpg', 'image/png', 'image/jpeg'] |
| unit          | 上传的文件大小                                                     | String   | —      | KB（大小写都可）                         |
| errText       | 上传失败后的文案提示                                               | String   | —      | —                                        |
| dragBool      | 是否开启拖拽上传                                                   | Boolean  | —      | false                                    |
| multiple      | 是否支持多选文件                                                   | Boolean  | —      | false                                    |
| showListBool  | 是否显示上传列表                                                   | Boolean  | —      | false                                    |
| onChange      | 用于获取上传文件的列表                                             | function | —      | () => {}                                 |
| uploadFileFun | 自定义上传的接口（参数为上传的文件）                               | function | —      | () => {}                                 |
| listType      | 上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card | string   | -      | text                                     |
