import firebase from "firebase/compat/app";

interface Firebase {
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  storage: firebase.storage.Storage;
}

export interface FirestoreData {
  users: {
    user: {
      name: string;
      uid: string;
      matcha: {
        name: string;
        genre: string[];
        shop: {
          name: string;
          address: string;
        };
        taste: {
          bitter: number;
          sweet: number;
          density: number;
        };
      };
    };
  };
}

const matchaGenre: string[] = ["スイーツ", "ドリンク", "フード", "その他"];
