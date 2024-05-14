import React from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import styles from "../styles/BottomNavIcons.module.scss";

interface MapIconProps {
  className?: string;
}

const MapIcon: React.FC<MapIconProps> = ({ className }) => {
  return (
    <div className={`${styles.icon} ${className}`}>
      <MapOutlinedIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default MapIcon;
