import { ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

import { clsx } from 'clsx'

import s from './Input.module.scss'

import EyeOffOutline from '../../assets/components/EyeOffOutline'
import EyeOutline from '../../assets/components/EyeOutline'
import Search from '../../assets/components/Search'

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
          <label className={s.label} htmlFor={finalId}>
            {label}
          </label>
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
          {type === 'search' && <Search className={s.iconSearch} />}
          {type === 'password' &&
            (showPassword ? (
              <EyeOffOutline className={s.iconPass} onClick={() => setShowPassword(false)} />
            ) : (
              <EyeOutline className={s.iconPass} onClick={() => setShowPassword(true)} />
            ))}
        </div>
        <p className={`${s.errorMsg} ${errorMsg ? s.show : ''}`}>{errorMsg}</p>
      </div>
    )
  }
)
