import { ReactNode } from 'react'

import styles from './Card.module.scss'

type CardProps = {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>
}
