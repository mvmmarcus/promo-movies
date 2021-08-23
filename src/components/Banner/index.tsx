import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import { formatDate } from 'utils/general/formatDate'
import { getProgressColor } from 'utils/general/getProgressColor'
import { getImageUrl } from 'utils/general/getImageUrl'

import * as S from './styles'

export type BannerProps = {
  id: number
  img: string
  title: string
  releaseDate: string
  ribbon?: number
  ribbonSize?: RibbonSizes
}

const Banner = ({
  id,
  img,
  title,
  releaseDate,
  ribbon,
  ribbonSize = 'normal'
}: BannerProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon
          color={getProgressColor(ribbon * 10).color as RibbonColors}
          size={ribbonSize}
        >
          {ribbon * 10}%
        </Ribbon>
      )}

      <S.ImageWrapper>
        <Image
          src={getImageUrl({ isPoster: false, imgId: img })}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </S.ImageWrapper>

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{formatDate(releaseDate)}</S.Subtitle>
        <Link as={`/movie/${id}`} href="/movie/[id]">
          <a>
            <Button size="large">More details</Button>
          </a>
        </Link>
      </S.Caption>
    </S.Wrapper>
  )
}

export default Banner
