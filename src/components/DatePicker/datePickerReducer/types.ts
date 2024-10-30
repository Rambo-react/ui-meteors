import { setCalendarDataAC, setSelectedDateAC, toggleIsCalendarOpenAC } from './datePickerReducer'

export type DatePickerState = {
  calendarData: CalendarData
  isCalendarOpen: boolean
  selectedDate: SelectedDate
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
  | ReturnType<typeof setCalendarDataAC>
  | ReturnType<typeof setSelectedDateAC>
  | ReturnType<typeof toggleIsCalendarOpenAC>
