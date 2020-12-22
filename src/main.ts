import { createApp, App } from 'vue';
import ToastService from 'primevue/toastservice';
import Application from './App.vue';
import router from './router';
import store from './store';
import { toastMixin } from '@/mixins/toastMixin.js';
import CustomInput from '@/components/custom-input.vue';
import './index.scss';

const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const app: App = createApp(Application);
app
  .use(store)
  .use(router)
  .mount('#app');

app.use(ToastService);
app.mixin(toastMixin);
app.directive('valid', {
  updated(el, binding) {
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
  }
});

app.component('CustomInput', CustomInput);
