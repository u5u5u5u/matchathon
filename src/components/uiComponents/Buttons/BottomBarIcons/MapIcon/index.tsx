import React from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

interface Props {
  onClick: () => void;
}

const MapIcon: React.FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return <MapOutlinedIcon onClick={handleClick} sx={{ fontSize: 40 }} />;
};

export default MapIcon;
