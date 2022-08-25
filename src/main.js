import { Presentjs } from './Present.js'

/**
 * @function isPresentJs
 * @description: judge whether the parameter is a Presentjs object
 * @param {*} p
 * @returns {Boolean} true or false
 */
const isPresentjs = (p) => p instanceof Presentjs

/**
 * @function presentjs
 * @description: instance of Presentjs
 * @param {*} data any data for init
 * @param {*} c  config
 * @returns {Presentjs} new Presentjs instance
 */
export const presentjs = function (data, c) {
  if (isPresentjs(data)) {
    return data.clone() // if data is Presentjs instance, return clone
  }
  const config = typeof c == 'object' ? c : {}
  config.date = data
  config.args = arguments // save arguments
  return new Presentjs(config)
}
