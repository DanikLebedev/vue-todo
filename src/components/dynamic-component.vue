<template>
  <div class="dynamic-component-wrapper">
    <div :key="item.id" v-for="item in items">
      <label>
        <span>{{ item.label }}</span>
        <input :id="item.id" :type="item.type" :value="item.defaultValue" />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApiService from "@/utils/apiService";
import { DynamicComponent } from "../models/interfaces";

export default defineComponent({
  name: "dynamic-component",
  data() {
    return {
      items: [] as DynamicComponent[]
    };
  },
  mounted() {
    ApiService.getComponents().then(data => this.items = data);
  }
});
</script>

<style lang="scss" scoped>
.dynamic-component-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  div {
    margin-bottom: 10px;
  }
}
</style>
