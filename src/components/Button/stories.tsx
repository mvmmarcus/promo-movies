import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from 'styled-icons/material-outlined/'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

export const withIcon: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Default Button'
}

withIcon.args = {
  children: 'Default Button',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
