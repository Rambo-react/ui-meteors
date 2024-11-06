import s from './HeaderMobile.module.scss'

import { Icon } from '../Icon'

export type LanguageOption = {
  iconId: string
  value: string
}

export const LanguageOptionComponent = ({ iconId }: LanguageOption) => (
  <div className={s.languageOption}>
    <Icon className={s.iconWithMargin} height={24} id={iconId} width={24} />
  </div>
)
