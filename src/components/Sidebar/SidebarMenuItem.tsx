import { useState } from 'react'

import { clsx } from 'clsx'

import styles from './Sidebar.module.scss'

import { Icon } from '../Icon'

type SidebarMenuItemProps = {
  id: string
  isActive?: boolean
  isDisabled?: boolean
  label: string
  onActivate?: () => void
}
const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  const { id, isActive, isDisabled, label, onActivate } = props

  const [isHover, setHover] = useState(false)

  const iconColor = isActive
    ? 'var(--color-accent-500)'
    : isDisabled
    ? 'var(--color-dark-100)'
    : isHover
    ? 'var(--color-accent-100)'
    : 'var(--color-light-100)'

  const handleMouseEnter = () => {
    if (!isDisabled) {
      setHover(true)
    }
  }
  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <li
      className={styles.menuItem}
      onClick={!isDisabled ? onActivate : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className={clsx(styles.menuItemLink, isDisabled ? styles.menuItemLinkDisabled : '')}
        href={'#'}
      >
        <Icon color={iconColor} height={24} id={id} width={24} />
        <span
          className={clsx(
            styles.span,
            isActive
              ? styles.spanActive
              : isHover
              ? styles.spanHover
              : isDisabled
              ? styles.spanDisabled
              : ''
          )}
        >
          {label}
        </span>
      </a>
    </li>
  )
}

export default SidebarMenuItem
