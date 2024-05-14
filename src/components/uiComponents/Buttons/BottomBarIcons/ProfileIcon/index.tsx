import React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import styles from "../styles/BottomNavIcons.module.scss";

interface BottomBarProfileIconProps {
  className?: string;
}

const BottomBarProfileIcon: React.FC<BottomBarProfileIconProps> = (
  className
) => {
  return (
    <div className={`${styles.icon} ${className}`}>
      <PersonOutlinedIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default BottomBarProfileIcon;
