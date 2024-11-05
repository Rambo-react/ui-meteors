import s from './Header.module.scss'

import { Icon } from '../Icon'

export type LanguageOption = {
  iconId: string
  label: string
  value: string
}

export const LanguageOptionComponent = ({ iconId, label }: LanguageOption) => (
  <div className={s.languageOption}>
    <Icon className={s.iconWithMargin} height={24} id={iconId} width={24} />
    <span>{label}</span>
  </div>
)
