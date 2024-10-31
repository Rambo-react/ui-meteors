import clsx from 'clsx'

import s from './CalendarDay.module.scss'

import { getDayMonthYear } from '../../utils'
import { TODAYS_DAY, TODAYS_MONTH, TODAYS_YEAR, WEEKEND_INDEXES } from '../../variables'

type Props = {
  dateInMs: number
  index: number
  onDateSelect: (dateInMs: number) => void
  selectedDates: number[]
  selectedMonth: number
}

export const CalendarDay = ({
  dateInMs,
  index,
  onDateSelect,
  selectedDates,
  selectedMonth,
}: Props) => {
  const onDayClickHandler = () => {
    onDateSelect(dateInMs)
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
      onClick={onDayClickHandler}
    >
      <span
        className={clsx(s.day, {
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
