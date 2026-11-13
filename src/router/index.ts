import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/HomePage.vue'),
      meta: {
        title: 'Домашняя страница',
      },
    },
    {
      name: 'vue-use',
      path: '/vue-use',
      component: () => import('@/VueUse.vue'),
      meta: {
        title: 'VueUse',
      },
    },
    {
      name: 'vuelidate',
      path: '/vuelidate',
      component: () => import('@/ValidationVuelidate.vue'),
      meta: {
        title: 'Vuelidate',
      },
    },
    ,
    {
      name: 'vee-validate',
      path: '/vee-validate',
      component: () => import('@/ValidationVeeValidate.vue'),
      meta: {
        title: 'vee-validate',
      },
    },
    {
      name: 'profile',
      path: '/profile',
      component: () => import('@/UserProfile.vue'),
      meta: {
        i18nTitle: 'Профиль',
      },
    },
  ],
})

export default router
