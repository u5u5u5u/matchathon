import React from "react";
import { db } from "@/lib/firebase";
import { getDocs, collection } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import { useState, useEffect } from "react";
import type { MatchaDish } from "@/utils/types";

const MatchaDishes: React.FC = () => {
  const user = auth.currentUser;
  const userId = user?.uid;
  const [matchaName, setMatchaName] = useState<string>("");
  const [matchaShop, setMatchaShop] = useState<string>("");
  const [matchaAddress, setMatchaAddress] = useState<string>("");
  const [matchaGenre, setMatchaGenre] = useState<string>("");
  const [matchaDate, setMatchaDate] = useState<string>("");
  const [matchaBitterness, setMatchaBitterness] = useState<number>(5);
  const [matchaSweetness, setMatchaSweetness] = useState<number>(5);
  const [matchaThickness, setMatchaThickness] = useState<number>(5);
  const [matchaDishes, setMatchaDishes] = useState<MatchaDish[]>([]);

  // データベースからデータを取得
  const getDataFromFirestore = async () => {
    const querySnapshot = await getDocs(
      collection(db, `users/${userId}/matchas`)
    );
    const dataArray: MatchaDish[] = [];
    querySnapshot.forEach((doc) => {
      // 取得したデータを配列に追加
      dataArray.push(doc.data() as MatchaDish);
      console.log(dataArray);
    });
    setMatchaDishes(dataArray);
  };

  useEffect(() => {
    getDataFromFirestore();
  }, []);

  return (
    <>
      <h1>一覧</h1>
      <div>
        {matchaDishes.map((matchaDish, index) => (
          <div key={index}>
            <p>料理名：{matchaDish.matchaName}</p>
            <p>店舗名：{matchaDish.matchaShop}</p>
            <p>住所：{matchaDish.matchaAddress}</p>
            <p>ジャンル：{matchaDish.matchaGenre}</p>
            <p>日付：{matchaDish.matchaDate}</p>
            <p>苦味：{matchaDish.matchaBitterness}</p>
            <p>甘味：{matchaDish.matchaSweetness}</p>
            <p>濃さ：{matchaDish.matchaThickness}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MatchaDishes;
