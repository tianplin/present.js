import { Presentjs } from './present.js'

const isPresentjs = (p) => p instanceof Presentjs //是否是Presentjs实例

export const presentjs = function (data, c) {
  debugger
  if (isPresentjs(data)) {
    return data.clone() //如果是presentjs对象，则返回一个新的presentjs对象
  }
  const config = typeof c == 'object' ? c : {}
  config.date = data //设置日期
  config.args = arguments //设置参数
  return new Presentjs(config) //返回一个新的presentjs对象
}
