// src/main.js
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import api from './service/api' // <-- IMPORT INSTANCE AXIOS LU DI SINI

// Fungsi untuk mendapatkan CSRF cookie dari Laravel Sanctum
async function fetchCsrfCookie() {
  try {
    // *** GANTI BARIS INI! ***
    // Panggil langsung ke root path Sanctum, bukan dari baseURL /api
    await api.get('http://localhost:8000/sanctum/csrf-cookie') // <--- PASTIKAN INI URL BACKEND LU YANG BENAR
    console.log('CSRF cookie dari Laravel Sanctum berhasil diambil.')
  } catch (error) {
    console.error('Gagal mengambil CSRF cookie dari Laravel Sanctum:', error)
    // ... error handling lainnya
  }
}

// Panggil fungsi untuk mengambil CSRF cookie sebelum aplikasi Vue di-mount
// Ini memastikan cookie tersedia saat request pertama (misalnya register/login)
fetchCsrfCookie().then(() => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount('#app')
})
