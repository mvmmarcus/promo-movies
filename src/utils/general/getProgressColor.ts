export type ProgressColorProps = {
  objColor: {
    primary: string
    secondary: string
  }
  color: string
}

export const getProgressColor = (progress: number): ProgressColorProps => {
  let color = ''

  if (progress >= 0 && progress < 40) {
    color = 'red'
  } else if (progress >= 40 && progress < 70) {
    color = 'orange'
  } else {
    color = 'green'
  }

  const colors = {
    red: {
      primary: '#db2360',
      secondary: '#571435'
    },
    orange: {
      primary: '#d2d531',
      secondary: '#423d0f'
    },
    green: {
      primary: '#21d07a',
      secondary: '#204529'
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getColor = (key: string) => (obj: Record<string, any>) => obj[key]

  return {
    objColor: getColor(color)(colors),
    color
  }
}
