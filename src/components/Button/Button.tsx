import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

export const buttonVariant = ['primary', 'secondary', 'outline', 'text', 'icon'] as const

export type ButtonVariant = (typeof buttonVariant)[number]

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return <Component className={classNames} {...rest} />
}
