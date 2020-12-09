<template>
  <navbar />
  <router-view />
  <Toast position="top-center" />
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import Navbar from '@/components/navbar';
import Toast from 'primevue/components/toast/Toast';
export default {
  components: {
    Navbar,
    Toast
  }
};
</script>
