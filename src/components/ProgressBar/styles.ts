import media from 'styled-media-query'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export type WrapperProps = {
  width: number
  height: number
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ width, height }) => css`
    position: relative;
    width: ${width}px;
    height: ${height}px;

    ${media.greaterThan('medium')`
      width: ${width}px;
      height: ${height}px;
    `}

    svg:first-child {
      top: 2rem;
      right: 1rem;
      position: absolute;
    }
  `}
`

export const Svg = styled.svg`
  ${({ theme }) => css`
    display: block;
    max-width: 100%;
    color: ${theme.colors.white};

    .svg-circle-bg {
      fill: ${lighten(0.08, theme.colors.mainBg)};
    }

    .svg-circle {
      fill: none;
    }

    text {
      font-size: ${theme.font.sizes.large};
      fill: ${theme.colors.white};
      font-weight: bold;

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.large};
      `}
    }
  `}
`
