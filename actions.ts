import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { FormEvent } from "react";
import { db } from "./lib/firebase.config";

export async function handleFormSubmit(
  e: FormEvent,
  text: string,
  name: string | null | undefined,
  email: string | null | undefined,
  image: string | null | undefined
) {
  const date = new Date();
  const formattedDate =
    date.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
    " " +
    date.toLocaleTimeString();
  e.preventDefault();
  if (text.length) {
    try {
      await addDoc(collection(db, "messages"), {
        text,
        createdAt: formattedDate,
        name,
        image,
        timestamp: Date.now(),
        servertimestamp: serverTimestamp(),
        email,
        isSeen: false,
      });
    } catch (error: any) {
      alert(error.message);
    }
  }
}

export async function addIsTypingToUserColl(
  isUserTyping: boolean,
  mail: string | null | undefined
) {
  const userColRef = collection(db, "users");
  const userQuery = query(userColRef, where("email", "==", mail ?? ""));
  const querySnapshot = await getDocs(userQuery);

  querySnapshot.forEach(async ({ id }) => {
    const userDocRef = doc(db, "users", id);
    await setDoc(userDocRef, { isTyping: isUserTyping }, { merge: true });
  });
}

//! Update isSeen property in message by using createdAt for finding and updating the message, it is working like the message id.
export async function updateIsSeen(createdAt: Date) {
  const messageColRef = collection(db, "messages");
  const messageQuery = query(
    messageColRef,
    where("createdAt", "==", createdAt ?? "")
  );
  const querySnapshot = await getDocs(messageQuery);

  querySnapshot.forEach(async ({ id }) => {
    const messageDocRef = doc(db, "messages", id);
    await setDoc(messageDocRef, { isSeen: true }, { merge: true });
  });
}

export async function deleteMessage() {
  const collectionRef = collection(db, "messages");
  const q = query(collectionRef);
  onSnapshot(q, (snapshots) => {
    snapshots.docs.map((dbDoc) => {
      const docRef = doc(db, "messages", dbDoc.id);
      void deleteDoc(docRef);
    });
  });
}
