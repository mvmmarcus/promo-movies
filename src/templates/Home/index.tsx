import { useRouter } from 'next/dist/client/router'

import { ParsedUrlQueryInput } from 'querystring'
import { FilterList } from '@styled-icons/material-outlined/FilterList'

import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import Footer from 'components/Footer'
import Filter from 'components/Filter'
import Dropdown from 'components/Dropdown'
import Button from 'components/Button'
import EmptyPlaceholder from 'components/EmptyPlaceholder'
import Paginate from 'components/Paginate'
import MovieCard, { MovieCardProps } from '../../components/MovieCard'
import { PageContainer } from 'components/PageContainer'
import { BannerProps } from 'components/Banner'
import { getImageUrl } from 'utils/general/getImageUrl'
import { filterMoviesByGenreId, parseQueryStringToFilter } from 'utils/filter'

import * as S from './styles'

export type GenreProps = {
  id: number
  name: string
}

export type HomeTemplateProps = {
  mostPopularMovies: MovieCardProps[]
  banners: BannerProps[]
  genres: GenreProps[]
  totalResults: number
}

const Home = ({
  mostPopularMovies,
  banners,
  genres,
  totalResults
}: HomeTemplateProps) => {
  const { push, query } = useRouter()

  const handleFilter = (urlQueries: ParsedUrlQueryInput) => {
    push(
      {
        pathname: '/',
        query: urlQueries
      },
      undefined,
      {
        scroll: false
      }
    )

    return
  }

  const handlePaginate = (page: number) => {
    push(
      {
        pathname: '/',
        query: { ...query, page }
      },
      undefined,
      {
        scroll: false
      }
    )

    return
  }

  const filterItems = [
    {
      title: 'Genre',
      name: 'genre',
      type: 'checkbox',
      fields: genres?.map((genre) => {
        return {
          ...genre,
          label: genre?.name,
          name: genre?.name?.toLocaleLowerCase()
        }
      })
    }
  ]

  return (
    <S.Section>
      <PageContainer>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </PageContainer>

      <S.SectionMostPopular>
        <PageContainer>
          <S.HeadingContainer>
            <Heading lineLeft lineColor="secondary">
              Most Popular
            </Heading>

            <Dropdown
              title={
                <Button size="small" icon={<FilterList />}>
                  Filter
                </Button>
              }
            >
              <Filter
                initialValues={parseQueryStringToFilter({
                  queryString: query,
                  filterItems
                })}
                items={filterItems}
                onFilter={handleFilter}
              />
            </Dropdown>
          </S.HeadingContainer>

          {filterMoviesByGenreId(mostPopularMovies, query.genre, genres)
            ?.length ? (
            <>
              <S.MovieList>
                {filterMoviesByGenreId(
                  mostPopularMovies,
                  query.genre,
                  genres
                ).map(({ id, title, img, releaseDate, genreIds }) => (
                  <S.MovieItem key={title}>
                    <MovieCard
                      genreIds={genreIds}
                      id={id}
                      title={title}
                      img={getImageUrl({ isPoster: true, imgId: img })}
                      releaseDate={releaseDate}
                    />
                  </S.MovieItem>
                ))}
              </S.MovieList>
              <Paginate
                totalResults={totalResults}
                onPaginate={handlePaginate}
                initialPage={parseInt(query?.page as string)}
              />
            </>
          ) : (
            <EmptyPlaceholder
              title="No data was found"
              description="Try changing the filters"
            />
          )}
        </PageContainer>
      </S.SectionMostPopular>

      <S.SectionFooter>
        <PageContainer>
          <Footer />
        </PageContainer>
      </S.SectionFooter>
    </S.Section>
  )
}

export default Home
