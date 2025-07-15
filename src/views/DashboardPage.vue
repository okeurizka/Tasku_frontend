<template>
  <div class="dashboard-container">
    <h1>Selamat Datang di Dashboard, Riz!</h1>
    <p>Ini adalah halaman dashboard Anda. Anda bisa mulai menambahkan konten di sini.</p>

    <div class="dashboard-widgets">
      <div class="widget">
        <h2>Widget 1</h2>
        <p>Ini adalah area untuk menampilkan informasi penting.</p>
      </div>
      <div class="widget">
        <h2>Widget 2</h2>
        <p>Anda bisa menambahkan grafik, daftar tugas, atau notifikasi di sini.</p>
      </div>
    </div>

    <router-link to="/tasks">Lihat Daftar Tugas</router-link>
    <br />
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  // Logika logout di sini
  // Misalnya, hapus token dari localStorage atau sessionStorage
  localStorage.removeItem('userToken') // Contoh saja
  alert('Anda telah logout!')
  router.push('/login') // Redirect kembali ke halaman login
}
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  max-width: 900px;
  margin: 40px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  color: #666;
  line-height: 1.6;
}

.dashboard-widgets {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
}

.widget {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  min-width: 280px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.widget h2 {
  color: #555;
  margin-bottom: 10px;
}

button {
  background-color: #dc3545; /* Merah untuk logout */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;
}

button:hover {
  background-color: #c82333;
}

router-link {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
