import { Meta, StoryObj } from '@storybook/react'

import { FlagRussia, FlagUnitedKingdom } from '../Icons'
import { SelectBox } from './SelectBox'

const meta = {
  component: SelectBox,
  tags: ['autodocs'],
  title: 'Components/SelectBox',
} satisfies Meta<typeof SelectBox>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    label: 'select-box',
    onValueChange: value => console.log(value),
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    placeholder: 'Выберите опцию',
  },
}

export const WithIcons: Story = {
  args: {
    defaultValue: '1',
    label: 'select-box',
    onValueChange: value => console.log(value),
    options: [
      {
        icon: <FlagUnitedKingdom height={24} width={24} />,
        label: 'English',
        value: '1',
      },
      {
        icon: <FlagRussia height={24} id={'flag-russia'} width={24} />,
        label: 'Русский',
        value: '2',
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'select-box',
    onValueChange: value => console.log(value),
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    placeholder: 'Выберите опцию',
  },
}
