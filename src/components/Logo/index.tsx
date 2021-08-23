import { CameraMovie } from '@styled-icons/boxicons-solid/CameraMovie'

import * as S from './styles'

export type LogoProps = {
  color?: 'black' | 'white'
  size?: 'normal' | 'large'
}

const Logo = ({ color = 'black', size = 'normal' }: LogoProps) => (
  <S.Wrapper color={color} size={size}>
    <CameraMovie aria-label="Promo Movies logo" title="Promo Movies" />
  </S.Wrapper>
)

export default Logo
