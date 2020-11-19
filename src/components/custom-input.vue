<template>
  <div class="form-field">
    <span class="p-input-icon-right ">
      <i class="pi" :class="icon" />
      <label :for="name">
        <Input
          aria-describedby="login-help"
          :placeholder="placeholder"
          :id="name"
          :type="type"
          :required="required"
          :value="value"
          @input="input"
        />
      </label>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "primevue/components/inputtext/InputText";

export default defineComponent({
  name: "custom-input",
  components: {
    Input
  },
  emits: ['update:value'],
  props: {
    type: String,
    name: String,
    placeholder: String,
    required: Boolean,
    icon: String,
    value: String,
  },
  methods: {
    input(event: { target: HTMLInputElement }) {
      this.$emit('update:value', event.target && event.target.value)
    }
  }
});
</script>

<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  input {
    width: 400px;
  }
  .error-span {
    display: none;
  }
  small {
    margin-top: 5px;
  }
}
</style>
