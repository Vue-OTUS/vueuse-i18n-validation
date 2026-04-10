<template>
  <h1>Index</h1>
  <ul>
    <li v-for="{ to, title } in pages" :key="title">
      <RouterLink :to="to">{{ title }}</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const pages = computed(() => [
  {
    to: { name: 'vue-use' },
    title: 'Vue use',
  },
  {
    to: { name: 'profile' },
    title: t('Профиль'),
  },
  {
    to: { name: 'vuelidate' },
    title: 'Vuelidate',
  },
  {
    to: { name: 'veevalidate' },
    title: 'VeeValidate',
  },
])
</script>
