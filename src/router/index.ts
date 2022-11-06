import type { RouteLocation } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import CinetoyView from '@/views/CinetoyView.vue'
import { authGuard } from '@auth0/auth0-vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cinetoy',
      component: CinetoyView,
      beforeEnter: authGuard,
    }
  ]
})

export default router
