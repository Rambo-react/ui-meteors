import type { Meta, StoryObj } from '@storybook/react'

import { HeaderMobile } from './HeaderMobile'

const meta = {
  component: HeaderMobile,
  tags: ['autodocs'],
  title: 'Components/HeaderMobile',
} satisfies Meta<typeof HeaderMobile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isAuthenticated: true,
    languageOptions: [
      { iconId: 'flag-uk', value: 'en' },
      { iconId: 'flag-russia', value: 'ru' },
    ],
  },
}

export const Unauthenticated: Story = {
  args: {
    isAuthenticated: false,
    languageOptions: [
      { iconId: 'flag-uk', value: 'en' },
      { iconId: 'flag-russia', value: 'ru' },
    ],
  },
}
