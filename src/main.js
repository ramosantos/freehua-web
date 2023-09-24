import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import Home from "./pages/Home.vue";
import Login from './pages/Login.vue';

const app = createApp(Home);

app.mount("#app");

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/login",
        component: Login,
      }
    ],
  });

app.use(router);
