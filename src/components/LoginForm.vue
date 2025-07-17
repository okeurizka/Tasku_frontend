<template>
  <div class="form-card">
    <!-- Logo dan Judul -->
    <div class="card-header">
      <img src="/img/logo_taskula.png" alt="Logo" class="logo" />
      <h2 class="form-title">LOGIN</h2>
    </div>

    <!-- Form Login -->
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="input-group">
        <span class="icon">📧</span>
        <input v-model="email" type="email" placeholder="Email" required />
      </div>

      <div class="input-group">
        <span class="icon">🔒</span>
        <input v-model="password" type="password" placeholder="Password" required />
      </div>

      <button type="submit" class="submit-btn">Login</button>

      <p class="extra-link">
        <router-link to="/forgot-password">Lupa Password?</router-link>
      </p>
      <p class="extra-link">
        Belum punya akun? <router-link to="/register">Register</router-link>
      </p>
    </form>
  </div>
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

<style scoped>
/* Sama seperti RegisterForm.vue */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
}

.form-card {
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
}

.card-header {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  width: 200px;
  margin-bottom: 10px;
}

.form-title {
  font-size: 35px;
  font-weight: bold;
  background: linear-gradient(90deg, #113f67, #bfbed4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  position: relative;
  width: 100%;
}

.input-group .icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #2f3c7e;
  font-size: 18px;
}

.input-group input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 2px solid #2f3c7e;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
  display: block;
}

.input-group input:focus {
  border-color: #6c63ff;
}

.submit-btn {
  width: 100%;
  background-color: #113f67;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #1b4b82;
}

.extra-link {
  text-align: center;
  font-size: 13px;
  margin-top: 4px;
}

.extra-link a {
  color: #2f3c7e;
  text-decoration: none;
}

.extra-link a:hover {
  text-decoration: underline;
}
</style>
