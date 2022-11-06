<script lang="ts" setup>
import { computed } from 'vue'
import { useNotificationsStore } from '@/stores/notifications'

import ToastVue from './Toast.vue'

const { notifications } = useNotificationsStore()
const toasts = computed(() => {
  return notifications.filter((n) => n.type === 'toast')
})
</script>

<template>
  <div
    v-if="toasts.length > 0"
    class="
      absolute
      top-0
      right-0
      p-8
    "
  >
    <component
      v-for="(toast) in toasts"
      :is="ToastVue"
      v-bind="{ ...toast }"
    />
  </div>
</template>
