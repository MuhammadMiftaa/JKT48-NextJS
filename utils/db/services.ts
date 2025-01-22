import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./firebase";
import { userType } from "@/components/types/userType";
import bcrypt from "bcrypt";
import { memberType } from "@/components/types/memberType";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));

  const data = snapshot.data();

  return data;
}

export async function addMember(
  ID: string,
  collectionName: string,
  member: memberType,
  callback = (data: {
    status: boolean;
    message: string;
    member?: memberType;
  }): void => {}
) {
  const docRef = doc(firestore, collectionName, ID);
  await setDoc(docRef, member)
    .then(() =>
      callback({
        status: true,
        message: `Berhasil Menambahkan ${member.nama}.`,
        member,
      })
    )
    .catch((error) => callback({ status: false, message: error }));
}

export async function updateMember(
  collectionName: string,
  member: memberType,
  callback = (data: {
    status: boolean;
    message: string;
    member?: memberType;
  }): void => {}
) {
  const docRef = doc(firestore, collectionName, member.id || "");
  await updateDoc(docRef, member)
    .then(() => {
      callback({
        status: true,
        message: `Berhasil update ${member.id}.`,
        member,
      });
    })
    .catch((error) => callback({ status: false, message: error }));
}

export async function loginUser(userData: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) return data[0];
  else return null;
}

export async function registerUser(userData: userType, callback: Function) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({ status: false, message: "Email already registered" });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.confirmPassword = "";
    userData.role = "user";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({ status: true, message: "Register success" });
      })
      .catch((error) => {
        callback({ status: false, message: error });
      });
  }
}
