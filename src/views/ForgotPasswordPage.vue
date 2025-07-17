<template>
  <div class="forgot-page">
    <!-- Panel Kiri -->
    <div class="left-panel">
      <img src="/img/bgregis2.jpg" alt="Left Background" class="left-bg" />
    </div>

    <!-- Panel Kanan -->
    <div class="right-panel">
      <ForgotPasswordForm />
    </div>
  </div>
</template>

<script setup>
import ForgotPasswordForm from '../components/ForgotPasswordForm.vue'
</script>

<style scoped>
.forgot-page {
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

/* === PANEL KANAN === */
.right-panel {
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
</style>
