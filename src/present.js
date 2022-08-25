/**
 * @file Present.js  class file
 */
import * as utils from './utils.js'
import { globalLocales } from '../locale/index.js'
import { INVALID_DATE_STRING } from './constant.js'

/**
 * @class Present class
 */
export class Presentjs {
  /**
   * @description  locale language
   * @member { String }  locale
   * @memberof Presentjs
   */
  $L
  /**
   * @description  date
   * @member { Date }  date
   * @memberof Presentjs
   */
  $P

  /**
   * @description: constructor
   * @param { Object } config
   * @Constructor
   */
  constructor(config) {
    this.$L = utils.parseLocale(config.locale, null, true)
    console.log(this.$L)
    this.parse(config)
  }
  // 解析
  parse(config) {
    this.$p = utils.parseDate(config)
    this.$x = config.x || {} //
    this.init() //初始化
  }
  // init date object
  init() {
    const { $p } = this
    this.$y = $p.getFullYear() //年份
    this.$M = $p.getMonth() //月份
    this.$D = $p.getDate() //日期
    this.$W = $p.getDay() //星期
    this.$H = $p.getHours() //小时
    this.$m = $p.getMinutes() //分钟
    this.$s = $p.getSeconds() //秒
    this.$ms = $p.getMilliseconds() //毫秒
  }
  clone() {
    return utils.wrapper(new Date(this.$p), this)
  }
  isValid() {
    return !(this.$p.toString() === INVALID_DATE_STRING)
  }
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
