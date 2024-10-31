import { SelectedDate } from '../datePickerReducer'

export function getDayMonthYear(time: number): SelectedDate {
  const date = new Date(time)

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }
}
