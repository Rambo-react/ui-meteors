import { ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './Input.module.scss'

import { Icon } from '../Icon'

type Props = {
  containerClassName?: string
  errorMsg?: string
  label?: string
  type?: 'email' | 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ containerClassName, errorMsg, label, type = 'text', ...rest }, ref) => {
    const generatedId = useId()
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className={containerClassName}>
        {label && (
          <Label.Root className={s.label} htmlFor={generatedId}>
            {label}
          </Label.Root>
        )}
        <div className={clsx(s.inputContainer, isFocused && s.active)}>
          <input
            className={clsx(
              s.inputField,
              type === 'search' && s.inputSearch,
              errorMsg && s.error,
              rest.disabled && s.disabled
            )}
            disabled={rest.disabled}
            id={generatedId}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            ref={ref}
            type={type === 'password' && showPassword ? 'text' : type}
            {...rest}
          />
          {type === 'search' && (
            <Icon
              className={s.iconSearch}
              fill={'currentColor'}
              height={20}
              id={'search'}
              width={20}
            />
          )}
          {type === 'password' &&
            (showPassword ? (
              <Icon
                className={s.iconPass}
                fill={'currentColor'}
                height={24}
                id={'eye-outline'}
                onClick={() => setShowPassword(false)}
                width={24}
              />
            ) : (
              <Icon
                className={s.iconPass}
                fill={'currentColor'}
                height={24}
                id={'eye-off-outline'}
                onClick={() => setShowPassword(true)}
                width={24}
              />
            ))}
        </div>

        {errorMsg && <p className={s.errorMsg}>{errorMsg}</p>}
      </div>
    )
  }
)
