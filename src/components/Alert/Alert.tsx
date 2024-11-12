import { CSSProperties, useEffect, useState } from 'react'

import * as Toast from '@radix-ui/react-toast'
import { clsx } from 'clsx'

import s from './Alert.module.scss'

import { Icon } from '../Icon'

type Props = {
  duration?: number
  iconClose?: boolean
  message: string
  styles?: CSSProperties
  variant: 'accepted' | 'error'
}

export const Alert = ({ duration = 6000, iconClose = true, message, styles, variant }: Props) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  useEffect(() => {
    if (message) {
      setIsAlertOpen(true)
      const timer = setTimeout(() => {
        setIsAlertOpen(false)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [message, duration])

  const handleClose = () => {
    setIsAlertOpen(false)
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
              <Icon fill={'white'} height={24} id={'close'} width={24} />
            </div>
          )}
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className={clsx(s.viewport)} style={styles} />
    </Toast.Provider>
  )
}
