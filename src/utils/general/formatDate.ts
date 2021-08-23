export const formatDate = (date: string) =>
  date
    ? new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(new Date(date))
    : ''
