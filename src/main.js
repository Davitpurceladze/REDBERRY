import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TheHome from "./components/TheHome.vue";
import pagePersonal from "./pages/pagePersonal.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/RedBerry", component: TheHome },
    { path: "/RedBerry/pagepersonal", component: pagePersonal },
  ],
});
const app = createApp(App);

app.use(router);

app.mount("#app");
