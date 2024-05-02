import { useRouter } from "next/router";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import styles from "./style.module.scss";

const BackButton = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };

  return (
    <ArrowBackIosNewOutlinedIcon
      className={styles.back_button}
      onClick={back}
    ></ArrowBackIosNewOutlinedIcon>
  );
};

export default BackButton;
