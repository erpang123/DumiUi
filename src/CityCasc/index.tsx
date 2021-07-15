import React, { useEffect, useState } from 'react'
import { Cascader } from 'antd'
const provinces = require('./cityInfo/provinces.json')
const cities = require('./cityInfo/cities.json')
const areas = require('./cityInfo/areas.json')
const streets = require('./cityInfo/streets.json')

export default (props: any) => {
  const { options, otherProps } = props
  const [defaultOptions, setDefaultOptions]: [any, Function] = useState([])
  
  const onChange = (val: any) => {
    console.log(val)
  }

  // 懒加载
  const loadData = (selectedOptions: any) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      const list: any = []
      cities.forEach((el: any) => {
        if (targetOption.value === el.provinceCode) {
          list.push({
            value: el.code,
            label: el.name
          })
        }
      })
      targetOption.loading = false;
      targetOption.children = list;
      const newOption = JSON.parse(JSON.stringify(options))
      setDefaultOptions(newOption)
    }, 1000);
  };

  useEffect(() => {
    const pLists = [provinces, cities, areas, streets]
    const prevCode = ['', 'provinceCode', 'cityCode', 'areaCode']
    let obj: any = {}
    let proArr: any = []
    // 遍历的所有数组
    for (let i = pLists.length - 1; i >= 0; i--) {
      const arr = pLists[i]
      arr.forEach((el: any) => {
        const nObj: any = {
          value: el.code,
          label: el.name
        }
        // 最后一级不存在children
        if (i !== pLists.length - 1) {
          nObj.children = obj[el.code] || []
        }
        // 与上层的关联关系，最上层无该参数
        if (prevCode[i]) {
          if (obj[el[prevCode[i]]]) {
            obj[el[prevCode[i]]].push(nObj)
          } else {
            obj[el[prevCode[i]]] = [nObj]
          }
        } else {
          proArr.push(nObj)
        }
      })
    }
  
    setDefaultOptions(proArr)
  }, [])

  return (
    <Cascader options={options || defaultOptions} onChange={onChange} showSearch={true} placeholder="请选择地区" {...otherProps} />
  )
}
