import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import BannerSlider, { BannerSliderProps } from '.'
import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Default: Story<BannerSliderProps> = (args) => (
  <Wrapper>
    <BannerSlider {...args} />
  </Wrapper>
)
