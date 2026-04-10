<script setup lang="ts">
import { defineAsyncComponent, defineComponent, h, ref } from 'vue'
import AsyncSetupComponent from './AsyncSetupComponent.vue'
import MyHeader from './MyHeader.vue'

// async component:
// 1. empty -> Loader (rerender #1) -> awaited component (rerender #2)
// 2. empty -> awaited component (#1) || loader 300ms +  awaited component (rerender #2)

const LazyLoadedComponent = defineAsyncComponent({
  loader: () => import('@/ProfilePage.vue'),
  delay: 350, // set 3G speed emulation on Network tab in DevTools
  loadingComponent: defineComponent({
    setup() {
      return () => h('span', null, 'Loading ...')
    },
  }),
})

const visible = ref(false)
</script>

<template>
  <RouterLink :to="{ name: 'home' }">&lt;- Back</RouterLink>
  <MyHeader />

  <button @click="visible = true">Load component</button>

  <LazyLoadedComponent v-if="visible" />

  <div style="margin-top: 1rem">
    <RouterView />
  </div>

  <Suspense>
    <AsyncSetupComponent />
    <template #fallback> Loading ... </template>
  </Suspense>
</template>

<style scoped></style>
