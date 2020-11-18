<template>
  <div class="p-card p-shadow-3">
    <div class="p-text-secondary" :class="{ done: todo.done }">
      {{ todo.title }}
    </div>
    <div class="buttons-wrapper">
      <Button icon="pi pi-pencil" label="Edit" />
      <Button class="p-button-danger" icon="pi pi-trash" label="Delete" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Button from "primevue/components/button/Button";
import { Todo } from "@/models/interfaces";

export default defineComponent({
  name: "TodoItem",
  components: {
    Button
  },
  props: {
    todo: Object as PropType<Todo>
  }
});
</script>
<style lang="scss" scoped>
.p-card {
  border: 1px solid #cdcdcd;
  padding: 20px;
  margin-bottom: 0.5em;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .p-card-title {
    margin-bottom: 0;
  }
  .done {
    text-decoration: line-through;
  }
}
.buttons-wrapper {
  .p-button {
    margin-right: 10px;
  }
}
</style>
