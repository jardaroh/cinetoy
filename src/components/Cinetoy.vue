<script lang="ts" setup>
import { ref } from 'vue'
import { useNotificationsStore } from '@/stores/notifications'

import CineplayerVue from './Cineplayer.vue'
import FileSelectorVue from './FileSelector.vue'

const { addNotification } = useNotificationsStore()

const file = ref<File | null>(null)

const changeHandler = (files: FileList) => {
  if (files.length > 1) {
    addNotification({
      type: 'toast',
      level: 'danger',
      message: 'You can only add one file',
      timeout: 4000,
    })
    return
  }

  file.value = files[0]
}
</script>

<template>
  <div
    class="
      h-full
    "
  >
    <CineplayerVue
      v-if="file"
      :file="file"
    />
    <FileSelectorVue
      v-else
      @change="changeHandler"
    />
  </div>
</template>