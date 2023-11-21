import {
  collection,
  query,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  orderBy,
  where,
  limit,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../components/Firebase.js";

export async function fetchLibrary() {
  const library = [];
  const libraryReference = query(collection(db, "books"));
  try {
    const querySnapshot = await getDocs(libraryReference);
    querySnapshot.forEach((doc) => {
      const book = {
        id: doc.id,
        title: doc.data().book_title,
      };
      library.push(book);
    });
    return library;
  } catch (error) {
    return error, false;
  }
}

export async function submitChapter(localChapter) {
  const userCredential = JSON.parse(localStorage.getItem("userCredential"));
  const poster_uid = userCredential.uid.toString();

  if (localChapter.parent === null || localChapter.file === null) {
    alert("Insira tudo");
    return null;
  }

  try {
    const chapterReference = await addDoc(
      collection(db, `books/${localChapter.parent}/chapters`),
      {
        chapter_parent: doc(db, `books/${localChapter.parent}`),
        chapter_title: localChapter.title,
        chapter_poster: poster_uid,
        chapter_release: new Date(),
        chapter_content: "",
      },
    );

    const storage = getStorage();
    const storageReference = ref(storage, `releases/${chapterReference.id}`);
    const contentReference = await uploadBytes(
      storageReference,
      localChapter.file,
    );
    const contentURL = await getDownloadURL(storageReference);

    await updateDoc(chapterReference, { chapter_content: contentURL });

    alert("Capítulo criado com sucesso");
    return true;
  } catch (error) {
    alert(error);
  }
}

