export const SECOND_PER_MINUTE = 60 // 60秒

export const MILLISECOND_PER_SECOND = 1e3 // 1000毫秒

export const MILLISECOND_PER_MINUTE = MILLISECOND_PER_SECOND * SECOND_PER_MINUTE //60000 1000ms * 60 等于1分钟

export const MILLISECOND_PER_HOUR = MILLISECOND_PER_MINUTE * 60 //3600000 1000ms * 60 * 60 等于1小时

export const MILLISECOND_PER_DAY = MILLISECOND_PER_HOUR * 24 //86400000 1000ms * 60 * 60 * 24 等于1天

export const MILLISECOND_PER_WEEK = MILLISECOND_PER_DAY * 7 //604800000 1000ms * 60 * 60 * 24 * 7 等于1周

export const MILLISECOND_PER_MONTH = MILLISECOND_PER_DAY * 30 //2628000000 1000ms * 60 * 60 * 24 * 30 等于1月

export const MILLISECOND_PER_YEAR = MILLISECOND_PER_DAY * 365 //31536000000 1000ms * 60 * 60 * 24 * 365 等于1年

export const MILLISECOND = 'millisecond' //毫秒 ms

export const SECOND = 'second' //秒 s

export const MINUTE = 'minute' //分 m

export const HOUR = 'hour' //时 h

export const DAY = 'day' //天 d

export const WEEK = 'week' //周 w

export const MONTH = 'month' //月 M

export const QUARTER = 'quarter' //季 Q

export const YEAR = 'year' //年 y

export const DATE = 'date' //日期

export const FORMART_DATE = 'YYYY-MM-DDTHH:mm:ssZ' //日期格式

export const INVALID_DATE_STRING = 'Invalid Date' //不合法的日期字符串

export const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/ //日期解析正则

export const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g //日期格式化正则
