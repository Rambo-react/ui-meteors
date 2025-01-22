import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './'

const meta = {
  argTypes: {
    onChange: {
      control: '',
      defaultValue: () => {},
      description: 'if (onChange) {onChange(value)}',
    },
  },
  args: {
    disabled: false,
    errorText: '',
    label: 'Text-area',
    maxLength: 50,
    maxLengthVisible: true,
    placeholder: 'Text-area',
  },
  component: TextArea,

  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  args: {
    errorText: 'Error text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
