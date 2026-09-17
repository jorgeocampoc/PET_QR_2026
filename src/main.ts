import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.vue";
import Toast from "vue-toastification";
import router from "./router";
import "animate.css";
import { options } from "./config";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Toast, options);
app.mount("#app");
