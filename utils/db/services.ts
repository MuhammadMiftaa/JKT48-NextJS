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

export async function addData(
  ID: string,
  collectionName: string,
  data: any,
  callback = (data: {
    status: boolean;
    message: string;
    data?: any;
  }): void => {}
) {
  const docRef = doc(firestore, collectionName, ID);
  await setDoc(docRef, data)
    .then(() =>
      callback({
        status: true,
        message: `berhasil menambahkan data.`,
        data,
      })
    )
    .catch((error) => callback({ status: false, message: error }));
}

export async function updateData(
  collectionName: string,
  data: any,
  callback = (data: {
    status: boolean;
    message: string;
    data?: any;
  }): void => {}
) {
  const docRef = doc(firestore, collectionName, data.id || "");
  await updateDoc(docRef, data)
    .then(() => {
      callback({
        status: true,
        message: `berhasil update data.`,
        data,
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
