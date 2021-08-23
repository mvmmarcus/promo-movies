import { Story, Meta } from '@storybook/react/types-6-0'
import Paginate from '.'

export default {
  title: 'Paginate',
  component: Paginate
} as Meta

export const Default: Story = () => (
  <Paginate totalResults={500} onPaginate={() => null} />
)
