import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { initLocale } from './i18n'

initLocale()
createApp(App).mount('#app')
