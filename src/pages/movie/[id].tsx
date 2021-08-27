import { HighlightProps } from 'components/Highlight'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MoviesProps } from 'pages'
import { FetcherClient } from 'services/api/adapter'
import moviesApi from 'services/movies'
import {
  IMostPopularMoviesResponse,
  IMovieResponse
} from 'services/movies/types'

import MovieTemplate from 'templates/Movie'

type MoviePageProps = {
  data: HighlightProps
}

export default function MoviePage({ data }: MoviePageProps) {
  return <MovieTemplate highlightData={data} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const moviesResponse = await moviesApi.getMostPopularMovies('1')
    const { results } = moviesResponse?.data

    const paths = results?.map((item: MoviesProps) => {
      return { params: { id: item?.id?.toString() } }
    })

    return {
      paths,
      fallback: 'blocking'
    }
  } catch (error) {
    console.log(error)
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let id = null

  if (params?.id) {
    id = params?.id
  }

  try {
    const movieResponse = await moviesApi.getMovieById(id as string)
    const {
      title,
      tagline,
      release_date,
      vote_average,
      overview,
      poster_path,
      backdrop_path
    }: IMovieResponse = movieResponse?.data

    return {
      props: {
        data: {
          title,
          tagline,
          releaseDate: release_date,
          popularity: vote_average,
          resume: overview,
          floatImage: poster_path,
          backgroundImage: backdrop_path
        }
      },
      revalidate: 60
    }
  } catch (error) {
    console.log(error)

    return {
      props: { data: {} }
    }
  }
}
