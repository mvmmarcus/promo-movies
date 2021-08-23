import { ListUl } from '@styled-icons/boxicons-regular'
import { Heart } from '@styled-icons/boxicons-solid'
import { BookmarkFill } from '@styled-icons/bootstrap'
import { Star } from '@styled-icons/entypo/'

import ProgressBar from 'components/ProgressBar'
import Heading from 'components/Heading'
import { formatDate } from 'utils/general/formatDate'
import { getImageUrl } from 'utils/general/getImageUrl'

import * as S from './styles'

export type HighlightProps = {
  title: string
  releaseDate: string
  tagline: string
  resume: string
  backgroundImage: string
  floatImage?: string
  popularity: number
}

const Highlight = ({
  title,
  releaseDate,
  tagline,
  resume,
  backgroundImage,
  floatImage,
  popularity
}: HighlightProps) => {
  return (
    <S.Wrapper
      backgroundImage={getImageUrl({ isPoster: false, imgId: backgroundImage })}
    >
      <S.Container>
        {!!floatImage && (
          <S.FloatImage
            src={getImageUrl({ isPoster: true, imgId: floatImage })}
            alt={title}
          />
        )}
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Subtitle aria-label="release date">
            {formatDate(releaseDate)}
          </S.Subtitle>
          <S.ProgressBox>
            <S.ProgressGroup>
              <ProgressBar
                progress={popularity * 10}
                size={60}
                strokeWidth={4}
              />
              <S.UsersRate>User rating</S.UsersRate>
            </S.ProgressGroup>
            <S.IconGroup>
              <S.IconBox>
                <ListUl aria-label="list icon" size={18} />
              </S.IconBox>
              <S.IconBox>
                <Heart aria-label="heart icon" size={16} />
              </S.IconBox>
              <S.IconBox>
                <BookmarkFill aria-label="bookmark icon" size={14} />
              </S.IconBox>
              <S.IconBox>
                <Star aria-label="star icon" size={16} />
              </S.IconBox>
            </S.IconGroup>
          </S.ProgressBox>
          <S.Tagline>{tagline}</S.Tagline>
          <Heading lineBottom size="small" lineColor="secondary">
            Synopsis
          </Heading>
          <S.Resume>{resume}</S.Resume>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Highlight
