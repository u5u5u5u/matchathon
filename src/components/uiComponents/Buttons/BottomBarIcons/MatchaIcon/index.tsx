import React from "react";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";

interface Props {
  onClick: () => void;
}

const BottomBarMatchaIcon: React.FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <InvertColorsOutlinedIcon onClick={handleClick} sx={{ fontSize: 40 }} />
  );
};

export default BottomBarMatchaIcon;
