## 使用说明

### 配置项

在 customConfig.js 中进行修改，提供以下配置项：

1. defaultArr：数组，需要使用的第三方模块，配置后会在入口文件中引入。
2. otherComponent：数组，除组件之外的其他模块文件夹（需要在 src 目录下）。
   > 其他模块在导出时，需要统一在最后`export {}`导出。修改后需要重新启动项目。
3. comUrl：字符串，组件文件夹。

### 新增组件

1. 使用命令`npm run addModel 组件名称`新增组件，多个组件名称用空格隔开。通过命令新增的不需要手动修改入口的 index.ts，会自动增加导出的模块。

2. 自己手动新增组件后，不需要手动修改 src 中的入口文件，在 npm run start 启动项目后会自动修改入口文件。

### 按需加载

1. 可以导入指定路径的 js，`import Upload from 'fudata-ui/es/packages/Upload'`

2. 使用 babel-plugin-import,新增 babel.config.js，配置

```
[
  "import",
  {
    "libraryName": "fudata-ui",
    "libraryDirectory": "es/packages",
    "camel2DashComponentName": false
  },
  "fudata-ui"
]
```

该配置只适合组件的按需加载，组件库中的 method，hooks，request 不适用该配置，需要直接通过指定路径来进行加载`import {setObjToStr} from 'fudata-ui/es/method'`

> 需要注意：babel-plugin-import 会对大写和驼峰的字符串进行转换。可以设置 camel2DashComponentName 取消了 babel 的转换。
