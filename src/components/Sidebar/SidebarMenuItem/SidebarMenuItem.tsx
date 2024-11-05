import { clsx } from 'clsx'

import styles from '../SidebarMenuItem/SidebarMenuItem.module.scss'

import { Icon } from '../../Icon'

type SidebarMenuItemProps = {
  id: string
  isActive?: boolean
  isDisabled?: boolean
  label: string
  onActivate: () => void
}
export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  const { id, isActive, isDisabled, label, onActivate } = props

  return (
    <li className={styles.menuItem} onClick={onActivate}>
      <a
        className={clsx(
          styles.menuItemLink,
          isDisabled && styles.disabled,
          isActive && styles.active
        )}
        href={'#'}
      >
        <Icon fill={'white'} height={24} id={id} width={24} />
        <span>{label}</span>
      </a>
    </li>
  )
}
