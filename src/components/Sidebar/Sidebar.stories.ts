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
        inactiveIcon: HomeOutline,
        itemCallback: () => console.log('/home'),
        name: 'Home',
      },
      {
        activeIcon: PlusSquare,
        disabled: true,
        inactiveIcon: PlusSquareOutline,
        itemCallback: () => console.log('/create'),
        name: 'Create',
      },
      {
        activeIcon: Person,
        disabled: false,
        inactiveIcon: PersonOutline,
        itemCallback: () => console.log('/profile'),
        name: 'My Profile',
      },
      {
        activeIcon: MessageCircle,
        disabled: false,
        inactiveIcon: MessageCircleOutline,
        itemCallback: () => console.log('/messenger'),
        name: 'Messenger',
      },
      {
        activeIcon: Search,
        disabled: false,
        inactiveIcon: SearchOutline,
        itemCallback: () => console.log('/search'),
        name: 'Search',
      },
      {
        activeIcon: TrendingUp,
        disabled: false,
        inactiveIcon: TrendingUpOutline,
        itemCallback: () => console.log('/statistics'),
        name: 'Statistics',
      },
      {
        activeIcon: Bookmark,
        disabled: false,
        inactiveIcon: BookmarkOutline,
        itemCallback: () => console.log('/favorites'),
        name: 'Favorites',
      },
      {
        activeIcon: LogOut,
        disabled: false,
        inactiveIcon: LogOutOutline,
        itemCallback: () => console.log('/logout'),
        name: 'Log Out',
      },
    ],
  },
}
