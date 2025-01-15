import React from 'react';
import loader from "../../public/recycle-sign.svg";
import Image from 'next/image';

const RecycleSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={loader}
        height={100}
        width={100}
        alt="loader"
        className="animate-spin-scale"
      />
    </div>
  );
};

export default RecycleSpinner;
