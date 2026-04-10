<template>
  <VeeForm
    :validation-schema="formSchemaValidate"
    @submit="(data) => sendForm(data as Data)"
    style="display: flex; flex-direction: column; gap: 1rem"
  >
    <Field name="email" autocomplete="email" />
    <ErrorMessage name="email" />

    <Field name="password" type="password" autocomplete="current-password" />
    <ErrorMessage name="password" />

    <button>Send</button>
  </VeeForm>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { ErrorMessage, Field, Form as VeeForm } from 'vee-validate'
import * as z from 'zod'

const formSchemaZod = z.object({
  email: z.email().min(3).max(7),
  password: z.string().min(6).max(10),
})

type Data = z.infer<typeof formSchemaZod>

const formSchemaValidate = toTypedSchema(formSchemaZod)

function sendForm(values: Data) {
  console.log(values)
  alert('Форма отправлена')
}
</script>
