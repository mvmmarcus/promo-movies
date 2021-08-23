import { screen } from '@testing-library/react'
import { getImageUrl } from 'utils/general/getImageUrl'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  backgroundImage:
    'https://image.tmdb.org/t/p/original/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg',
  floatImage:
    'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
  title: 'The Suicide Squad',
  releaseDate: '2021-07-28',
  popularity: 0.8,
  resume: 'supervillains Harley Quinn, Bloodsport, Peacemaker and a collection',
  tagline: 'Theyre dying to save the world.'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /The Suicide Squad/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('svg')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
    expect(screen.getByLabelText(/list icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/heart icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/bookmark icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/star icon/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /supervillains Harley Quinn, Bloodsport, Peacemaker and a collection/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Theyre dying to save the world./i)
    ).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${getImageUrl({
        isPoster: false,
        imgId: props.backgroundImage
      })})`
    })
  })

  it('should render without release date ', () => {
    const newProps = {
      backgroundImage:
        'https://image.tmdb.org/t/p/original/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg',
      floatImage:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
      title: 'The Suicide Squad',
      releaseDate: '',
      popularity: 0.8,
      resume:
        'supervillains Harley Quinn, Bloodsport, Peacemaker and a collection',
      tagline: 'Theyre dying to save the world.'
    }

    renderWithTheme(<Highlight {...newProps} />)

    expect(screen.getByLabelText(/release date/i).innerHTML).toEqual('')
  })
})
