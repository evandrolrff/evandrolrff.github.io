import { ref, computed } from 'vue'
import en from './en'
import pt from './pt'

export type Locale = 'en' | 'pt'

type Translations = typeof en

const translations: Record<Locale, Translations> = { en, pt }

const STORAGE_KEY = 'ef-portfolio-lang'

function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored === 'en' || stored === 'pt') return stored
  const browser = navigator.language.toLowerCase()
  return browser.startsWith('pt') ? 'pt' : 'en'
}

const locale = ref<Locale>('en')

// Initialise after DOM is available
export function initLocale() {
  locale.value = detectLocale()
}

export function setLocale(lang: Locale) {
  locale.value = lang
  localStorage.setItem(STORAGE_KEY, lang)
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
}

export function useI18n() {
  const t = computed(() => translations[locale.value])
  return { t, locale, setLocale }
}
