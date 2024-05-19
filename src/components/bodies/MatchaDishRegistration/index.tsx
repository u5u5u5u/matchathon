import React, { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDocs, query, where } from "firebase/firestore";

const MatchaDishRegistration: React.FC = () => {
  //変数定義
  const [matchaId, setMatchaId] = useState<string>(""); //ID
  const [matchaName, setMatchaName] = useState<string>(""); //料理名
  const [matchaShop, setMatchaShop] = useState<string>(""); //店舗名
  const [matchaAddress, setMatchaAddress] = useState<string>(""); //住所
  const [matchaGenre, setMatchaGenre] = useState<string>(""); //ジャンル
  const [matchaDate, setMatchaDate] = useState<string>(""); //日付
  const [matchaBitterness, setMatchaBitterness] = useState<number>(5); //苦味
  const [matchaSweetness, setMatchaSweetness] = useState<number>(5); //甘味
  const [matchaThickness, setMatchaThickness] = useState<number>(5); //濃さ
  const user = auth.currentUser;
  const userId = user?.uid;

  //登録処理
  const registerMatchaDish = async () => {
    try {
      const docRef = await addDoc(collection(db, `users/${userId}/matchas`), {
        matchaName: matchaName,
        matchaShop: matchaShop,
        matchaAddress: matchaAddress,
        matchaGenre: matchaGenre,
        matchaDate: matchaDate,
        matchaBitterness: matchaBitterness,
        matchaSweetness: matchaSweetness,
        matchaThickness: matchaThickness,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //登録処理を実行
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerMatchaDish();
  };

  //値が取れているか確認
  const checkValue = () => {
    console.log(matchaName);
    console.log(matchaShop);
    console.log(matchaAddress);
    console.log(matchaGenre);
    console.log(matchaDate);
    console.log(matchaBitterness);
    console.log(matchaSweetness);
    console.log(matchaThickness);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="matchaName">料理名</label>
          <input
            type="text"
            id="matchaName"
            value={matchaName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaName(e.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="matchaShop">店舗名</label>
          <input
            type="text"
            id="matchaShop"
            value={matchaShop}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaShop(e.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="matchaAddress">住所</label>
          <input
            type="text"
            id="matchaAddress"
            value={matchaAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaAddress(e.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="matchaGenre">ジャンル</label>
          <input
            type="text"
            id="matchaGenre"
            value={matchaGenre}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaGenre(e.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="matchaDate">日付</label>
          <input
            type="date"
            id="matchaDate"
            value={matchaDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaDate(e.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="matchaBitterness">苦味</label>
          <input
            type="range"
            id="matchaBitterness"
            value={matchaBitterness}
            min={0}
            max={10}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaBitterness(Number(e.target.value))
            }
          />
        </div>
        <div>
          <label htmlFor="matchaSweetness">甘味</label>
          <input
            type="range"
            id="matchaSweetness"
            value={matchaSweetness}
            min={0}
            max={10}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaSweetness(Number(e.target.value))
            }
          />
        </div>
        <div>
          <label htmlFor="matchaThickness">濃さ</label>
          <input
            type="range"
            id="matchaThickness"
            value={matchaThickness}
            min={0}
            max={10}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaThickness(Number(e.target.value))
            }
          />
        </div>
        <div>
          <button type="submit" onClick={checkValue}>
            登録
          </button>
        </div>
      </form>
    </>
  );
};

export default MatchaDishRegistration;
