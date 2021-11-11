const { defaultArr, otherComponent, comUrl } = require('./customConfig');
const fs = require('fs');
const path = require('path');

// 监听src目录下文件的变化
const warchChangeFile = () => {
  fs.watch(path.join(__dirname, 'src'), { recursive: true }, function(
    eventType,
    filename,
  ) {
    // 限定监听除组件库以外的模块
    const firstN = filename.split('/')[0];
    const isOtherCom = otherComponent.indexOf(firstN) >= 0;
    // 判断模块中是否有js，jsx，ts，tsx的文件
    const isCls = /\.(ts|tsx|js|jsx)$/.test(filename);
    // 文件删除和新增时触发
    if (eventType === 'rename') {
      // 判断是否组件目录
      const isCom = filename.toLocaleLowerCase().indexOf(`${comUrl}/`) >= 0;
      // 限定只监听component下的文件删除和新增
      if (isCls && (isCom || isOtherCom)) {
        initExportFile();
      }
    } else if (eventType === 'change') {
      // 文件修改时触发，只监听组件以外的文件
      if (isOtherCom && isCls) {
        initExportFile();
      }
    }
  });
};

// 读取src目录，初始化入口文件
const initExportFile = () => {
  const initUrl = path.join(__dirname, 'src'); // 根目录
  const componentUrl = `${initUrl}/${comUrl}`; // 组件目录

  // 获取除组件库以外的模块
  const otherStrArr = otherComponent.map(file => {
    try {
      let initStr = fs.readFileSync(`${initUrl}/${file}/index.tsx`, 'utf8');
      let expStr =
        initStr &&
        initStr.match(/export {([^}]+)}/) &&
        initStr.match(/export {([^}]+)}/)[0].replace(/\s+/g, ' ');
      return expStr ? `${expStr} from './${file}'` : '';
    } catch {}
  });

  // 遍历组件库
  fs.readdir(componentUrl, (err, files) => {
    if (err) {
      throw err;
    } else {
      let strArr = [];
      files.forEach(file => {
        // 组件模块的导出
        const fileBool = fs.statSync(`${componentUrl}/${file}`).isFile(); // 判断是否是文件
        if (!fileBool) {
          strArr.push(
            `export { default as ${file} } from './${comUrl}/${file}'`,
          );
        }
      });
      const allArr = defaultArr.concat(strArr.concat(otherStrArr));
      // 入口文件
      const exportFile = path.join(__dirname, 'src/index.ts');
      let str = `${allArr.join('\n')}`;
      fs.writeFile(exportFile, str, err => {
        if (err) {
          throw err;
        }
        console.log('入口文件修改成功');
      });
    }
  });
};

//首次初始化入口文件
initExportFile();
// 监听目录
warchChangeFile();
