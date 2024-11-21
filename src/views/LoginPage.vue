<template>
  <div class="login-page-container">
    <h1 class="welcome-title">Selamat Datang di Halaman Login</h1>
    <h3 class="py-2">Ahmad Agung Setyawan</h3>
    <h3 class="">40622100065</h3>
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'

export default {
  components: {
    LoginComponent,
  },
}
</script>

<style scoped>
.login-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}
</style>
