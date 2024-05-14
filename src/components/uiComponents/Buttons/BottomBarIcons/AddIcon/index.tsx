import React from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles/BottomNavIcons.module.scss";

interface BottomBarAddIconProps {
  className?: string;
}

const BottomBarAddIcon: React.FC<BottomBarAddIconProps> = ({ className }) => {
  return (
    <div className={`${styles.icon} ${className}`}>
      <AddIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default BottomBarAddIcon;
