import clsx from 'clsx'

import s from './CalendarDay.module.scss'

import { SelectedDate } from '../utils/getCalendarDays'
import { TODAYS_DAY } from '../variables'

type Props = {
  date: SelectedDate
  onClick: (date: SelectedDate) => void
  selectedDate: SelectedDate
  selectedMonth: number
}

export const CalendarDay = ({ date, onClick, selectedDate, selectedMonth }: Props) => {
  const onClickHandler = () => {
    onClick(date)
  }

  const { day, month } = date

  const isFromCurrentMonth = month === selectedMonth

  return (
    <div
      className={clsx(s.calendarDay, {
        [s.selected]: JSON.stringify(selectedDate) === JSON.stringify(date),
      })}
      onClick={onClickHandler}
    >
      <span
        className={clsx({
          [s.dayFromCurrentMonth]: isFromCurrentMonth,
          [s.today]: day === TODAYS_DAY && isFromCurrentMonth,
        })}
      >
        {day}
      </span>
    </div>
  )
}
