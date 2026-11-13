<template>
  <form @submit.prevent="submit">
    <div :class="{ error: v$.email.$errors.length }">
      <input v-model="state.email" />
      <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <div :class="{ error: v$.password.$errors.length }">
      <input v-model="state.password" type="password" />
      <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, maxLength, minLength, required } from '@vuelidate/validators'
import { reactive } from 'vue'

const state = reactive({
  email: '',
  password: '',
})

const rules = {
  email: { required, email, minLength: minLength(3), maxLength: maxLength(100) },
  password: { required, minLength: minLength(3), maxLength: maxLength(60) },
}

const v$ = useVuelidate(rules, state)

async function submit() {
  if (await v$.value.$validate()) {
    console.log('ok', state)
    alert('OK')
  }
}
</script>

<style scoped>
.error {
  background: lightsalmon;
}
</style>
