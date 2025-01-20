import { useEffect, useState } from 'react'

import * as Toast from '@radix-ui/react-toast'
import { clsx } from 'clsx'

import s from './Alert.module.scss'

import { Close } from '../Icons'

export type AlertProps = {
  className?: string
  duration?: number
  iconClose?: boolean
  message: string
  onClose?: () => void
  variant: 'accepted' | 'error'
}

export const Alert = ({
  className,
  duration = 6000,
  iconClose = true,
  message,
  onClose,
  variant,
}: AlertProps) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  useEffect(() => {
    let timerId: number

    if (message) {
      setIsAlertOpen(true)
      timerId = +setTimeout(() => {
        handleClose()
      }, duration)
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [message, duration])

  const handleClose = () => {
    setIsAlertOpen(false)
    onClose && onClose()
  }

  return (
    <Toast.Provider>
      <Toast.Root
        aria-live={'assertive'}
        className={clsx(s.alert, s[variant])}
        open={isAlertOpen}
        role={'alert'}
      >
        <Toast.Title>{message}</Toast.Title>
        {iconClose && (
          <Toast.Description onClick={handleClose}>
            <Close className={s.icon} fill={'white'} height={24} width={24} />
          </Toast.Description>
        )}
      </Toast.Root>
      <Toast.Viewport className={clsx(s.viewport, className)} />
    </Toast.Provider>
  )
}
