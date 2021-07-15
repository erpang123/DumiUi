import React, { useEffect, useState } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './index.less'

const { Dragger } = Upload;

export default (props: any) => {
  const { onChange = () => {}, value, limitType = ['image/jpg', 'image/png', 'image/jpeg'], limitSize = 2, unit = 'KB', errText = '文件格式错误，请上传jpg，png，jpeg格式的图片', uploadFileFun, dragBool = false, dragSlot, multiple = false, showListBool = false, uploadBtnSlot, listType='picture-card' } = props
  const [imageUrl, setImageUrl] = useState('')
  const [uploadBool, setUploadBool] = useState(false)
  const [fileLists, setFileLists] = useState([])
  const [delLists, setDelLists] = useState([])
  // 上传的文件列表
  const [uploadList, setUploadList]: [Array<any>, Function] = useState([])

  // 判断列表中是否已经有该文件
  const pdHasFiles = (file: any) => {
    const { type, size, name } = file
    for (let el of uploadList) {
      if (el.type === type && el.size === size && el.name === name) {
        return true
      }
    }
    return false
  }

  // 上传前处理
  const beforeUpload: any = (file: any) => {
    const isJpgOrPng = limitType.indexOf(file.type) >= 0;
    if (!isJpgOrPng) {
      message.error(errText);
      setUploadBool(false)
      return false
    }
    const bigUnit = unit.toLocaleUpperCase()
    const unitMath = bigUnit === 'GB' ? 1024 * 1024 * 1024 : bigUnit === 'MB' ? 1024 * 1024 : 1024
    const isLt2M = file.size / unitMath < limitSize;
    if (!isLt2M) {
      message.error(`文件大小不能超过${limitSize}${unit}!`);
      setUploadBool(false)
      return false
    }
    setUploadBool(true)

    const hasBool = pdHasFiles(file)

    // this.setState(state => ({
    //   fileList: [...state.fileList, file],
    // }));
    // 设置上传列表
    if (!hasBool) {
      setUploadList([...uploadList, file])
    }
    
    return false;
  }

  // 默认的oss上传地址
  const customRequest = ({file}: any) => {
  }

  // 默认的上传按钮
  const uploadButton = (
    <div>
      <div className="ant-upload-text">上传logo</div>
    </div>
  );

  const defaultHtml = (
    <>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </>
  )

  // 上传文件变化后回调，设置文件上传列表
  // const fileChange: any = ({file, fileList}: any) => {
  //   if (!uploadBool) {
  //     return
  //   }
  //   const { name, size, type } = file
  //   let lists: any = []
  //   // 多文件
  //   if (multiple) {
  //     for (let i = 0; i < uploadList.length; i++) {
  //       const nowFile: any = uploadList[i]
  //       if (name === nowFile.name && size === nowFile.size && type === nowFile.type) {
  //         return
  //       }
  //     }
  //     lists = uploadList.concat(file)
  //   } else {
  //     // 单文件
  //     lists = [file]
  //   }
  //   console.log(lists)
  //   // 设置上传列表
  //   setFileLists(lists)
  //   setUploadList(lists)
  //   // 回传上传列表
  //   onChange(lists)
  // }

  // 删除上传的文件列表
  const removeUpload = (val: any) => {
    console.log(val, uploadList, fileLists)
    const { name, status, uid, url } = val
    const lists = uploadList.slice()
    // 遍历上传列表，清除删除的文件
    for (let i = 0; i < uploadList.length; i++) {
      const { name: nameOld, status: statusOld, uid: uidOld, url: urlOld } = uploadList[i]
      if (name === nameOld && status === statusOld && uid === uidOld && url === urlOld) {
        lists.splice(i, 1)
        break
      }
    }
    setUploadList(lists)
  }

  // 回显图片
  useEffect(() => {
    // 显示队列
    if (showListBool) {
      if (typeof value === 'string') {
        const lists: any = [
          {
            name: value,
            url: value
          }
        ]
        setFileLists(lists)
        setUploadList(lists)
      }
    } else {
      
    }
    if (dragBool) {
      setFileLists(value || [])
    } else {
      setImageUrl(value || '')
    }
  },[value])

  useEffect(() => {
    onChange(uploadList)
  }, [uploadList])

  // 拖拽模式
  if (dragBool) {
    return (
      <>
        <Dragger
          name="avatar"
          listType={listType}
          className="avatar-uploader"
          // showUploadList={false}
          beforeUpload={beforeUpload}
          multiple={multiple}
          fileList={uploadList}
          onRemove={removeUpload}
          customRequest={uploadFileFun || customRequest}
          // onChange={fileChange}
        >
          {dragSlot || defaultHtml}
        </Dragger>
      </>
    )
  }

  // 非拖拽模式
  return (
    <>
      <Upload
        name="avatar"
        listType={listType}
        className="avatar-uploader"
        multiple={multiple}
        beforeUpload={beforeUpload}
        customRequest={uploadFileFun || customRequest}
        // onChange={fileChange}
        fileList={uploadList}
        onRemove={removeUpload}
      >
        {!showListBool && imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : (uploadBtnSlot || uploadButton)}
      </Upload>
    </>
  )
}
