import clsx from 'clsx'

import s from './DatePicker.module.scss'

import { CalendarIcon, CalendarIconOutline } from '../Icons'
import { Calendar } from './Calendar'
import { addSelectedDateAC, toggleIsCalendarOpenAC } from './datePickerReducer'
import { useDatePicker } from './useDatePicker'
import { formatSelectedDates } from './utils'

type Props = {
  disabled?: boolean
  error?: string
  getDate: (date: Date[]) => void
  isRangeInput?: boolean
  label?: string
}

export const DatePicker = ({ disabled, error, getDate, isRangeInput = false, label }: Props) => {
  const { calendarRef, dispatch, isCalendarOpen, onCalendarBlur, selectedDates } = useDatePicker()

  const onDateSelect = (dateInMs: number) => {
    dispatch(addSelectedDateAC(dateInMs, isRangeInput))

    if (isRangeInput) {
      if (selectedDates.length === 2) {
        getDate([new Date(dateInMs)])
      } else {
        getDate([...selectedDates, dateInMs].sort().map(ms => new Date(ms)))
      }
    } else {
      getDate([new Date(dateInMs)])
    }
  }

  const toggleCalendar = () => {
    if (!disabled) {
      dispatch(toggleIsCalendarOpenAC())

      setTimeout(() => calendarRef.current && calendarRef.current.focus(), 0)
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
        onMouseDown={toggleCalendar}
      >
        {formatSelectedDates(selectedDates, isRangeInput)}

        {isCalendarOpen ? (
          <CalendarIcon
            fill={error ? 'var(--color-danger-500)' : 'var(--color-light-100)'}
            height={24}
            width={24}
          />
        ) : (
          <CalendarIconOutline
            fill={error ? 'var(--color-danger-500)' : 'var(--color-light-100)'}
            height={24}
            width={24}
          />
        )}
      </div>

      {isCalendarOpen && (
        <Calendar
          label={label}
          onCalendarBlur={onCalendarBlur}
          onDateSelect={onDateSelect}
          ref={calendarRef}
          selectedDates={selectedDates}
        />
      )}

      {error && <span className={s.errorMessage}>{error}</span>}
    </div>
  )
}
