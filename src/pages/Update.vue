<template>
  <div class="container pt-5">
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="bookSelector" class="form-label">Livro selecionado</label>
        <select v-model="chapterParent" class="form-select" id="bookSelector">
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
      <button type="submit" class="btn btn-primary btn-lg">Adicionar capítulo</button>
 <router-link to="/dashboard">
          <button class="btn btn-secondary ms-4">Voltar</button>
        </router-link>
    </form>
  </div>
</template>

<script setup>
import {
  collection,
  query,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../components/Firebase.js";
</script>

<script>
export default {
  data() {
    return {
      library: [],
      chapterParent: null,
      chapterFile: null,
      chapterTitle: "",
    };
  },
  created() {
    this.fetchLibrary();
  },
  methods: {
    async fetchLibrary() {
      const libraryReference = query(collection(db, "books"));
      try {
        const querySnapshot = await getDocs(libraryReference);
        querySnapshot.forEach((doc) => {
          const book = {
            id: doc.id,
            title: doc.data().title,
          };
          this.library.push(book);
        });
      } catch (error) {
        alert(error);
      }
    },
    async submit() {
      if (this.chapterParent === null || this.chapterFile === null) {
        alert("Insira tudo");
        return null;
      }

      const userCredential =
        JSON.parse(localStorage.getItem("userCredential")) || {};
      const poster_uid = userCredential.uid
        ? userCredential.uid.toString()
        : null;

      try {
        const chapterReference = await addDoc(collection(db, "chapters"), {
          parent: doc(db, "books/" + this.chapterParent),
          title: this.chapterTitle,
          poster: poster_uid,
          release: new Date(),
        });

        const storage = getStorage();
        const storageReference = ref(
          storage,
          `releases/chapter_${chapterReference.id}`,
        );
        const contentReference = await uploadBytes(
          storageReference,
          this.chapterFile,
        );
        const contentURL = await getDownloadURL(storageReference);
        const contentValue = { content_url: contentURL };
        const contentInsert = await updateDoc(chapterReference, contentValue);

        alert("CAPITULO INSERIDO");
      } catch (e) {
        alert(e);
      }
    },
    handleChapterChange(event) {
      this.chapterFile = event.target.files[0];
    },
  },
};
</script>
