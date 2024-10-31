export function formatSelectedDates(selectedDates: number[], isRangeInput: boolean) {
  return (
    selectedDates
      .map(time => {
        const date = new Date(time)

        let resultString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

        if (selectedDates.length !== 2 && isRangeInput) {
          resultString += ' - __/__/____'
        }

        return resultString
      })
      .join(' - ') || (isRangeInput ? '__/__/____ - __/__/____' : '__/__/____')
  )
}
