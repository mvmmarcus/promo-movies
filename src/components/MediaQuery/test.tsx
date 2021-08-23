import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import MediaQuery from '.'

describe('<MediaMatch />', () => {
  it('should not render MediaMatch child by default', () => {
    renderWithTheme(<MediaQuery>MediaQuery</MediaQuery>)
    expect(screen.getByText(/MediaQuery/i)).toHaveStyle({
      display: 'none'
    })
  })

  it('should render MediaQuery child when document is greater than small', () => {
    renderWithTheme(<MediaQuery greaterThan="small">MediaQuery</MediaQuery>)

    expect(screen.getByText(/MediaQuery/i)).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 450px)'
      }
    )
  })

  it('should render MediaQuery child when document is less than small', () => {
    renderWithTheme(<MediaQuery lessThan="small">MediaQuery</MediaQuery>)

    expect(screen.getByText(/MediaQuery/i)).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(max-width: 450px)'
      }
    )
  })
})
