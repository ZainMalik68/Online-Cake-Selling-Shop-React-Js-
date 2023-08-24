import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

function Product({ onClick }) {
  return (
    <div
      className='  flex flex-col w-1/4 px-2 cursor-pointer '
      onClick={onClick}>
      <div className='border-brown-500 border rounded-md overflow-hidden hover:scale-105 duration-200  hover:shadow-xl'>
        <img
          src='https://images.unsplash.com/photo-1656978796497-5e9211075c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80'
          className='w-full h-60 duration-200 object-cover   transition-transform	 '
        />
        <div className='flex flex-col items-center py-5'>
          <a
            // style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900  text-xl   	'>
            The Sweetest Choice
          </a>
          <a className='text-amber-500 text-2xl font-sans	mt-2'>Rs 4,999/-</a>
          <a
            // style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900  text-sm mt-2   font-sans	opacity-80	'>
            (For 3 Pounds Cake)
          </a>
          <div className='flex flex-row space-x-1 mt-4 items-center justify-center'>
            <AiFillStar color='#ffcc36' fontSize={17} />
            <AiFillStar color='#ffcc36' fontSize={17} />
            <AiFillStar color='#ffcc36' fontSize={17} />
            <AiFillStar color='#ffcc36' fontSize={17} />
            {/* <FaStarHalfAlt color='#ffcc36' fontSize={14} fill='#cccccc' /> */}
            <AiFillStar color='#cccccc' fontSize={17} />

            <a className='text-brown-900  text-xs mb-1   font-sans	opacity-80	'>
              (4)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
