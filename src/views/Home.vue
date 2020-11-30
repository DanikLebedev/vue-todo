<template>
  <Container>
    <div class="home">
      <h1>Welcome to Todo List</h1>
      <Button icon="pi pi-plus" @click="goToTodo" label="Add Todo" />
      <Toast />
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  components: {
    Container: () => import('@/components/container.vue'),
    Button: () => import('primevue/components/button/Button'),
    Toast: () => import('primevue/components/toast/Toast'),
  },
  methods: {
    goToTodo() {
      if (this.$store.getters.token) {
        this.$router.push('/create');
      } else {
        this.errorToast('Please login');
      }
    },
  },
});
</script>
