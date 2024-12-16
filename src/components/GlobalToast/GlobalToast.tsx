import { useEffect, useState } from 'react'

import s from './GlobalToast.module.scss'

import { Alert, Props } from '../Alert'

type Notification = { id: string; message: string }
type GlobalToastProps = {
  delay: number
  messages: Notification[]
  variant: Props['variant']
}
export const GlobalToast = ({ delay = 1000, messages, variant }: GlobalToastProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const showNotifications = () => {
      messages.forEach((message, index) => {
        setTimeout(() => {
          setNotifications(prev => [...prev, message])

          setTimeout(() => {
            setNotifications(prev => prev.filter(notif => notif.id !== message.id))
          }, 3000) // Задержка перед удалением уведомления
        }, index * delay) // Задержка перед показом каждого уведомления
      })
    }

    if (messages.length > 0) {
      showNotifications()
    }
  }, [messages])

  const removeNotification = (index: number) => {
    setNotifications(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className={s.toast}>
      {notifications.map((notification, index) => {
        return (
          <Alert
            className={`${s.alert} ${s.appear}`}
            key={notification.id}
            message={notification.message}
            onClose={() => removeNotification(index)}
            variant={variant}
          />
        )
      })}
    </div>
  )
}
