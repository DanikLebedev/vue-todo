<template>
  <Container>
    <div class="home">
      <h1>Welcome to Todo List</h1>
      <Button icon="pi pi-plus" @click="goToTodo" label="Add Todo" />
      <composition-api-component></composition-api-component>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/container.vue';
import Button from 'primevue/components/button/Button';
import CompositionApiComponent from '@/components/composition_api_component.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Container,
    Button,
    CompositionApiComponent
  },
  methods: {
    goToTodo() {
      if (this.$store.getters.token) {
        this.$router.push('/create');
      } else {
        this.errorToast('Please login');
      }
    }
  }
});
</script>
