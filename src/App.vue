<script setup lang="ts">
import NotificationsVue from '@/components/Notifications.vue'
import UserDropdownVue from '@/components/UserDropdown.vue'
</script>

<template>
  <div
    class="
      grid
      grid-rows-[max-content_auto]
      w-full
      h-full
    "
  >
    <header
      class="
        grid
        grid-cols-[max-content_auto_max-content]
        bg-slate-800
        items-center
        p-4
        z-20
      "
    >
      <h1
        class="
          text-2xl
        "
      >
        Cinetoy
      </h1>
      <div></div>
      <UserDropdownVue />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
  <NotificationsVue />
</template>
