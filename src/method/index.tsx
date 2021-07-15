// 对象转字符串，使用&拼接
export const setObjToStr = (obj: any) => {
  if (obj && !Array.isArray(obj) && typeof obj === 'object') {
    const keys: any = Object.keys(obj)
    const values: any = Object.values(obj)
    let strArr: any = []
    keys.forEach((el: any, index: any) => {
      let kStr = `${el}=${encodeURIComponent(values[index])}`
      strArr.push(kStr)
    })
    return strArr.join('&')
  }
  return obj
}

// 将时间戳转换为特定格式
export const formatTime = (timestamp = 0, format = 'hh:mm:ss') => {
  let time = timestamp;
  const zero = (c: any) => (c < 10 ? `0${c}` : c);
  const arr: any = {
    'h+': 3600 * 1000,
    'm+': 60 * 1000,
    's+': 1000
  };
  const ls = timestamp % 1000
  const tempArr: any = [];
  Object.keys(arr).map((k) => {
    if (new RegExp(`(${k})`).test(format)) {
      const c = Math.floor(time / arr[k]);
      tempArr.push(zero(c));
      time -= c * arr[k];
    }
    return null;
  });
  if (/S+/g.test(format)) {
    tempArr.push(ls)
  }
  return tempArr.join(':');
};

/**
 * 用于数组，对象拷贝
 * @param {*} data 数组或对象类型
 */
 const checkType = (data: any) => {
  return Object.prototype.toString.call(data).slice(8, -1);
}
 export const deepCopy = (data: any) => {
  let newData: any = null;
  if (checkType(data) === "Array") {
    newData = [];
  } else if (checkType(data) === "Object") {
    newData = {};
  } else {
    return data;
  }
  for (const i in data) {
    if (checkType(data[i]) === 'Object' || checkType(data[i]) === 'Array') {
      newData[i] = deepCopy(data[i]);
    } else {
      newData[i] = data[i];
    }
  }
  return newData;
}
 