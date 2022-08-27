/**
 * @file constant.js  常量文件
 *
 */

/**
 * @description  60 秒
 * @type {number}
 */
export const SECOND_PER_MINUTE = 60 //

/**
 * @description  1000 毫秒
 * @type {number}
 */
export const MILLISECOND_PER_SECOND = 1e3

/**
 * @description  1000 毫秒 * 60 秒 = 6000  毫秒
 * @type {number}
 */
export const MILLISECOND_PER_MINUTE = MILLISECOND_PER_SECOND * SECOND_PER_MINUTE

/**
 * @description  1000 毫秒 * 60 秒 * 60 分钟 = 3600000 毫秒
 * @type {number}
 */
export const MILLISECOND_PER_HOUR = MILLISECOND_PER_MINUTE * 60

/**
 *  @decription 1000 毫秒 * 60 秒 * 60 分钟 * 24 小时 = 86400000 毫秒
 *  @type {number}
 */
export const MILLISECOND_PER_DAY = MILLISECOND_PER_HOUR * 24

/**
 * @description  1000 毫秒 * 60 秒 * 60 分钟 * 24 小时 * 7 天 = 604800000 毫秒
 * @type {number}
 */
export const MILLISECOND_PER_WEEK = MILLISECOND_PER_DAY * 7

/**
 * @description  1000 毫秒 * 60 秒 * 60 分钟 * 24 小时 * 30 天 = 2592000000 毫秒
 * @type {number}
 */
export const MILLISECOND_PER_MONTH = MILLISECOND_PER_DAY * 30

/**
 * @description  1000 毫秒 * 60 秒 * 60 分钟 * 24 小时 * 365 天 = 31536000000 毫秒
 */
export const MILLISECOND_PER_YEAR = MILLISECOND_PER_DAY * 365

/**
 * @description 毫秒
 * @type {String}
 */
export const MILLISECOND = 'millisecond'

/**
 * @description 秒
 * @type {String}
 */
export const SECOND = 'second'

/**
 * @description 分钟
 * @type {String}
 */
export const MINUTE = 'minute'

/**
 * @descrition 小时
 * @type {String}
 */
export const HOUR = 'hour'

/**
 * @description 一天
 * @type {String}
 */
export const DAY = 'day'

/**
 * @decription 周
 * @type {String}
 */
export const WEEK = 'week'

/**
 * @description 月份
 * @type {String}
 */
export const MONTH = 'month'

/**
 * @description 季度
 * @type {String}
 */
export const QUARTER = 'quarter'

/**
 * @description 年份
 * @type {String}
 */
export const YEAR = 'year'

/**
 * @description 日期
 * @type {String}
 */
export const DATE = 'date'

/**
 * @description 格式化格式
 * @type {String}
 */
export const FORMART_DATE = 'YYYY-MM-DDTHH:mm:ssZ'

/**
 * @descrition 不可用表达
 * @type {String}
 */
export const INVALID_DATE_STRING = 'Invalid Date'

/**
 * @descriton 解析日期正则表达式
 * @type {RegExp}
 */
export const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/

/**
 * @descrition 格式化日期正则表达式
 */
export const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g //
