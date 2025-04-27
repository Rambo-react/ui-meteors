export const parseDateString = (value: string) => {
  const cleanValue = value.replace(/_/g, '')
  const parts = cleanValue.split('.')

  if (parts.length === 3) {
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)

    if (isNaN(day)) {
      return null
    }
    const date = new Date(year, month, day)

    if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
      return date
    }
  }

  return null
}
