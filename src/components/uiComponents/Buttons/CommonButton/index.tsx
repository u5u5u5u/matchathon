import * as React from "react";
import styles from "./style.module.scss";

export interface CommonButtonProps {
  text: string;
  onClick?: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default CommonButton;
