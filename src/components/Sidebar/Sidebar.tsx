import { useState } from 'react'

import styles from './sidebar.module.scss'

import SidebarMenuItem from './SidebarMenuItem'

type SidebarProps = { items: menuItemsType }
type menuItemsType = Array<menuItem>
type menuItem = {
  activeId: string
  id: string
  isActive: boolean
  isDisabled: boolean
  label: string
}
export const Sidebar = (props: SidebarProps) => {
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
  const { items = defaultItems } = props
  const [menuItems, setMenuItems] = useState<menuItemsType>(items)

  const handleActivate = (id: string) => {
    setMenuItems((prevItems: menuItemsType) =>
      prevItems.map(item =>
        item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
      )
    )
  }

  return (
    <ul className={styles.sidebar}>
      {menuItems.map(item => (
        <SidebarMenuItem
          id={item.isActive ? item.activeId : item.id}
          isActive={item.isActive}
          isDisabled={item.isDisabled}
          key={item.id}
          label={item.label}
          onActivate={() => handleActivate(item.id)}
        />
      ))}
    </ul>
  )
}
