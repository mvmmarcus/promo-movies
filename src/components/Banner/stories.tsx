import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    id: 1234,
    img: 'https://image.tmdb.org/t/p/original/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg',
    title: 'The Suicide Squad',
    releaseDate: '2021-07-28',
    ribbon: 8,
    ribbonSize: 'normal'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Wrapper = styled.div`
  max-width: 104rem;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Default: Story<BannerProps> = (args) => (
  <Wrapper>
    <Banner {...args} />
  </Wrapper>
)
