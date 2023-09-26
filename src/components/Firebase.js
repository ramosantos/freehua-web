import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZe5Afwd4IF8O0sjGx8UBlJprasm20-Qk",
  authDomain: "freehua-db.firebaseapp.com",
  projectId: "freehua-db",
  storageBucket: "freehua-db.appspot.com",
  messagingSenderId: "912869104324",
  appId: "1:912869104324:web:867e8d751670c004fb0791",
  measurementId: "G-S0D7E23XXE"
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const todosRef = collection(db, 'todos');
