import { useState } from 'react'

import clsx from 'clsx'

import s from './DatePicker.module.scss'

import { Icon } from '../Icon'
import { SelectedDate, getCalendarDays } from './utils/getCalendarDays'

const MONTHS_NUMBER: Record<number, string> = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
}

const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

const TODAY = new Date()

type Props = {
  onDateSelect: (date: Date) => void
}

export const DatePicker = ({ onDateSelect }: Props) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [{ selectedMonth, selectedYear }, setCalendarState] = useState<CalendarState>({
    selectedMonth: TODAY.getMonth(),
    selectedYear: TODAY.getFullYear(),
  })
  const [selectedDate, setSelectedDate] = useState<SelectedDate>({
    day: TODAY.getDate(),
    month: TODAY.getMonth(),
    year: TODAY.getFullYear(),
  })

  const toggleCalendarHandler = () => {
    setIsCalendarOpen(!isCalendarOpen)
  }

  const mappedWeekDays = WEEK_DAYS.map(day => <div key={day}>{day}</div>)

  const mappedCalendarDays = getCalendarDays(selectedYear, selectedMonth).map((date, i) => {
    const dayOnClickHandler = () => {
      setSelectedDate(date)
      onDateSelect(new Date(date.year, date.month, date.day))
    }

    const { day, month } = date

    const isFromCurrentMonth = month === selectedMonth

    return (
      <div
        className={clsx({
          [s.selected]: JSON.stringify(selectedDate) === JSON.stringify(date),
        })}
        key={`${day}${i}`}
        onClick={dayOnClickHandler}
      >
        <span
          className={clsx({
            [s.dayFromCurrentMonth]: isFromCurrentMonth,
            [s.today]: day === TODAY.getDate() && isFromCurrentMonth,
          })}
        >
          {day}
        </span>
      </div>
    )
  })

  return (
    <div className={s.datePicker}>
      <span>Date select</span>
      <div className={s.datePickerForm} onClick={toggleCalendarHandler}>{`${selectedDate.day}/${
        selectedDate.month + 1
      }/${selectedDate.year}`}</div>

      {isCalendarOpen && (
        <div className={s.calendar}>
          <div className={s.monthsSettings}>
            <span>{`${MONTHS_NUMBER[selectedMonth]} ${selectedYear}`}</span>

            <div>
              <button
                onClick={() =>
                  setCalendarState({
                    selectedMonth: selectedMonth ? selectedMonth - 1 : 11,
                    selectedYear,
                  })
                }
              >
                <Icon height={24} id={'chevron_left'} width={24} />
              </button>
              <button
                onClick={() =>
                  setCalendarState({
                    selectedMonth: selectedMonth - 11 ? selectedMonth + 1 : 0,
                    selectedYear,
                  })
                }
              >
                <Icon height={24} id={'chevron_right'} width={24} />
              </button>
            </div>
          </div>

          <div className={s.daysInWeek}>{mappedWeekDays}</div>

          <div className={s.calendarDays}>{mappedCalendarDays}</div>
        </div>
      )}
    </div>
  )
}

type CalendarState = {
  selectedMonth: number
  selectedYear: number
}
