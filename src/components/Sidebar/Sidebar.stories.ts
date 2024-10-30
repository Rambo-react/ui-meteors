import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'

const meta = {
  component: Sidebar,
  tags: ['autodocs'],
  title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { activeId: 'home', id: 'home-outline', isActive: false, isDisabled: false, label: 'Home' },
      {
        activeId: 'plus-square',
        id: 'plus-square-outline',
        isActive: false,
        isDisabled: true,
        label: 'Create',
      },
      {
        activeId: 'person',
        id: 'person-outline',
        isActive: false,
        isDisabled: false,
        label: 'My Profile',
      },
      {
        activeId: 'message-circle',
        id: 'message-circle-outline',
        isActive: false,
        isDisabled: false,
        label: 'Messenger',
      },
      {
        activeId: 'search',
        id: 'search-outline',
        isActive: false,
        isDisabled: false,
        label: 'Search',
      },
      {
        activeId: 'trending-up',
        id: 'trending-up-outline',
        isActive: false,
        isDisabled: false,
        label: 'Statistics',
      },
      {
        activeId: 'bookmark',
        id: 'bookmark-outline',
        isActive: false,
        isDisabled: false,
        label: 'Search',
      },
      {
        activeId: 'log-out',
        id: 'log-out-outline',
        isActive: false,
        isDisabled: false,
        label: 'Log Out',
      },
    ],
  },
}
