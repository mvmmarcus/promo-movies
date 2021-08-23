import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a black logo by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByRole('img', { name: /Promo Movies/i }).parentElement
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white logo when color white is passed', () => {
    renderWithTheme(<Logo color="white" />)
    expect(
      screen.getByRole('img', { name: /Promo Movies/i }).parentElement
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    expect(
      screen.getByRole('img', { name: /Promo Movies/i }).parentElement
    ).toHaveStyle({
      width: '5rem'
    })
  })

  it('should render a large logo', () => {
    renderWithTheme(<Logo size="large" />)

    expect(
      screen.getByRole('img', { name: /Promo Movies/i }).parentElement
    ).toHaveStyle({
      width: '10rem'
    })
  })
})
