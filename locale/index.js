/**
 * @flie index.js  entry file
 */

/**
 * @description: global locale setter default is en
 * @type {string}
 */
export const globalLocale = 'en'

/**
 * @description: global locales cache for lazy loading
 * @type {object} globalLocales
 */
export const globalLocales = {}

/**
 * @description: global locales property is en
 * @type {object}  globalLocales.en
 * @property {string} globalLocales.en.name locale language name
 * @property {string} globalLocales.en.weekdays locale language weekdays
 * @property {string} globalLocales.en.months locale language months
 */
globalLocales[globalLocale] = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
}
