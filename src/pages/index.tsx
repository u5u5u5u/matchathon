import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth";
import { useState } from "react";
import CommonButton from "@/components/uiComponents/Buttons/CommonButton";

export default function Home() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
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
