<template>
  <navbar />
  <router-view />
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
export default {
  components: {
    Navbar,
  },
};
</script>
