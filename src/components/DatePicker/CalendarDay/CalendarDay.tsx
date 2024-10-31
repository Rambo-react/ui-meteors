import clsx from 'clsx'

import s from './CalendarDay.module.scss'

import { getDayMonthYear } from '../utils/getDayMonthYear'
import { TODAYS_DAY } from '../variables'

type Props = {
  dateInMs: number
  isWeekend?: boolean
  onClick: (date: number) => void
  selectedDates: number[]
  selectedMonth: number
}

export const CalendarDay = ({
  dateInMs,
  isWeekend,
  onClick,
  selectedDates,
  selectedMonth,
}: Props) => {
  const onClickHandler = () => {
    onClick(dateInMs)
  }

  const { day, month } = getDayMonthYear(dateInMs)

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
      onClick={onClickHandler}
    >
      <span
        className={clsx({
          [s.dayFromCurrentMonth]: isFromCurrentMonth,
          [s.today]: day === TODAYS_DAY && isFromCurrentMonth,
          [s.weekend]: isFromCurrentMonth && isWeekend,
        })}
      >
        {day}
      </span>
    </div>
  )
}
