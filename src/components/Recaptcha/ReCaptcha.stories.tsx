import type { Meta, StoryObj } from '@storybook/react'

import { ReCaptcha } from './'

const meta = {
  argTypes: {},
  args: {
    onChange(value: null | string) {
      console.log(value)
    },
    siteKey: 'siteKey',
  },
  component: ReCaptcha,
  tags: ['autodocs'],
  title: 'Components/ReCaptcha',
} satisfies Meta<typeof ReCaptcha>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
