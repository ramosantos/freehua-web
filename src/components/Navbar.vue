<template>
  <nav class="navbar navbar-expand-sm fixed-top nav_hua" :key="user">
    <div class="container-fluid">
      <router-link to="/">
        <a class="navbar-brand" href="#">
          <img src="./freehua.svg" width="40" height="40" />
        </a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active link_hua" aria-current="page" href="#">Início</a>
          </li>
          <router-link to="/app">
            <li class="nav-item">
              <a class="nav-link link_hua" href="#">Aplicativo</a>
            </li>
          </router-link>
          <router-link to="/about">
            <li class="nav-item">
              <a class="nav-link link_hua" href="#">Sobre</a>
            </li>
          </router-link>
        </ul>
        <div class="container d-flex justify-content-end">
          <div v-if="user">
            <router-link to="/dashboard">
              <button type="button" class="btn btn-secondary ms-auto">
                Painel
              </button>
            </router-link>
          </div>
          <div v-else>
            <router-link to="/login">
              <button type="button" class="btn but_hua ms-auto">Entrar</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  watch: {
    $route(to, from) {
      this.user = localStorage.getItem("userCredential");
    },
  },
  created() {
    this.user = localStorage.getItem("userCredential");
  },
};
</script>

<style>
.nav_hua {
  background-color: #144272;
}
.but_hua {
  background-color: #2c74b3;
}
a {
    text-decoration: none;
}
</style>
