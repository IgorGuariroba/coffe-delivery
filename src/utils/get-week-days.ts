export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(
    { length: 7 },
    (_, i) =>
      formatter
        .format(new Date(Date.now() + i * 24 * 60 * 60 * 1000))
        .charAt(0)
        .toUpperCase() +
      formatter.format(new Date(Date.now() + i * 24 * 60 * 60 * 1000)).slice(1),
  )
}
