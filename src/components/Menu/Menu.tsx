import {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
  useState,
} from 'react'

import styles from './Menu.module.scss'

import Home from '../Icons/Home'
import HomeOutline from '../Icons/HomeOutline'
import MessageCircle from '../Icons/MessageCircle'
import MessageCircleOutline from '../Icons/MessageCircleOutline'
import Person from '../Icons/Person'
import PersonOutline from '../Icons/PersonOutline'
import PlusSquare from '../Icons/PlusSquare'
import PlusSquareOutline from '../Icons/PlusSquareOutline'
import Search from '../Icons/Search'
import SearchOutline from '../Icons/SearchOutline'

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

const menuItemsArray: MenuItemsType = [
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
]

export const Menu = () => {
  const [activeSection, setActiveSection] = useState<null | number>(null)
  const handleClick = (index: number) => {
    setActiveSection(index)
  }

  return (
    <div className={styles.menu}>
      {menuItemsArray.map((item, index) => {
        const isActive = activeSection === index

        return (
          <a
            className={styles.menuItemLink}
            // href={item.path}
            key={item.name}
            onClick={() => handleClick(index)}
          >
            {isActive ? (
              <item.inactiveIcon height={24} width={24} />
            ) : (
              <item.activeIcon height={24} width={24} />
            )}
          </a>
        )
      })}
    </div>
  )
}
