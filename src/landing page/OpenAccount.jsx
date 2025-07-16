import React from "react";

const OpenAccount = () => {
  return (
    <div className="grid gap-y-5 mb-15">
      <h1 className="mt-20 text-4xl justify-self-center">
        Open a Zerodha account
      </h1>
      <p className="text-xl justify-self-center">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button className="w-fit bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-black cursor-pointer justify-self-center">
        Sign up for free
      </button>
    </div>
  );
};

export default OpenAccount;
