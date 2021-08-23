import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'

import * as HeadingStyles from 'components/Heading/styles'

import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    height: auto;
    display: flex;
    justify-content: end;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      flex-direction: row;
      padding: ${theme.spacings.small};
      align-items: flex-start;
    `}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 30rem;
    max-height: 45rem;
    z-index: ${theme.layers.base};
    border-radius: ${theme.border.radius};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: ${theme.layers.base};
    margin-top: ${theme.spacings.small};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
      align-items: flex-start;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    line-height: 1;
    text-align: center;
    ${media.greaterThan('medium')`
      text-align: left;
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const UsersRate = styled(Title)`
  ${({ theme }) => css`
    width: ${theme.spacings.xlarge};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const ProgressBox = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.greaterThan('small')`
      flex-direction: row;
    `}
  `}
`
export const ProgressGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    min-width: 11.6rem;
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('small')`
     margin-bottom: 0;
    `}
  `}
`

export const IconGroup = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: ${theme.spacings.xsmall};
    // grid-gap: ${theme.spacings.xxsmall};
    // margin-left: ${theme.spacings.xxsmall};

    ${media.greaterThan('small')`
      margin-left: ${theme.spacings.xsmall};
    `}
  `}
`

export const IconBox = styled.div`
  ${({ theme }) => css`
    width: 4.6rem;
    height: 4.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${lighten(0.08, theme.colors.mainBg)};

    svg {
      color: ${theme.colors.white};
    }
  `}
`

export const Tagline = styled(Title)`
  ${({ theme }) => css`
    font-style: italic;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    color: ${theme.colors.lightGray};
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxsmall};
    text-align: center;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      text-align: left;
    `}
  `}
`

export const Resume = styled(Subtitle)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-top: 0;
  `}
`
