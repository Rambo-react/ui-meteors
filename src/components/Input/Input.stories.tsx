import { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  component: Input,
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Search: Story = {
  args: {
    placeholder: 'Input search',
    type: 'search',
  },
}

export const SearchError: Story = {
  args: {
    errorMsg: 'Error text',
    placeholder: 'Input search',
    type: 'search',
  },
}

export const SearchDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input search',
    type: 'search',
  },
}
export const Email: Story = {
  args: {
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
  },
}

export const EmailError: Story = {
  args: {
    errorMsg: 'Error text',
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
  },
}

export const EmailDisabled: Story = {
  args: {
    disabled: true,
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
}

export const PasswordError: Story = {
  args: {
    errorMsg: 'Error text',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
}

export const PasswordDisabled: Story = {
  args: {
    disabled: true,
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
}
