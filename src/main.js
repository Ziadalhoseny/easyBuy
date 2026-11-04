import { createApp } from "vue";
import router from "./router/index.js";
import store from "./stores/index.js";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
