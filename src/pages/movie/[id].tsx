import { HighlightProps } from 'components/Highlight'
import { MovieCardProps } from 'components/MovieCard'
import { GetStaticPaths, GetStaticProps } from 'next'

import MovieTemplate from 'templates/Movie'

type MoviePageProps = {
  data: HighlightProps
}

export default function MoviePage({ data }: MoviePageProps) {
  return <MovieTemplate highlightData={data} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    )
    const { results } = await moviesResponse.json()

    const paths = results?.map((item: MovieCardProps) => {
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
    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&page=1`
    )
    const data = await moviesResponse.json()

    return {
      props: {
        data: {
          ...data,
          releaseDate: data?.release_date,
          popularity: data?.vote_average,
          resume: data?.overview,
          floatImage: data?.poster_path,
          backgroundImage: data?.backdrop_path
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
