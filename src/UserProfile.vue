<template>
  <RouterLink :to="{ name: 'home' }">&lt;- Back</RouterLink>
  <h1>{{ $t('Профиль') }}</h1>
  <p>{{ $t('Подтвердите своё согласие') }}</p>

  <label for="">{{ $t('Введите ваше имя') }} <input type="text" v-model="name" /></label>

  <p>{{ $t('Привет', { name }) }}</p>
  <p>{{ $t('У вас сообщений', 0) }}</p>
  <p>{{ $t('У вас сообщений', 1) }}</p>
  <p>{{ $t('У вас сообщений', 2) }}</p>
  <p>{{ $t('У вас сообщений', 21) }}</p>
  <p>{{ $t('У вас сообщений', 22) }}</p>
  <p>{{ $t('У вас сообщений', 111) }}</p>
  <p>{{ $t('У вас сообщений', 30) }}</p>
  <p>{{ $t('У вас сообщений', 341) }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>
