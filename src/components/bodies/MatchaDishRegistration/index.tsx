import React, { useState } from "react";

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
      <form>
        <div>
          <label htmlFor="matchaName">料理名</label>
          <input
            type="text"
            id="matchaName"
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaGenre(e.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="matchaBitterness">苦味</label>
          <input
            type="range"
            id="matchaBitterness"
            min={0}
            max={10}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaGenre(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="matchaSweetness">甘味</label>
          <input
            type="range"
            id="matchaSweetness"
            min={0}
            max={10}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaGenre(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="matchaThickness">濃さ</label>
          <input
            type="range"
            id="matchaThickness"
            min={0}
            max={10}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMatchaGenre(e.target.value)
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
