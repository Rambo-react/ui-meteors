// initial state
export const datePickerInitialState: DatePickerState = {
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
    default: {
      return state
    }
  }
}

// actions
export const toggleIsCalendarOpenAC = () => ({ type: 'TOGGLE_IS_CALENDAR_OPEN' }) as const

export const addSelectedDateAC = (selectedDate: number, isRangeInput: boolean) =>
  ({ isRangeInput, selectedDate, type: 'ADD_SELECTED_DATE' }) as const

// types
export type DatePickerState = {
  isCalendarOpen: boolean
  selectedDates: number[]
}
export type SelectedDate = {
  day: number
  month: number
  year: number
}
export type DatePickerReducerActions =
  | ReturnType<typeof addSelectedDateAC>
  | ReturnType<typeof toggleIsCalendarOpenAC>
