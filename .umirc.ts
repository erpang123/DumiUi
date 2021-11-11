import { defineConfig } from 'dumi';

// 相关配置查看umi
export default defineConfig({
  title: 'fudata-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  scripts: [
    'https://gosspublic.alicdn.com/aliyun-oss-sdk-6.9.0.min.js',
    'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.1/moment.min.js',
  ],
  styles: [
    `.markdown table th {white-space: nowrap;} .markdown table td:nth-child(3) {color: #c41d7f;}`,
  ],
  proxy: {
    '/api': {
      target: 'https://api.doctorxiong.club', // 'http://fund.eastmoney.com/', // https://api.doctorxiong.club
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  dynamicImport: {},
  publicPath:
    process.env.NODE_ENV === 'production' ? '/DumiUi/docs-dist/' : '/', // 根据打包后的发布路径进行配置
  // more config: https://d.umijs.org/config
});
