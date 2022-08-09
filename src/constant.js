export const second_per_minute = 60 // 60秒

export const millisecond_per_second = 1e3 // 1000毫秒

export const millisecond_per_minute = millisecond_per_second * second_per_minute //60000 1000ms * 60 等于1分钟

export const millisecond_per_hour = millisecond_per_minute * 60 //3600000 1000ms * 60 * 60 等于1小时

export const millisecond_per_day = millisecond_per_hour * 24 //86400000 1000ms * 60 * 60 * 24 等于1天

export const millisecond_per_week = millisecond_per_day * 7 //604800000 1000ms * 60 * 60 * 24 * 7 等于1周

export const millisecond_per_month = millisecond_per_day * 30 //2628000000 1000ms * 60 * 60 * 24 * 30 等于1月

export const millisecond_per_year = millisecond_per_day * 365 //31536000000 1000ms * 60 * 60 * 24 * 365 等于1年

export const MS = 'millisecond' //毫秒 ms

export const S = 'second' //秒 s

export const Min = 'minute' //分 m

export const H = 'hour' //时 h

export const D = 'day' //天 d

export const W = 'week' //周 w

export const M = 'month' //月 M

export const Q = 'quarter' //季 Q

export const Y = 'year' //年 y

export const DATE = 'date' //日期

export const FORMART_DATE = 'YYYY-MM-DDTHH:mm:ssZ' //日期格式

export const INVALID_DATE_STRING = 'Invalid Date' //不合法的日期字符串

export const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/ //日期解析正则

export const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g //日期格式化正则
