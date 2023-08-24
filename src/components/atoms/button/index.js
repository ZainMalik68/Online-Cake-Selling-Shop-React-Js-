import React from "react";

function Button(props) {
  const { value, onClick, style } = props;
  return (
    <div
      onClick={onClick}
      className={`rounded-sm bg-transparent border-2 border-amber-500 px-10 py-3 text-2xl font-serif hover:bg-amber-500 cursor-pointer duration-200 ${style}`}>
      {value}
    </div>
  );
}
export default Button;
