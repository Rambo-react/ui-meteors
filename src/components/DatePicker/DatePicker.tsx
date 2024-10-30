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
  disabled?: boolean
  error?: string
  label?: string
  onDateSelect: (date: Date) => void
}

export const DatePicker = ({ disabled, error, label = 'Select Date', onDateSelect }: Props) => {
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
    if (!disabled) {
      setIsCalendarOpen(!isCalendarOpen)
    }
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

  const goToMonth = (isGoToPrevMonth: boolean) => {
    let shouldChangeYear = false
    let month = selectedMonth
    let year = selectedYear

    if (month === (isGoToPrevMonth ? 0 : 11)) {
      month = isGoToPrevMonth ? 11 : 0
      shouldChangeYear = true
    } else {
      month += isGoToPrevMonth ? -1 : 1
    }

    if (shouldChangeYear) {
      year += isGoToPrevMonth ? -1 : 1
    }

    setCalendarState({
      selectedMonth: month,
      selectedYear: year,
    })
  }

  return (
    <div
      className={clsx(s.datePicker, {
        [s.disabled]: disabled,
        [s.error]: error,
      })}
    >
      <span>{label}</span>

      <div
        className={clsx(s.dateDisplayer, {
          [s.calendarExpanded]: isCalendarOpen, // for background while calendar opened
        })}
        onClick={toggleCalendarHandler}
      >
        {`${selectedDate.day}/${selectedDate.month + 1}/${selectedDate.year}`}
        <Icon
          fill={error ? 'var(--color-danger-500)' : 'var(--color-light-100)'}
          height={24}
          id={isCalendarOpen ? 'calendar' : 'calendar-outline'}
          width={24}
        />
      </div>

      {isCalendarOpen && (
        <div className={s.calendar}>
          <div className={s.monthsSettings}>
            <span>{`${MONTHS_NUMBER[selectedMonth]} ${selectedYear}`}</span>

            <div>
              <button onClick={() => goToMonth(true)}>
                <Icon
                  fill={'var(--color-light-100)'}
                  height={20}
                  id={'arrow-ios-back'}
                  viewBox={'0 0 24 24'}
                  width={20}
                />
              </button>
              <button onClick={() => goToMonth(false)}>
                <Icon
                  fill={'var(--color-light-100)'}
                  height={20}
                  id={'arrow-ios-forward'}
                  viewBox={'0 0 24 24'}
                  width={20}
                />
              </button>
            </div>
          </div>

          <div className={s.daysInWeek}>{mappedWeekDays}</div>

          <div className={s.calendarDays}>{mappedCalendarDays}</div>
        </div>
      )}

      {error && <span className={s.errorMessage}>{error}</span>}
    </div>
  )
}

type CalendarState = {
  selectedMonth: number
  selectedYear: number
}
