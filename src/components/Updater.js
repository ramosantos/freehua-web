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

export async function submitChapter(localChapter, isChecked) {
  const userCredential = JSON.parse(localStorage.getItem("userCredential"));
  const poster_uid = userCredential.uid.toString();

  if (localChapter.parent === null || localChapter.file === null || localChapter.file === '') {
    alert("Insira tudo");
    return null;
  }

  let level = 1;

  try {
    const chapterRelativesReference = collection(
      db,
      `books/${localChapter.parent}/chapters`,
    );

    const relatives = await getDocs(chapterRelativesReference);

    if (isChecked === false) {
      const alreadyHasOrder = relatives.docs.some((relative) => {
        const relativeData = relative.data();
        return relativeData.chapter_order === localChapter.order;
      });

      if (alreadyHasOrder === true) {
        alert("Capítulo já ordernado");
        return;
      }

      level = localChapter.order;
    } else {
      level = relatives.docs.length + 1;
    }

    const chapterReference = await addDoc(chapterRelativesReference, {
      chapter_parent: doc(db, `books/${localChapter.parent}`),
      chapter_title: localChapter.title,
      chapter_poster: poster_uid,
      chapter_release: new Date(),
      chapter_content: "",
      chapter_order: level,
    });

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
