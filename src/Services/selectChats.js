import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase-config";

export const selectChats = async ({ currentUser }, selectedUser) => {
  let combinedUID =
    currentUser.uid > selectedUser.UID
      ? currentUser.uid + selectedUser.UID
      : selectedUser.UID + currentUser.uid;
  try {
    const results = await getDoc(doc(db, "chats", combinedUID));
    console.log(currentUser, selectedUser);
    if (!results.exists()) {
      await setDoc(doc(db, "chats", combinedUID), { messages: [] });
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedUID + ".userinfo"]: {
          uid: selectedUser.UID,
          displayName: selectedUser.name,
          lastmessage: "",
        },
        [combinedUID + ".date"]: serverTimestamp(),
      }).then(() => {
        console.log("updated");
      });

      await updateDoc(doc(db, "userChats", selectedUser.UID), {
        [combinedUID + ".userinfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          lastmessage: "",
        },
        [combinedUID + ".date"]: serverTimestamp(),
      });
    }
  } catch (error) {
    console.error(error);
  }
};
