<template>
  <p>{{ t('Привет', { name: userName }) }}</p>
  <p>{{ t('user.greeting', { name: userName }) }}</p>
  <label>Ваше имя: <input v-model="userName" /></label>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    ru: {
      Привет: 'Здорово, {name}',
      user: {
        greeting: 'Привет, {name}',
      },
    },
    en: {
      Привет: 'Sup {name}',
      user: {
        greeting: 'Hey {name}',
      },
    },
  },
})

const userName = useLocalStorage('userName', '')
</script>
