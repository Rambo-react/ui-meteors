import { ReactNode } from 'react'

import s from './Header.module.scss'

import { BurgerMenu, BurgerMenuItem } from '../BurgerMenu/BurgerMenu'
import {
  BellOutline,
  BookmarkOutline,
  FlagRussia,
  FlagUnitedKingdom,
  LogOutOutline,
  SettingsOutline,
  TrendingUp,
} from '../Icons'
import { Option, SelectBox } from '../SelectBox'

export type HeaderProps = {
  children?: ReactNode
  isAuthorized?: boolean
  logInHandler?: () => void
  menuItems?: BurgerMenuItem[]
  notificationCount?: number
  onSelectValueChange: (value: string) => void
  selectOptions?: Option[]
  signUpHandler?: () => void
  title?: string
  titleHandler?: () => void
}

const defaultOptions = [
  {
    icon: <FlagUnitedKingdom height={24} width={24} />,
    label: 'English',
    value: '1',
  },
  {
    icon: <FlagRussia height={24} width={24} />,
    label: 'Русский',
    value: '2',
  },
]

const defaultMenuItems = [
  {
    icon: <SettingsOutline height={24} width={24} />,
    label: 'Profile settings',
    onClick: () => console.log('Profile clicked'),
    visible: true,
  },
  {
    disabled: true,
    icon: <TrendingUp height={24} width={24} />,
    label: 'Statistics',
    onClick: () => console.log('Statistics clicked'),
  },
  {
    icon: <BookmarkOutline height={24} width={24} />,
    label: 'Favorites',
    onClick: () => console.log('Statistics clicked'),
  },
  {
    icon: <LogOutOutline height={24} width={24} />,
    label: 'Log-out',
    onClick: () => console.log('Log out clicked'),
  },
]

export const Header = ({
  children,
  isAuthorized,
  menuItems = defaultMenuItems,
  notificationCount = 0,
  onSelectValueChange,
  selectOptions = defaultOptions,
  title = 'Inctagram',
  titleHandler,
}: HeaderProps) => {
  return (
    <header className={s.header}>
      <span className={s.title} onClick={titleHandler}>
        {title}
      </span>
      <div className={s.content}>
        {isAuthorized && (
          <div className={s.iconWrapper}>
            <div className={s.notificationIcon}>
              <BellOutline
                className={s.icon}
                fill={'var(--color-light-100)'}
                height={20}
                width={18}
              />
              {notificationCount > 0 && (
                <div className={s.notificationCount}>{notificationCount}</div>
              )}
            </div>
          </div>
        )}
        <SelectBox defaultValue={'1'} onValueChange={onSelectValueChange} options={selectOptions} />
        {isAuthorized && (
          <div className={s.burgerContainer}>
            <BurgerMenu items={menuItems} />
          </div>
        )}
        {children}
      </div>
    </header>
  )
}
