import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import bannerMock from 'components/BannerSlider/mock'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

const moviesMock = [
  {
    id: 1234,
    title: 'The Suicide Squad',
    releaseDate: '2021-07-28',
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
    genreIds: []
  },
  {
    id: 1234,
    title: 'The Suicide Squad',
    releaseDate: '2021-07-28',
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
    genreIds: []
  }
]

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

// mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

const props = {
  banners: bannerMock,
  mostPopularMovies: [moviesMock[0]],
  genres: [{ name: 'Action', id: 123 }],
  totalResults: 200
}

describe('<Home />', () => {
  it('should render all sections', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /Promo Movies/i })).toHaveLength(
      2
    )
    expect(screen.getByRole('heading', { name: /most popular/i }))
    expect(screen.getByRole('button', { name: /filter/i }))
  })

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(<Home {...props} />)

    userEvent.click(await screen.findByRole('button', { name: /filter/i }))
    await waitFor(async () => {
      userEvent.click(await screen.findByRole('checkbox', { name: /action/i }))
    })

    expect(push).toHaveBeenCalledWith(
      {
        pathname: '/',
        query: { genre: ['action'], page: undefined }
      },
      undefined,
      {
        scroll: false
      }
    )
  })

  it('should render empty when no movies found', async () => {
    renderWithTheme(
      <Home {...props} banners={bannerMock} mostPopularMovies={[]} />
    )

    expect(await screen.findByText(/No data was found/i)).toBeInTheDocument()
  })

  it('should able to select page', async () => {
    renderWithTheme(<Home {...props} />)

    userEvent.click(
      await screen.findByRole('link', { name: /Go to page number 2/i })
    )

    expect(push).toHaveBeenCalledWith(
      {
        pathname: '/',
        query: { page: 2 }
      },
      undefined,
      {
        scroll: false
      }
    )
  })
})
