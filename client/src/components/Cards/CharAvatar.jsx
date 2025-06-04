import React from "react";
import { getInitials } from "../../utils/helper.js";

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div
      className={` ${width} ${height} ${style} flex items-center justify-center rounded-full text-gray-500 font-medium bg-gray-100`}
    >
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar;
