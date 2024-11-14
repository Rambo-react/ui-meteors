import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './CheckBox.module.scss'

import { Icon } from '../Icon'

type Props = {
  checked: boolean
  disabled?: boolean
  label?: string
  name?: string
  onCheckedChange: (checked: boolean) => void
}

export const CheckBox = ({
  checked = false,
  disabled = false,
  label,
  name,
  onCheckedChange,
}: Props) => {
  return (
    <div className={s.container}>
      <label className={clsx(s.label, disabled && s.disabled)}>
        <div className={clsx(s.buttonWrapper, disabled && s.disabled)}>
          <CheckboxPrimitive.Root
            checked={checked}
            className={s.checkbox}
            disabled={disabled}
            name={name}
            onCheckedChange={value => onCheckedChange?.(!!value)}
          >
            <CheckboxPrimitive.Indicator className={clsx(s.indicator, disabled && s.disabled)}>
              <Icon height={14} id={'checkmark-outline'} viewBox={'4 8 14 14'} width={14} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        </div>
        {label}
      </label>
    </div>
  )
}
