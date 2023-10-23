<template>
  <div class="container pt-5">
    <form ref='form' @submit.prevent="submit">
      <div class="mb-3">
        <label for="bookSelector" class="form-label">Livro selecionado</label>
        <select v-model="chapter.parent" class="form-select" id="bookSelector">
          <option value="" disabled>
            Selecione o livro ao qual pertence o capítulo
          </option>
          <option v-for="book in library" :key="book.id" :value="book.id">
            {{ book.title }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="bookCover" class="form-label">PDF do capítulo</label>
        <input
          type="file"
          class="form-control"
          @change="handleChapterChange"
          accept=".pdf"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-lg">
        Adicionar capítulo
      </button>
      <router-link to="/dashboard">
        <button class="btn btn-secondary ms-4">Voltar</button>
      </router-link>
    </form>
  </div>
</template>

<script setup>
import { fetchLibrary, submitChapter } from "../components/Updater";
</script>

<script>
export default {
  data() {
    return {
      library: [],
      chapter: {
        parent: null,
        file: null,
        title: "",
      },
    };
  },
  created() {
    fetchLibrary()
    .then((data) => {
      this.library = data;
      console.log(this.library);
    })
    .catch((error) => {
      console.error(error);
    });
  },
  methods: {
    handleChapterChange(event) {
      this.chapter.file = event.target.files[0];
    },
    submit() {
      try {
        submitChapter(this.chapter);
        this.$refs.form.reset();
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
