import { forwardRef, useEffect } from 'react'

import clsx from 'clsx'

import s from './Calendar.module.scss'

import { ArrowIosBack, ArrowIosForward } from '../../Icons'
import { getCalendarDays } from '../utils'
import { MONTHS_NUMBER, WEEK_DAYS } from '../variables'
import { CalendarDay } from './CalendarDay'
import { useCalendar } from './useCalendar'

type Props = {
  currentDate?: Date | null
  label?: string
  onCalendarBlur: () => void
  onDateSelect: (dateInMs: number) => void
  onMonthChange: (date: Date) => void
  selectedDates: number[]
}

export const Calendar = forwardRef<HTMLDivElement, Props>(
  ({ currentDate, label, onCalendarBlur, onDateSelect, onMonthChange, selectedDates }, ref) => {
    const { selectedMonth, selectedYear, setSelectedMonth, setSelectedYear } = useCalendar(
      currentDate || undefined
    )

    const handleMonthChange = (next: boolean) => {
      const newDate = new Date(selectedYear, selectedMonth + (next ? 1 : -1), 1)

      setSelectedMonth(newDate.getMonth())
      setSelectedYear(newDate.getFullYear())
      onMonthChange(newDate)
    }

    useEffect(() => {
      if (currentDate) {
        const isSameMonthYear =
          currentDate.getMonth() === selectedMonth && currentDate.getFullYear() === selectedYear

        if (!isSameMonthYear) {
          setSelectedMonth(currentDate.getMonth())
          setSelectedYear(currentDate.getFullYear())
        }
      }
    }, [currentDate, selectedMonth, selectedYear, setSelectedMonth, setSelectedYear])

    const mappedWeekDays = WEEK_DAYS.map(day => <div key={day}>{day}</div>)

    const mappedCalendarDays = getCalendarDays(selectedYear, selectedMonth).map((date, i) => (
      <CalendarDay
        dateInMs={date}
        index={i}
        key={JSON.stringify(date)}
        onDateSelect={onDateSelect}
        selectedDates={selectedDates}
        selectedMonth={selectedMonth}
      />
    ))

    return (
      <div
        className={clsx(s.calendar, {
          [s.calendarWithoutLabel]: !label,
        })}
        onBlur={onCalendarBlur}
        ref={ref}
        tabIndex={0}
      >
        <div className={s.monthsSettings}>
          <span>{`${MONTHS_NUMBER[selectedMonth]} ${selectedYear}`}</span>

          <div>
            <button onClick={() => handleMonthChange(false)} onMouseDown={e => e.preventDefault()}>
              <ArrowIosBack
                fill={'var(--color-light-100)'}
                height={20}
                viewBox={'0 0 24 24'}
                width={20}
              />
            </button>
            <button onClick={() => handleMonthChange(true)} onMouseDown={e => e.preventDefault()}>
              <ArrowIosForward
                fill={'var(--color-light-100)'}
                height={20}
                viewBox={'0 0 24 24'}
                width={20}
              />
            </button>
          </div>
        </div>

        <div className={s.daysInWeek}>{mappedWeekDays}</div>

        <div className={s.calendarDays}>{mappedCalendarDays}</div>
      </div>
    )
  }
)
