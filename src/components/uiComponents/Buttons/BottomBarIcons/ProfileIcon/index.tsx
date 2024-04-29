import React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

interface Props {
  onClick: () => void;
}

const BottomBarProfileIcon: React.FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return <PersonOutlinedIcon onClick={handleClick} sx={{ fontSize: 40 }} />;
};

export default BottomBarProfileIcon;
