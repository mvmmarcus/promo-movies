import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import * as CheckboxStyles from 'components/Checkbox/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const Content = styled.div`
  flex: 1;
`

export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xsmall};
    }
    & + div {
      border-top: 0.1rem solid ${rgba(theme.colors.gray, 0.2)};
      margin-top: ${theme.spacings.small};
      padding-top: ${theme.spacings.xsmall};
    }

    ${CheckboxStyles.Label} {
      color: ${theme.colors.black};
    }

    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    color: ${theme.colors.black};
  `}
`
