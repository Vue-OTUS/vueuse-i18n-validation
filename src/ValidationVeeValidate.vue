<template>
  <VeeForm :validation-schema="validationSchema" @submit="onSubmit">
    <Field name="email"></Field>
    <ErrorMessage name="email"></ErrorMessage>

    <Field name="password" type="password"></Field>
    <ErrorMessage name="password"></ErrorMessage>

    <button type="submit">Submit</button>
  </VeeForm>
</template>

<script setup lang="ts">
import { Field, Form as VeeForm, ErrorMessage } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .email({ error: 'Must be a valid email' })
      .min(1, { error: 'This is required' })
      .min(3, { error: '> 3' })
      .max(100, { error: '<100' }),
    password: z
      .string()
      .min(1, { error: 'This is required' })
      .min(3, { error: 'Too short' })
      .max(60, { error: 'Too much' }),
  }),
)

function onSubmit(event) {
  console.log(event)
  alert('Ok')
}
</script>
