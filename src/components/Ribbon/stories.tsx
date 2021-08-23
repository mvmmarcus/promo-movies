import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: '80%'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      maxWidth: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888',
      margin: '3rem'
    }}
  >
    <Ribbon {...args} />
  </div>
)
