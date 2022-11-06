<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue'

import { Icon } from '@iconify/vue'
import ButtonVue from '@/components/Button.vue'
import DropdownVue from '@/components/Dropdown.vue'

const { user, logout } = useAuth0()

const logoutHandler = () => logout({
  returnTo: window.location.origin,
})
</script>

<template>
  <DropdownVue
    v-if="user.nickname"
  >
    <template #activator="{ toggle }">
      <ButtonVue
        class="
          grid
          grid-cols-[auto_max-content]
          gap-4
          items-center
          py-1 px-4
        "
        @click="toggle"
      >
        <span>{{ user.nickname }}</span>
        <img
          :alt="`${user.nickname}'s avatar'`"
          :src="user.picture"
          class="
            w-8
            square
          "
        />
      </ButtonVue>
    </template>
    <template #default>
      <ButtonVue
        class="
          grid
          grid-cols-[max-content_auto]
          gap-4
          items-center
        "
        @click="logoutHandler"
      >
        <Icon icon="fa6-solid:arrow-right-from-bracket" />
        <span>Logout</span>
      </ButtonVue>
    </template>
  </DropdownVue>
</template>
