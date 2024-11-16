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
        activeIcon: HomeOutline,
        disabled: false,
        inactiveIcon: Home,
        name: 'Home',
        path: '/home',
      },
      {
        activeIcon: PlusSquareOutline,
        disabled: true,
        inactiveIcon: PlusSquare,
        name: 'Create',
        path: '/create',
      },
      {
        activeIcon: PersonOutline,
        disabled: false,
        inactiveIcon: Person,
        name: 'My Profile',
        path: '/profile',
      },
      {
        activeIcon: MessageCircleOutline,
        disabled: false,
        inactiveIcon: MessageCircle,
        name: 'Messenger',
        path: '/messenger',
      },
      {
        activeIcon: SearchOutline,
        disabled: false,
        inactiveIcon: Search,
        name: 'Search',
        path: '/search',
      },
      {
        activeIcon: TrendingUpOutline,
        disabled: false,
        inactiveIcon: TrendingUp,
        name: 'Statistics',
        path: '/statistics',
      },
      {
        activeIcon: BookmarkOutline,
        disabled: false,
        inactiveIcon: Bookmark,
        name: 'Favorites',
        path: '/favorites',
      },
      {
        activeIcon: LogOutOutline,
        disabled: false,
        inactiveIcon: LogOut,
        name: 'Log Out',
        path: '/logout',
      },
    ],
  },
}
