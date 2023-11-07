import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../components/Firebase.js";

const auth = getAuth();

export const logUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      localStorage["userCredential"] = JSON.stringify(userCredential.user);
      return userCredential.user;
    })
    .catch((error) => {
      alert(error.message);
      return null;
    });
};

export const registerUser = async (email, password, username) => {
  try {
    const logged = await createUserWithEmailAndPassword(auth, email, password);
    const user = logged.user;
    const stored = await storageUser(user.uid, username);
    if (stored) {
      alert("Perfil criado com sucesso");
      return user;
    }
  } catch (error) {
    alert(error.message);
    return null;
  }
};
const storageUser = async (userId, username) => {
  try {
    await setDoc(doc(collection(db, "users"), userId), {
      user_name: username,
      user_likes: {},
      user_karma: 0,
      user_status: "",
      user_history: {},
      user_picture:
        "https://firebasestorage.googleapis.com/v0/b/freehua-db.appspot.com/o/cabalo.jpg?alt=media&token=b2cb42c7-5270-4c16-b44d-779ac4b5277e",
    });
    return true;
  } catch (error) {
    console.error("Erro ao armazenar o usuário no Firestore:", error);
    return false;
  }
};
