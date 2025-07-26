import React, { useState } from "react";
import { holdings } from "../../public/data.js";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Holdings = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, order: "asc" });

  const newarr = holdings.map((obj, index) => {
    return {
      Instrument: obj.name,
      QTY: obj.qty,
      "Avg. cost": obj.avg,
      LTP: obj.price,
      "P&L": (obj.price - obj.avg) * obj.qty,
      "Curr. val": obj.price * obj.qty,
      "Net chg.": obj.net,
      "Day chg.": obj.day,
      isLoss: obj.isLoss == true,
    };
  });

  newarr.sort((a, b) => {
    const key = sortConfig.key;
    const order = sortConfig.order;

    if (key === null) return 0;

    if (order == "asc") {
      if (a[key] > b[key]) return -1;
      return 1;
    }

    if (a[key] < b[key]) return -1;
    return 1;
  });

  const handleClick = (key) => {
    if (sortConfig.key === key) {
      if (sortConfig.order === "desc")
        setSortConfig({ key: key, order: "asc" });
      else setSortConfig({ key: key, order: "desc" });

      return;
    } else setSortConfig({ key: key, order: "asc" });
  };

  return (
    <div className="ml-5 mt-10">
      <h1 className="mb-10">Holdings ({holdings.length})</h1>

      <table className="text-xl">
        <tbody>
          <tr className="border-1 grid grid-cols-8 ">
            <th
              className="flex gap-2 group hover:bg-gray-400 border-r-1 cursor-pointer"
              onClick={() => handleClick("Instrument")}
            >
              <h4>Instrument</h4>
              <span className="opacity-0 group-hover:opacity-100">
                {sortConfig.key == "Instrument" &&
                sortConfig.order == "desc" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </th>

            <th
              className="flex gap-2 group hover:bg-gray-400 border-r-1 cursor-pointer"
              onClick={() => handleClick("QTY")}
            >
              <h4>QTY</h4>
              <span className="opacity-0 group-hover:opacity-100">
                {sortConfig.key == "QTY" && sortConfig.order == "desc" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </th>
            <th
              className="flex gap-2 group hover:bg-gray-400 border-r-1 cursor-pointer"
              onClick={() => handleClick("Avg. cost")}
            >
              <h4>Avg. cost</h4>
              <span className="opacity-0 group-hover:opacity-100">
                {sortConfig.key == "Avg. cost" && sortConfig.order == "desc" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </th>
            <th
              className="flex gap-2 group hover:bg-gray-400 border-r-1 cursor-pointer"
              onClick={() => handleClick("LTP")}
            >
              <h4>LTP</h4>
              <span className="opacity-0 group-hover:opacity-100">
                {sortConfig.key == "LTP" && sortConfig.order == "desc" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </th>
            <th
              className="flex gap-2 group hover:bg-gray-400 border-r-1 cursor-pointer"
              onClick={() => handleClick("P&L")}
            >
              <h4>P&L</h4>
              <span className="opacity-0 group-hover:opacity-100">
                {sortConfig.key == "P&L" && sortConfig.order == "desc" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </th>
            <th
              className="flex gap-2 group hover:bg-gray-400 border-r-1 cursor-pointer"
              onClick={() => handleClick("Curr. val")}
            >
              <h4>Curr. val</h4>
              <span className="opacity-0 group-hover:opacity-100">
                {sortConfig.key == "Curr. val" && sortConfig.order == "desc" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </th>
            <th
              className="flex gap-2 group hover:bg-gray-400 border-r-1 cursor-pointer"
              onClick={() => handleClick("Net chg.")}
            >
              <h4>Net chg.</h4>
              <span className="opacity-0 group-hover:opacity-100">
                {sortConfig.key == "Net chg." && sortConfig.order == "desc" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </th>
            <th
              className="flex gap-2 group hover:bg-gray-400 border-r-1 cursor-pointer"
              onClick={() => handleClick("Day chg.")}
            >
              <h4>Day chg.</h4>
              <span className="opacity-0 group-hover:opacity-100">
                {sortConfig.key == "Day chg." && sortConfig.order == "desc" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </th>
          </tr>

          {newarr.map((obj, index) => {
            return (
              <tr key={index} className="border-1 grid grid-cols-8">
                <td className="border-r-1">{obj.Instrument}</td>
                <td className="border-r-1">{obj.QTY}</td>
                <td className="border-r-1">{obj["Avg. cost"]}</td>
                <td className="border-r-1">{obj.LTP}</td>
                <td
                  className={`border-r-1 border-r-black ${
                    obj["P&L"].toFixed(2) >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {obj["P&L"].toFixed(2)}
                </td>
                <td className="border-r-1">{obj["Curr. val"].toFixed(2)}</td>
                <td className="border-r-1">{obj["Net chg."]}</td>
                <td
                  className={`border-r-1 border-r-black ${
                    obj.isLoss ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {obj["Day chg."]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Holdings;
