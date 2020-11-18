<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link v-if="isAuth" to="/todos">Todo List</router-link>
    </nav>
    <router-link v-if="!isAuth" to="/login">Login</router-link>
    <Button class="p-button-help" @click="logout" v-if="isAuth">Logout</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "primevue/components/button/Button";

export default defineComponent({
  name: "navbar",
  components: {
    Button
  },
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
