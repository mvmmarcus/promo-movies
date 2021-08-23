import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { RibbonProps, RibbonColors } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,

  normal: (theme: DefaultTheme, color: RibbonColors) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    right: -1.6rem;
    top: 5.2rem;

    &::after {
      content: '';
      position: absolute;
      width: ${theme.spacings.xsmall};
      height: ${theme.spacings.xxsmall};
      bottom: -${theme.spacings.xxsmall};
      right: 0;
      background-color: ${darken(0.2, theme.colors[color])};
      clip-path: polygon(100% 0, 0 0, 0 100%);
    }
  `,

  small: (theme: DefaultTheme, color: RibbonColors) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    right: -1rem;
    top: 1.4rem;

    &::after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 0.6rem;
      bottom: -0.6rem;
      right: 0;
      background: ${darken(0.2, theme.colors[color])};
      clip-path: polygon(100% 0, 0 0, 0 100%);
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    display: inline-flex;
    position: absolute;
    align-items: center;
    color: ${theme.colors.white};
    z-index: ${theme.layers.base};

    ${!!size && wrapperModifiers[size](theme, color!)}
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`
