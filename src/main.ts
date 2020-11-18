import { createApp, App, Component } from "vue";
import ToastService from 'primevue/toastservice';
import Application  from "./App.vue";
import router from "./router";
import store from "./store";
import './index.scss';


export const app: App = createApp(Application);
app.use(store)
  .use(router)
  .mount("#app")


app.use(ToastService)
