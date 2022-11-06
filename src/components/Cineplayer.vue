<script lang="ts" setup>
import { ref, shallowRef, computed } from 'vue'

export interface CineplayerProps {
  file: File
}

const props = defineProps<CineplayerProps>()
const url = computed(() => URL.createObjectURL(props.file))
const videoRef = ref<HTMLVideoElement | null>(null)
const progress = shallowRef(0)
const state = ref<'paused' | 'playing' | 'ended'>('paused')

const play = () => {
  videoRef.value?.play()
}

const pause = () => {
  videoRef.value?.pause()
}

const toggle = () => {
  if (state.value === 'paused') {
    play()
    return
  }
  if (state.value === 'playing') {
    pause()
  }
}

const skip = (n: number) => {
  if (!videoRef.value) {
    return
  }
  videoRef.value.currentTime = progress.value + n
}

const adjustVolume = (n: number) => {
  if (!videoRef.value) {
    return
  }
  let volume = Math.abs(videoRef.value.volume + n)
  if (volume < 0) {
    volume = 0
  }
  if (volume > 1) {
    volume = 1
  }
  videoRef.value.volume = volume
}

const keyCodeCommands: {[key: string]: () => void} = {
  Space: toggle,
  Enter: toggle,
  ArrowLeft: () => skip(-10),
  ArrowRight: () => skip(10),
  ArrowUp: () => adjustVolume(0.1),
  ArrowDown: () => adjustVolume(-0.1),
}

const handleKeydown = (e: KeyboardEvent) => {
  keyCodeCommands[e.code] ? keyCodeCommands[e.code]() : (() => {})()
}
</script>

<template>
  <div
    class="
      h-full
      grid
      place-items-center
      relative
    "
    tabindex="0"
    @keydown="handleKeydown"
  >
    <video
      ref="videoRef"
      controls
      autoplay
      :src="url"
      @timeupdate="progress = Math.ceil(videoRef?.currentTime || 0)"
    ></video>
  </div>
</template>
