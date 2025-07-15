<template>
  <form @submit.prevent="handleLogin">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <p><router-link to="/forgot-password">Lupa Password?</router-link></p>
    <p>Belum punya akun? <router-link to="/register">Register</router-link></p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import api from '../service/api'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    await api.post('/login', {
      email: email.value,
      password: password.value,
    })
    alert('Login berhasil!')
    router.push('/dashboard')
  } catch (error) {
    alert(error.response?.data?.message || 'Login gagal')
  }
}
</script>
