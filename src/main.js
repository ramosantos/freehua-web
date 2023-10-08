import "./style.css";

import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { VueFire, VueFireAuth } from "vuefire";
import App from "./App.vue";
import { firebaseApp } from "./components/Firebase.js";
import "./style.css";

import Dashboard from "./pages/Dashboard.vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Upload from "./pages/Upload.vue";
import Update from "./pages/Update.vue";

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/update",
      name: "Update",
      component: Update,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const isLoggedin = localStorage.getItem("userCredential");
  if (requiresAuth && !isLoggedin) {
    next("/");
  } else if (requiresAuth && isLoggedin) {
    next();
  } else {
    next();
  }
});

createApp(App)
  .use(router)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })
  .mount("#app");

