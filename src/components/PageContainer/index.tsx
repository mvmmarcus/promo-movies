import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
