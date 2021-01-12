<template>
  <Container>
    <div class="todo-page">
      <h2>Todo List</h2>
      <Button icon="pi pi-plus" :class="$style.add_btn" @click="$router.push('/create')" label="Add Todo" />
      <div v-if="todos.length" :class="$style.todo_list">
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
      </div>
      <div v-else>
        <h3>Todos not found</h3>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Button from 'primevue/components/button/Button';
import TodoItem from '../components/todo-item.vue';
import { defineComponent } from 'vue';
import Container from '@/components/container.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Container,
    TodoItem,
    Button
  },
  created() {
    this.$store.dispatch('getTodos');
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  }
});
</script>
<style lang="scss" module>
.add_btn {
  margin-bottom: 1em;
}
.todo_list {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
</style>
