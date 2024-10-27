import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'text'],
    },
  },
  args: {
    children: 'Button',
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    disabled: false,
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    disabled: false,
    variant: 'outline',
  },
}

export const Text: Story = {
  args: {
    disabled: false,
    variant: 'text',
  },
}

export const FullWidth: Story = {
  args: {
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
