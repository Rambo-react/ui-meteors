import { useEffect, useState } from 'react'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import s from './Alert.module.scss'

import { Icon } from '../Icon'

export type AlertProps = {
  delay?: number
  message: string
  variant: 'accepted' | 'error'
}

export const Alert = ({ delay = 6000, message, variant }: AlertProps) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  useEffect(() => {
    if (message) {
      setIsAlertOpen(true)
      const timer = setTimeout(() => {
        setIsAlertOpen(false)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [message, delay])

  const handleClose = () => {
    setIsAlertOpen(false)
  }

  return (
    <AlertDialog.Root onOpenChange={handleClose} open={isAlertOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content
          aria-live={'assertive'}
          className={`${s.alert} ${s[variant]}`}
          role={'alert'}
        >
          <div>{message}</div>
          <AlertDialog.Cancel asChild>
            <div className={s.iconWrapper}>
              <Icon color={'white'} height={24} id={'close'} width={24} />
            </div>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
