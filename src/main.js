import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import App from "./App.vue";
import "./style.css";

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
        path: '/',
        name: 'Home',
      component: Home,
    }
  ],
});

createApp(App).use(router).mount('#app');

