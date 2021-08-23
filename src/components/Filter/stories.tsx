import { Story, Meta } from '@storybook/react/types-6-0'
import Filter, { FilterProps } from '.'

import items from './mock'

export default {
  title: 'Filter',
  component: Filter,
  args: {
    items,
    onFilter: () => null
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<FilterProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <Filter {...args} />
  </div>
)

export const WithInitialValues: Story<FilterProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <Filter {...args} initialValues={{ genre: ['action', 'romance'] }} />
  </div>
)
