<script lang="ts" setup>
import type { INotification } from '@/stores/notifications'
import { useNotificationsStore } from '@/stores/notifications'

import { Icon } from '@iconify/vue'
import ButtonVue from '@/components/Button.vue'

export interface ToastProps {
  id: INotification['id']
  level: INotification['level']
  message: INotification['message']
}

const props = withDefaults(defineProps<ToastProps>(), {
  level: 'info',
})

const { removeNotification } = useNotificationsStore()
</script>

<template>
  <div
    :class="{
      'bg-orange-800': props.level === 'danger',
      'border-orange-600': props.level === 'danger',
      'bg-zinc-800': props.level === 'info',
      'border-zinc-600': props.level === 'info',
      'bg-emerald-800': props.level === 'success',
      'border-emerald-600': props.level === 'success',
      'bg-orange-600': props.level === 'warning',
      'border-orange-400': props.level === 'warning',
      'rounded-lg': true,
      'grid': true,
      'grid-cols-[max-content_max-content]': true,
      'overflow-hidden': true,
    }"
  >
    <span
      class="
        p-4
      "
    >
      {{ props.message }}
    </span>
    <ButtonVue
      class="
        grid
        place-items-center
        rounded-none
        bg-inherit
      "
      @click="removeNotification(props.id)"
    >
      <Icon icon="fa6-solid:trash-can" />
    </ButtonVue>
  </div>
</template>
