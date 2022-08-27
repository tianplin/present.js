import { Presentjs } from './Present.js'

/**
 * @function isPresentJs
 * @description: 判断是否是Presentjs对象
 * @param {*} p
 * @returns {Boolean} true 或者 false
 */
const isPresentjs = (p) => p instanceof Presentjs

/**
 * @function presentjs
 * @description: 创建Presentjs对象
 * @param {*} data 日期对象或者日期字符串或者时间戳
 * @param {*} c  配置文件
 * @returns {Presentjs} 返回实例化的Presentjs对象
 */
export const presentjs = function (data, c) {
  if (isPresentjs(data)) {
    return data.clone() // 如果是Presentjs对象，直接返回
  }
  const config = typeof c == 'object' ? c : {}
  config.date = data
  config.args = arguments // 保存参数
  return new Presentjs(config)
}
