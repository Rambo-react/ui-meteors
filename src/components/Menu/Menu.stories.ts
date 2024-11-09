import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { Menu } from './Menu'

const meta = {
  component: Menu,
  tags: ['autodocs'],
  title: 'Components/Menu',
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClick: action('icon clicked:'),
  },
}
