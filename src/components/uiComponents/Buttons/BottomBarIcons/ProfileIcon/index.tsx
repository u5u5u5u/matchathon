import React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import styles from "../styles/BottomNavIcons.module.scss";

const BottomBarProfileIcon: React.FC = () => {
  return (
    <div className={styles.icon}>
      <PersonOutlinedIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default BottomBarProfileIcon;
