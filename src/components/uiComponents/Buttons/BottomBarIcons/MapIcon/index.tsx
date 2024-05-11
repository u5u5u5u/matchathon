import React from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import styles from "../styles/BottomNavIcons.module.scss";

const MapIcon: React.FC = () => {
  return (
    <div className={styles.icon}>
      <MapOutlinedIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default MapIcon;
