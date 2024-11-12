import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { action } from '@storybook/addon-actions'

import { RadioGroup } from '.'

const meta = {
  argTypes: {
    currentValue: { type: 'string' },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Selecting to disable all radio-buttons',
    },
    disabledOptions: {
      control: { type: 'radio' },
      defaultValue: 'none',
      description: 'Selecting a radio-button to be disabled',
    },
    options: {
      control: { type: 'object' },
      defaultValue: ['RadioGroup1', 'RadioGroup2', 'RadioGroup3', 'RadioGroup4'],
      description: 'Changing the name of any button',
    },
  },
  args: {
    currentValue: 'RadioGroup1',
    disabled: false,
    disabledOptions: ['RadioGroup1', 'RadioGroup3'],
    onChange() {},
    options: ['RadioGroup1', 'RadioGroup2', 'RadioGroup3', 'RadioGroup4'],
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    // Состояние для хранения текущего значения, выбранного в Radio
    const [selected, setSelected] = useState<string>('RadioGroup2')

    const handleChange = (value: string) => {
      setSelected(value)
      action('radio-selected')
    }

    return <RadioGroup {...args} currentValue={selected} onChange={handleChange} />
  },
}
