import { useState } from 'react'

import s from './HeaderMobile.module.scss'

import { Icon } from '../Icon'
import { Menu } from '../Menu/Menu'
import { LanguageOption, LanguageOptionComponent } from './LanguageOption'

type HeaderProps = {
  isAuthenticated?: boolean
  languageOptions?: LanguageOption[]
}

export const HeaderMobile = ({
  isAuthenticated = true,
  languageOptions = [
    {
      iconId: 'flag-uk',
      value: 'en',
    },
  ],
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLanguageChange = (option: LanguageOption) => {
    setSelectedLanguage(option)
  }

  return (
    <header className={s.header}>
      <div className={s.headerTitle}>Inctagram</div>
      <div className={s.languageSelect}>
        <div className={s.selectedLanguage}>
          <LanguageOptionComponent
            iconId={selectedLanguage.iconId}
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
              <LanguageOptionComponent iconId={option.iconId} value={selectedLanguage.value} />
            </div>
          ))}
        </div>
      </div>
      {isAuthenticated && (
        <div className={s.burgerContainer}>
          <button className={s.headerBurger} onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          {isMenuOpen && (
            <div className={s.menuContainer}>
              <Menu />
            </div>
          )}
        </div>
      )}
    </header>
  )
}
