import { ComponentPropsWithRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './Card.module.scss'

type CardProps = ComponentPropsWithRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={clsx(s.card, className)} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)
