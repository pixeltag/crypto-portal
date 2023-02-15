import React from "react";

function PlusIcon({fill, width, height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill={fill}
    >
      <path d="M384,265H264v119h-17V265H128v-17h119V128h17v120h120V265z"/>
    </svg>
  );
}

export default PlusIcon;