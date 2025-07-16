import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="grid grid-cols-2 mb-30">
      
      <div>
        <img src="images/education.svg" alt="" />
      </div>

      <div>
        <h1 className="text-4xl font-semibold mb-12">
          Free and open market education
        </h1>
        <p className="text-lg mb-7">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <h2 className=" font-medium text-sky-600 text-lg mb-10">
          Varsity <FaArrowRight className="ml-1 inline" />
        </h2>
        <p className="text-lg mb-7">
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <h2 className="font-medium text-sky-600 text-lg">
          TradingQ&A <FaArrowRight className="ml-1 mb-1 inline" />{" "}
        </h2>
      </div>
    </div>
  );
};

export default Education;
