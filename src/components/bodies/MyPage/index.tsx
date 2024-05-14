import React from "react";
import styles from "./style.module.scss";
import ProfileImage from "../../uiComponents/ProfileImage";

const MyPage: React.FC = () => {
  return (
    <>
      <div className={styles.user_info}>
        <h2 className={styles.sub_title}>ユーザー情報</h2>
        <div className={styles.user_info_inner}>
          <ProfileImage src="" />
          <div className={styles.user_info_text}>
            <div className={styles.user_name}>ユーザー名</div>
            <div className={styles.user_intro}>
              <p>自己紹介hogehogehogehogehogehoge</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.user_record}>
        <h2 className={styles.sub_title}>記録</h2>
        <div className={styles.posted_number}>
          <h3>投稿数</h3>
          <ul className={styles.numbers}>
            <li>
              <div>総数</div>
              <div>20</div>
            </li>
            <li>
              <div>都道府県別</div>
              <div>
                <div>京都府 10</div>
                <div>福岡県 5</div>
                <div>熊本県 5</div>
              </div>
            </li>
            <li>
              <div>ジャンル別</div>
              <div>
                <div>スイーツ 10</div>
                <div>ドリンク 5</div>
                <div>フード 5</div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.matcha_index}>
          <h3>抹茶指数</h3>
          <ul className={styles.tastes}>
            <li>
              <div>苦味</div>
              <div>4</div>
            </li>
            <li>
              <div>甘味</div>
              <div>3</div>
            </li>
            <li>
              <div>濃さ</div>
              <div>2</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyPage;
