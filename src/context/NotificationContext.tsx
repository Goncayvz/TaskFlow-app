/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useMemo, useState, useContext } from "react"
import type { PropsWithChildren } from "react"
import type { Notification } from "../data/types"

type NotificationType = Notification["type"]
type NotificationContextValue = { notifications: Notification[]; addNotification: (message: string, type?: NotificationType, duration?: number) => number; removeNotification: (id: number) => void; clearNotifications: () => void }
const NotificationContext = createContext<NotificationContextValue | null>(null)

export function createNotification(message: string, type: NotificationType = "info", id = Date.now()): Notification {
  return { id, message, type }
}

export function removeNotificationById(notifications: Notification[], id: number): Notification[] {
  return notifications.filter((notification) => notification.id !== id)
}

export function clearNotificationsList(notifications: Notification[]): Notification[] {
  return notifications.length === 0 ? notifications : []
}

export function NotificationProvider({ children }: PropsWithChildren) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) => removeNotificationById(prev, id))
  }, [])

  const addNotification = useCallback((message: string, type: NotificationType = "info", duration = 3000) => {
    const id = Date.now()
    const notification = createNotification(message, type, id)

    setNotifications((prev) => [...prev, notification])

    if (duration) {
      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }

    return id
  }, [removeNotification])

  const clearNotifications = useCallback(() => {
    setNotifications(clearNotificationsList)
  }, [])

  const value = useMemo(
    () => ({ notifications, addNotification, removeNotification, clearNotifications }),
    [notifications, addNotification, removeNotification, clearNotifications]
  )

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>

  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider")
  }
  return context
}




