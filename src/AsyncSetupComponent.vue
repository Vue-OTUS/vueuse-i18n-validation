<template>&copy; {{ year }}</template>

<script setup lang="ts">
const year = await new Promise((res) => {
  setTimeout(() => res(new Date().getFullYear()), 550)
})
</script>
