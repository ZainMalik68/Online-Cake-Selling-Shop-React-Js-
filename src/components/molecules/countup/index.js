import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const countupCom = ({ name, value }) => (
  <>
    <div className='flex flex-col items-center'>
      <a
        style={{ fontFamily: "Pacifico, cursive" }}
        className='text-white text-4xl  my-2'>
        {name}
      </a>
      <a
        style={{ fontFamily: "Pacifico, cursive" }}
        className='text-white text-4xl  mb-6 mt-2'>
        <CountUp end={value} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </a>
    </div>
  </>
);

export default countupCom;
