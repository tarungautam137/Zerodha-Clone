import React from "react";

const Commodity = () => {
  return (
    <div>
      <table className="border-1">
        <tbody>
          <tr className="even:bg-gray-100 border-b-1">
            <th colSpan="2" className="p-2">
              Commodity futures
            </th>
            <th className="p-2">Commodity options</th>
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
            <td className="p-2">0.01% on sell side (Non-Agri)</td>
            <td className="p-2">0.05% on sell side</td>
          </tr>

          <tr className="even:bg-gray-100">
            <th className="p-2">Transaction charges</th>
            <td className="p-2">MCX: 0.0021% NSE: 0.0001%</td>
            <td className="p-2">MCX: 0.0418% NSE: 0.001%</td>
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
            <td className="p-2">Agri: ₹1 / crore Non-agri: ₹10 / crore</td>
            <td className="p-2"> ₹10 / crore</td>
          </tr>

          <tr className="even:bg-gray-100">
            <th className="p-2">Stamp charges </th>
            <td className="p-2">0.002% or ₹200 / crore on buy side</td>
            <td className="p-2">0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Commodity;
