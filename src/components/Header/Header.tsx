import { useState } from 'react'

import s from './Header.module.scss'

import { Button } from '../Button'
import { Icon } from '../Icon'
import { LanguageOption, LanguageOptionComponent } from './LanguageOption'

export type HeaderProps = {
  isAuthorized?: boolean
  languageOptions?: LanguageOption[]
  notificationCount?: number
  title?: string
  titleLink?: string
}

export const Header = ({
  isAuthorized,
  languageOptions = [{ iconId: 'flag-uk', label: 'English', value: 'en' }],
  notificationCount = 0,
  title = 'Inctagram',
  titleLink = '/',
}: HeaderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0])

  const handleLanguageChange = (option: LanguageOption) => {
    setSelectedLanguage(option)
  }

  return (
    <header className={s.header}>
      <a className={s.headerTitle} href={titleLink}>
        {title}
      </a>
      <div className={s.headerIcons}>
        {isAuthorized ? (
          <div className={s.headerMenu}>
            <span className={s.notificationIcon}>
              {notificationCount > 0 && (
                <div>
                  <Icon
                    fill={'var(--color-light-100)'}
                    height={24}
                    id={'bell-outline'}
                    width={24}
                  />
                  <span className={s.notificationCount}>{notificationCount}</span>
                </div>
              )}
            </span>
            <div className={s.languageSelect}>
              <div className={s.selectedLanguage}>
                <LanguageOptionComponent
                  iconId={selectedLanguage.iconId}
                  label={selectedLanguage.label}
                  value={selectedLanguage.value}
                />
                <Icon
                  fill={'var(--color-light-100)'}
                  height={24}
                  id={'arrow-ios-down-outline'}
                  width={24}
                />
              </div>
              <div className={s.dropdownMenu}>
                {languageOptions.map(option => (
                  <div
                    className={s.dropdownItem}
                    key={option.value}
                    onClick={() => handleLanguageChange(option)}
                  >
                    <LanguageOptionComponent
                      iconId={option.iconId}
                      label={option.label}
                      value={selectedLanguage.value}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={s.headerMenuAuth}>
            <div className={s.languageSelect}>
              <div className={s.selectedLanguage}>
                <LanguageOptionComponent
                  iconId={selectedLanguage.iconId}
                  label={selectedLanguage.label}
                  value={selectedLanguage.value}
                />
                <Icon
                  fill={'var(--color-light-100)'}
                  height={24}
                  id={'arrow-ios-down-outline'}
                  width={24}
                />
              </div>
              <div className={s.dropdownMenu}>
                {languageOptions.map(option => (
                  <div
                    className={s.dropdownItem}
                    key={option.value}
                    onClick={() => handleLanguageChange(option)}
                  >
                    <LanguageOptionComponent
                      iconId={option.iconId}
                      label={option.label}
                      value={selectedLanguage.value}
                    />
                  </div>
                ))}
              </div>
            </div>
            <>
              <Button as={'button'} className={s.loginButton} fullWidth={false} variant={'text'}>
                Log In
              </Button>
              <Button as={'button'} fullWidth={false} variant={'primary'}>
                Sign Up
              </Button>
            </>
          </div>
        )}
      </div>
    </header>
  )
}
