import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'
import * as DropdownStyles from 'components/Dropdown/styles'
import * as PaginateStyles from 'components/Paginate/styles'

export const Section = styled.section`
  overflow-x: hidden;
`

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);
    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionMostPopular = styled(Sections)`
  ${({ theme }) => css`
    ${PaginateStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const MovieList = styled.ul`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
`
export const MovieItem = styled.li`
  width: 100%;
  max-width: 35rem;
  margin: 0 auto;
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
export const HeadingContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;

  ${DropdownStyles.Title} {
    padding-right: 0;
  }
`
