<script lang="ts">
import { defineComponent, h, resolveComponent } from 'vue';
import ApiService from '@/utils/apiService';
import { DynamicComponent } from '../models/interfaces';

export default defineComponent({
  name: 'dynamic-component',
  functional: true,
  data() {
    return {
      items: [] as DynamicComponent[]
    };
  },
  mounted() {
    ApiService.getComponents().then((data) => (this.items = data));
  },
  render() {
    const customInput = resolveComponent('customInput');
    return h(
      'div',
      { class: 'dynamic-component-wrapper' },
      this.items.map(({ defaultValue, type, label, id }: DynamicComponent) => {
        return h(
          'label',
          h(customInput, {
            value: defaultValue,
            type: type,
            name: id && id.toString(),
            placeholder: label
          })
        );
      })
    );
  }
});
</script>

<style lang="scss">
.dynamic-component-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  div {
    margin-bottom: 10px;
  }
}
</style>
