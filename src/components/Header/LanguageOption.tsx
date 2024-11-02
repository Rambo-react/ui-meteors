import React from 'react'

import { Icon } from '../Icon'

export type LanguageOption = {
  iconId: string
  label: string
  value: string
}

export const LanguageOptionComponent: React.FC<LanguageOption> = ({ iconId, label }) => (
  <div style={{ alignItems: 'center', display: 'flex' }}>
    <Icon height={24} id={iconId} style={{ marginRight: '12px' }} width={24} />
    <span>{label}</span>
  </div>
)

export default LanguageOption
