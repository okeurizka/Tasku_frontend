<template>
  <div class="register-page">
    <!-- Panel Kiri -->
    <div class="left-panel">
      <img src="/img/bgregis2.jpg" alt="Left Background" class="left-bg" />

      <!-- Tombol Register dan Login -->
      <div class="button-stack">
        <button class="register-btn" @click="goToRegister">Register</button>
        <button class="login-btn" @click="goToLogin">Login</button>
      </div>
    </div>

    <!-- Panel Kanan -->
    <div class="right-panel">
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToLogin = () => router.push('/login')
const goToRegister = () => router.push('/register')
</script>

<style scoped>
.register-page {
  display: flex;
  height: 100vh;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

/* === PANEL KIRI === */
.left-panel {
  flex: 3;
  position: relative;
}

.left-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-stack {
  position: absolute;
  top: 50%;
  right: -1px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* === TOMBOL LOGIN === */
.login-btn {
  padding: 12px 28px;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffffff;
  color: #2f3c7e;
  border: none;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* === TOMBOL REGISTER === */
.register-btn {
  padding: 12px 28px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);;
  border: none;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-btn:hover {
  background-color: white;
  color: #113f67;
}

/* === PANEL KANAN === */
.right-panel {
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
</style>
