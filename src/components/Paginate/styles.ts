import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ul {
    ${({ theme }) => css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.black};
    `}
  }

  li {
    ${({ theme }) => css`
      display: flex;
      background: ${theme.colors.white};
      border-radius: ${theme.border.radius};
      border: 1px solid ${theme.colors.black};
      cursor: pointer;

      &:hover {
        background: ${theme.colors.primary};

        a {
          color: ${theme.colors.white};
        }
      }

      a {
        color: ${theme.colors.black};
        padding: ${theme.spacings.xxsmall};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        text-decoration: none;
      }

      &.active {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};

        a {
          color: ${theme.colors.white};
        }
      }

      &.disabled {
        background: ${theme.colors.disabled};

        a {
          &:hover {
            cursor: default;
            color: ${theme.colors.black};
          }
        }
      }
    `}
  }
`
