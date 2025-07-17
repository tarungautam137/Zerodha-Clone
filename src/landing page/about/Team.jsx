import React from "react";

const Team = () => {
  return (
    <div className="pl-25  flex gap-15 mt-20 flex-col items-center mb-25">
      <h1 className="text-4xl font-semibold">People</h1>

      <div className="grid gap-20 grid-cols-[1.1fr_2fr]">
        <div className=" justify-self-end flex gap-5 flex-col items-center">
          <div>
            
            <img
              className="rounded-full object-contain"
              src="images/nithinKamath.jpg"
              alt=""
            />
          </div>

          <h2>Nithin Kamath</h2>

          <h3>Founder, CEO</h3>
        </div>

        <div className="text-lg">
          <p className="mb-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="mb-5">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="mb-5">Playing basketball is his zen.</p>

          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
