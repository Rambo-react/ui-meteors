import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './Modal.module.scss'

import { CloseOutline } from '../Icons'

export type ModalProps = {
  children: ReactNode
  className?: string | undefined
  isOpen: boolean
  onClose: () => void
  title: string
}

export const Modal = ({ children, className, isOpen, onClose, title }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay aria-describedby={undefined} className={s.overlay} />
        <Dialog.Content aria-describedby={''} className={clsx(s.container, className)}>
          <div className={s.headContainer}>
            <Dialog.Title className={s.title}>{title}</Dialog.Title>
            <Dialog.Close className={s.closeBtn} onClick={onClose}>
              <CloseOutline fill={'white'} height={28} width={28} />
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
