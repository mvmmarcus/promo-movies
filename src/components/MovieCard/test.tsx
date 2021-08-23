import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import MovieCard from '.'

const props = {
  title: 'The Suicide Squad',
  releaseDate: '2021-07-28',
  img: '/bg-image.png'
}

describe('<MovieCard />', () => {
  it('should render headings and favorite icon', () => {
    renderWithTheme(<MovieCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /The Suicide Squad/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /jul 28, 2021/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/Add to Favorites/i)).toBeInTheDocument()
  })

  it('should render background image', () => {
    renderWithTheme(<MovieCard {...props} img="/bg-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
  })

  it('should render with ribbon', () => {
    renderWithTheme(<MovieCard {...props} ribbon="80%" />)

    expect(screen.getByText(/80%/i)).toBeInTheDocument()
  })

  it('should render a field favorite icon when favorite is true', () => {
    renderWithTheme(<MovieCard {...props} isFavorite />)

    expect(screen.getByLabelText(/Remove from Favorites/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<MovieCard {...props} isFavorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })
})
