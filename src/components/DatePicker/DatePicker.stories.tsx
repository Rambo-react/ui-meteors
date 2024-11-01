import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from '.'

const meta = {
  argTypes: {
    disabled: {
      description: 'Sets disabled',
    },
    error: {
      description: 'Sets error',
    },
    getDate: {
      description: 'Callback function to get user selected dates',
    },
    isRangeInput: {
      description: 'Sets the multi-select mode',
    },
    label: {
      description: 'Sets label',
    },
  },
  args: {
    disabled: false,
    error: '',
    getDate(date: Date[]) {
      console.log(date)
    },
    isRangeInput: false,
    label: 'Select Date',
  },
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const BaseExample: Story = {
  render(args) {
    return <DatePicker {...args} />
  },
}

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
