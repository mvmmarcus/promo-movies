import { Story, Meta } from '@storybook/react/types-6-0'
import EmptyPlaceholder, { EmptyPlaceholderProps } from '.'

export default {
  title: 'EmptyPlaceholder',
  component: EmptyPlaceholder,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<EmptyPlaceholderProps> = (args) => (
  <EmptyPlaceholder {...args} />
)

Default.args = {
  title: 'No data was found',
  description: 'Try change the filters'
}
