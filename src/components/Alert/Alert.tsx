import { CSSProperties, useEffect, useState } from 'react'

import * as Toast from '@radix-ui/react-toast'
import { clsx } from 'clsx'

import s from './Alert.module.scss'

import { Close } from '../Icons'

type Props = {
  duration?: number
  iconClose?: boolean
  message: string
  onClose?: () => void
  styles?: CSSProperties
  variant: 'accepted' | 'error'
}

export const Alert = ({
  duration = 6000,
  iconClose = true,
  message,
  onClose,
  styles,
  variant,
}: Props) => {
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
        <Toast.Description onClick={handleClose}>
          {iconClose && (
            <div className={s.iconWrapper}>
              <Close fill={'white'} height={24} width={24} />
            </div>
          )}
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className={clsx(s.viewport)} style={styles} />
    </Toast.Provider>
  )
}
