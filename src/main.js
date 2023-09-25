import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import "./style.css";

// Create the Vue app instance
const vueApp = createApp(Home);

// Mount the app to the element with ID 'app'
vueApp.mount("#app");

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      component: Home,
    },
  ],
});

// Use the router in the app
vueApp.use(router);