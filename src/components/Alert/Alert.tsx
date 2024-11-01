import { useEffect, useState } from 'react'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import styles from './Alert.module.scss'

import { Icon } from '../Icon'

export type AlertProps = {
  message: string
  variant: 'accepted' | 'error'
}

export const Alert = ({ message, variant }: AlertProps) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  useEffect(() => {
    if (message) {
      setIsAlertOpen(true)
      const timer = setTimeout(() => {
        setIsAlertOpen(false)
      }, 6000)

      return () => clearTimeout(timer)
    } else {
      setIsAlertOpen(false)
    }
  }, [message])

  const handleClose = () => {
    setIsAlertOpen(false)
  }

  return (
    <AlertDialog.Root onOpenChange={handleClose} open={isAlertOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content className={`${styles.alert} ${styles[variant]}`}>
          <div>{message}</div>
          <AlertDialog.Cancel asChild>
            <button className={styles.button} onClick={handleClose}>
              <Icon color={'white'} height={24} id={'close'} width={24} />
            </button>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
