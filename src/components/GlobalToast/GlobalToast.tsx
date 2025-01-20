import { useEffect, useState } from 'react'

import s from './GlobalToast.module.scss'

import { Alert, AlertProps } from '../Alert'

type Notification = { id: string; message: string }
type GlobalToastProps = {
  delay: number
  duration: AlertProps['duration']
  messages: Notification[]
  variant: AlertProps['variant']
}
export const GlobalToast = ({ delay = 1000, duration, messages, variant }: GlobalToastProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    let timerId: number
    const showNotifications = async () => {
      for (const message of messages) {
        setNotifications(prev => [...prev, message])
        await new Promise(resolve => {
          timerId = +setTimeout(resolve, delay)
        })
      }
    }

    showNotifications()

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [messages, delay])

  const removeNotification = (index: number) => {
    setNotifications(prev => prev.filter(a => parseInt(a.id) !== index))
  }

  return (
    <div className={s.toast}>
      {notifications.map(notification => {
        return (
          <Alert
            className={`${s.alert} ${s.appear}`}
            duration={duration}
            key={notification.id}
            message={notification.message}
            onClose={() => removeNotification(parseInt(notification.id))}
            variant={variant}
          />
        )
      })}
    </div>
  )
}
