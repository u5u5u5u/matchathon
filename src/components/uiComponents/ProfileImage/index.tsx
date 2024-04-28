type Props = {
  src: string;
};

const ProfileImage: React.FC<Props> = ({ src }) => {
  if (src) {
    return <img src={src} alt="プロフィール画像" />;
  } else {
    return <div>画像がありません</div>;
  }
};

export default ProfileImage;
