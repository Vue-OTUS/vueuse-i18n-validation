<template>
  <select v-model="lang">
    <option :value="lang" :key="lang" v-for="lang in i18n.availableLocales">
      {{ i18n.messages.value[lang]!['_lang'] }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const lang = useStorage('lang', i18n.locale)
</script>
