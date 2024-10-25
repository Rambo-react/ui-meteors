import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '.'

const meta = {
  // argTypes: {
  //   variant: {
  //     control: { type: 'select' },
  //     options: ['primary', 'secondary', 'outline', 'text', 'icon'],
  //   },
  // },
  args: {
    height: 24,
    id: 'arrow-back-outline',
    width: 24,
  },
  component: Icon,
  tags: ['autodocs'],
  title: 'Components/Icon',
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowBackOutline: Story = {
  args: {
    id: 'arrow-back-outline',
  },
}

export const ArrowForwardOutline: Story = {
  args: {
    id: 'arrow-forward-outline',
  },
}
