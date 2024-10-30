import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'

import { CheckBox } from './'

const meta = {
  argTypes: {
    checked: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    label: {
      type: 'string',
    },
    onCheckedChange: {
      description: 'function for change "chacked" value',
      type: 'function',
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
  component: CheckBox,

  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [checked, setChecked] = useState(args.checked)

    useEffect(() => setChecked(args.checked), [args.checked])

    return <CheckBox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const WithLabel: Story = {
  ...Default,
  args: {
    label: 'Check-box',
  },
}

export const Checked: Story = {
  ...Default,
  args: {
    checked: true,
    label: 'Check-box',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Check-box',
  },
}
