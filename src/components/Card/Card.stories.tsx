import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta = {
  args: {
    children: <div>Card</div>,
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
