import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta = {
  argTypes: {
    children: {
      description: 'Content inside card',
    },
  },
  args: {
    children: <span>Card</span>,
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
