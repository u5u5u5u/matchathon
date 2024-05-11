import React from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles/BottomNavIcons.module.scss";

const BottomBarAddIcon: React.FC = () => {
  return (
    <div className={styles.icon}>
      <AddIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default BottomBarAddIcon;
