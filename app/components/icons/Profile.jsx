import React from "react";

function ProfileIcon({fill, width, height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 200 200"
      xmlSpace="preserve"
      fill={fill}
    >
    <path d="m169 170.71-2-4a73.78 73.78 0 0 0-31-32 66.14 66.14 0 0 0 29-54.5 65 65 0 1 0-101 54 73.78 73.78 0 0 0-31 32l-2 4a10.06 10.06 0 0 0 18 9l2-4a55 55 0 0 1 98 0l2 4a10 10 0 0 0 13.5 4.5c5-2 7-8 4.5-13ZM55 80.21a45 45 0 1 1 45 45 44.81 44.81 0 0 1-45-45Z"/>
   </svg>
  );
}

export default ProfileIcon;