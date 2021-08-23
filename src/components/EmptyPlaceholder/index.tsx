import { EmojiSad } from '@styled-icons/fluentui-system-filled'
import theme from 'styles/theme'

import * as S from './styles'

export type EmptyPlaceholderProps = {
  title: string
  description: string
  hasLink?: boolean
}

const EmptyPlaceholder = ({ title, description }: EmptyPlaceholderProps) => (
  <S.Wrapper>
    <EmojiSad color={theme.colors.primary} size={100} aria-label="Sad Emoji" />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default EmptyPlaceholder
