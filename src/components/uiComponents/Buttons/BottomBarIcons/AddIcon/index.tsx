import React from "react";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  onClick: () => void;
}

const BottomBarAddIcon: React.FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return <AddIcon onClick={handleClick} sx={{ fontSize: 40 }} />;
};

export default BottomBarAddIcon;
