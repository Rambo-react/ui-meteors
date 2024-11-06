import { ReactNode } from 'react'

import s from './Modal.module.scss'

import { Icon } from '..'

type Props = {
  children?: ReactNode
  onCloseBtn: () => void
  title: string
}

export const Modal = ({ children, onCloseBtn, title }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <p>{title}</p>
        <button onClick={onCloseBtn}>
          <Icon fill={'white'} height={25} id={'close'} width={25} />
        </button>
      </div>
      <div className={s.main}>{children}</div>
    </div>
  )
}
