/**
 * @file Present.js  类文件
 */
import * as utils from './utils.js'
import { globalLocales } from '../locale/index.js'
import { INVALID_DATE_STRING } from './constant.js'

/**
 * @class Presentjs 类
 */
export class Presentjs {
  /**
   * @description  本地化语言
   * @member { String }  locale
   * @memberof Presentjs
   */
  $L
  /**
   * @description  日期
   * @member { Date }  date
   * @memberof Presentjs
   */
  $P
  /**
   * @constructor
   * @description: 构造函数
   * @memberof Presentjs
   * @param { Object } config
   *
   */
  constructor(config) {
    this.$L = utils.parseLocale(config.locale, null, true)
    console.log(this.$L)
    this.parse(config)
  }
  /**
   * @function parse
   * @description: 转换日期为Date 对象 并初始化
   * @param {object} config
   * @menmberof Presentjs
   */
  parse(config) {
    this.$P = utils.parseDate(config)
    this.$x = config.x || {}
    this.init()
  }

  /**
   * @function init
   * @description: chunk date into year, month, date, hour, minute, second, millisecond
   * @memberof Presentjs
   */
  init() {
    const { $P } = this
    this.$y = $P.getFullYear() //year
    this.$M = $P.getMonth() //month
    this.$D = $P.getDate() //date
    this.$W = $P.getDay() //week
    this.$H = $P.getHours() //hour
    this.$m = $P.getMinutes() //minute
    this.$s = $P.getSeconds() //second
    this.$ms = $P.getMilliseconds() //millisecond
  }

  /**
   * @function clone
   * @description:克隆一个新的Presentjs对象
   * @memberof Presentjs
   * @returns { Presentjs }
   */
  clone() {
    return utils.wrapper(new Date(this.$P), this)
  }
  /**
   * @function isValid
   * @description: check if the date is valid
   * @returns { Boolean }
   */
  isValid() {
    return !(this.$P.toString() === INVALID_DATE_STRING)
  }
  /**
   * @function $locale
   * @description: get locale
   * @returns {String}
   */
  $locale() {
    return globalLocales[this.$L]
  }
  // 获取utc偏移量
  utcOffset() {
    // 获取时区偏移量
    return -Math.round(this.$p.getTimezoneOffset() / 15) * 15
  }

  format(formatStr) {
    debugger
    console.log(formatStr)
    const locale = this.$locale()
    if (!this.isValid()) return locale.invalidDate || INVALID_DATE_STRING
    const str = formatStr || FORMAT_DEFAULT
    const zoneStr = utils.padZoneString(this)

    const { $H, $m, $M } = this

    const { weekdays, months, meridiem } = locale // 获取本地化

    const getShort = (arr, index, full, length) => (arr && (arr[index] || arr(this, str))) || full[index].slice(0, length)
    const get$H = (num) => utils.padStart($H % 12 || 12, num, '0')

    const meridiemFunc =
      meridiem ||
      ((hour, minute, isLowercase) => {
        const m = hour < 12 ? 'AM' : 'PM'
        return isLowercase ? m.toLowerCase() : m
      })

    const matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: utils.padStart($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMMM: getShort(months, $M),
      D: this.$D,
      DD: utils.padStart(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: utils.padStart($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: utils.padStart($m, 2, '0'),
      s: String(this.$S),
      ss: utils.padStart(this.$S, 2, '0'),
      SSS: utils.padStart(this.$ms, 3, '0'),
      Z: zoneStr,
    }

    return str.replace(REGEX_FORMAT, (match, $1) => {
      console.log(match)
      console.log($1)
      return $1 || matches[match] || zoneStr.replace(':', '')
    })
  }
}
