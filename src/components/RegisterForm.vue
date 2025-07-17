<template>
    <div class="form-card">
      <!-- Logo dan Judul -->
      <div class="card-header">
        <img src="/img/logo_taskula.png" alt="Logo" class="logo" />
        <h2 class="form-title">REGISTER</h2>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleRegister" class="register-form">
        <div class="input-group">
          <span class="icon">👤</span>
          <input v-model="name" type="text" placeholder="Username" required />
        </div>

        <div class="input-group">
          <span class="icon">📧</span>
          <input v-model="email" type="email" placeholder="Email" required />
        </div>

        <div class="input-group">
          <span class="icon">🔒</span>
          <input v-model="password" type="password" placeholder="Password" required />
        </div>

        <div class="input-group">
          <span class="icon">🔒</span>
          <input v-model="passwordConfirmation" type="password" placeholder="Confirm Password" required />
        </div>

        <button type="submit" class="submit-btn">Register</button>
      </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../service/api'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const router = useRouter()

const handleRegister = async () => {
  try {
    await api.post('/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    })
    alert('Registrasi berhasil! Silakan login.')
    router.push('/login')
  } catch (error) {
    alert(error.response?.data?.message || 'Registrasi gagal')
    console.error('Detail error:', error.response?.data?.errors)
  }
}
</script>

<style scoped>
/* Agar semua padding dan border tidak membuat elemen melebar */
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
  color: transparent; /* fallback */
}


.register-form {
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
</style>
