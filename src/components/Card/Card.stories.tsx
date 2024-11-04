import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta = {
  argTypes: {
    content: {
      cardTitle: {
        type: 'string',
      },
      description: 'Variable card content',
      sectionTitle: {
        type: 'string',
      },
      text: {
        type: 'string',
      },
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: {
      cardTitle: 'Apple iMac 27',
      sectionTitle: 'Active sessions',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium montes rutrum; euismod ultricies pellentesque mus ut euismod.',
    },
  },
}
