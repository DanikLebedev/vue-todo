<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link v-if="isAuth" to="/todos">Todo List</router-link>
    </nav>
    <router-link v-if="!isAuth" to="/login">Login</router-link>
    <button @click="logout" v-if="isAuth">Logout</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "navbar",
  computed: {
    isAuth() {
      return !!this.$store.getters.token;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
