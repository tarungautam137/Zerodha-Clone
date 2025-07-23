import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const RightSection = ({ imageUrl, productName, productDescription, link }) => {
  return (
    <div className="my-20 grid grid-cols-[1fr_2fr] gap-20">
      <div className="flex flex-col gap-5  self-center">
        <h1 className="text-3xl">{productName}</h1>

        <p className="text-lg">{productDescription}</p>

        <div className="text-xl text-sky-600">
          {link} <FaArrowRight className="inline ml-2" />
        </div>
      </div>

      <div className="pl-8">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default RightSection;
