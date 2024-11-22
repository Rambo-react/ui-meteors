import { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  component: Header,
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isAuthorized: true,
    notificationCount: 3,
    onSelectValueChange: val => console.log(val),
    title: 'Inctagram',
  },
}

export const NotAuthorized: Story = {
  args: {
    isAuthorized: false,
    notificationCount: 3,
    title: 'Inctagram',
  },
}
