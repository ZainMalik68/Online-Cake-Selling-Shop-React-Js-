import React from "react";
import { BsSearch } from "react-icons/bs";

function Input({ onClick }) {
  return (
    <div className='w-full  flex flex-row   justify-between rounded-md  overflow-auto'>
      <div className='flex flex-row space-x-5 w-4/5	 bg-white'>
        <input
          placeholder='Seach A Best Home Made Cake '
          className='py-4 px-5 focus:none w-full outline-none'
        />
      </div>
      <div
        className='flex flex-row space-x-5 w-1/5	bg-brown-900 items-center  justify-center cursor-pointer hover:bg-amber-500 duration-200'
        onClick={onClick}>
        <BsSearch style={{ color: "white", fontSize: 20 }} />
      </div>
    </div>
  );
}
export default Input;
