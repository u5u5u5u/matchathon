import React from "react";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import styles from "../styles/BottomNavIcons.module.scss";

const BottomBarMatchaIcon: React.FC = () => {
  return (
    <div className={styles.icon}>
      <InvertColorsOutlinedIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default BottomBarMatchaIcon;
