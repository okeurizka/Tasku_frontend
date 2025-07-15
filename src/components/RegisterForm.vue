<template>
  <form @submit.prevent="handleRegister">
    <h2>Register</h2>
    <input v-model="name" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <input v-model="passwordConfirmation" type="password" placeholder="Confirm Password" required />
    <button type="submit">Register</button>
    <p>Sudah punya akun? <router-link to="/login">Login</router-link></p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import api from '../service/api'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('') // <--- TAMBAHIN INI UNTUK V-MODEL FIELD BARU
const router = useRouter()

const handleRegister = async () => {
  try {
    await api.post('/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value, // <--- KIRIM INI JUGA KE BACKEND!
    })
    alert('Registrasi berhasil! Silakan login.') // Tambah alert biar tau berhasil
    router.push('/login')
  } catch (error) {
    // Kalau ada error validasi dari Laravel, biasanya dia kirim di error.response.data.errors
    alert(error.response?.data?.message || 'Registrasi gagal')
    // Lu bisa console.log error.response?.data?.errors buat lihat detail validasinya
    console.error('Detail error validasi:', error.response?.data?.errors)
  }
}
</script>

<style scoped>
/* Tambahin style biar rapi, kalau belum ada. Sesuaikan dengan gaya lu */
form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
p {
  margin-top: 10px;
  text-align: center;
}
</style>
