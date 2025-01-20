import { ReactNode, useCallback, useEffect, useRef } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './Modal.module.scss'

import { CloseOutline } from '../Icons'

export type ModalProps = {
  children: ReactNode
  className?: string | undefined
  customHeader?: ReactNode | undefined
  isOpen: boolean
  onClose?: () => void
  onCloseOut?: () => void
  title?: string
}

export const Modal = ({
  children,
  className,
  customHeader,
  isOpen,
  onClose,
  onCloseOut,
  title,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (onCloseOut && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onCloseOut()
      }
    },
    [onCloseOut]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, handleClickOutside])

  if (!isOpen) {
    return null
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay aria-describedby={undefined} className={s.overlay} />
        <Dialog.Content
          aria-describedby={''}
          className={clsx(s.container, className)}
          ref={modalRef}
        >
          <div className={s.headContainer}>
            {customHeader || (
              <>
                <Dialog.Title className={s.title}>{title}</Dialog.Title>
                <Dialog.Close className={s.closeBtn} onClick={onClose}>
                  <CloseOutline fill={'white'} height={28} width={28} />
                </Dialog.Close>
              </>
            )}
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
