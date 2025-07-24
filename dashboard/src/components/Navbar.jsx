import React from "react";
import { FaRegBell } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="grid grid-cols-[1fr_2.2fr] border-b-1 border-b-gray-400 fixed w-full bg-gray-300">
      <div className="border-r-1 border-r-gray-400 flex pl-7 items-center py-2">
        <h2 className="text-sm mr-2">NIFTY 50</h2>

        <h2 className="text-red-500 text-sm mr-2"> 18181.75</h2>
        <h3 className="text-xs mr-4 mt-1">-104.75 (-0.57%)</h3>
        <h2 className="text-sm mr-2">SENSEX</h2>
        <h2 className="text-red-500 text-sm mr-2">61560.64</h2>
        <h3 className="text-xs mt-1">-371.83 (-0.60%)</h3>
      </div>

      <div className="px-5 flex justify-between items-center py-2 ">
        <div>
          <img className="w-1/12" src="images/kite-logo.svg" alt="" />
        </div>

        <nav className="flex gap-7 items-center text-sm">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/holdings"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Holdings
          </NavLink>
          <NavLink
            to="/positions"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Positions
          </NavLink>
          <NavLink
            to="/bids"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Bids
          </NavLink>
          <NavLink
            to="/funds"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Funds
          </NavLink>

          <div className="flex items-center">
            <FaRegBell className="mr-20" />
            <div className="flex items-center justify-center">
              <div className=" w-1/8 mr-3">
                <img src="images/supportportal.png" alt="" />
              </div>
              <h2>TARUN</h2>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
