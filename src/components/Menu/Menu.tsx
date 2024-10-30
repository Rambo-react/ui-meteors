import { useState } from 'react'

import styles from './menu.module.scss'

import { Icon } from '../Icon'
type menuItemsType = Array<menuItem>
type menuItem = {
  activeId: string
  id: string
  isActive: boolean
}
type MenuProps = {
  onClick: (id: string) => void
}
export const Menu = ({ onClick }: MenuProps) => {
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
  const [menuItems, setMenuItems] = useState<menuItemsType>(menuItemsArray)

  const handleActivate = (id: string) => {
    setMenuItems((prevItems: menuItemsType) =>
      prevItems.map(item =>
        item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
      )
    )
  }
  const onClickHandler = (id: string) => {
    handleActivate(id)
    onClick(id)
  }

  return (
    <div className={styles.menu}>
      {menuItems.map(item => (
        <Icon
          color={item.isActive ? 'var(--color-accent-500)' : 'var(--color-light-100)'}
          height={24}
          id={item.isActive ? item.activeId : item.id}
          key={item.id}
          onClick={() => onClickHandler(item.id)}
          width={24}
        />
      ))}
    </div>
  )
}
export default Menu