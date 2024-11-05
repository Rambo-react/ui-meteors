import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { RadioGroupExample } from '.'

const meta = {
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Selecting to disable all radio-buttons',
    },
    disabledOption: {
      control: { type: 'radio' },
      defaultValue: 'none',
      description: 'Selecting a radio-button to be disabled',
    },
    labels: {
      control: { type: 'object' },
      defaultValue: ['RadioGroup1', 'RadioGroup2', 'RadioGroup3', 'RadioGroup4'],
      description: 'Changing the name of any button',
    },
  },
  component: RadioGroupExample,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroupExample>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    disabled: false,
    disabledOption: ['RadioGroup1', 'RadioGroup3'],
    labels: ['RadioGroup1', 'RadioGroup2', 'RadioGroup3', 'RadioGroup4'],
    onChange: action('radio-selected'),
  },
}
