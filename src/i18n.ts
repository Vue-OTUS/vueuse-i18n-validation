import { createI18n } from 'vue-i18n'
import ru from '@/lang/ru.json'
import en from '@/lang/en.json'

function customRule(choice: number, choicesLength: number, orgRule: unknown) {
  console.log(choice)
  if (choice === 0) {
    return 0
  }

  const n = {
    zero: 0,
    one: 1,
    two: 2,
    few: 2,
    many: 3,
    other: 3,
  }

  return n[new Intl.PluralRules('ru').select(choice)]
}

export const i18n = createI18n({
  legacy: false,
  availableLocales: ['ru', 'en'],
  locale: 'ru',
  fallbackLocale: 'ru',
  pluralRules: {
    ru: customRule,
  },
  messages: {
    en,
    ru,
  },
})
