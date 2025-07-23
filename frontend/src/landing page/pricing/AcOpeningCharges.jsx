import React from "react";

const AcOpeningCharges = () => {
  return (
    <div className="mb-30">
      <h1 className="text-xl mb-10">Charges for account opening</h1>

      <table className="border-1 w-full">
        <tbody>
          <tr className="py-3 pl-3 pr-30 flex justify-between border-b-1 even:bg-gray-200">
            <th>Type of account</th>
            <th>Charges</th>
          </tr>

          <tr className="py-3 pl-3 pr-30 flex justify-between even:bg-gray-200">
            <td>Online Account</td>
            <td className="px-2 py-0 rounded-sm text-white bg-green-500">
              Free
            </td>
          </tr>

          <tr className="py-3  pl-3 pr-30 flex justify-between even:bg-gray-200">
            <td>Offline Account</td>
            <td className="px-2 py-0 rounded-sm text-white bg-green-500">
              Free
            </td>
          </tr>

          <tr className="py-3 pl-3 pr-30 flex justify-between even:bg-gray-200">
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>

          <tr className="py-3 pl-3 pr-30 flex justify-between even:bg-gray-200">
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AcOpeningCharges;
