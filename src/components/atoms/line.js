import React from "react";

function Line({ style }) {
  return (
    <div
      style={{ height: 1 }}
      className={`bg-gray-100 w-full  my-1 ${style}`}></div>
  );
}
export default Line;
