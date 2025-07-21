import React from "react";

const OptionalServiceCharges = () => {
  return (
    <div className="mb-30">
      <h1 className="text-xl mb-10">
        Charges for optional value added services
      </h1>

      <table className="border-1 w-full">
        <tbody>
          <tr className="py-3 pl-3 pr-30 flex justify-between border-b-1 even:bg-gray-200 ">
            <th>Service</th>
            <th>Billing Frquency</th>
            <th>Charges</th>
          </tr>

          <tr className="py-3 pl-3 pr-30 flex justify-between even:bg-gray-200 ">
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>

          <tr className="py-3 pl-3 pr-30 flex justify-between even:bg-gray-200 ">
            <td>Smallcase</td>
            <td className="ml-13">Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>

          <tr className="py-3 pl-3 pr-30 flex justify-between even:bg-gray-200 ">
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Historical: 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OptionalServiceCharges;
