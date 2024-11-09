import { useReducer, useRef } from 'react'

import {
  datePickerInitialState,
  datePickerReducer,
  toggleIsCalendarOpenAC,
} from './datePickerReducer'

export const useDatePicker = () => {
  const [{ isCalendarOpen, selectedDates }, dispatch] = useReducer(
    datePickerReducer,
    datePickerInitialState
  )

  const calendarRef = useRef<HTMLDivElement>(null)

  const onCalendarBlur = () => {
    if (isCalendarOpen) {
      dispatch(toggleIsCalendarOpenAC())
    }
  }

  return { calendarRef, dispatch, isCalendarOpen, onCalendarBlur, selectedDates }
}
