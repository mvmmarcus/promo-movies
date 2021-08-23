import { ItemProps } from 'components/Filter'
import { MovieCardProps } from 'components/MovieCard'
import { ParsedUrlQueryInput } from 'querystring'
import { GenreProps } from 'templates/Home'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({ queryString }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      obj[key] = { name_contains: queryString[key] }
    })

  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })

  return obj
}

export const filterMoviesByGenreId = (
  movies: MovieCardProps[],
  genreQuery: string | string[] | undefined,
  genreList: GenreProps[]
) => {
  const queryGenreIds = genreList
    ?.filter((genre) => genreQuery?.includes(genre?.name?.toLocaleLowerCase()))
    ?.map((genre) => genre?.id)

  const filteredItems = movies?.filter((movie) => {
    const filteredMoviesIds: number[] = []

    queryGenreIds.forEach((id) => {
      if (movie?.genreIds?.includes(id)) {
        filteredMoviesIds.push(movie?.id)
      }
    })

    return filteredMoviesIds?.includes(movie?.id)
  })

  return queryGenreIds?.length ? filteredItems : movies
}
