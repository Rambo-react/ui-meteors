import { useState } from 'react'

import styles from './Sidebar.module.scss'

import { SidebarMenuItem } from './SidebarMenuItem/SidebarMenuItem'

type SidebarProps = { items: MenuItemsType }
type MenuItemsType = Array<MenuItem>
type MenuItem = {
  activeId: string
  id: string
  isActive: boolean
  isDisabled: boolean
  label: string
}
const defaultItems = [
  { activeId: 'home', id: 'home-outline', isActive: false, isDisabled: false, label: 'Home' },
  {
    activeId: 'plus-square',
    id: 'plus-square-outline',
    isActive: false,
    isDisabled: true,
    label: 'Create',
  },
  {
    activeId: 'person',
    id: 'person-outline',
    isActive: false,
    isDisabled: false,
    label: 'My Profile',
  },
  {
    activeId: 'message-circle',
    id: 'message-circle-outline',
    isActive: false,
    isDisabled: false,
    label: 'Messenger',
  },
  {
    activeId: 'search',
    id: 'search-outline',
    isActive: false,
    isDisabled: false,
    label: 'Search',
  },
  {
    activeId: 'trending-up',
    id: 'trending-up-outline',
    isActive: false,
    isDisabled: false,
    label: 'Statistics',
  },
  {
    activeId: 'bookmark',
    id: 'bookmark-outline',
    isActive: false,
    isDisabled: false,
    label: 'Search',
  },
  {
    activeId: 'log-out',
    id: 'log-out-outline',
    isActive: false,
    isDisabled: false,
    label: 'Log Out',
  },
]

export const Sidebar = ({ items = defaultItems }: SidebarProps) => {
  const [menuItems, setMenuItems] = useState<MenuItemsType>(items)

  const mappedMenuItems = menuItems.map(item => {
    const itemId = item.id
    const handleActivate = () => {
      setMenuItems((prevItems: MenuItemsType) =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, isActive: true } : { ...item, isActive: false }
        )
      )
    }

    return (
      <SidebarMenuItem
        id={item.isActive ? item.activeId : item.id}
        isActive={item.isActive}
        isDisabled={item.isDisabled}
        key={item.id}
        label={item.label}
        onActivate={handleActivate}
      />
    )
  })

  return <ul className={styles.sidebar}>{mappedMenuItems}</ul>
}
