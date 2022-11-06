<script lang="ts" setup>
import { shallowRef } from 'vue'
import { OnClickOutside } from '@vueuse/components'

const active = shallowRef<boolean>(false)
const toggle = () => {
  active.value = !active.value
}
</script>

<template>
  <OnClickOutside
    @trigger="active = false"
  >
    <div
      class="
        relative
      "
    >
      <slot name="activator" :toggle="toggle"></slot>
      <div
        :class="[
          'absolute',
          'top-[110%]',
          'left-0',
          'right-0',
          'grid',
          'grid-flow-row',
          'bg-slate-700',
          'p-2',
          'rounded-xl',
          'drop-shadow-lg',
          active ? 'block' : 'hidden',
        ]"
      >
        <slot></slot>
      </div>
    </div>
  </OnClickOutside>
</template>
