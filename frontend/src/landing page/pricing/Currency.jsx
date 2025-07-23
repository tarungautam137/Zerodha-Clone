import React from "react";

const Currency = () => {
  return (
    <div>
      <table className="border-1">
        <tbody>
        <tr className="even:bg-gray-100 border-b-1">
          <th colSpan="2" className="p-2">
            Currency futures
          </th>
          <th className="p-2">Currency options</th>
        </tr>

        <tr className="even:bg-gray-100">
          <th className="p-2">Brokerage</th>
          <td className="p-2">
            0.03% or Rs. 20/executed order whichever is lower
          </td>
          <td className="p-2">₹ 20/executed order</td>
        </tr>

        <tr className="even:bg-gray-100">
          <th className="p-2">STT/CTT</th>
          <td className="p-2">No STT</td>
          <td className="p-2">No STT</td>
        </tr>

        <tr className="even:bg-gray-100">
          <th className="p-2">Transaction charges</th>
          <td className="p-2">NSE: 0.00035%
BSE: 0.00045%</td>
          <td className="p-2">NSE: 0.0311%
BSE: 0.001%</td>
        </tr>

        <tr className="even:bg-gray-100">
          <th className="p-2">GST</th>
          <td className="p-2">
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
          <td className="p-2">
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
        </tr>

        <tr className="even:bg-gray-100">
          <th className="p-2">SEBI charges</th>
          <td className="p-2">₹10 / crore</td>
          <td className="p-2"> ₹10 / crore</td>
        </tr>

        <tr className="even:bg-gray-100">
          <th className="p-2">Stamp charges </th>
          <td className="p-2">0.0001% or ₹10 / crore on buy side</td>
          <td className="p-2">0.0001% or ₹10 / crore on buy side</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
