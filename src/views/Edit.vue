<template>
  <div class="todo-page">
    <h2>Todo List</h2>
    <div class="todo-list">
      <todo-item />
      <todo-item />
      <todo-item />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoItem from "../components/todo-item.vue";
export default defineComponent({
  name: "Home",
  components: {
    TodoItem
  }
});
</script>
<style lang="scss" scoped>
.todo-page {
  padding: 3em;
}
.todo-list {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
</style>
