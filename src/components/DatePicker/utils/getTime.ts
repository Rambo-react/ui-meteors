export function getTime({ day, month, year }: GetTimeArgs): number {
  return new Date(year, month, day).getTime()
}

type GetTimeArgs = {
  day: number
  month: number
  year: number
}
