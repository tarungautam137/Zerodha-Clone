import React from "react";
import Platform from "./Platform";

const Universe = () => {
  return (
    <div className="flex flex-col gap-5  items-center mb-20">
      <h1 className="text-4xl">The Zerodha Universe</h1>

      <h2 className="text-lg">
        Extend your trading and investment experience even further with our
        partner platforms
      </h2>

      <div className="grid grid-cols-3">
        <Platform
          imageUrl="images/zerodhaFundhouse.png"
          description="Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals."
        />
        <Platform
          imageUrl="images/sensibullLogo.svg"
          description="Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
"
        />
        <Platform
          imageUrl="images/tijori.svg"
          description="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
"
        />
        <Platform
          imageUrl="images/streakLogo.png"
          description="Systematic trading platform
that allows you to create and backtest
strategies without coding."
        />
        <Platform
          imageUrl="images/smallcaseLogo.png"
          description="Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs."
        />
        <Platform
          imageUrl="images/dittoLogo.png"
          description="Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free"
        />
      </div>

      <button className="w-fit bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-black cursor-pointer justify-self-center">
        Sign up for free
      </button>
    </div>
  );
};

export default Universe;
