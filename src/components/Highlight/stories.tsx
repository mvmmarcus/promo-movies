import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

const item = {
  backgroundImage:
    'https://image.tmdb.org/t/p/original/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg',
  floatImage:
    'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
  title: 'The Suicide Squad',
  releaseDate: '2021-07-28',
  popularity: 0.8,
  resume: 'supervillains Harley Quinn, Bloodsport, Peacemaker and a collection',
  tagline: 'Theyre dying to save the world.'
}

export default {
  title: 'Highlight',
  component: Highlight,
  args: item
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)
