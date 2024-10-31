import { addSelectedDateAC, setCalendarDataAC, toggleIsCalendarOpenAC } from './datePickerReducer'

export type DatePickerState = {
  calendarData: CalendarData
  isCalendarOpen: boolean
  selectedDates: number[]
}
export type CalendarData = {
  selectedMonth: number
  selectedYear: number
}
export type SelectedDate = {
  day: number
  month: number
  year: number
}
export type DatePickerReducerActions =
  | ReturnType<typeof addSelectedDateAC>
  | ReturnType<typeof setCalendarDataAC>
  | ReturnType<typeof toggleIsCalendarOpenAC>
