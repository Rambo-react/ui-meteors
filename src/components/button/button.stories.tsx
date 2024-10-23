import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'text', 'icon'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'outline',
  },
}

export const Text: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'text',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

// export const Link: Story = {
//   args: {
//     as: 'a',
//     children: 'Link that looks like a button',
//     href: 'https://google.com',
//     rel: 'noopener noreferrer',
//     target: '_blank',
//     variant: 'primary',
//   },
// }

export const WithIcon: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'icon',
  },
}
