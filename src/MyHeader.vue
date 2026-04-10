<template>
  <select v-model="lang">
    <option v-for="{ id, title } in langs" :key="id" :value="id">{{ title }}</option>
  </select>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const langs = [
  {
    id: 'ru',
    title: 'Русский',
  },
  {
    id: 'en',
    title: 'English',
  },
]

const lang = useLocalStorage('lang', i18n.locale)
</script>
