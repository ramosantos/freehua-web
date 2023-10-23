<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-6">
        <form ref="form">
          <div class="form-group mb-4">
            <label class="mb-2">Nome da obra</label>
            <input
              v-model="book.title"
              type="text"
              class="form-control"
              placeholder="Solo Leveling"
            />
          </div>
          <div class="form-group mb-4">
            <label class="mb-2">Tipo do livro</label>
            <select v-model="book.type" class="form-control">
              <option value="manhua">Manhuá (China)</option>
              <option value="manhwa">Manhwa (Coréia)</option>
            </select>
          </div>
        </form>
      </div>

      <div class="col-md-6">
        <form>
          <div class="form-group mb-4">
            <label class="mb-2">Gênero</label>
            <select v-model="book.genre" class="form-control">
              <option value="adventure">Aventura</option>
              <option value="romance">Romance</option>
              <option value="xianxia">Cultivo (Xianxia)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="mb-2">Autor(a)</label>
            <input
              v-model="book.author"
              type="text"
              class="form-control"
              placeholder="Hwonbu"
            />
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 mt-3">
        <div class="form-group mb-4">
          <label class="mb-2">Sumário</label>
          <textarea
            v-model="book.summary"
            class="form-control"
            cols="30"
            rows="4"
            placeholder="Em um colégio técnico, jovens alunos da ETEC Taboão da Serra descobrem poderes extraordinários que transformam o simples arroz doce da merenda em elaboradas obras de arte com classificação máxima."
          ></textarea>
        </div>
        <div class="form-group mb-4">
          <label class="mb-2">Imagem da Capa</label>
          <input
            class="form-control"
            type="file"
            @change="handleCoverChange"
            accept=".jpg,.jpeg"
          />
        </div>
        <button
          @click.prevent="submit"
          type="submit"
          class="btn btn-primary btn-lg"
        >
          Criar livro
        </button>
        <router-link to="/dashboard">
          <button class="btn btn-secondary ms-4">Voltar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { submitBook } from "../components/Uploader";
</script>

<script>
export default {
  data() {
    return {
      book: {
        genre: "",
        summary: "",
        author: "",
        title: "",
        type: "",
        cover: null,
      },
    };
  },
  methods: {
    handleCoverChange(event) {
      this.book.cover = event.target.files[0];
    },
    submit() {
      try {
        submitBook(this.book);
        this.$refs.form.reset();
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
