import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Card.module.scss'

type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = ({ children, className }: CardProps) => {
  return <div className={clsx(styles.card, className)}>{children}</div>
}
