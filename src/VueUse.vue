<template>
  <h1>Vue Use</h1>
  <input v-model="title" />
  <UseDraggable style="position: fixed" :disabled="dragDisabled">
    <div @click="dragDisabled = !dragDisabled">Drag me</div>
  </UseDraggable>
</template>

<script setup lang="ts">
import { UseDraggable } from "@vueuse/components";
import { useLocalStorage, useTitle } from "@vueuse/core";
import { ref } from "vue";

const dragDisabled = ref(false);
const title = useLocalStorage("page_title", useTitle("New title"));
</script>
