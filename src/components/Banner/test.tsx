import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  id: 1234,
  img: 'https://image.tmdb.org/t/p/original/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg',
  title: 'The Suicide Squad',
  releaseDate: '2021-07-28'
}

describe('<Banner />', () => {
  it('should render the Banner component', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /The Suicide Squad/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /jul 28, 2021/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /The Suicide Squad/i })
    ).toBeInTheDocument()
  })
})
