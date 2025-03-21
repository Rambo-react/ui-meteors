import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId, useState } from 'react'

import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './Input.module.scss'

import { EyeOffOutline, EyeOutline, Search } from '../Icons'

type Props = {
  containerClassName?: string
  errorMsg?: string
  label?: ReactNode | string
  type?: 'email' | 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, containerClassName, errorMsg, id, label, type = 'text', ...rest }, ref) => {
    const generatedId = useId()
    const customId = id || generatedId
    const [showPassword, setShowPassword] = useState(false)
    const containerClassNames = clsx(s.container, containerClassName)

    return (
      <div className={containerClassNames}>
        {!!label && (
          <Label.Root className={s.label} htmlFor={customId}>
            {label}
          </Label.Root>
        )}
        <div className={s.inputContainer}>
          <input
            className={clsx(
              s.inputField,
              type === 'search' && s.inputSearch,
              errorMsg && s.error,
              className
            )}
            id={customId}
            ref={ref}
            type={type === 'password' && showPassword ? 'text' : type}
            {...rest}
          />
          {type === 'search' && (
            <Search className={s.iconSearch} fill={'currentColor'} height={20} width={20} />
          )}
          {type === 'password' &&
            (showPassword ? (
              <EyeOutline
                className={s.iconPass}
                fill={'currentColor'}
                height={24}
                onClick={() => setShowPassword(false)}
                width={24}
              />
            ) : (
              <EyeOffOutline
                className={s.iconPass}
                fill={'currentColor'}
                height={24}
                onClick={() => setShowPassword(true)}
                width={24}
              />
            ))}
        </div>

        {!!errorMsg && <p className={s.errorMsg}>{errorMsg}</p>}
      </div>
    )
  }
)
