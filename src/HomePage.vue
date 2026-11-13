<template>
  <ul>
    <li v-for="{ meta, name } in pages" :key="getTitle(meta)">
      <RouterLink :to="{ name }">{{ getTitle(meta) }}</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const pages = router.getRoutes()
const i18n = useI18n()

function getTitle(meta: { title?: string; i18nTitle?: string }): string {
  if (meta.title) {
    return meta.title
  }
  if (meta.i18nTitle) {
    return i18n.t(meta.i18nTitle)
  }

  return ''
}
</script>
