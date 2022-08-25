/**
 * @file constant.js  constant file
 *
 */

/**
 * @description  60 seconds
 * @type {number}
 */
export const SECOND_PER_MINUTE = 60 //

/**
 * @description  1000 milliseconds
 * @type {number}
 */
export const MILLISECOND_PER_SECOND = 1e3

/**
 * @description  1000 milliseconds * 60 seconds = 6000 milliseconds
 * @type {number}
 */
export const MILLISECOND_PER_MINUTE = MILLISECOND_PER_SECOND * SECOND_PER_MINUTE

/**
 * @description  1000 milliseconds * 60 seconds * 60 minutes = 3600000 milliseconds
 * @type {number}
 */
export const MILLISECOND_PER_HOUR = MILLISECOND_PER_MINUTE * 60

/**
 *  @decription 1000 milliseconds * 60 seconds * 60 minutes * 24 hours = 86400000 milliseconds
 *  @type {number}
 */
export const MILLISECOND_PER_DAY = MILLISECOND_PER_HOUR * 24 //86400000 1000ms * 60 * 60 * 24 等于1天

/**
 * @description  1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 7 days = 604800000 milliseconds
 * @type {number}
 */
export const MILLISECOND_PER_WEEK = MILLISECOND_PER_DAY * 7

/**
 * @description  1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 30 days = 2592000000 milliseconds
 * @type {number}
 */
export const MILLISECOND_PER_MONTH = MILLISECOND_PER_DAY * 30

/**
 * @description  1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 365 days = 31536000000 milliseconds
 */
export const MILLISECOND_PER_YEAR = MILLISECOND_PER_DAY * 365

/**
 * @description millisecond ms
 * @type {String}
 */
export const MILLISECOND = 'millisecond'

/**
 * @description second s
 * @type {String}
 */
export const SECOND = 'second'

/**
 * @description minute m
 * @type {String}
 */
export const MINUTE = 'minute'

/**
 * @descrition hour h
 * @type {String}
 */
export const HOUR = 'hour'

/**
 * @description day d
 * @type {String}
 */
export const DAY = 'day'

/**
 * @decription week w
 * @type {String}
 */
export const WEEK = 'week'

/**
 * @description month M
 * @type {String}
 */
export const MONTH = 'month'

/**
 * @description quarter Q
 * @type {String}
 */
export const QUARTER = 'quarter'

/**
 * @description year y
 * @type {String}
 */
export const YEAR = 'year'

/**
 * @description date time
 * @type {String}
 */
export const DATE = 'date'

/**
 * @description format date
 * @type {String}
 */
export const FORMART_DATE = 'YYYY-MM-DDTHH:mm:ssZ'

/**
 * @descrition invalid date string
 * @type {String}
 */
export const INVALID_DATE_STRING = 'Invalid Date'

/**
 * @descriton regex parse date
 * @type {RegExp}
 */
export const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/

/**
 * @descrition regex format date
 */
export const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g //
