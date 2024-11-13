import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './Modal.module.scss'

import { Icon } from '..'

export type ModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
}

export const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay aria-describedby={undefined} className={s.overlay} />
        <Dialog.Content aria-describedby={''} className={s.container}>
          <div className={s.headContainer}>
            <Dialog.Title className={s.title}>{title}</Dialog.Title>
            <Dialog.Close className={s.closeBtn} onClick={onClose}>
              <Icon fill={'white'} height={25} id={'close-outline'} width={25} />
            </Dialog.Close>
          </div>
          <div className={s.mainContainer}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
