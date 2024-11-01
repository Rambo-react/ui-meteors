export const MONTHS_NUMBER: Record<number, string> = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
}
export const TODAY = new Date()
export const TODAYS_DAY = TODAY.getDate()
export const TODAYS_MONTH = TODAY.getMonth()
export const TODAYS_YEAR = TODAY.getFullYear()
export const TODAY_IN_MS = TODAY.getTime()
export const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
export const WEEKEND_INDEXES = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41]
