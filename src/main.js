import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(Toast, {
    hideProgressBar: true,
  })
  .use(router)
  .mount("#app");
