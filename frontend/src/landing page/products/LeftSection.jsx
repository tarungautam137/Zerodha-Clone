import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  link1,
  link2,
}) => {
  return (
    <div className="my-20 grid grid-cols-[2fr_1fr]">
      <div className="pl-8">
        <img src={imageUrl} alt="" />
      </div>

      <div className="flex flex-col gap-5 self-center">
        <h1 className="text-3xl">{productName}</h1>

        <p className="text-lg">{productDescription}</p>

        <div className="text-lg flex gap-20 text-sky-600">
          {link1 && (
            <span>
              {link1} <FaArrowRight className="inline " />
            </span>
          )}

          {link2 && (
            <span>
              {link2} <FaArrowRight className="inline" />
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 ">
          <img src="images/googlePlayBadge.svg" alt="" />
          <img src="images/appstoreBadge.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
