import { useEffect, useState } from 'react'

import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  const handleAnimatedHide = () => {
    setIsOpen(false)
    setTimeout(() => {
      setShouldRender(false)
    }, 300)
  }

  useEffect(() => {
    if (!isOpen) {
      handleAnimatedHide()
    }

    if (isOpen) {
      setShouldRender(true)
    }
  }, [isOpen])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen((prev) => !prev)}>{title}</S.Title>

      {shouldRender && (
        <>
          <S.Content>{children}</S.Content>
          <S.Overlay onClick={handleAnimatedHide} />
        </>
      )}
    </S.Wrapper>
  )
}

export default Dropdown
