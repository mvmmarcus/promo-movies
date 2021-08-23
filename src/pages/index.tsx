import { GetServerSideProps } from 'next'
import { useEffect } from 'react'

import Home, { HomeTemplateProps } from 'templates/Home'

export type MoviesProps = {
  backdrop_path: string
  id: number
  overview: string
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  genre_ids: number[]
}

const Index = (props: HomeTemplateProps) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const page = query?.page || 1

    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page}`
    )
    const { results, total_results } = await moviesResponse.json()

    const genresResponse = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
    )
    const { genres } = await genresResponse.json()

    const movies = results?.map((movie: MoviesProps) => {
      const { release_date, poster_path, genre_ids } = movie
      return {
        ...movie,
        releaseDate: release_date || null,
        img: poster_path,
        genreIds: genre_ids
      }
    })

    const bannerMovies = results?.slice(0, 3)?.map((movie: MoviesProps) => {
      const { release_date, backdrop_path, vote_average } = movie
      return {
        ...movie,
        releaseDate: release_date || null,
        img: backdrop_path,
        ribbon: vote_average
      }
    })

    return {
      props: {
        mostPopularMovies: movies,
        banners: bannerMovies,
        genres,
        totalResults: total_results
      }
    }
  } catch (error) {
    console.log(error)

    return {
      props: {
        mostPopularMovies: [],
        banners: [],
        genres: [],
        totalResults: 0
      }
    }
  }
}

export default Index
