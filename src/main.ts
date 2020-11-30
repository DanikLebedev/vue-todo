import { createApp, App, Component } from 'vue';
import ToastService from 'primevue/toastservice';
import Application from './App.vue';
import router from './router';
import store from './store';
import './index.scss';

const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const app: App = createApp(Application);
app
  .use(store)
  .use(router)
  .mount('#app');

app.use(ToastService);
app.mixin({
  methods: {
    successToast(text: string) {
      this.$toast.add({ severity: 'error', summary: text });
    },
    errorToast(text: string) {
      this.$toast.add({ severity: 'error', summary: text });
    },
  },
});
app.directive('valid', {
  updated(el, binding, vnode) {
    if (binding.arg === 'email') {
      const valid = emailReg.test(el.value);
      if (!valid) {
        el.style.boxShadow = '0 0 0 0 .2rem red';
        el.style.borderColor = 'red';
      } else {
        el.style.boxShadow = '0 0 0 0 .2rem green';
        el.style.borderColor = 'green';
      }
    }
  },
});
