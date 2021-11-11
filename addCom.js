const fs = require('fs');
const path = require('path');
const { comUrl } = require('./customConfig');

const baseUrl = path.join(__dirname, 'template'); // 模版文件地址

const fileNames = (process.argv.length > 2 && process.argv.slice(2)) || ['mod']; // process.argv返回数组，数组的值为命令行空格分割

// 拷贝模版文件到新目录下
const readFileFun = (url, createFile) => {
  fs.readdir(url, (err, files) => {
    if (err) {
      throw err;
    }
    files.forEach(file => {
      const temFile = url + '/' + file;
      const newFile = temFile.replace('template', createFile);
      const fileBool = fs.statSync(temFile).isFile(); // 判断是否是文件
      if (fileBool) {
        // 拷贝文件到新文件夹
        fs.copyFileSync(temFile, newFile);
      } else {
        // 新建文件夹
        fs.mkdirSync(newFile);
        readFileFun(temFile, createFile);
      }
    });
  });
};

// 新建文件夹
const addNewFile = (url, createFile) => {
  fs.readdir(url, (err, files) => {
    if (!files) {
      // 新建文件夹
      fs.mkdirSync(url);
      // 从模版文件夹拷贝文件
      readFileFun(baseUrl, createFile);
    } else {
      throw '该文件夹已存在';
    }
  });
};

// 遍历所有的组件名称
const initModelFile = () => {
  if (fileNames.length > 0) {
    for (let name of fileNames) {
      createFile = `src/${comUrl}/${name}`;
      resultUrl = path.join(__dirname, createFile);
      addNewFile(resultUrl, createFile);
    }
  }
};

initModelFile();
