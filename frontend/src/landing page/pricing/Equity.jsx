import React from "react";

const Equity = () => {
  return (
    <div>
      <table className="border-1">
        <tbody>
          <tr className="even:bg-gray-100 border-b-1">
            <th colSpan="2" className="p-2">
              Equity delivery
            </th>
            <th className="p-2">Equity intraday</th>
            <th className="p-2">F&O - Futures</th>
            <th className="p-2">F&O - Options</th>
          </tr>

          <tr className="even:bg-gray-100">
            <th className="p-2">Brokerage</th>
            <td className="p-2">Zero Brokerage</td>
            <td className="p-2">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className="p-2">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className="p-2"> Flat Rs. 20 per executed order</td>
          </tr>

          <tr className="even:bg-gray-100">
            <th className="p-2">STT/CTT</th>
            <td className="p-2">0.1% on buy & sell</td>
            <td className="p-2">0.025% on the sell side</td>
            <td className="p-2">0.02% on the sell side</td>
            <td className="p-2">
              <ul className="list-disc">
                <li>
                  0.125% of the intrinsic value on options that are bought and
                  exercised
                </li>
                <li>0.1% on sell side (on premium)</li>
              </ul>
            </td>
          </tr>

          <tr className="even:bg-gray-100">
            <th className="p-2">Transaction charges</th>
            <td className="p-2">NSE: 0.00297% BSE: 0.00375%</td>
            <td className="p-2">NSE: 0.00297% BSE: 0.00375%</td>
            <td className="p-2">NSE: 0.00173% BSE: 0</td>
            <td className="p-2">
              NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)
            </td>
          </tr>

          <tr className="even:bg-gray-100">
            <th className="p-2">GST</th>
            <td className="p-2">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
            <td className="p-2">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
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
            <td className="p-2">₹10 / crore</td>
            <td className="p-2">₹10 / crore</td>
          </tr>

          <tr className="even:bg-gray-100">
            <th className="p-2">Stamp charges </th>
            <td className="p-2">0.015% or ₹1500 / crore on buy side</td>
            <td className="p-2">0.003% or ₹300 / crore on buy side</td>
            <td className="p-2">0.002% or ₹200 / crore on buy side</td>
            <td className="p-2"> 0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Equity;
