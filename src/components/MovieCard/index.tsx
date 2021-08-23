import Image from 'next/image'
import Link from 'next/link'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import { Favorite, FavoriteBorder } from 'styled-icons/material-outlined'
import * as S from './styles'
import { formatDate } from 'utils/general/formatDate'
import { useState } from 'react'

export type MovieCardProps = {
  id: number
  title: string
  releaseDate: string
  img: string
  genreIds: number[]
  isFavorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const MovieCard = ({
  id,
  title,
  releaseDate,
  img,
  ribbon,
  ribbonColor = 'green',
  ribbonSize = 'small',
  isFavorite = false,
  onFav
}: MovieCardProps) => {
  const [isFav, setIsFav] = useState(isFavorite)

  const handleFav = () => {
    setIsFav((prev) => !prev)
    !!onFav && onFav()
  }

  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}

      <Link href={{ pathname: `/movie/${id}` }} passHref>
        <S.ImageBox>
          <Image src={img} alt={title} layout="fill" loading="lazy" />
        </S.ImageBox>
      </Link>

      <S.Content>
        <S.TitleGroup>
          <S.Title>{title}</S.Title>
          <S.ReleaseDate>{formatDate(releaseDate)}</S.ReleaseDate>
        </S.TitleGroup>

        <S.FavButton onClick={handleFav} role="button">
          {isFav ? (
            <Favorite aria-label="Remove from Favorites" />
          ) : (
            <FavoriteBorder aria-label="Add to Favorites" />
          )}
        </S.FavButton>
      </S.Content>
    </S.Wrapper>
  )
}
export default MovieCard
