export function getDayMonthYear(time: number) {
  const date = new Date(time)

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }
}
