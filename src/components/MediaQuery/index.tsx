import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

export type BreakpointsProps = keyof DefaultBreakpoints

export type MediaQueryProps = {
  children: React.ReactNode
  greaterThan?: BreakpointsProps
  lessThan?: BreakpointsProps
}

const wrapperModifiers = {
  greaterThan: (greaterThan: BreakpointsProps) => css`
    ${media.greaterThan(greaterThan)`
      display: block;
    `}
  `,
  lessThan: (lessThan: BreakpointsProps) => css`
    ${media.lessThan(lessThan)`
      display: block;
    `}
  `
}

const Wrapper = styled.div<MediaQueryProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${!!greaterThan && wrapperModifiers.greaterThan(greaterThan)}
    ${!!lessThan && wrapperModifiers.lessThan(lessThan)}
  `}
`

const MediaQuery = ({ children, greaterThan, lessThan }: MediaQueryProps) => (
  <Wrapper greaterThan={greaterThan} lessThan={lessThan}>
    {children}
  </Wrapper>
)

export default MediaQuery
