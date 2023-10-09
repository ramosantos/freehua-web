<template>
    <div class="mt-4">
      <router-link to="/upload">
        <button type="button" class="btn btn-lg btn-primary">Novo livro</button>
      </router-link>
      <router-link to="/update">
        <button type="button" class="btn btn-lg btn-primary ms-4">
          Novo capitulo
        </button>
      </router-link>
      <router-link to="/login">
        <button @click="logoff" type="button" class="btn btn-danger ms-4">
          Sair
        </button>
      </router-link>
    </div>
</template>

<script>
export default {
  methods: {
    logoff() {
      localStorage.removeItem('userCredential');
    },
  },
};
</script>
