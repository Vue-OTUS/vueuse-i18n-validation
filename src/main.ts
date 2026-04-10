import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import * as en from '@/../lang/en.json'
import * as ru from '@/../lang/ru.json'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  availableLocales: ['ru', 'en'],
  messages: {
    en,
    ru,
  },
})

app.use(router)
app.use(i18n)

app.mount('#app')
