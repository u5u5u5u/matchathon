export interface User {
  id: string;
  name: string;
}

export interface MatchaDish {
  matchaName: string;
  matchaShop: string;
  matchaAddress: string;
  matchaGenre: string;
  matchaDate: string;
  matchaBitterness: number;
  matchaSweetness: number;
  matchaThickness: number;
}

export interface MatchaProps {
  user: User;
  matchaDish: MatchaDish;
}
