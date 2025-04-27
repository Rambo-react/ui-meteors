import { useEffect, useState } from 'react'

import { TODAYS_MONTH, TODAYS_YEAR } from '../variables'

export const useCalendar = (initialDate?: Date) => {
  const [{ selectedMonth, selectedYear }, setCalendarState] = useState<{
    selectedMonth: number
    selectedYear: number
  }>({
    selectedMonth: initialDate?.getMonth() ?? TODAYS_MONTH,
    selectedYear: initialDate?.getFullYear() ?? TODAYS_YEAR,
  })

  useEffect(() => {
    if (initialDate) {
      setCalendarState({
        selectedMonth: initialDate.getMonth(),
        selectedYear: initialDate.getFullYear(),
      })
    }
  }, [initialDate])

  return {
    selectedMonth,
    selectedYear,
    setSelectedMonth: (month: number) => {
      setCalendarState(prev => ({ ...prev, selectedMonth: month }))
    },
    setSelectedYear: (year: number) => {
      setCalendarState(prev => ({ ...prev, selectedYear: year }))
    },
  }
}
