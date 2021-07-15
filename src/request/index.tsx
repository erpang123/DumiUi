import { message } from 'antd'

const axios = (window as any).axios

export const Axios = axios.create({
  baseURL: '/',
  timeout: 0,
  responseType: 'json',
    // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true
})

let pending: any = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken; // axios的取消函数
// qs只能转对象(使用JSON代替)
const returnProp = (str: any) => {
  if (str && typeof str === 'string') {
    return JSON.parse(str)
  }
  return str
}
// 将请求中的参数拼接成字符串
const createU = (config: any = {}) => {
  let params = JSON.stringify(returnProp(config.params))
  let data = JSON.stringify(returnProp(config.data))
  return [config.url, config.method, params, data].join('&')
}

// 拦截请求，判断当前请求是否已存在
const removeRepeatUrl = (ever: any, reqObj: any) => {
  for(let p = pending.length - 1; p >= 0; p--){
    if(pending[p].u === createU(ever)) { // 当前请求在数组中存在时执行函数体
      if (reqObj) {
        reqObj.f()
      } else {
        pending.splice(p, 1); // 把这条记录从数组中移除
      }
      return
    }
  }
  // 新增未使用的请求
  if (reqObj) {
    pending.push(reqObj)
  }
}

// 移除完成的请求
const removeRequest = (ever: any) => {
  for(let p = pending.length - 1; p >= 0; p--){
    if(pending[p].u === createU(ever)) { // 当前请求在数组中存在时执行函数体
      pending.splice(p, 1); // 把这条记录从数组中移除
      return
    }
  }
}

// 添加请求拦截器
Axios.interceptors.request.use((config: any) => {
  let reqObj
  config.method = config.method || 'get'
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8'
  }
  config.headers = headers
  config.cancelToken = new cancelToken((c: any)=>{
    // 自定义唯一标识
    reqObj = {
      u: createU(config),
      f: c
    }
  });
  // 在一个ajax发送前执行一下取消操作
  removeRepeatUrl(config, reqObj);
  return config
}, (err: any) => {
  console.log(err)
  return Promise.reject(err)
})
// 添加响应拦截器
Axios.interceptors.response.use((res: any) => {
  removeRequest(res.config);  // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
  const { data } = res
  // 文件流对象返回res
  if (data instanceof Blob) {
    return res
  }
  // const { body } = data
    // const { errorCode, errorMsg } = body
  return data
}, (err: any) => {
  if (err && err.response) {
    // 请求失败也需要移除请求
    removeRequest(err.response.config);
    // 统一拦截错误
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址未找到: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  }
  if (err.response) {
    message.error(err.response.status + ':' + err.message)
  } else {
    let errText = '该请求正在进行中，请不要重复请求'
    errText = err ? err.message ? err.message : errText : errText
    message.error(errText)
  }
  return Promise.reject(err)
})