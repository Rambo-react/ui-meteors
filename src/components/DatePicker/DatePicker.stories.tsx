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
    isRangeInput: {
      description: 'Sets the multi-select mode',
    },
    label: {
      description: 'Sets label',
    },
    onDateSelect: {
      description: 'Callback function to get user selected dates',
    },
  },
  args: {
    disabled: false,
    error: '',
    isRangeInput: false,
    label: '',
    onDateSelect(date: Date[]) {
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
