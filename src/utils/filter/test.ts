import {
  parseQueryStringToWhere,
  parseQueryStringToFilter,
  filterMoviesByGenreId
} from '.'

const filterItems = [
  { name: 'genre', type: 'checkbox' },
  { name: 'page', type: 'checkbox' }
]

const queryString = {
  genre: ['action', 'romance'],
  page: '1'
}

describe('parseQueryStringToWhere()', () => {
  it('should parse queryString to where format', () => {
    const parsedQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      genre: { name_contains: ['action', 'romance'] },
      page: { name_contains: '1' }
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to filter values format', () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      genre: ['action', 'romance'],
      page: ['1']
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  const moviesMock = [
    {
      id: 1234,
      title: 'The Suicide Squad',
      releaseDate: '2021-07-28',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
      genreIds: [1234]
    },
    {
      id: 1234,
      title: 'The Suicide Squad',
      releaseDate: '2021-07-28',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
      genreIds: [123]
    }
  ]

  it('should return all movies when no filter is passed', () => {
    const filteredMovies = filterMoviesByGenreId(moviesMock, [], [])

    expect(filteredMovies).toEqual(moviesMock)
  })

  it('should return filtered movies when filter is passed', () => {
    const filteredMovies = filterMoviesByGenreId(
      moviesMock,
      ['action'],
      [{ name: 'action', id: 123 }]
    )

    expect(filteredMovies.length).toEqual(1)
  })
})
