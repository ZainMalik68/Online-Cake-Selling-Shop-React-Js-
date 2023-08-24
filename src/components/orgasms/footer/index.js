import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoSkype } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import styled from "styled-components";
function Footer() {
  //   const Div = styled.div`
  //     &:hover {
  //       opacity: 0.7;
  //     }
  //   `;

  //   const h2 = styled.h2`
  //     &:hover {
  //       opacity: 0.7;
  //     }
  //   `;
  return (
    <div>
      {/* footer ------------ Start> */}

      <div>
        <div className='xl:px-30 lg:px-28 md:px-16 px-4 bg-black'>
          <div className='flex flex-row pt-20'>
            <div className='w-1/2 flex flex-row text-md mt-5 text-white opacity-90'>
              <div className='w-48'>
                <div className='space-y-4'>
                  <h2 className='hover:text-brown-400 cursor-pointer'>Home</h2>

                  <h2 className='hover:text-brown-400 cursor-pointer'>
                    Services
                  </h2>

                  <h2 className='hover:text-brown-400 cursor-pointer'>
                    Contact
                  </h2>

                  <h2 className='hover:text-brown-400 cursor-pointer'>
                    About Us
                  </h2>
                </div>
              </div>
              <div className='w-1/2 space-y-4'>
                <h2 className='hover:text-brown-400 cursor-pointer'>Login </h2>

                <h2 className='hover:text-brown-400 cursor-pointer'>
                  Sign Up{" "}
                </h2>

                <h2 className='hover:text-brown-400 cursor-pointer'>My Cart</h2>

                <h2 className='hover:text-brown-400 cursor-pointer'>
                  My Orders
                </h2>
              </div>
            </div>
            <div className='w-1/2 '>
              <div className=' w-full mt-4'>
                <h1 className='text-white font-bold text-base '>
                  Quick Contact
                </h1>
                <input
                  placeholder='Email Address'
                  style={{
                    color: "#676769",
                    background: "#414141",
                    borderColor: "#5c5c61",
                  }}
                  className='w-full py-2 px-3 border  outline-none mt-6'
                />
                <textarea
                  placeholder='Email Message'
                  style={{
                    color: "#676769",
                    background: "#414141",
                    borderColor: "#5c5c61",
                  }}
                  className='w-full py-2 px-3 border  h-20 outline-none mt-4'
                />
                <div className=' flex flex-wrap justify-end'>
                  <h1 className='py-2 w-max  px-4 text-white cursor-pointer duration-300 text-xs rounded-xs mt-2 border border-amber-500 hover:bg-amber-500 hover:text-white '>
                    Send Message
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className='border-dashed border-t flex flex-wrap mt-10'>
            <div className='w-full md:w-2/6 lg:w-2/6 xl:w-2/6 items-center flex flex-col '>
              <FiPhoneCall className='h-6 w-6 mt-11 text-amber-500' />
              <h1 className='text-white font-bold text-base mt-6'>Call Us </h1>
              <h1
                style={{ color: "#676769" }}
                className=' text-base mt-2 text-center'>
                Phone: (501) 424 0123{" "}
              </h1>
            </div>
            <div className='w-full md:w-2/6 lg:w-2/6 xl:w-2/6 items-center flex flex-col'>
              <AiOutlineMail className='h-6 w-6 mt-11 text-amber-500' />
              <h1 className='text-white font-bold text-base mt-6'>Address </h1>
              <h1
                style={{ color: "#676769" }}
                className=' text-base mt-2 text-center'>
                7481 Warden Rd C2, Sherwood, AR 72120
              </h1>
            </div>

            <div className='w-full md:w-2/6 lg:w-2/6 xl:w-2/6 items-center flex flex-col'>
              <FaRegAddressBook className='h-6 w-6 mt-11 text-amber-500' />
              <h1 className='text-white font-bold text-base mt-6'>Email </h1>
              <h1 style={{ color: "#676769" }} className=' text-base mt-2'>
                <h2>sales@allstarsmb.com</h2>
              </h1>
            </div>
          </div>
          <div className='flex justify-center pb-16'>
            <div className='flex flex-wrap space-x-3 mt-16'>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://web.facebook.com/";
                }}
                className='h-10 w-10 bg-white hover:bg-amber-200  rounded-full flex items-center justify-center duration-300  cursor-pointer'>
                <FaFacebookF className='h-4 w-4 text-amber-500' />
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://twitter.com/";
                }}
                className='h-10 w-10 bg-white hover:bg-amber-200   rounded-full flex items-center justify-center duration-300 cursor-pointer0'>
                <AiOutlineTwitter className='h-4 w-4 text-amber-500' />
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://web.skype.com/";
                }}
                className='h-10 w-10 bg-white hover:bg-amber-200  rounded-full flex items-center justify-center duration-300  cursor-pointer'>
                <IoLogoSkype className='h-4 w-4 text-amber-500' />
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/";
                }}
                className='h-10 w-10 bg-white hover:bg-amber-200  rounded-full flex items-center justify-center duration-300  cursor-pointer'>
                <AiFillYoutube className='h-4 w-4 text-amber-500' />
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.instagram.com/";
                }}
                className='h-10 w-10 bg-white hover:bg-amber-200  rounded-full flex items-center justify-center duration-300  cursor-pointer'>
                <AiFillInstagram color='' className='h-4 w-4 text-amber-500' />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='w-full flex justify-center py-3 bg-brown-900'>
          <h1 className='text-white text-sm'>
            Copyright ©2020. All Rights Reserved
          </h1>
        </div> */}
      </div>
      {/* footer ------------ End> */}
    </div>
  );
}

export default Footer;

// <div
// style={{ color: "#676769", fontSize: 15 }}
// className=' w-72 mt-7 '>

// <div className='flex flex-wrap space-x-3 mt-6'>
//   <div
//     onClick={(e) => {
//       e.preventDefault();
//       window.location.href = "https://web.facebook.com/";
//     }}
//     style={{ background: "#00a3c8" }}
//     className='h-7 w-7  rounded-full flex items-center justify-center duration-300'>
//     <FaFacebookF color='white' className='h-4 w-4' />
//   </div>

//   <div
//     onClick={(e) => {
//       e.preventDefault();
//       window.location.href = "https://twitter.com/";
//     }}
//     style={{ background: "#00a3c8" }}
//     className='h-7 w-7  rounded-full flex items-center justify-center duration-300'>
//     <AiOutlineTwitter color='white' className='h-4 w-4' />
//   </div>

//   <div
//     onClick={(e) => {
//       e.preventDefault();
//       window.location.href = "https://web.skype.com/";
//     }}
//     style={{ background: "#00a3c8" }}
//     className='h-7 w-7  rounded-full flex items-center justify-center duration-300'>
//     <IoLogoSkype color='white' className='h-4 w-4' />
//   </div>
//   <div
//     onClick={(e) => {
//       e.preventDefault();
//       window.location.href = "https://www.youtube.com/";
//     }}
//     style={{ background: "#00a3c8" }}
//     className='h-7 w-7  rounded-full flex items-center justify-center duration-300'>
//     <AiFillYoutube color='white' className='h-4 w-4' />
//   </div>
//   <div
//     style={{ background: "#00a3c8" }}
//     onClick={(e) => {
//       e.preventDefault();
//       window.location.href = "https://www.instagram.com/";
//     }}
//     className='h-7 w-7  rounded-full flex items-center justify-center duration-300'>
//     <AiFillInstagram color='white' className='h-4 w-4' />
//   </div>
// </div>
// </div>
