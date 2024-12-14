import type { Meta, StoryObj } from '@storybook/react'

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
    callbacks: [null, () => console.log('click for 2 element')],
  },
}
