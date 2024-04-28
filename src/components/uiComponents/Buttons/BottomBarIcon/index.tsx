import React from "react";
import style from "./style.module.scss";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const BottomBarIcon: React.FC<Props> = ({ onClick, children }) => {
  const handleClick = () => {
    // Apply specific CSS here
  };

  return (
    <button className={style.bottomBarButton} onClick={handleClick}>
      {children}
    </button>
  );
};

export default BottomBarIcon;
