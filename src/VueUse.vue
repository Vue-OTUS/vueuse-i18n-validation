<template>
  <h1>VueUse</h1>
  <input type="text" v-model="title" />

  <UseDraggable
    v-slot="{ x, y }"
    :initial-value="{ x: 10, y: 10 }"
    :disabled="disabled"
    style="position: fixed; user-select: none"
    @dblclick="toggleDrag()"
  >
    Drag me! I am at {{ x }}, {{ y }}
  </UseDraggable>
</template>

<script setup lang="ts">
import { UseDraggable } from '@vueuse/components'
import { useTitle, useStorage, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const disabled = ref(false)

const toggleDrag = useToggle(disabled)

const title = useStorage('title', useTitle('Vue Use'))
useStorage('lang', 'ru')
</script>
