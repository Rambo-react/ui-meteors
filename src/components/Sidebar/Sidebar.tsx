import {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
  useState,
} from 'react'

import { clsx } from 'clsx'

import s from './Sidebar.module.scss'

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

type SidebarProps = { sections?: MenuItemsType }
type MenuItemsType = MenuItem[]
type ComponentType = MemoExoticComponent<
  ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>
>

type MenuItem = {
  activeIcon: ComponentType
  disabled: boolean
  handler: () => void
  inactiveIcon: ComponentType
  name: string
}
const defaultItems = [
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
]

export const Sidebar = ({ sections = defaultItems }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState<null | number>(null)

  const handleClick = (index: number, handler: () => void) => {
    setActiveSection(index)
    handler()
  }

  return (
    <ul className={s.sidebar}>
      {sections.map(({ disabled, handler, name, ...section }, index) => {
        const isActive = activeSection === index

        return (
          <li
            aria-disabled={disabled}
            className={s.menuItem}
            key={name}
            onClick={() => handleClick(index, handler)}
            tabIndex={disabled ? -1 : 0}
          >
            {isActive ? (
              <section.activeIcon fill={'var(--color-accent-500)'} height={24} width={24} />
            ) : (
              <section.inactiveIcon height={24} width={24} />
            )}
            <span className={clsx(disabled && s.spanDisabled, isActive && s.active)}>{name}</span>
          </li>
        )
      })}
    </ul>
  )
}
