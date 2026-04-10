import IndexPage from '@/IndexPage.vue'
import VueUse from '@/VueUse.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage,
    },
    {
      path: '/vue-use',
      name: 'vue-use',
      component: VueUse,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/ProfilePage.vue'),
    },
    {
      path: '/vuelidate',
      name: 'vuelidate',
      component: () => import('@/VuelidateForm.vue'),
    },
    {
      path: '/veevalidate',
      name: 'veevalidate',
      component: () => import('@/VeeValidateForm.vue'),
    },
  ],
})

export default router
