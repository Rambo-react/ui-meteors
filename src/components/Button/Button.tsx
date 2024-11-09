import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

type ButtonVariant = 'outline' | 'primary' | 'secondary' | 'text'

type ComponentType = 'a' | 'button'

type Props<T extends ComponentType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ComponentType = 'button'>({
  as,
  className,
  fullWidth,
  variant = 'primary',
  ...rest
}: Props<T>) => {
  const Component = (as || 'button') as ElementType

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return <Component className={classNames} {...rest} />
}
