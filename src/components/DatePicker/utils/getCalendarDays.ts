import { SelectedDate } from '../datePickerReducer/types'
import { getDaysInMonth } from './getDaysInMonth'

export function getCalendarDays(year: number, month: number): SelectedDate[] {
  const firstDayOfCurrentMonth = new Date(year, month, 1)

  const firstDayPosition = firstDayOfCurrentMonth.getDay() // from 1

  const previousMonth = month ? month - 1 : 11
  const previousMonthYear = previousMonth === 11 ? year - 1 : year

  const nextMonth = month - 11 ? month + 1 : 0
  const nextMonthYear = nextMonth === 0 ? year + 1 : year

  const daysInCalendar: SelectedDate[] = []

  // add previous month days
  for (let i = 0; i < firstDayPosition - 1; i++) {
    daysInCalendar.unshift({
      day: getDaysInMonth(year, previousMonth) - i,
      month: previousMonth,
      year: previousMonthYear,
    })
  }

  // add current month days
  for (let i = 1; i <= getDaysInMonth(year, month); i++) {
    daysInCalendar.push({ day: i, month, year })
  }

  // add next month days
  if (daysInCalendar.length !== 42) {
    const iterationCount = 42 - daysInCalendar.length

    for (let i = 1; i <= iterationCount; i++) {
      daysInCalendar.push({ day: i, month: nextMonth, year: nextMonthYear })
    }
  }

  return daysInCalendar
}
