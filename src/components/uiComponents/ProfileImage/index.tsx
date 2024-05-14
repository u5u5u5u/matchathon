import Image from "next/image";
import styles from "./style.module.scss";

interface ProfileImageProps {
  src: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src }) => {
  if (src) {
    return (
      <div className={styles.profile_image}>
        <Image
          width={100}
          height={100}
          src={src}
          alt="プロフィール画像"
          objectFit="cover"
        />
      </div>
    );
  } else {
    return <div className={styles.profile_image}>画像がありません</div>;
  }
};

export default ProfileImage;
