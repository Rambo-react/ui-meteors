import {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
  useState,
} from 'react'

import { clsx } from 'clsx'

import styles from './Sidebar.module.scss'

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

type SidebarProps = { sections: MenuItemsType }
type MenuItemsType = Array<MenuItem>
type ComponentType = MemoExoticComponent<
  ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>
>

type MenuItem = {
  activeIcon: ComponentType
  disabled: boolean
  inactiveIcon: ComponentType
  name: string
  path: string
}
const defaultItems = [
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
]

export const Sidebar = ({ sections = defaultItems }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState<null | number>(null)
  const handleClick = (index: number) => {
    if (!sections[index].disabled) {
      setActiveSection(index)
    }
  }

  return (
    <ul className={styles.sidebar}>
      {sections.map((section, index) => {
        const isActive = activeSection === index
        const isDisabled = section.disabled

        return (
          <li className={styles.menuItem} key={section.name}>
            <a
              aria-disabled={isDisabled}
              className={clsx(styles.menuItemLink)}
              // href={section.path}
              onClick={() => handleClick(index)}
            >
              {isActive ? (
                <section.inactiveIcon height={24} width={24} />
              ) : (
                <section.activeIcon height={24} width={24} />
              )}
              <span className={isDisabled ? styles.spanDisabled : ''}>{section.name}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
