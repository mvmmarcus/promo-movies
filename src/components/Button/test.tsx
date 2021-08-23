import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from 'styled-icons/material-outlined/'

import Button from '.'

describe('<Button />', () => {
  it('should render the default button', () => {
    renderWithTheme(<Button>Default button</Button>)

    expect(screen.getByRole('button', { name: /Default button/i })).toHaveStyle(
      {
        height: '4rem',
        padding: '0.8rem 3.2rem'
      }
    )
  })
  it('should render the small button', () => {
    renderWithTheme(<Button size="small">Small button</Button>)

    expect(screen.getByRole('button', { name: /Small button/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem'
    })
  })

  it('should render the large button', () => {
    renderWithTheme(<Button size="large">Large button</Button>)

    expect(screen.getByRole('button', { name: /Large button/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render the button with fullWidth', () => {
    renderWithTheme(<Button fullWidth>Large button</Button>)

    expect(screen.getByRole('button', { name: /Large button/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>
        Button with icon
      </Button>
    )

    expect(
      screen.getByRole('button', { name: /Button with icon/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render Button as minimal version', () => {
    renderWithTheme(<Button minimal>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none'
    })
  })
})
