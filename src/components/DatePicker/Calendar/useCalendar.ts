import { useState } from 'react'

import { TODAYS_MONTH, TODAYS_YEAR } from '../variables'

export const useCalendar = () => {
  const [{ selectedMonth, selectedYear }, setCalendarState] = useState({
    selectedMonth: TODAYS_MONTH,
    selectedYear: TODAYS_YEAR,
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

  return {
    goToMonth,
    selectedMonth,
    selectedYear,
  }
}
