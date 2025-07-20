import React from "react";
import { IoTicketSharp } from "react-icons/io5";
import { LuCirclePlus } from "react-icons/lu";

const Hero = () => {
  return (

    <div className="bg-gray-200 px-50 pt-15 pb-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl">Support Portal</h1>
        <div className="bg-blue-500 text-white p-2 text-lg">
          <span>
            <IoTicketSharp className="inline" />
          </span>{" "}
          My tickets
        </div>
      </div>

      <div className="p-3 bg-gray-100 text-xl flex items-center">
        <LuCirclePlus className="inline mr-2" />
        <input
          className="w-full inline focus:outline-none"
          type="text"
          placeholder="Eg. How do i activate F&O..."
        />
      </div>
    </div>
    
  );
};

export default Hero;
