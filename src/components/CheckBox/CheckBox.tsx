import { ComponentPropsWithoutRef } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './CheckBox.module.scss'

import { Icon } from '../Icon'

type Props = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

export const CheckBox = ({ disabled = false, label, ...rest }: Props) => {
  return (
    <div className={s.container}>
      <label className={clsx(s.label, disabled && s.disabled)}>
        <div className={clsx(s.buttonWrapper, disabled && s.disabled)}>
          <CheckboxPrimitive.Root className={s.checkbox} disabled={disabled} {...rest}>
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
