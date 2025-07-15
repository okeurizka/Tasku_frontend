// src/service/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Ganti dengan URL backend Laravel lu
  withCredentials: true, // Pastikan ini tetap TRUE! Ini penting untuk kirim cookie
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// *** TAMBAHKAN INTERCEPTOR INI! ***
api.interceptors.request.use(
  (config) => {
    // Hanya tambahkan header ini jika ini bukan GET request
    if (config.method !== 'get') {
      // Ambil nilai XSRF-TOKEN dari cookie browser
      // document.cookie akan mengembalikan string semua cookie
      const xsrfToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('XSRF-TOKEN=')) // Cari baris yang dimulai dengan 'XSRF-TOKEN='
        ?.split('=')[1] // Ambil nilai setelah '='

      if (xsrfToken) {
        // Decode URI Component karena cookie bisa di-encode
        config.headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrfToken)
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
