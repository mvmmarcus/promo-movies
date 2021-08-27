export interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IGenre {
  id: number
  name: string
}

export interface IMostPopularMoviesResponse {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

export interface IGenresResponse {
  genres: IGenre[]
}

export interface IMovieResponse {
  backdrop_path: string
  id: number
  overview: string
  poster_path: string
  release_date: string
  tagline: string
  title: string
  vote_average: number
}
