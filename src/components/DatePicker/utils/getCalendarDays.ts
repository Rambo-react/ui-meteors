import { getDaysInMonth, getTime } from '.'

export function getCalendarDays(year: number, month: number): number[] {
  const firstDayOfCurrentMonth = new Date(year, month, 1)

  const firstDayPosition = firstDayOfCurrentMonth.getDay() || 7

  const previousMonth = month ? month - 1 : 11
  const previousMonthYear = previousMonth === 11 ? year - 1 : year

  const nextMonth = month - 11 ? month + 1 : 0
  const nextMonthYear = nextMonth === 0 ? year + 1 : year

  const datesInCalendar: number[] = []

  // add previous month days
  for (let i = 0; i < firstDayPosition - 1; i++) {
    datesInCalendar.unshift(
      getTime({
        day: getDaysInMonth(year, previousMonth) - i,
        month: previousMonth,
        year: previousMonthYear,
      })
    )
  }

  // add current month days
  for (let i = 1; i <= getDaysInMonth(year, month); i++) {
    datesInCalendar.push(getTime({ day: i, month, year }))
  }

  // add next month days
  if (datesInCalendar.length !== 42) {
    const iterationCount = 42 - datesInCalendar.length

    for (let i = 1; i <= iterationCount; i++) {
      datesInCalendar.push(getTime({ day: i, month: nextMonth, year: nextMonthYear }))
    }
  }

  return datesInCalendar
}
