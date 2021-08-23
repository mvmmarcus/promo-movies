import styled, { css, DefaultTheme } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: (theme: DefaultTheme) => css`
    animation: fadeIn 300ms ease-in;
    z-index: ${theme.layers.modal};
  `,
  close: (theme: DefaultTheme) => css`
    animation: fadeOut 310ms ease-in;
    z-index: ${theme.layers.modal};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      ${isOpen && wrapperModifiers.open(theme)}
      ${!isOpen && wrapperModifiers.close(theme)}


      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`
