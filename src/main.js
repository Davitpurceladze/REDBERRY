import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TheHome from "./components/TheHome.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/RedBerry", redirect: "/home" },
    // { path: "/", redirect: "/home" },
    { path: "/home", component: TheHome },
  ],
});
const app = createApp(App);

app.use(router);

app.mount("#app");
