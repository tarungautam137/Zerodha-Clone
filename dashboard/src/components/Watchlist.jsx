import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../../public/data.js";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const Watchitem = ({ stock }) => {
  const [show, setShow] = useState(false);

  const handleEnter = () => {
    setShow(true);
  };

  const handleLeave = () => {
    setShow(false);
  };

  return (
    <li
      className="flex relative justify-between border-1 p-2 hover:bg-gray-400 hover:cursor-move"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <h2>{stock.name}</h2>

      <div className="flex gap-2">
        <h2>{stock.percent}</h2>

        {stock.isDown ? (
          <FaAngleDown className="text-red-500" />
        ) : (
          <FaAngleUp className="text-green-500" />
        )}

        <h2 className={stock.isDown ? "text-red-500" : "text-green-500"}>
          {stock.price}
        </h2>
      </div>

      {show && (
        <div className="absolute top-1 right-0 z-100">
          {" "}
          <Watchlistactions stockdata={stock} />{" "}
        </div>
      )}
    </li>
  );
};

const Watchlistactions = (stockdata) => {
  return (
    <div className="flex justify-end gap-4 items-center">
      <Tooltip title="Buy(B)" arrow>
        <button className="w-8 h-8 flex items-center justify-center text-base bg-green-500 border-1 rounded-sm cursor-pointer">
          B
        </button>
      </Tooltip>

      <Tooltip title="Sell(S)" arrow>
        <button className="w-8 h-8 flex items-center justify-center text-base bg-red-500 border-1 rounded-sm cursor-pointer">
          S
        </button>
      </Tooltip>

      <Tooltip title="Chart(C)" arrow>
        <button className="w-8 h-8 flex items-center justify-center text-base  border-1 rounded-sm cursor-pointer bg-white mr-5">
          {" "}
          <FaChartLine />{" "}
        </button>
      </Tooltip>
    </div>
  );
};

const Watchlist = () => {
  return (
    <div className="border-r-1 border-gray-400 h-screen pl-7 pt-10 pr-2 overflow-y-scroll">
      <ul>
        {watchlist.map((stock, index) => {
          return <Watchitem key={index} stock={stock} />;
        })}
      </ul>
    </div>
  );
};

export default Watchlist;
