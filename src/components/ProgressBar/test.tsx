import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProgressBar from '.'

const props = {
  progress: 80,
  size: 60,
  strokeWidth: 4
}

describe('<ProgressBar />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ProgressBar {...props} />)

    expect(screen.getByTestId('svg')).toBeInTheDocument()
  })

  it('should render with bad colors', () => {
    const propsBadColor = {
      progress: 30,
      size: 60,
      strokeWidth: 4
    }

    renderWithTheme(<ProgressBar {...propsBadColor} />)

    expect(screen.getByTestId('svg')).toBeInTheDocument()
    expect(screen.getByTestId('svg-circle-bg')).toHaveAttribute(
      'stroke',
      '#571435'
    )
    expect(screen.getByTestId('svg-circle')).toHaveAttribute(
      'stroke',
      '#db2360'
    )
  })

  it('should render with regular colors', () => {
    const propsBadColor = {
      progress: 60,
      size: 60,
      strokeWidth: 4
    }

    renderWithTheme(<ProgressBar {...propsBadColor} />)

    expect(screen.getByTestId('svg')).toBeInTheDocument()
    expect(screen.getByTestId('svg-circle-bg')).toHaveAttribute(
      'stroke',
      '#423d0f'
    )
    expect(screen.getByTestId('svg-circle')).toHaveAttribute(
      'stroke',
      '#d2d531'
    )
  })
})
