import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCard, { MovieCardProps } from '.'

export default {
  title: 'MovieCard',
  component: MovieCard,
  args: {
    title: 'The Suicide Squad',
    releaseDate: '2021-07-28',
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<MovieCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <MovieCard {...args} />
  </div>
)

export const WithRibbon: Story<MovieCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <MovieCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '80%',
  ribbonSize: 'small',
  ribbonColor: 'green'
}
