import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './'

const meta = {
  argTypes: {},
  args: {},
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const BasicExample: Story = {}
