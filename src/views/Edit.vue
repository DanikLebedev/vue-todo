<template>
          <Container>
                    <div class="edit-page">
                              <h1>{{ $route.params.id ? 'Edit Todo' : 'Create Todo' }}</h1>
                              <form @submit.prevent="updateTodo">
                                        <label>
                                                  <Input
                                                            placeholder="Enter todo"
                                                            type="text"
                                                            required
                                                            v-model="todo.title"
                                                  />
                                        </label>
                                        <Button type="submit" icon="pi pi-check" label="Submit" />
                              </form>
                              <div>
                                        <h2>Dynamic components</h2>
                                        <dynamic-components />
                              </div>
                    </div>
          </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '@/models/interfaces';

export default defineComponent({
          name: 'edit',
          components: {
                    Container: () => import('@/components/container.vue'),
                    Input: () => import('primevue/components/inputtext/InputText'),
                    Button: () => import('primevue/components/button/Button'),
                    DynamicComponents: () => import('@/components/dynamic-component.vue')
          },
          created() {
                    if (this.$route.params.id) {
                              this.$store.dispatch('getTodoById', this.$route.params.id);
                    }
          },
          computed: {
                    todo(): Todo {
                              const id = this.$route.params.id;
                              return id ? this.$store.getters.currentTodo : { title: '', done: false };
                    }
          },
          methods: {
                    updateTodo() {
                              const id = this.$route.params.id;
                              this.$store.dispatch(id ? 'updateTodo' : 'createTodo', {
                                        id: id && id,
                                        title: this.todo.title,
                                        done: false
                              });
                    }
          }
});
</script>

<style lang="scss" scoped>
.edit-page {
          label {
                    margin-right: 20px;
          }
}
</style>
