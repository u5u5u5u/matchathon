export interface User {
  id: string;
  name: string;
}

export interface MatchaDish {
  id: string;
  name: string;
  shop: string;
  address: string;
  genre: string;
  date: string;
  bitterness: number;
  sweetness: number;
  thickness: number;
}

export interface MatchaProps {
  user: User;
  matchaDish: MatchaDish;
}
