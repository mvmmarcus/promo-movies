import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import MovieTemplate from '.'

export const highlightMock = {
  backgroundImage:
    'https://image.tmdb.org/t/p/original/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg',
  floatImage:
    'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
  title: 'The Suicide Squad',
  releaseDate: '2021-07-28',
  popularity: 0.8,
  resume: 'upervillains Harley Quinn, Bloodsport, Peacemaker and a collection',
  tagline: 'Theyre dying to save the world.'
}

const props = {
  highlightData: highlightMock
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const back = jest.fn()

useRouter.mockImplementation(() => ({
  back
}))

describe('<Highlight />', () => {
  it('should render all sections', () => {
    renderWithTheme(<MovieTemplate {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /Promo Movies/i })).toHaveLength(
      2
    )
    expect(screen.getByText(/synopsis/i)).toBeInTheDocument()
    expect(screen.getByText(/contact us/i)).toBeInTheDocument()
    expect(screen.getByText(/go back/i)).toBeInTheDocument()
  })

  it('should render redirect to last page', () => {
    renderWithTheme(<MovieTemplate {...props} />)

    userEvent.click(screen.getByText(/go back/i))

    expect(back).toBeCalled()
  })
})
