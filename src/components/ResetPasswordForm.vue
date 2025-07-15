<template>
  <form @submit.prevent="submitResetPassword">
    <h2>Reset Password</h2>
    <input v-model="email" placeholder="Email" required />
    <input v-model="token" placeholder="Token dari email" required />
    <input v-model="password" type="password" placeholder="Password Baru" required />
    <button type="submit">Reset Password</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import api from '../service/api'

const email = ref('')
const token = ref('')
const password = ref('')

const submitResetPassword = async () => {
  try {
    await api.post('/reset-password', {
      email: email.value,
      token: token.value,
      password: password.value,
    })
    alert('Password berhasil diubah!')
  } catch (error) {
    alert(error.response?.data?.message || 'Reset password gagal')
  }
}
</script>
