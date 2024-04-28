import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { db } from "../../lib/firebase/firebase";
import {
  updateDoc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  collection,
  doc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// データベースにドキュメントを追加
const addDataToFirestore = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};

// データベースのドキュメントを更新
const updateDataInFirestore = async (id: string, newData: any) => {
  try {
    await updateDoc(doc(db, "users", id), newData);
    console.log("Document updated successfully");
    return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
};

// データベースのドキュメントを削除
const deleteDataFromFirestore = async (id: string) => {
  try {
    await deleteDoc(doc(db, "users", id));
    console.log("Document deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
};

// データベースのドキュメントを取得
const getDataOnlyFromFirestore = async () => {
  try {
    const docRef = doc(db, "users", "G26NDVES00hSA19TMNojHfmU4Rw2");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

// データベースのドキュメントを全て取得
const getAllDataFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

// データベースのドキュメントを名前順で並び替え3つ取得
const getDataOrderByFromFirestore = async () => {
  const q = query(collection(db, "users"), orderBy("name"), limit(3));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    const added = await addDataToFirestore(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const updateData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updated = await updateDataInFirestore(
      "G26NDVES00hSA19TMNojHfmU4Rw2",
      {
        name: name,
        email: email,
        message: message,
      }
    );
    if (updated) {
      console.log("Data updated successfully");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const deleteData = async () => {
    const deleted = await deleteDataFromFirestore("CwOJRzcnGgnso0QT4auU");
    if (deleted) {
      console.log("Data deleted successfully");
    }
  };

  const getDataOnly = async () => {
    await getDataOnlyFromFirestore();
  };

  const getDataAll = async () => {
    await getAllDataFromFirestore();
  };

  const getDataOrderBy = async () => {
    await getDataOrderByFromFirestore();
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <input
              type="text"
              id="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              rows={5}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

        <form onSubmit={updateData}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <input
              type="text"
              id="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              rows={5}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button type="submit">Update</button>
          </div>
        </form>
        <button onClick={deleteData}>Delete</button>
        <button onClick={getDataOnly}>Get Only</button>
        <button onClick={getDataAll}>Get All</button>
        <button onClick={getDataOrderBy}>Get Order By</button>
      </main>
    </>
  );
}
