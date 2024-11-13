import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './Modal.module.scss'

import { Icon } from '..'

type Props = {
  children: ReactNode
  isOpen: boolean
  onCloseBtn: () => void
  title: string
}

export const Modal = ({ children, isOpen, onCloseBtn, title }: Props) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.container}>
          <div className={s.headContainer}>
            <Dialog.Title className={s.title}>{title}</Dialog.Title>
            <Dialog.Close className={s.closeBtn} onClick={onCloseBtn}>
              <Icon fill={'white'} height={25} id={'close-outline'} width={25} />
            </Dialog.Close>
          </div>
          <div className={s.mainContainer}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
