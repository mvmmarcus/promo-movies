import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main`
  position: relative;

  ${media.lessThan('large')`
    ${RibbonStyles.Wrapper} {
      right: 0;
      &::after {
        display: none;
      }
    }
  `}

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    position: relative;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.darkGray};
    padding: ${theme.spacings.small};

    a {
      text-decoration: none;
    }

    ${ButtonStyles.Wrapper} {
      height: 4rem;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
    background-color: rgba(0, 0, 0, 0.7);
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
