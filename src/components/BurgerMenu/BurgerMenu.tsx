import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './BurgerMenu.module.scss'

export type BurgerMenuItem = {
  disabled?: boolean
  icon?: ReactNode
  label?: string
  onClick?: () => void
  visible?: boolean
}

type Props = {
  items: BurgerMenuItem[]
}

export const BurgerMenu = ({ items }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={s.trigger}>
        <button aria-label={'Menu'} className={s.iconButton}>
          <div className={s.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} className={s.content} side={'bottom'} sideOffset={1}>
          {items
            .filter(item => item.visible !== false)
            .map(({ disabled, ...item }, index) => {
              return (
                <DropdownMenu.Item
                  className={clsx(s.item, disabled && s.disabled)}
                  key={index}
                  onSelect={item.onClick}
                >
                  <div className={clsx(s.icon, disabled && s.disabled)}>{item.icon}</div>
                  <div>{item.label}</div>
                </DropdownMenu.Item>
              )
            })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
