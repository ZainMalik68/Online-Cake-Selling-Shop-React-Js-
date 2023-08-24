import React from "react";
import Cake from "../../../assets/cake11.jpg";

function Banner({ tag, heading, image }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,.6),rgba(10,10,10,.3)),url(${
          image ? image : Cake
        })`,
      }}
      // style={{ backgroundImage: `url(${Cake})`, filter: "blur(1px)" }}
      className='bg-cover'>
      {/* <Navbar /> */}
      <div className='pb-8 pt-32 w-full px-28 '>
        <div className='flex flex-col items-center'>
          <a className='text-amber-500 text-2xl font-serif	'>{tag}</a>
          <a
            style={{ fontFamily: "Pacifico, cursive" }}
            className='text-white text-4xl mt-4	'>
            {heading}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
