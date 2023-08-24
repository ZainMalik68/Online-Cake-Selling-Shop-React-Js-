import React from "react";
import Cake from "../../../assets/cake11.jpg";

function CallUs() {
  return (
    <div
      className='parallax mt-10'
      style={{
        backgroundImage: `url(${Cake})`,
      }}>
      <div className='bg-gray-900 xl:px-30 lg:px-28 md:px-16 px-4 py-24 h-full bg-opacity-60  flex justify-center'>
        <a
          style={{ fontFamily: "Pacifico, cursive" }}
          className='text-white text-5xl  my-6'>
          Call us 03154416973
        </a>
      </div>
    </div>
  );
}
export default CallUs;
