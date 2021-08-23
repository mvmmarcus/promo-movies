import { Story, Meta } from '@storybook/react/types-6-0'
import ProgressBar, { ProgressBarProps } from '.'

export default {
  title: 'ProgressBar',
  component: ProgressBar
} as Meta

export const Default: Story<ProgressBarProps> = (args) => (
  <ProgressBar {...args} />
)

Default.args = {
  progress: 80,
  size: 60,
  strokeWidth: 4
}
