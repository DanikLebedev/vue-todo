<template>
  <div class="todo-page">
    <h2>Todo List</h2>
    <div v-if="todos.length" class="todo-list">
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-else>
      <h3>Todos not found</h3>
      <Button icon="pi pi-plus" label="Add Interaces" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApiService from "@/utils/apiService";
import Button from "primevue/components/button/Button";
import TodoItem from "../components/todo-item.vue";
import { Todo } from "@/models/interfaces";

export default defineComponent({
  name: "Home",
  components: {
    TodoItem,
    Button
  },
  created() {
    ApiService.getTodos().then(items => (this.todos = items));
  },
  data() {
    return {
      todos: [] as Todo[]
    };
  }

});
</script>
<style lang="scss" scoped>
.todo-list {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
</style>
