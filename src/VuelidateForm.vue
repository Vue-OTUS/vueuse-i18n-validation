<template>
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <div :class="{ error: v$.email.$errors.length }">
      <input v-model="v$.email.$model" autocomplete="email" />
      <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <div :class="{ error: v$.password.$errors.length }">
      <input v-model="v$.password.$model" type="password" autocomplete="current-password" />
      <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    <button @click="sendForm">Send</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

const state = reactive({
  email: '',
  password: '',
})

const rules = {
  email: {
    required,
    email,
    qwe: minLength(3),
    gerg: maxLength(7),
  },
  password: {
    required,
    qwe: minLength(6),
    gerg: maxLength(10),
  },
}

const v$ = useVuelidate(rules, state)

function sendForm() {
  v$.value.$validate().then((isOk) => isOk && alert('Форма отправлена'))
}
</script>

<style scoped>
.error {
  background-color: lightsalmon;
}
</style>
