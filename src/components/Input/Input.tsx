import { ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './Input.module.scss'

import { Icon } from '../Icon'

export type InputProps = {
  className?: string
  containerClassName?: string
  errorMsg?: string
  label?: string
  placeholder?: string
  type?: 'email' | 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, containerClassName, errorMsg, id, label, placeholder, type = 'text', ...rest },
    ref
  ) => {
    const generatedId = useId()
    const finalId = id ? id : generatedId
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className={containerClassName}>
        {label && (
          <Label.Root className={s.label} htmlFor={id}>
            {label}
          </Label.Root>
        )}
        <div className={clsx(s.inputContainer, isFocused && s.active)}>
          <input
            className={clsx(
              s.inputField,
              type === 'search' && s.inputSearch,
              errorMsg && s.error,
              rest.disabled && s.disabled,
              className
            )}
            disabled={rest.disabled}
            id={finalId}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            placeholder={placeholder}
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
        <p className={`${s.errorMsg} ${errorMsg ? s.show : ''}`}>{errorMsg}</p>
      </div>
    )
  }
)
