import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  signInWithCredential,
  signOut,
  Auth,
} from "@firebase/auth";
import { auth } from "../../../lib/firebase/firebase";

const useAuth = (auth: Auth) => {
  const [state, setState] = useState<
    "idel" | "progress" | "login" | "logout" | "error"
  >("idel");
  const [error, setError] = useState<unknown>("");
  const [credential, setCredential] = useState<UserCredential>();
  const [login, setLogin] = useState<boolean>(false);

  const dispatch = useCallback(
    (
      action:
        | { type: "login"; payload?: { token: string } }
        | { type: "logout" }
    ) => {
      setError(""); // エラーをリセット

      // アクションに応じて処理を分岐
      switch (action.type) {
        // ログイン
        case "login":
          setState("progress"); // ログイン中
          const token = action.payload?.token; // トークンがあればトークンでログイン
          // トークンがあればトークンでログイン、なければポップアップでログイン
          if (token) {
            // トークンでログイン
            signInWithCredential(auth, GoogleAuthProvider.credential(token))
              .then((result) => {
                setCredential(result); // ユーザー情報をセット
                setState("login"); // ログイン完了
                setLogin(true); // ログイン状態をセット
              })
              .catch((e) => {
                setError(e); // エラーをセット
                setState("error"); // エラー状態
                setLogin(false); // ログイン状態をセット
              });
          } else {
            // ポップアップでログイン
            signInWithPopup(auth, provider)
              .then((result) => {
                setCredential(result); // ユーザー情報をセット
                setState("login"); // ログイン完了
                setLogin(true); // ログイン状態をセット
              })
              .catch((e) => {
                setError(e); // エラーをセット
                setState("error"); // エラー状態
                setLogin(false); // ログイン状態をセット
              });
          }
          break;
        // ログアウト
        case "logout":
          setState("progress"); // ログアウト中
          // ログアウト処理
          signOut(auth)
            .then(() => {
              setCredential(undefined); // ユーザー情報をリセット
              setState("logout"); // ログアウト完了
            })
            .catch((e) => {
              setError(e); // エラーをセット
              setState("error"); // エラー状態
            });
          break;
      }
    },
    [auth] // authが変更されたら再生成
  );
  return { state, error, credential, dispatch, login }; // カスタムフックの返り値
};

const provider = new GoogleAuthProvider(); // Google認証プロバイダー

const Page = () => {
  const router = useRouter(); // ルーター
  const { state, error, credential, dispatch, login } = useAuth(auth); // カスタムフック
  const [JSvalid, setJSvalid] = useState<boolean>(false); // JavaScript有効化フラグ

  // ログイン状態を保持
  useEffect(() => {
    const token = sessionStorage.getItem("token"); // セッションストレージからトークンを取得
    if (token) {
      dispatch({ type: "login", payload: { token } }); // トークンでログイン
    }
  }, [dispatch]);

  // ログイン状態をセッションストレージに保存
  useEffect(() => {
    // ユーザー情報があればトークンをセッションストレージに保存
    if (credential) {
      const token =
        GoogleAuthProvider.credentialFromResult(credential)?.idToken; // トークンを取得
      token && sessionStorage.setItem("token", token); // トークンをセッションストレージに保存
    } else {
      sessionStorage.removeItem("token"); // ユーザー情報がなければセッションストレージからトークンを削除
    }
  }, [credential]);

  const handleLogin = () => dispatch({ type: "login" }); // ログイン処理
  const handleLogout = () => dispatch({ type: "logout" }); // ログアウト処理

  // ログイン状態が変更されたらページ遷移
  useEffect(() => {
    if (login) {
      router.push(`/home`); // ログイン状態ならhomeページに遷移
    }
  }, [login]);

  useEffect(() => {
    setJSvalid(true); // JavaScript有効化
  }, []);

  if (JSvalid) {
    return (
      <main>
        <div className="container">
          <div className="wrapper">
            <button onClick={handleLogin}>logIn</button>
            <ul>
              <li>UserName: {credential?.user.displayName}</li>
              <li>State: {state}</li>
              {String(error) && <li>Error: {String(error)}</li>}
            </ul>
            <button onClick={handleLogout}>logOut</button>
          </div>
        </div>
      </main>
    );
  } else {
    return <></>;
  }
};

export default Page;
