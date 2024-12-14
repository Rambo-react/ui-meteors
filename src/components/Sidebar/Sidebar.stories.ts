import type { Meta, StoryObj } from '@storybook/react'

import Bookmark from '../Icons/Bookmark'
import BookmarkOutline from '../Icons/BookmarkOutline'
import Home from '../Icons/Home'
import HomeOutline from '../Icons/HomeOutline'
import LogOut from '../Icons/LogOut'
import LogOutOutline from '../Icons/LogOutOutline'
import MessageCircle from '../Icons/MessageCircle'
import MessageCircleOutline from '../Icons/MessageCircleOutline'
import Person from '../Icons/Person'
import PersonOutline from '../Icons/PersonOutline'
import PlusSquare from '../Icons/PlusSquare'
import PlusSquareOutline from '../Icons/PlusSquareOutline'
import Search from '../Icons/Search'
import SearchOutline from '../Icons/SearchOutline'
import TrendingUp from '../Icons/TrendingUp'
import TrendingUpOutline from '../Icons/TrendingUpOutline'
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
    sections: [
      {
        activeIcon: Home,
        disabled: false,
        handler: () => console.log('/home'),
        inactiveIcon: HomeOutline,
        name: 'Home',
      },
      {
        activeIcon: PlusSquare,
        disabled: true,
        handler: () => console.log('/create'),
        inactiveIcon: PlusSquareOutline,
        name: 'Create',
      },
      {
        activeIcon: Person,
        disabled: false,
        handler: () => console.log('/profile'),
        inactiveIcon: PersonOutline,
        name: 'My Profile',
      },
      {
        activeIcon: MessageCircle,
        disabled: false,
        handler: () => console.log('/messenger'),
        inactiveIcon: MessageCircleOutline,
        name: 'Messenger',
      },
      {
        activeIcon: Search,
        disabled: false,
        handler: () => console.log('/search'),
        inactiveIcon: SearchOutline,
        name: 'Search',
      },
      {
        activeIcon: TrendingUp,
        disabled: false,
        handler: () => console.log('/statistics'),
        inactiveIcon: TrendingUpOutline,
        name: 'Statistics',
      },
      {
        activeIcon: Bookmark,
        disabled: false,
        handler: () => console.log('/favorites'),
        inactiveIcon: BookmarkOutline,
        name: 'Favorites',
      },
      {
        activeIcon: LogOut,
        disabled: false,
        handler: () => console.log('/logout'),
        inactiveIcon: LogOutOutline,
        name: 'Log Out',
      },
    ],
  },
}
