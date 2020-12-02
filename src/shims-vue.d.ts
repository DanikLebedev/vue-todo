declare module '*.vue' {
  // eslint-disable-next-line prettier/prettier
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, unknown>
  export default component
}
declare module '@/mixins/toastMixin.js'
