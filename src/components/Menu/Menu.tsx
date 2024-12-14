import {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
  useState,
} from 'react'

import s from './Menu.module.scss'

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

type Props = { callbacks?: ItemCallback[]; sections?: MenuItem[] }
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

type ItemCallback = (() => void) | null

const menuItemsArray = [
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
]

export const Menu = ({ callbacks = [], sections = menuItemsArray }: Props) => {
  const [activeSection, setActiveSection] = useState<null | number>(null)
  const handleClick = (index: number, handler = () => {}) => {
    setActiveSection(index)
    handler()
  }

  return (
    <nav className={s.menu}>
      {sections.map(({ itemCallback, name, ...item }, index) => {
        const isActive = activeSection === index

        const handler = callbacks[index] ?? itemCallback

        return (
          <span className={s.item} key={name + index} onClick={() => handleClick(index, handler)}>
            {isActive ? (
              <item.activeIcon fill={'var(--color-accent-500)'} height={24} width={24} />
            ) : (
              <item.inactiveIcon height={24} width={24} />
            )}
          </span>
        )
      })}
    </nav>
  )
}
