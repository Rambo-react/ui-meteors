import { TODAYS_MONTH, TODAYS_YEAR } from '../variables'
import { CalendarData, DatePickerReducerActions, DatePickerState, SelectedDate } from './types'

// initial state
export const datePickerInitialState: DatePickerState = {
  calendarData: {
    selectedMonth: TODAYS_MONTH,
    selectedYear: TODAYS_YEAR,
  },
  isCalendarOpen: false,
  selectedDates: [],
}

// reducer
export const datePickerReducer = (
  state: DatePickerState,
  action: DatePickerReducerActions
): DatePickerState => {
  switch (action.type) {
    case 'TOGGLE_IS_CALENDAR_OPEN': {
      return { ...state, isCalendarOpen: !state.isCalendarOpen }
    }
    case 'ADD_SELECTED_DATE': {
      if (action.isRangeInput) {
        if (state.selectedDates.length === 2) {
          return { ...state, selectedDates: [action.selectedDate] }
        }

        return { ...state, selectedDates: [...state.selectedDates, action.selectedDate].sort() }
      } else {
        return { ...state, selectedDates: [action.selectedDate] }
      }
    }
    case 'SET_CALENDAR_DATA': {
      return { ...state, calendarData: action.calendarData }
    }
    default: {
      return state
    }
  }
}

// actions
export const toggleIsCalendarOpenAC = () => ({ type: 'TOGGLE_IS_CALENDAR_OPEN' }) as const

export const addSelectedDateAC = (selectedDate: number, isRangeInput: boolean) =>
  ({ isRangeInput, selectedDate, type: 'ADD_SELECTED_DATE' }) as const

export const setCalendarDataAC = (calendarData: CalendarData) =>
  ({ calendarData, type: 'SET_CALENDAR_DATA' }) as const
