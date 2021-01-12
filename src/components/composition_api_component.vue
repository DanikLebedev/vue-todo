<template>
  <div class="">
    <h1>Composition API</h1>
    <div>
      <h2>Counter via state</h2>
      <Button @click="increment">+</Button>
      <Button @click="decrement" class="ml-1">-</Button>
      <p>{{ title }}</p>
      <h2>Counter via ref</h2>
      <Button @click="incrementRef">+</Button>
      <Button @click="decrementRef" class="ml-1">-</Button>
      <p>{{ titleViaRef }}</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import Button from 'primevue/components/button/Button';

export default {
  components: {
    Button
  },
  setup() {
    const state = reactive({
      counter: 0
    });

    const counterViaRef = ref(0);

    const title = computed(() => 'Counter ' + state.counter);

    const titleViaRef = computed(() => 'Counter ' + counterViaRef.value);

    function increment() {
      state.counter += 1;
    }

    function incrementRef() {
      counterViaRef.value += 1;
    }

    function decrementRef() {
      counterViaRef.value -= 1;
    }

    function decrement() {
      state.counter -= 1;
    }

    return {
      state,
      increment,
      decrement,
      title,
      incrementRef,
      decrementRef,
      counterViaRef,
      titleViaRef
    };
  }
};
</script>
<style lamg="scss" scoped>
.ml-1 {
  margin-left: 0.5rem;
}
</style>
