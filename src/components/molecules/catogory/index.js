import React from "react";

function Catogory() {
  return (
    <div className='  flex flex-col w-1/4 px-2 cursor-pointer  transition-transform'>
      <div className='border-brown-500 border rounded-md overflow-hidden hover:scale-105 duration-200  hover:shadow-xl  transition-transform'>
        <img
          src='https://images.unsplash.com/photo-1656978796497-5e9211075c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80'
          className='w-full h-60 duration-200 object-cover  	 '
        />
        <div className='flex flex-row justify-center'>
          <a
            // style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900 text-xl  my-8 font-serif		'>
            The Sweetest Choice
          </a>
        </div>
      </div>
    </div>
  );
}
export default Catogory;
