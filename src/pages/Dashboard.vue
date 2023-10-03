<template>
  <div class="d-flex flex-column">
    <h2>Seus livros</h2>  
    <List class="mt-4"/>
    <div class="mt-4">
      <router-link to="/upload">
        <button type="button" class="btn btn-primary">Novo livro</button>
      </router-link>
      <router-link to="/update">
        <button type="button" class="btn btn-primary ms-4">
          Novo capitulo
        </button>
      </router-link>
      <router-link to="/login">
        <button @click="logoff" type="button" class="btn btn-danger ms-4">
          Sair
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import List from "../components/List.vue";
</script>

<script>
export default {
  methods: {
    logoff() {
      localStorage.removeItem('userCredential');
    },
  },
};
</script>
