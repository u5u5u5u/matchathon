import Head from "next/head";
import { useState } from "react";
import MatchaDish from "@/components/bodies/MatchaDish";
import MyPage from "@/components/bodies/MyPage";
import MatchaDishRegistration from "@/components/bodies/MatchaDishRegistration";
import Map from "@/components/bodies/Map";
import Stack from "@mui/material/Stack";
import BottomBarAddIcon from "@/components/uiComponents/Buttons/BottomBarIcons/AddIcon";
import BottomBarProfileIcon from "@/components/uiComponents/Buttons/BottomBarIcons/ProfileIcon";
import BottomBarMapIcon from "@/components/uiComponents/Buttons/BottomBarIcons/MapIcon";
import BottomBarMatchaIcon from "@/components/uiComponents/Buttons/BottomBarIcons/MatchaIcon";

export default function Home() {
  const [selected, setSelected] = useState("抹茶料理一覧");
  const handleNavClick = (newValue: string) => {
    setSelected(newValue);
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
    抹茶料理一覧: <MatchaDish />,
    マイページ: <MyPage />,
    抹茶料理登録: <MatchaDishRegistration />,
    地図: <Map />,
  };

  const icons: { [key: string]: JSX.Element } = {
    抹茶料理一覧: (
      <BottomBarMatchaIcon onClick={() => handleNavClick("抹茶料理一覧")} />
    ),
    マイページ: (
      <BottomBarProfileIcon onClick={() => handleNavClick("マイページ")} />
    ),
    抹茶料理登録: (
      <BottomBarAddIcon onClick={() => handleNavClick("抹茶料理登録")} />
    ),
    地図: <BottomBarMapIcon onClick={() => handleNavClick("地図")} />,
  };

  return (
    <>
      <Head>
        <title>まちゃろぐ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main>{contents[selected]}</main>
      <footer>
        <nav>
          <Stack direction="row" spacing={5} justifyContent="space-evenly">
            {Object.entries(contents).map(([name]) => {
              const flag = !!name.match(selected);
              return (
                <div key={name} onClick={(_) => handleNavClick(name)}>
                  {icons[name]}
                </div>
              );
            })}
          </Stack>
        </nav>
      </footer>
    </>
  );
}
