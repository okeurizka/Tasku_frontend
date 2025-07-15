<template>
  <form @submit.prevent="submitForgotPassword">
    <h2>Lupa Password</h2>
    <input v-model="email" placeholder="Email" required />
    <button type="submit">Kirim Link Reset</button>
    <p><router-link to="/login">Kembali ke Login</router-link></p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import api from '../service/api'

const email = ref('')

const submitForgotPassword = async () => {
  try {
    await api.post('/forgot-password', { email: email.value })
    alert('Link reset telah dikirim ke email kamu.')
  } catch (error) {
    alert(error.response?.data?.message || 'Gagal mengirim link reset')
  }
}
</script>
