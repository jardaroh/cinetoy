import { ref, type Component } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

type NotificationType = 'toast' | 'popup' | 'critical'
type NotificationLevel = 'danger' | 'info' | 'success' | 'warning'

export interface INotification {
  id?: string
  type: NotificationType
  level: NotificationLevel
  message: string
  timeout?: number,
}

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<INotification[]>([])

  const addNotification = (notification: INotification) => {
    const n = {
      id: uuid(),
      ...notification,
    }
    if (notification.timeout) {
      setTimeout(() => {
        notifications.value.splice(
          notifications.value.findIndex((v) => v.id === n.id),
          1
        )
      }, notification.timeout)
    }
    notifications.value.push(n)
  }

  const removeNotification = (id: INotification['id']) => {
    notifications.value.splice(
      notifications.value.findIndex((n) => n.id === id),
      1
    )
  }

  return {
    notifications,
    addNotification,
    removeNotification,
  }
})
