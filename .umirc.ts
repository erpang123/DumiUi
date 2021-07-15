import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'myDumiUi',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  scripts: ['https://gosspublic.alicdn.com/aliyun-oss-sdk-6.9.0.min.js', 'https://unpkg.com/axios/dist/axios.min.js'],
  styles: [`.markdown table th {white-space: nowrap;} .markdown table td:nth-child(3) {color: #c41d7f;}`],
  proxy: {
    '/api': {
      'target': 'https://api.doctorxiong.club',// 'http://fund.eastmoney.com/', // https://api.doctorxiong.club
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    }
  },
  copy: [
    // {
    //   from: 'src/CityCasc/cityInfo/provinces.json',
    //   to: 'dist/cityInfo/provinces.json'
    // },
    // {
    //   from: 'src/CityCasc/cityInfo/cities.json',
    //   to: 'dist/cityInfo/cities.json'
    // },
    // {
    //   from: 'src/CityCasc/cityInfo/areas.json',
    //   to: 'dist/cityInfo/areas.json'
    // },
    // {
    //   from: 'src/CityCasc/cityInfo/streets.json',
    //   to: 'dist/cityInfo/streets.json'
    // }
  ]
  // more config: https://d.umijs.org/config
});
