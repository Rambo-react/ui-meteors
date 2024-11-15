import { forwardRef } from 'react'

import clsx from 'clsx'

import s from './Calendar.module.scss'

import { ArrowIosBack, ArrowIosForward } from '../../Icons'
import { getCalendarDays } from '../utils'
import { MONTHS_NUMBER, WEEK_DAYS } from '../variables'
import { CalendarDay } from './CalendarDay'
import { useCalendar } from './useCalendar'

type Props = {
  label?: string
  onCalendarBlur: () => void
  onDateSelect: (dateInMs: number) => void
  selectedDates: number[]
}

export const Calendar = forwardRef<HTMLDivElement, Props>(
  ({ label, onCalendarBlur, onDateSelect, selectedDates }, ref) => {
    const { goToMonth, selectedMonth, selectedYear } = useCalendar()

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
            <button onClick={() => goToMonth(true)} onMouseDown={e => e.preventDefault()}>
              <ArrowIosBack
                fill={'var(--color-light-100)'}
                height={20}
                viewBox={'0 0 24 24'}
                width={20}
              />
            </button>
            <button onClick={() => goToMonth(false)} onMouseDown={e => e.preventDefault()}>
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
