import React from "react";

const MatchaDishRegistration: React.FC = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="">料理名</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">店舗名</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">住所</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">ジャンル</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">日付</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">苦味</label>
          <input type="range" />
        </div>
        <div>
          <label htmlFor="">甘味</label>
          <input type="range" />
        </div>
        <div>
          <label htmlFor="">濃さ</label>
          <input type="range" />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </>
  );
};

export default MatchaDishRegistration;
