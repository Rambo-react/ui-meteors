import { useState } from 'react'

import styles from './Menu.module.scss'

import { Icon } from '../Icon'

type MenuItemsType = Array<MenuItem>
type MenuItem = {
  activeId: string
  id: string
  isActive: boolean
}
type MenuProps = {
  onClick: (id: string) => void
}
const menuItemsArray = [
  { activeId: 'home', id: 'home-outline', isActive: false, isHover: false },
  {
    activeId: 'plus-square',
    id: 'plus-square-outline',
    isActive: false,
  },
  {
    activeId: 'person',
    id: 'person-outline',
    isActive: false,
  },
  {
    activeId: 'message-circle',
    id: 'message-circle-outline',
    isActive: false,
  },
  {
    activeId: 'search',
    id: 'search-outline',
    isActive: false,
  },
]

export const Menu = ({ onClick }: MenuProps) => {
  const [menuItems, setMenuItems] = useState<MenuItemsType>(menuItemsArray)

  return (
    <div className={styles.menu}>
      {menuItems.map(item => (
        <Icon
          color={item.isActive ? 'var(--color-accent-500)' : 'var(--color-light-100)'}
          height={24}
          id={item.isActive ? item.activeId : item.id}
          key={item.id}
          onClick={() => {
            setMenuItems(
              menuItems.map(i =>
                i.id === item.id ? { ...i, isActive: true } : { ...i, isActive: false }
              )
            )
            onClick(item.id)
          }}
          width={24}
        />
      ))}
    </div>
  )
}
