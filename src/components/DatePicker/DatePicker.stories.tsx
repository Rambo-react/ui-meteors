import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from '.'

const meta = {
  argTypes: {},
  args: {
    onDateSelect(date: Date) {
      console.log(date)
    },
  },
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const BaseExample: Story = {}

export const DisabledDatePicker: Story = {
  args: {
    disabled: true,
  },
}

export const DatePickerWithError: Story = {
  args: {
    error: 'Error!',
  },
}

export const DatePickerWithRange: Story = {
  args: {
    isRangeInput: true,
  },
}
