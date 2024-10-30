import { TODAYS_DAY, TODAYS_MONTH, TODAYS_YEAR } from '../variables'
import { CalendarData, DatePickerReducerActions, DatePickerState, SelectedDate } from './types'

// initial state
export const datePickerInitialState: DatePickerState = {
  calendarData: {
    selectedMonth: TODAYS_MONTH,
    selectedYear: TODAYS_YEAR,
  },
  isCalendarOpen: false,
  selectedDate: {
    day: TODAYS_DAY,
    month: TODAYS_MONTH,
    year: TODAYS_YEAR,
  },
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
    case 'SET_SELECTED_DATE': {
      return { ...state, selectedDate: action.selectedDate }
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

export const setSelectedDateAC = (selectedDate: SelectedDate) =>
  ({ selectedDate, type: 'SET_SELECTED_DATE' }) as const

export const setCalendarDataAC = (calendarData: CalendarData) =>
  ({ calendarData, type: 'SET_CALENDAR_DATA' }) as const
