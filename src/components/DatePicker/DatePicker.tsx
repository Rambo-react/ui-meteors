import React, { useEffect, useRef, useState } from 'react'
import InputMask from 'react-input-mask'

import clsx from 'clsx'

import s from './DatePicker.module.scss'

import { Button } from '../Button'
import { CalendarIcon, CalendarIconOutline } from '../Icons'
import { Input } from '../Input'
import { Calendar } from './Calendar'
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
  const inputRef = useRef<HTMLInputElement>(null)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    setLocalValue(inputValue)

    const date = parseDateString(inputValue)

    if (date) {
      setCalendarDate(date)
      getDate([date])
    } else {
      setCalendarDate(TODAY)
      getDate([])
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
          <InputMask
            disabled={disabled}
            mask={'99.99.9999'}
            maskPlaceholder={null}
            onBlur={handlerBlur}
            onChange={handleInputChange}
            value={localValue}
          >
            {props => (
              <Input
                {...props}
                className={clsx(s.input, { [s.error]: error })}
                disabled={disabled}
                placeholder={'дд.мм.гггг'}
                ref={inputRef}
              />
            )}
          </InputMask>
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
