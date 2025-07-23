import React from "react";

const Hero = () => {
  return (
    <div className="mb-25">

      <div className="pb-30 pt-20 text-center">
        <h1 className="text-3xl mb-3">Charges</h1>
        <h2 className="text-2xl text-gray-500">
          List of all charges and taxes
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-5">

        <div className="flex flex-col items-center">
          <img className="w-3/4" src="images/pricing-eq.svg" alt="" />
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-5 mt-5">
              Free equity delivery
            </h1>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">

          <img className="w-3/4" src="images/pricing-eq3.svg" alt="" />
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-5 mt-5">
              Intraday and F&O trades
            </h1>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per
              <br /> executed order on intraday trades across <br />
              equity, currency, and commodity trades. Flat <br />
              ₹20 on all option trades.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">

          <img className="w-3/4" src="images/pricing-eq.svg" alt="" />
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-5 mt-5">Free direct MF</h1>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
