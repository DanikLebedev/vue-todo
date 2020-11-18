<template>
  <div class="home">
    <h1>Welcome to Todo List</h1>
    <Button icon="pi pi-plus" @click="goToTodo" label="Add Todo" />
    <Toast />
  </div>
</template>

<script lang="ts">
import Button from "primevue/components/button/Button";
import Toast from "primevue/components/toast/Toast";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    Button,
    Toast
  },
  methods: {
    goToTodo() {
      if(this.$store.getters.token) {
        this.$router.push('/create');
      } else {
        this.$toast.add({severity:'error', summary: 'Please login'});
      }
    }
  }
});
</script>
