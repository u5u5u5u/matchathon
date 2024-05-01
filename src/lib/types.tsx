// ユーザー情報のデータ型定義
interface User {
  userId: string; // ユーザーID
  displayName: string; // 表示名
}

// 抹茶料理のデータ型定義
interface MatchaDish {
  dishName: string; // 抹茶料理名
  genre: "スイーツ" | "ドリンク" | "フード" | "その他"; // ジャンル
  date: string; // 日付
  shop: {
    name: string; // 店舗名
    address: string; // 店舗住所
    location: {
      latitude: number; // 地図上の緯度
      longitude: number; // 地図上の経度
    };
  };
  taste: {
    bitterness: number; // 苦味（0から5の範囲で表す）
    sweetness: number; // 甘味（0から5の範囲で表す）
    richness: number; // 濃さ（0から5の範囲で表す）
  };
}

// ユーザー情報を含む抹茶料理のデータ型定義
interface MatchaDishWithUser extends MatchaDish {
  user: User; // ユーザー情報
}

// Firestoreに保存する際のデータ型定義
interface FirestoreMatchaDishWithUser extends MatchaDishWithUser {
  id: string;
}
