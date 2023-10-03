<template>
  <form>
    <div class="form-group">
      <label for="bookName" class="mb-1">Nome da obra</label>
      <input
        v-model="book_title"
        type="text"
        class="form-control"
        placeholder="Solo Leveling"
      />
    </div>
    <div class="form-group my-4">
      <label for="bookType" class="mb-1">Tipo do livro</label>
      <select v-model="book_type" class="form-control">
        <option value="manhua">Manhuá (China)</option>
        <option value="manhwa">Manhwa (Coréia)</option>
      </select>
    </div>
    <div id="datepicker" />
    <div>
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
  </form>
</template>

<script setup>
</script>

<script>
export default {
  data() {
    return {
      book_type: "",
      book_title: "",
      chapter_title: "",
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    submit(event) {
      if (this.book_type === "" || this.book_title === "") {
        alert("Preencha tudo");
        return null;
      }
      console.log(this.book_title + this.book_type);
    },
  },
};
</script>
