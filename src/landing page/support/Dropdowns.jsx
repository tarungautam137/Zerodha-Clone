import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CgLoadbarSound } from "react-icons/cg";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { VscDebugConsole } from "react-icons/vsc";
import { CiBitcoin } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Dropdowns = () => {
  const [arr, setArr] = useState(Array(6).fill(0));

  const handleClick = (index) => {
    let newarr = [...arr];

    if (arr[index] === 0) newarr[index] = 30;
    else newarr[index] = 0;

    setArr(newarr);
  };

  return (
    <div className="grid grid-cols-[2.5fr_1fr] gap-10 px-50 mt-10">
      <div className="grid text-lg">
        <div
          className="flex items-center gap-2 border-1 pr-2 mt-5 hover:scale-104 hover:cursor-pointer transition-all duration-300 "
          onClick={() => handleClick(0)}
        >
          <div className="p-4 bg-sky-200">
            <FiPlusCircle />
          </div>
          <div className="flex justify-between items-center w-full">
            {" "}
            <h2>Account Opening</h2> <IoIosArrowDown />
          </div>
        </div>

        <ul
          className="list-disc list-inside pl-2 transition-all  duration-500 border-x-1 border-b-1 overflow-hidden"
          style={{ maxHeight: arr[0] + "vh" }}
        >
          <li>Resident individual</li>
          <li>Minor</li>
          <li>Non Resident Indian(NRI)</li>
          <li>Company, Partnership, HUF and LLP</li>
          <li>Glossary</li>
        </ul>

        <div
          className="flex items-center gap-2 border-1 pr-2 mt-5 hover:scale-104 hover:cursor-pointer transition-all duration-300 "
          onClick={() => handleClick(1)}
        >
          <div className="p-4 bg-sky-200">
            <FaRegCircleUser />
          </div>
          <div className="flex justify-between items-center w-full">
            {" "}
            <h2>Your Zerodha Account</h2> <IoIosArrowDown />
          </div>
        </div>

        <ul
          className="list-disc list-inside pl-2 transition-all  duration-500 border-x-1 border-b-1 overflow-hidden"
          style={{ maxHeight: arr[1] + "vh" }}
        >
          <li>Your Profile</li>
          <li>Account modification</li>
          <li>Client Master Report (CMR) and Depository Participant (DP)</li>
          <li>Nomination</li>
          <li>Transfer and conversion of securities</li>
        </ul>

        <div
          className="flex items-center gap-2 border-1 pr-2 mt-5 hover:scale-104 hover:cursor-pointer transition-all duration-300 "
          onClick={() => handleClick(2)}
        >
          <div className="p-4 bg-sky-200">
            <CgLoadbarSound />
          </div>
          <div className="flex justify-between items-center w-full">
            {" "}
            <h2>Kite</h2> <IoIosArrowDown />
          </div>
        </div>
        <ul
          className="list-disc list-inside pl-2 transition-all  duration-500 border-x-1 border-b-1 overflow-hidden"
          style={{ maxHeight: arr[2] + "vh" }}
        >
          <li>IPO</li>
          <li>Trading FAQs</li>
          <li>Margin Trading Facility (MTF) and Margins</li>
          <li>Charts and orders</li>
          <li>Alerts and Nudges</li>
          <li>General</li>
        </ul>

        <div
          className="flex items-center gap-2 border-1 pr-2 mt-5 hover:scale-104 hover:cursor-pointer transition-all duration-300 "
          onClick={() => handleClick(3)}
        >
          <div className="p-4 bg-sky-200">
            <RiMoneyRupeeCircleLine />
          </div>
          <div className="flex justify-between items-center w-full">
            {" "}
            <h2>Funds</h2> <IoIosArrowDown />
          </div>
        </div>
        <ul
          className="list-disc list-inside pl-2 transition-all  duration-500 border-x-1 border-b-1 overflow-hidden"
          style={{ maxHeight: arr[3] + "vh" }}
        >
          <li>Add Money</li>
          <li>Withdraw Money</li>
          <li>Add Bank Accounts</li>
          <li>eMandates</li>
        </ul>

        <div
          className="flex items-center gap-2 border-1 pr-2 mt-5 hover:scale-104 hover:cursor-pointer transition-all duration-300 "
          onClick={() => handleClick(4)}
        >
          <div className="p-4 bg-sky-200">
            <VscDebugConsole />
          </div>
          <div className="flex justify-between items-center w-full">
            {" "}
            <h2>Console</h2> <IoIosArrowDown />
          </div>
        </div>
        <ul
          className="list-disc list-inside pl-2 transition-all  duration-500 border-x-1 border-b-1 overflow-hidden"
          style={{ maxHeight: arr[4] + "vh" }}
        >
          <li>Portfolio</li>
          <li>Corporate Actions</li>
          <li>Funds Statement</li>
          <li>Reports</li>
          <li>Profile</li>
          <li>Segments</li>
        </ul>

        <div
          className="flex items-center gap-2 border-1 pr-2  mt-5 hover:scale-104 hover:cursor-pointer transition-all duration-300 "
          onClick={() => handleClick(5)}
        >
          <div className="p-4 bg-sky-200">
            <CiBitcoin />
          </div>
          <div className="flex justify-between items-center w-full">
            {" "}
            <h2>Coin</h2> <IoIosArrowDown />
          </div>
        </div>
        <ul
          className="list-disc list-inside pl-2 mb-10 transition-all  duration-500 border-x-1 border-b-1 overflow-hidden"
          style={{ maxHeight: arr[5] + "vh" }}
        >
          <li>Mutual funds</li>
          <li>National Pension Scheme (NPS)</li>
          <li>Fixed Deposit (FD)</li>
          <li>Features on Coin</li>
          <li>Payments and Orders</li>
          <li>General</li>
        </ul>
      </div>

      <div className="mt-5">
        <div className="bg-orange-100 mb-12 border-l-7 py-4  pr-4 border-l-orange-300">
          <ul className="list-disc list-inside pl-5">
            <li>Quarterly Settlement of Funds - July 2025</li>
            <li>
              Exclusion of F&O contracts on 8 securities from August 29, 2025
            </li>
          </ul>
        </div>

        <table className="w-full ">
          <tbody>
            <tr className="bg-gray-100">
              <td className="p-2 border-1">Quick links</td>
            </tr>
            <tr>
              <td className="p-2 border-1">1. Track account opening</td>
            </tr>
            <tr>
              <td className="p-2 border-1">2. Track segment activation</td>
            </tr>
            <tr>
              <td className="p-2 border-1">3. Intraday margins</td>
            </tr>
            <tr>
              <td className="p-2 border-1">4. Kite user manual</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dropdowns;
