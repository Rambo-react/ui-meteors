import { Dispatch } from 'react'

import clsx from 'clsx'

import s from './CalendarDay.module.scss'

import { addSelectedDateAC } from '../datePickerReducer/datePickerReducer'
import { DatePickerReducerActions } from '../datePickerReducer/types'
import { getDayMonthYear } from '../utils/getDayMonthYear'
import { TODAYS_DAY, TODAYS_MONTH, TODAYS_YEAR, WEEKEND_INDEXES } from '../variables'

type Props = {
  date: number
  dateInMs: number
  dispatch: Dispatch<DatePickerReducerActions>
  index: number
  isRangeInput: boolean
  onDateSelect: (date: Date[]) => void
  selectedDates: number[]
  selectedMonth: number
}

export const CalendarDay = ({
  date,
  dateInMs,
  dispatch,
  index,
  isRangeInput,
  onDateSelect,
  selectedDates,
  selectedMonth,
}: Props) => {
  const dayOnClickHandler = () => {
    dispatch(addSelectedDateAC(date, isRangeInput))

    if (isRangeInput) {
      if (selectedDates.length === 2) {
        onDateSelect([new Date(date)])
      } else {
        onDateSelect([...selectedDates, date].sort().map(dateInMs => new Date(dateInMs)))
      }
    } else {
      onDateSelect([new Date(date)])
    }
  }

  const isWeekend = WEEKEND_INDEXES.includes(index)

  const { day, month, year } = getDayMonthYear(dateInMs)

  const isFromCurrentMonth = month === selectedMonth

  return (
    <div
      className={clsx(s.calendarDay, {
        [s.endDate]: selectedDates.length === 2 && selectedDates[1] === dateInMs,
        [s.intermediateDate]:
          selectedDates.length === 2 && selectedDates[0] < dateInMs && dateInMs < selectedDates[1],
        [s.selected]: selectedDates.length === 1 && selectedDates[0] === dateInMs,
        [s.startDate]: selectedDates.length === 2 && selectedDates[0] === dateInMs,
      })}
      onClick={dayOnClickHandler}
    >
      <span
        className={clsx({
          [s.dayFromCurrentMonth]: isFromCurrentMonth,
          [s.dayFromOtherMonth]: !isFromCurrentMonth,
          [s.today]: day === TODAYS_DAY && month === TODAYS_MONTH && year === TODAYS_YEAR,
          [s.weekend]: isFromCurrentMonth && isWeekend,
        })}
      >
        {day}
      </span>
    </div>
  )
}
