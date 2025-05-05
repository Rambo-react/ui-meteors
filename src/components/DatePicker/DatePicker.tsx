'use client'

import { useEffect, useState } from 'react'

import clsx from 'clsx'

import s from './DatePicker.module.scss'

import { Button } from '../Button'
import { CalendarIcon, CalendarIconOutline } from '../Icons'
import { Calendar } from './Calendar'
import { MaskedInput } from './MaskedInput'
import {
  addSelectedDateAC,
  clearSelectedDatesAC,
  toggleIsCalendarOpenAC,
} from './datePickerReducer'
import { useDatePicker } from './useDatePicker'
import { formatDate, formatSelectedDates, parseDateString } from './utils'
import { TODAY } from './variables'

type Props = {
  disabled?: boolean
  error?: string
  getDate: (date: Date | Date[]) => void
  isRangeInput?: boolean
  label?: string
}

export const DatePicker = ({ disabled, error, getDate, isRangeInput = false, label }: Props) => {
  const [calendarDate, setCalendarDate] = useState<Date>(TODAY)
  const { calendarRef, dispatch, isCalendarOpen, onCalendarBlur, selectedDates } = useDatePicker()
  const [localValue, setLocalValue] = useState('')

  useEffect(() => {
    if (!isRangeInput && selectedDates.length > 0) {
      const date = new Date(selectedDates[0])

      setLocalValue(formatDate(date))
      setCalendarDate(date)
    } else if (!isRangeInput && selectedDates.length === 0) {
      setLocalValue('')
      setCalendarDate(TODAY)
    }
  }, [selectedDates, isRangeInput])

  const onDateSelect = (dateInMs: number) => {
    dispatch(addSelectedDateAC(dateInMs, isRangeInput))
    const newDates = isRangeInput
      ? [...selectedDates, dateInMs].sort().map(ms => new Date(ms))
      : [new Date(dateInMs)]

    getDate(newDates)
  }

  const toggleCalendar = () => {
    if (!disabled) {
      dispatch(toggleIsCalendarOpenAC())

      setTimeout(() => calendarRef.current && calendarRef.current.focus(), 0)
    }
  }

  const handleInputChange = (value: string) => {
    setLocalValue(value)
    const [d, m, y] = value.split('.')
    const parsedDate = parseDateString(`${y}-${m}-${d}`)

    if (parsedDate) {
      setCalendarDate(parsedDate)
      getDate([parsedDate])
    }
  }

  const handleCalendarMonthChange = (newDate: Date) => {
    setCalendarDate(newDate)
  }

  const handlerBlur = () => {
    if (isRangeInput) {
      return
    }
    const date = parseDateString(localValue)

    if (date) {
      dispatch(addSelectedDateAC(date.getTime(), false))
      setLocalValue(formatDate(date))
    } else {
      setLocalValue('')
      dispatch(clearSelectedDatesAC())
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

      {!isRangeInput ? (
        <div
          className={clsx(s.inputContainer, {
            [s.calendarExpanded]: isCalendarOpen, // for background while calendar opened
          })}
        >
          <MaskedInput
            className={clsx(s.input, { [s.error]: error })}
            disabled={disabled}
            onBlur={handlerBlur}
            onChange={handleInputChange}
            placeholder={'дд.мм.гггг'}
            value={localValue}
          />
          <Button
            className={s.calendarDate}
            disabled={disabled}
            onClick={toggleCalendar}
            type={'button'}
            variant={'text'}
          >
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
          </Button>
        </div>
      ) : (
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
      )}
      {isCalendarOpen && (
        <Calendar
          currentDate={calendarDate}
          label={label}
          onCalendarBlur={onCalendarBlur}
          onDateSelect={onDateSelect}
          onMonthChange={handleCalendarMonthChange}
          ref={calendarRef}
          selectedDates={selectedDates}
        />
      )}

      {error && <span className={s.errorMessage}>{error}</span>}
    </div>
  )
}
