import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact Us/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Location/i })
    ).toBeInTheDocument()
  })

  it('should render the contact us collum', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('link', { name: /promo@mail.com/i })
    ).toBeInTheDocument()
  })

  it('should render the follow us collum', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Youtube/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
  })

  it('should render the Location collum', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByText(/Lorem ipsum, dolor, sit./i)).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByText(/Lorem, ipsum dolor./i)).toBeInTheDocument()
  })

  it('should render the copyright box', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByText(/Promo Movies 2021 © All rights reserved./i)
    ).toBeInTheDocument()
  })
})
