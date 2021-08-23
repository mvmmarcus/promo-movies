import { useRouter } from 'next/dist/client/router'

import { ArrowBackCircle } from '@styled-icons/ionicons-outline/'

import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Highlight, { HighlightProps } from 'components/Highlight'
import { PageContainer } from 'components/PageContainer'

import theme from 'styles/theme'
import * as S from './styles'

export type MovieTemplateProps = {
  highlightData: HighlightProps
}

export const MovieTemplate = ({ highlightData }: MovieTemplateProps) => {
  const router = useRouter()
  return (
    <S.Wrapper>
      <PageContainer>
        <Menu />
        <S.BackButton onClick={() => router.back()}>
          <ArrowBackCircle color={theme.colors.white} size={40} />
          Go back
        </S.BackButton>
        <S.SectionBanner>
          <Highlight {...highlightData} />
        </S.SectionBanner>
      </PageContainer>
      <S.SectionFooter>
        <PageContainer>
          <Footer />
        </PageContainer>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default MovieTemplate
