import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { logout } from "../../lib/auth";
import Stack from "@mui/material/Stack";
import MatchaDishes from "@/components/bodies/MatchaDish";
import MyPage from "@/components/bodies/MyPage";
import MatchaDishRegistration from "@/components/bodies/MatchaDishRegistration";
import Map from "@/components/bodies/Map";
import BottomBarAddIcon from "@/components/uiComponents/Buttons/BottomBarIcons/AddIcon";
import BottomBarProfileIcon from "@/components/uiComponents/Buttons/BottomBarIcons/ProfileIcon";
import BottomBarMapIcon from "@/components/uiComponents/Buttons/BottomBarIcons/MapIcon";
import BottomBarMatchaIcon from "@/components/uiComponents/Buttons/BottomBarIcons/MatchaIcon";
import CommonButton from "@/components/uiComponents/Buttons/CommonButton";
import BackButton from "@/components/uiComponents/Buttons/BackButton";
import styles from "./style.module.scss";

export default function Top() {
  const [selected, setSelected] = useState("一覧");
  const handleNavClick = (newValue: string) => {
    setSelected(newValue);
  };
  const router = useRouter();

  const signOut = () => {
    logout()
      .then(() => {
        // ログアウト成功時に/homeにリダイレクト
        router.push("/");
        console.log("ログアウト成功");
      })
      .catch((error) => {
        console.error(error?.code);
      });
  };
  /*
ホームページ(home)
├─抹茶料理一覧ページ(MatchaDish)
├─マイページ(MyPage)
│ └─プロフィール編集ページ(ProfileEdit)
├─抹茶料理登録ページ(MatchaDishRegistration)
├─地図(Map)
└─()
  */
  const contents: { [key: string]: JSX.Element } = {
    一覧: <MatchaDishes />,
    マイページ: <MyPage />,
    登録: <MatchaDishRegistration />,
    地図: <Map />,
  };

  const icons: { [key: string]: JSX.Element } = {
    一覧: <BottomBarMatchaIcon />,
    マイページ: <BottomBarProfileIcon />,
    登録: <BottomBarAddIcon />,
    地図: <BottomBarMapIcon />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <header>
          <BackButton className={styles.back_button} />
          <h1 className={styles.title}>{selected}</h1>
        </header>
        <main>{contents[selected]}</main>
        <CommonButton text={"ログアウト"} onClick={signOut} />
        <footer>
          <Stack direction="row" spacing={6} justifyContent="space-evenly">
            {Object.entries(contents).map(([name]) => {
              const flag = !!name.match(selected);
              return (
                <div
                  key={name}
                  onClick={() => handleNavClick(name)}
                  className={
                    flag ? `${styles.list} ${styles.active}` : `${styles.list}`
                  }
                >
                  {icons[name]}
                </div>
              );
            })}
          </Stack>
        </footer>
      </div>
    </div>
  );
}
