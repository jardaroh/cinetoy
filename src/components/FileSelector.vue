<script lang="ts" setup>
import { ref } from 'vue'

import ButtonVue from './Button.vue'

const inputRef = ref<HTMLInputElement | null>(null)
const active = ref<boolean>(false)

const emits = defineEmits<{
  (e: 'change', value: FileList): void
}>()

const inputFileChange = ({ target }: Event) => {
  emits('change', (target as HTMLInputElement).files || new FileList())
}

const dropFile = (e: DragEvent) => {
  e.preventDefault()
  e.dataTransfer ? emits('change', e.dataTransfer?.files) : null
  active.value = false
}

const dragOver = (e: any) => {
  e.preventDefault()
}
</script>

<template>
  <label
    class="
      hidden
    "
    @change="inputFileChange"
  >
    <input
      type="file"
      ref="inputRef"
    />
  </label>
  <div
    class="
      h-full
      p-4
    "
  >
    <div
      :class="[
        'box-border',
        'h-full',
        'border-dashed border-current border-2',
        'rounded-xl',
        'grid',
        'place-items-center',
        'dragover:saturate-200',
        active ? 'saturate-200' : '',
        active ? 'bg-slate-900' : '',
      ]"
      @drop="dropFile"
      @dragover="dragOver"
      @dragenter="active = true"
      @dragleave="active = false"
    >
      <div
        class="
          grid
          place-items-center
        "
      >
        <span>
          drag file here
        </span>
        <span>
          - or -
        </span>
        <ButtonVue
          @click="inputRef?.click()"
        >
          Click me to select a file
        </ButtonVue>
      </div>
    </div>
  </div>
</template>
