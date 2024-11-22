import { Meta, StoryObj } from '@storybook/react'

import { BookmarkOutline, LogOutOutline, SettingsOutline, TrendingUp } from '../Icons'
import { BurgerMenu } from './BurgerMenu'

const meta = {
  component: BurgerMenu,
  title: 'Components/BurgerMenu',
} satisfies Meta<typeof BurgerMenu>

export default meta
type Story = StoryObj<typeof meta>

export const BurgerMenuWithItems: Story = {
  args: {
    items: [
      {
        icon: <SettingsOutline height={24} width={24} />,
        label: 'Profile settings',
        onClick: () => console.log('Profile clicked'),
        visible: true,
      },
      {
        disabled: true,
        icon: <TrendingUp height={24} width={24} />,
        label: 'Statistics',
        onClick: () => console.log('Statistics clicked'),
      },
      {
        icon: <BookmarkOutline height={24} width={24} />,
        label: 'Favorites',
        onClick: () => console.log('Statistics clicked'),
      },
      {
        icon: <LogOutOutline height={24} width={24} />,
        label: 'Log-out',
        onClick: () => console.log('Log out clicked'),
      },
    ],
  },
}
