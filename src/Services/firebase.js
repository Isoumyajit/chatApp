import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase-config";
import { doc, setDoc } from "firebase/firestore";

export const signUp = async (name, phone, email, password, setError) => {
  let uid = "";
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
        phoneNumber: phone,
      });
      uid = user.uid;
      await setDoc(doc(db, "userChats", uid), {});
      await setDoc(doc(db, "users", uid), {
        name,
        email,
        phone,
        UID: uid,
      })
        .then((res) => {
          console.log("Document successfully written!", res);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    })
    .catch((error) => {
      setError(error.message);
      console.error(error);
    });
};

export const logOut = async () => {
  await signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error(error);
    });
};

export const signIn = async (email, password, setError) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      setError(error.message);
    });
};
