import { useReducer, useRef } from 'react'

import clsx from 'clsx'

import s from './DatePicker.module.scss'

import { Icon } from '../Icon'
import { CalendarDay } from './CalendarDay/CalendarDay'
import {
  datePickerInitialState,
  datePickerReducer,
  setCalendarDataAC,
  toggleIsCalendarOpenAC,
} from './datePickerReducer/datePickerReducer'
import { formatSelectedDates } from './utils/formatSelectedDates'
import { getCalendarDays } from './utils/getCalendarDays'
import { MONTHS_NUMBER, WEEK_DAYS } from './variables'

type Props = {
  disabled?: boolean
  error?: string
  isRangeInput?: boolean
  label?: string
  onDateSelect: (date: Date[]) => void
}

export const DatePicker = ({
  disabled,
  error,
  isRangeInput = false,
  label,
  onDateSelect,
}: Props) => {
  const [
    {
      calendarData: { selectedMonth, selectedYear },
      isCalendarOpen,
      selectedDates,
    },
    dispatch,
  ] = useReducer(datePickerReducer, datePickerInitialState)

  const calendarRef = useRef<HTMLDivElement>(null)

  const toggleCalendarHandler = () => {
    if (!disabled) {
      dispatch(toggleIsCalendarOpenAC())

      setTimeout(() => calendarRef.current && calendarRef.current.focus(), 0)
    }
  }

  const mappedWeekDays = WEEK_DAYS.map(day => <div key={day}>{day}</div>)

  const mappedCalendarDays = getCalendarDays(selectedYear, selectedMonth).map((date, i) => (
    <CalendarDay
      date={date}
      dateInMs={date}
      dispatch={dispatch}
      index={i}
      isRangeInput={isRangeInput}
      key={JSON.stringify(date)}
      onDateSelect={onDateSelect}
      selectedDates={selectedDates}
      selectedMonth={selectedMonth}
    />
  ))

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

    dispatch(
      setCalendarDataAC({
        selectedMonth: month,
        selectedYear: year,
      })
    )
  }

  const onCalendarBlur = () => {
    if (isCalendarOpen) {
      dispatch(toggleIsCalendarOpenAC())
    }
  }

  return (
    <div
      className={clsx(s.datePicker, {
        [s.disabled]: disabled,
        [s.error]: error,
      })}
    >
      {label && <span>{label}</span>}

      <div
        className={clsx(s.dateDisplayer, {
          [s.calendarExpanded]: isCalendarOpen, // for background while calendar opened
        })}
        onMouseDown={toggleCalendarHandler}
      >
        {formatSelectedDates(selectedDates, isRangeInput)}

        <Icon
          fill={error ? 'var(--color-danger-500)' : 'var(--color-light-100)'}
          height={24}
          id={isCalendarOpen ? 'calendar' : 'calendar-outline'}
          width={24}
        />
      </div>

      {isCalendarOpen && (
        <div
          className={clsx(s.calendar, {
            [s.calendarWithoutLabel]: !label,
          })}
          onBlur={onCalendarBlur}
          ref={calendarRef}
          tabIndex={0}
        >
          <div className={s.monthsSettings}>
            <span>{`${MONTHS_NUMBER[selectedMonth]} ${selectedYear}`}</span>

            <div>
              <button onClick={() => goToMonth(true)} onMouseDown={e => e.preventDefault()}>
                <Icon
                  fill={'var(--color-light-100)'}
                  height={20}
                  id={'arrow-ios-back'}
                  viewBox={'0 0 24 24'}
                  width={20}
                />
              </button>
              <button onClick={() => goToMonth(false)} onMouseDown={e => e.preventDefault()}>
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
