import { doc, collection, addDoc, updateDoc } from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../components/Firebase.js";

export async function submitBook(book) {
  if (
    book.type === "" ||
    book.title === "" ||
    book.genre === "" ||
    book.summary === "" ||
    book.author === "" ||
    book.cover === null
  ) {
    alert("Preencha tudo");
    return null;
  }

  try {
    const bookReference = await addDoc(collection(db, "books"), {
      book_author: book.author,
      book_summary: book.summary,
      book_tags: book.genre,
      book_title: book.title,
      book_type: book.type,
        book_score: 0,
    });

    const storage = getStorage();
    const storageReference = ref(storage, `covers/${bookReference.id}`);
    const imageReference = await uploadBytes(storageReference, book.cover);
    const imageURL = await getDownloadURL(storageReference);
    const imageValue = { cover_url: imageURL };
    const imageInsert = await updateDoc(bookReference, imageValue);

    alert(book.title + " foi criado com sucesso.");
    return true;
  } catch (error) {
    alert(error);
  }
}
