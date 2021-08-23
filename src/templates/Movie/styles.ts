import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { PageContainer } from 'components/PageContainer'
import * as MenuStyles from 'components/Menu/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${PageContainer} {
      padding: 0;

      ${media.greaterThan('small')`
        padding-left: calc(${theme.grid.gutter} / 2);
        padding-right: calc(${theme.grid.gutter} / 2);
      `}
    }

    ${MenuStyles.Wrapper} {
      ${media.lessThan('small')`
        padding-left: calc(${theme.grid.gutter} / 2);
        padding-right: calc(${theme.grid.gutter} / 2);
    `}
    }
  `}
`

export const SectionBanner = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    min-height: 100vh;
  `}
`
export const BackButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
    margin-top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xsmall};

    svg {
      margin-right: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('small')`
    margin-left: 0;
  `}
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('small')`
    padding-left: 0;
    padding-right: 0;
  `}

    ${media.greaterThan('medium')`
    margin-top: ${theme.spacings.large};
    padding-top: calc(${theme.spacings.xxlarge} * 2);
    clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
  `}
  `}
`
