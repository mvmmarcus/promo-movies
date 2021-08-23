import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>80%</Ribbon>)

    expect(screen.getByText(/80%/i)).toBeInTheDocument()
  })

  it('should render with the green color', () => {
    renderWithTheme(<Ribbon>80%</Ribbon>)

    expect(screen.getByText(/80%/i)).toHaveStyle({
      backgroundColor: '#21d07a'
    })
  })

  it('should render with the orange color', () => {
    renderWithTheme(<Ribbon color="orange">80%</Ribbon>)

    expect(screen.getByText(/80%/i)).toHaveStyle({
      backgroundColor: '#d2d531'
    })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>80%</Ribbon>)

    expect(screen.getByText(/80%/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">80%</Ribbon>)

    expect(screen.getByText(/80%/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
