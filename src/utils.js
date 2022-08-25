import { presentjs } from './main.js'
import { REGEX_PARSE } from './constant.js'
import { globalLocales, globalLocale } from '../locale/index.js'

export function wrapper(date, instance) {
  presentjs(date, {
    local: instance.$L, //语言
    utc: instance.$u, //utc时间
    x: instance.$x, //时区
    $offset: instance.$offset, //时区偏移量
  })
}
//解析 区域 并添加值
export function parseLocale(preset, object, isLocal) {
  //parset 预制 object 对象 isLocal 是否是本地日期
  debugger
  let lc
  if (!preset) return globalLocale
  if (typeof preset === 'string') {
    const presetLower = preset.toLowerCase() //转换为小写
    if (globalLocales[presetLower]) {
      lc = presetLower
    }

    if (object) {
      globalLocales[presetLower] = object
    }
    const presetSplit = preset.split('-') //分割

    if (!lc && presetSplit.length > 1) {
      return parseLocale(presetSplit[0])
    }
  } else {
    const { name } = preset //获取名称
    globalLocales[name] = preset
  }
  if (!isLocal && lc) {
    globalLocale = lc
  }
  return lc || (!isLocal && globalLocale)
}

//解析日期
export function parseDate(config) {
  console.log('解析日期')
  const { date, utc } = config
  if (date === null) return new Date(NaN) //日期为null
  if (isUndefined(date)) return new Date()
  if (date instanceof Date) return new Date(date)
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE)
    if (d) {
      const m = d[2] - 1 || 0
      const ms = (d[7] || '0').substring(0, 3)
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms))
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
    }
    return new Date(date) // 返回日期
  }
}

//是否为undefined
export function isUndefined(value) {
  return value === undefined
}

export function padStart(string, length, pad) {
  const s = String(string)
  if (!s || s.length >= length) return string
  return `${Array(length + 1 - s.length).join(pad)}${string}`
}

export function padZoneString(instance) {
  const negMinutes = -instance.utcOffset() //获取时区偏移量
  const minutes = Math.abs(negMinutes) // 获取绝对值
  const hourOffset = Math.floor(minutes / 60) // 小时偏移量
  const minuteOffset = minutes % 60 // 分钟偏移量
  return `${negMinutes <= 0 ? '+' : '-'}${padStart(hourOffset, 2, '0')}:${padStart(minuteOffset, 2, '0')}` // 返回时区字符串
}
