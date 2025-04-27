import { useEffect, useState } from 'react'

import s from './GlobalToast.module.scss'

import { Alert, AlertProps } from '../Alert'

type Notification = { id: string; message: string; type: 'accepted' | 'error' }
type GlobalToastProps = {
  delay: number
  duration: AlertProps['duration']
  messages: Notification[]
}
export const GlobalToast = ({ delay = 1000, duration, messages }: GlobalToastProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    let timerId: number
    const showNotifications = async () => {
      for (const message of messages) {
        const newNotification = { ...message, id: crypto.randomUUID() }

        setNotifications(prev => [...prev, newNotification])
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
      {notifications.map((notification, index) => {
        return (
          <Alert
            className={`${s.alert} ${s.appear}`}
            duration={duration}
            key={notification.id}
            message={notification.message}
            onClose={() => removeNotification(parseInt(notification.id))}
            variant={notification.type}
          />
        )
      })}
    </div>
  )
}
