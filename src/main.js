// src/main.js
import './assets/main.css' // ✅ Import Tailwind + Flowbite styles

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import api from './service/api' // Axios instance

// Dapatkan CSRF cookie dari Laravel Sanctum
async function fetchCsrfCookie() {
  try {
    await api.get('http://localhost:8000/sanctum/csrf-cookie')
    console.log('CSRF cookie berhasil diambil.')
  } catch (error) {
    console.error('Gagal ambil CSRF cookie:', error)
  }
}

fetchCsrfCookie().then(() => {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
})
