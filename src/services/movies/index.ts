import { AxiosResponse } from 'axios'

import { fetcher } from 'services/api/adapter'
import {
  IGenresResponse,
  IMostPopularMoviesResponse,
  IMovieResponse
} from './types'

const moviesApi = {
  getMostPopularMovies: (
    page: string
  ): Promise<AxiosResponse<IMostPopularMoviesResponse>> => {
    return fetcher().get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API_KEY}&page=${page}`
    )
  },
  getMovieById: (id: string): Promise<AxiosResponse<IMovieResponse>> => {
    return fetcher().get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.THEMOVIEDB_API_KEY}&page=1`
    )
  },
  getGenres: (): Promise<AxiosResponse<IGenresResponse>> => {
    return fetcher().get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.THEMOVIEDB_API_KEY}`
    )
  }
}

export default moviesApi
