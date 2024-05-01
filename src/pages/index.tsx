import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth";
import { useState } from "react";
import { useRouter } from "next/router"; // Next.js のルーターをインポート
import CommonButton from "@/components/uiComponents/Buttons/CommonButton";

export default function Home() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);
  const router = useRouter(); // Next.js のルーターを使用

  const signIn = () => {
    setWaiting(true);

    login()
      .then(() => {
        // ログイン成功時に/homeにリダイレクト
        router.push("/home");
      })
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  return (
    <>
      {user === null && !waiting && (
        <CommonButton text="ログイン" onClick={signIn} />
      )}
      {user && <CommonButton text="ログアウト" onClick={logout} />}
    </>
  );
}
