<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group mb-4">
            <label class="mb-2">Nome da obra</label>
            <input
              v-model="book_title"
              type="text"
              class="form-control"
              placeholder="Solo Leveling"
            />
          </div>
          <div class="form-group mb-4">
            <label class="mb-2">Tipo do livro</label>
            <select v-model="book_type" class="form-control">
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
            <select v-model="book_genre" class="form-control">
              <option value="adventure">Aventura</option>
              <option value="romance">Romance</option>
              <option value="xianxia">Cultivo (Xianxia)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="mb-2">Autor(a)</label>
            <input
              v-model="book_author"
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
            v-model="book_summary"
            class="form-control"
            cols="30"
            rows="4"
            placeholder="Em um colégio técnico, jovens alunos da ETEC Taboão da Serra descobrem poderes extraordinários que transformam o simples arroz doce da merenda em elaboradas obras de arte com classificação máxima."
          ></textarea>
        </div>
        <button
          @click.prevent="submit"
          type="submit"
          class="btn btn-primary btn-lg"
        >
          Criar
        </button>
        <router-link to="/dashboard">
          <button class="btn btn-secondary ms-4">Voltar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/Firebase.js";
</script>

<script>
export default {
  data() {
    return {
      book_genre: "",
      book_summary: "",
      book_author: "",
      book_title: "",
      book_type: "",
    };
  },
  methods: {
    async submit() {
      if (
        this.book_type === "" ||
        this.book_title === "" ||
        this.book_genre === "" ||
        this.book_summary === "" ||
        this.book_author === ""
      ) {
        alert("Preencha tudo");
        return null;
      }

      try {
        const docRef = await addDoc(collection(db, "books"), {
          artists: this.book_author,
          status: "active",
          summary: this.book_summary,
          tags: this.book_genre,
          title: this.book_title,
          type: this.book_type,
        });
        alert("ID DO LIVRO ", docRef.id);
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
