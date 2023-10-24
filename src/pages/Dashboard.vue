<template>
  <div class="container">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="chapter in lastChapters"
        :key="chapter.parent"
        :value="chapter.parent"
      >
        {{ chapter.parent }} em {{ chapter.release }}
      </li>
    </ul>
  </div>
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

<script setup>
</script>

<script>
export default {
  data() {
    return {
      lastChapters: [],
    };
  },
  methods: {
    logoff() {
      localStorage.removeItem("userCredential");
    },
  },
};
</script>
