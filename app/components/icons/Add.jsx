import React from "react";

function AddIcon({fill, width, height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
      xmlSpace="preserve"
      fill={fill}
    >
    <path d="M24 26c6.6 0 12-5.4 12-12S30.6 2 24 2 12 7.4 12 14s5.4 12 12 12zm0-22c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10S18.5 4 24 4zM33 28H15C7.8 28 2 33.8 2 41v5h2v-5c0-6.1 4.9-11 11-11h18v-2zM46 38h-6v-6h-2v6h-6v2h6v6h2v-6h6z"/>
   </svg>
  );
}

export default AddIcon;