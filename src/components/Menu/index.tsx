import { useState } from 'react'
import Link from 'next/link'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaQuery from 'components/MediaQuery'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaQuery lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaQuery>

      <S.LogoWrapper>
        <Logo color="white" size="normal" />
      </S.LogoWrapper>

      <MediaQuery greaterThan="medium">
        <S.MenuNav>
          <Link href={{ pathname: '/' }}>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaQuery>

      <S.MenuGroup>
        {!username && (
          <MediaQuery greaterThan="medium">
            <Button>Sign in</Button>
          </MediaQuery>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href={{ pathname: '/' }}>
            <S.MenuLink
              aria-label="Mobile Home Nav"
              onClick={() => setIsOpen(false)}
            >
              Home
            </S.MenuLink>
          </Link>

          {!!username && <S.MenuLink href="#">My account</S.MenuLink>}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
