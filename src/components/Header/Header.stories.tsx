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
    languageOptions: [
      { iconId: 'flag-uk', label: 'English', value: 'en' },
      { iconId: 'flag-russia', label: 'Русский', value: 'ru' },
    ],
    notificationCount: 3,
    title: 'Inctagram',
  },
}

export const NotAuthorized: Story = {
  args: {
    isAuthorized: false,
    languageOptions: [
      { iconId: 'flag-uk', label: 'English', value: 'en' },
      { iconId: 'flag-russia', label: 'Русский', value: 'ru' },
    ],
    notificationCount: 3,
    title: 'Inctagram',
  },
}
