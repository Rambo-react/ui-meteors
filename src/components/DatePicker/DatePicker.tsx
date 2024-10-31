import { useReducer } from 'react'

import clsx from 'clsx'

import s from './DatePicker.module.scss'

import { Icon } from '../Icon'
import { CalendarDay } from './CalendarDay/CalendarDay'
import {
  addSelectedDateAC,
  datePickerInitialState,
  datePickerReducer,
  setCalendarDataAC,
  toggleIsCalendarOpenAC,
} from './datePickerReducer/datePickerReducer'
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
  label = 'Select Date',
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

  const toggleCalendarHandler = () => {
    if (!disabled) {
      dispatch(toggleIsCalendarOpenAC())
    }
  }

  const mappedWeekDays = WEEK_DAYS.map(day => <div key={day}>{day}</div>)

  const mappedCalendarDays = getCalendarDays(selectedYear, selectedMonth).map((date, i) => {
    const dayOnClickHandler = (date: number) => {
      dispatch(addSelectedDateAC(date, isRangeInput))

      onDateSelect([...selectedDates, date].sort().map(dateInMs => new Date(dateInMs)))
    }

    const isWeekend = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41].includes(i)

    return (
      <CalendarDay
        dateInMs={date}
        isWeekend={isWeekend}
        key={JSON.stringify(date)}
        onClick={dayOnClickHandler}
        selectedDates={selectedDates}
        selectedMonth={selectedMonth}
      />
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

    dispatch(
      setCalendarDataAC({
        selectedMonth: month,
        selectedYear: year,
      })
    )
  }

  const mappedSelectedDate =
    selectedDates
      .map(time => {
        const date = new Date(time)

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      })
      .join(' - ') || (isRangeInput ? '__/__/____ - __/__/____' : '__/__/____')

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
        {mappedSelectedDate}

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
