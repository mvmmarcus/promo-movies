import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.border.radius};
  `}
`

export const ImageBox = styled.a`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    height: 45rem;
    width: 100%;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    animation: placeholderShimmer 3s linear infinite forwards;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;

    img {
      object-fit: cover;
      transition: ${theme.transition.default};

      &:hover {
        transform: scale(1.1);
      }
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
  `}
`

export const TitleGroup = styled.div`
  max-width: calc(100% - 2.5rem);
  word-wrap: break-word;
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const ReleaseDate = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
  `}
`
