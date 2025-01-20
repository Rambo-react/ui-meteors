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

type Props = {
  callbacks?: CallbackItem[]
  sections?: MenuItem[]
}

type ComponentType = MemoExoticComponent<
  ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>
>

type MenuItem = {
  activeIcon: ComponentType
  disabled: boolean
  inactiveIcon: ComponentType
  itemCallback: () => void
  name: string
}

type CallbackItem = {
  itemCallback: (() => void) | null
  name: string
}

const defaultItems = [
  {
    activeIcon: Home,
    disabled: false,
    inactiveIcon: HomeOutline,
    itemCallback: () => console.log('/home'),
    name: 'Home',
  },
  {
    activeIcon: PlusSquare,
    disabled: false,
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
]

export const Sidebar = ({ callbacks = [], sections = defaultItems }: Props) => {
  const [activeSection, setActiveSection] = useState<null | number>(null)

  const handleClick = (index: number, handler = () => {}) => {
    setActiveSection(index)
    handler()
  }

  return (
    <ul className={s.sidebar}>
      {sections.map(({ disabled, itemCallback, name, ...section }, index) => {
        const isActive = activeSection === index
        const newCallback = callbacks.find(el => el.name === name)?.itemCallback
        const handler = newCallback ?? itemCallback

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
