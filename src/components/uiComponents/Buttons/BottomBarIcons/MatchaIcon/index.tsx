import React from "react";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import styles from "../styles/BottomNavIcons.module.scss";

interface BottomBarMatchaIconProps {
  className?: string;
}

const BottomBarMatchaIcon: React.FC<BottomBarMatchaIconProps> = ({
  className,
}) => {
  return (
    <div className={`${styles.icon} ${className}`}>
      <InvertColorsOutlinedIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default BottomBarMatchaIcon;
