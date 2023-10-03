import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth();

export function logUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage['userCredential'] = JSON.stringify(userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        alert(error.message);
        return null;
      });
}

export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Perfil criado com sucesso');
        return user;
      })
      .catch((error) => {
        alert(error.message);
        return null;
      });
};
