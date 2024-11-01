import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

const meta = {
  argTypes: {},
  args: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const BasicExample: Story = {}
